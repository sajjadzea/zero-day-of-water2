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

export default async function handler(req, res) {
  const allowed = ['https://dashboard.YOURDOMAIN.ir'];
  const origin = req.headers.origin || '';
  res.setHeader('Access-Control-Allow-Origin', allowed.includes(origin) ? origin : 'https://dashboard.YOURDOMAIN.ir');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
  if (isRateLimited(ip)) return res.status(429).json({ error: 'Too Many Requests' });

  try {
    const { prompt, json } = req.body || {};
    if (!prompt) return res.status(400).json({ error: 'prompt required' });

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return res.status(500).json({ error: 'missing GEMINI_API_KEY' });

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

    if (!r.ok) return res.status(r.status).json({ error: await r.text() });
    const data = await r.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
    return json ? res.status(200).send(text) : res.status(200).json({ text });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
