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

export const handler = async (event) => {
  const allowlist = [
    'https://689a0a959fa2471e109de0c8--polite-zuccutto-cdf931.netlify.app',
    'https://polite-zuccutto-cdf931.netlify.app',
    process.env.ALLOWED_ORIGIN
  ].filter(Boolean);
  const origin = event.headers.origin || '';
  const allowOrigin = allowlist.includes(origin) ? origin : allowlist[1] || origin;

  const headers = {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  const ip = event.headers['x-forwarded-for'] || event.headers['client-ip'] || event.ip || '';
  if (isRateLimited(ip)) {
    return { statusCode: 429, headers, body: JSON.stringify({ error: 'Too Many Requests' }) };
  }

  try {
    const { prompt, json } = JSON.parse(event.body || '{}');
    if (!prompt) return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing prompt' }) };

    const key = process.env.GEMINI_API_KEY;
    if (!key) return { statusCode: 500, headers, body: JSON.stringify({ error: 'Server misconfig: GEMINI_API_KEY' }) };

    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=' + encodeURIComponent(key);
    const payload = { contents: [{ parts: [{ text: prompt }] }], ...(json ? { generationConfig: { responseMimeType: 'application/json' } } : {}) };

    const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    const data = await r.json().catch(() => ({}));

    if (!r.ok) {
      return { statusCode: 502, headers, body: JSON.stringify({ error: 'Upstream error', status: r.status, details: data?.error || data }) };
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
    const body = json ? JSON.stringify(JSON.parse(text || '{}')) : JSON.stringify({ text });
    return { statusCode: 200, headers, body };
  } catch (e) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Unhandled', message: String(e?.message || e) }) };
  }
};
