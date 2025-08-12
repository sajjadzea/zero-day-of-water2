export const handler = async (event) => {
  const origin = event.headers.origin || event.headers.Origin || '';
  const allowlist = ['https://wesh360.ir', process.env.PREVIEW_ORIGIN].filter(Boolean);
  const allowed = allowlist.includes(origin);

  const base = {
    'Vary': 'Origin',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
  const headers = allowed ? { ...base, 'Access-Control-Allow-Origin': origin } : base;

  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers };

  if (!allowed) {
    return {
      statusCode: 403,
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Origin not allowed' })
    };
  }

  const respond = (code, body) =>
    ({ statusCode: code, headers: { ...headers, 'Content-Type': 'application/json' }, body: JSON.stringify(body) });

  try {
    const { q, model = 'gemini-2.0-flash', temperature = 0.8, system } = JSON.parse(event.body || '{}');
    if (!q) return respond(400, { error: 'Missing prompt "q"' });

    const API_KEY = process.env.GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${API_KEY}`;

    const payload = {
      contents: [
        ...(system ? [{ role: 'user', parts: [{ text: system }] }] : []),
        { role: 'user', parts: [{ text: q }] }
      ],
      generationConfig: { temperature }
    };

    const fetchWithTimeout = (resource, options = {}) => {
      const { timeout = 12000 } = options;
      return Promise.race([
        fetch(resource, options),
        new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), timeout))
      ]);
    };

    let attempts = 0, resp, errText;
    while (attempts < 3) {
      attempts++;
      try {
        resp = await fetchWithTimeout(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          timeout: 12000
        });
        if (resp.ok) break;
        if (![429, 500, 502, 503, 504].includes(resp.status)) break;
        await new Promise(r => setTimeout(r, 500 * Math.pow(2, attempts - 1)));
      } catch (e) {
        if (attempts >= 3) throw e;
        await new Promise(r => setTimeout(r, 500 * Math.pow(2, attempts - 1)));
      }
    }

    if (!resp || !resp.ok) {
      errText = resp ? await resp.text() : 'no response';
      return respond(resp?.status || 502, { error: 'Gemini error', detail: errText });
    }

    const data = await resp.json();
    const text =
      data?.candidates?.[0]?.content?.parts?.map(p => p.text).join('') ??
      data?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';

    return respond(200, { text, raw: data });
  } catch (e) {
    return respond(500, { error: 'Server error', detail: String(e) });
  }
};

