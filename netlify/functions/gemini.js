const rateMap = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const limit = 60;
  const entry = rateMap.get(ip) || { count: 0, start: now };
  if (now - entry.start > windowMs) {
    entry.count = 0;
    entry.start = now;
  }
  entry.count += 1;
  rateMap.set(ip, entry);
  return entry.count > limit;
}

const allowlist = [
  'https://wesh360.ir',
  process.env.PREVIEW_ORIGIN, // اگر پریویو لازم است، در نتلیفای ست شود
].filter(Boolean);

export const handler = async (event) => {
  const origin = (event.headers && (event.headers.origin || event.headers.Origin)) || '';
  const allowed = allowlist.includes(origin);

  const baseHeaders = {
    'Vary': 'Origin',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400'
  };
  const corsHeaders = allowed ? { ...baseHeaders, 'Access-Control-Allow-Origin': origin } : baseHeaders;

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders };
  }

  if (!allowed) {
    return {
      statusCode: 403,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Origin not allowed' })
    };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  const ip = event.headers['x-forwarded-for'] || event.headers['client-ip'] || event.ip || '';
  if (isRateLimited(ip)) {
    return { statusCode: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'Too Many Requests' }) };
  }

  try {
    const { prompt, json } = JSON.parse(event.body || '{}');
    if (!prompt) return { statusCode: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'Missing prompt' }) };

    const key = process.env.GEMINI_API_KEY;
    if (!key) return { statusCode: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'Server misconfig: GEMINI_API_KEY' }) };

    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=' + encodeURIComponent(key);
    const payload = { contents: [{ parts: [{ text: prompt }] }], ...(json ? { generationConfig: { responseMimeType: 'application/json' } } : {}) };

    const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    const data = await r.json().catch(() => ({}));

    if (!r.ok) {
      return { statusCode: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'Upstream error', status: r.status, details: data?.error || data }) };
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
    const body = json ? JSON.stringify(JSON.parse(text || '{}')) : JSON.stringify({ text });
    return { statusCode: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' }, body };
  } catch (e) {
    return { statusCode: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'Unhandled', message: String(e?.message || e) }) };
  }
};
