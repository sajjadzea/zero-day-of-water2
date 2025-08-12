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
  const allowed = ['https://dashboard.YOURDOMAIN.ir'];
  const origin = event.headers.origin || '';
  const hdrs = {
    'Access-Control-Allow-Origin': allowed.includes(origin) ? origin : 'https://dashboard.YOURDOMAIN.ir',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: hdrs, body: '' };
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: hdrs, body: 'Method Not Allowed' };
  }

  const ip = event.headers['x-forwarded-for'] || event.headers['client-ip'] || event.ip || '';
  if (isRateLimited(ip)) {
    return { statusCode: 429, headers: hdrs, body: JSON.stringify({ error: 'Too Many Requests' }) };
  }

  try {
    const { prompt, json } = JSON.parse(event.body || '{}');
    if (!prompt) return { statusCode: 400, headers: hdrs, body: JSON.stringify({ error: 'prompt required' }) };

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return { statusCode: 500, headers: hdrs, body: JSON.stringify({ error: 'missing GEMINI_API_KEY' }) };

    const model = 'gemini-1.5-flash';
    const url = `https://generativeai.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }]}],
        ...(json ? { generationConfig: { responseMimeType: 'application/json' } } : {})
      })
    });

    if (!r.ok) {
      const t = await r.text();
      return { statusCode: r.status, headers: hdrs, body: JSON.stringify({ error: t }) };
    }

    const data = await r.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
    if (json) {
      const obj = JSON.parse(text);
      return { statusCode: 200, headers: hdrs, body: JSON.stringify(obj) };
    }
    return { statusCode: 200, headers: hdrs, body: JSON.stringify({ text }) };
  } catch (e) {
    return { statusCode: 500, headers: hdrs, body: JSON.stringify({ error: e.message }) };
  }
};
