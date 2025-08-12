// netlify/functions/gemini.js

const RATE_LIMIT_WINDOW_MS = 60_000; // 1min
const RATE_LIMIT_MAX = 30;
const rateMap = new Map();

function getClientIp(event) {
  const xfwd = event.headers['x-forwarded-for'] || event.headers['X-Forwarded-For'] || '';
  const ip = (xfwd.split(',')[0] || '').trim() || event.headers['client-ip'] || '';
  return ip || 'unknown';
}

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateMap.get(ip) || { count: 0, start: now };
  if (now - entry.start > RATE_LIMIT_WINDOW_MS) {
    entry.count = 0; entry.start = now;
  }
  entry.count += 1;
  rateMap.set(ip, entry);
  return entry.count > RATE_LIMIT_MAX;
}

const allowlist = [
  'https://wesh360.ir',
  process.env.PREVIEW_ORIGIN,
].filter(Boolean);

export const handler = async (event) => {
  const origin = event.headers.origin || event.headers.Origin || '';
  const allowed = allowlist.includes(origin);

  const baseHeaders = {
    'Vary': 'Origin',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
  const headers = allowed ? { ...baseHeaders, 'Access-Control-Allow-Origin': origin } : baseHeaders;

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers };
  }

  if (!allowed) {
    return {
      statusCode: 403,
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Origin not allowed' }),
    };
  }

  const ip = getClientIp(event);
  if (isRateLimited(ip)) {
    return {
      statusCode: 429,
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Too Many Requests' }),
    };
  }

  const respond = (code, body) => ({
    statusCode: code,
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  try {
    const { q: prompt, model = 'gemini-2.0-flash', temperature = 0.8, system } = JSON.parse(event.body || '{}');
    if (!prompt) return respond(400, { error: 'Missing prompt "q"' });

    const API_KEY = process.env.GEMINI_API_KEY;
    if (!API_KEY) return respond(500, { error: 'GEMINI_API_KEY not set' });

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;

    const payload = {
      contents: [
        ...(system ? [{ role: 'user', parts: [{ text: system }] }] : []),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      generationConfig: { temperature }
    };

    // fetch with timeout
    const fetchWithTimeout = (resource, options = {}) => {
      const { timeout = 12000 } = options;
      return Promise.race([
        fetch(resource, options),
        new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), timeout)),
      ]);
    };

    // basic retry for 429/5xx
    let resp;
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        resp = await fetchWithTimeout(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-goog-api-key': API_KEY, // ← ارسال کلید در هدر
          },
          body: JSON.stringify(payload),
          timeout: 12000,
        });
        if (resp.ok || ![429, 500, 502, 503, 504].includes(resp.status)) break;
        await new Promise(r => setTimeout(r, 500 * 2 ** attempt));
      } catch (e) {
        if (attempt === 2) throw e;
        await new Promise(r => setTimeout(r, 500 * 2 ** attempt));
      }
    }

    if (!resp || !resp.ok) {
      const detail = resp ? await resp.text() : 'no response';
      return respond(resp?.status || 502, { error: 'Gemini error', detail });
    }

    const data = await resp.json();
    const text =
      data?.candidates?.[0]?.content?.parts?.map(p => p.text).join('') ??
      data?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';

    // production: فقط متن
    if (process.env.NODE_ENV === 'production') {
      return respond(200, { text });
    }
    // غیرپرود: متن + خام برای دیباگ
    return respond(200, { text, raw: data });

  } catch (e) {
    return respond(500, { error: 'Server error', detail: String(e) });
  }
};

