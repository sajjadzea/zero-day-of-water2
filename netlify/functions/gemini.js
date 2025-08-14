// netlify/functions/gemini.js
export async function handler(event) {
  try {
    const { prompt, json } = JSON.parse(event.body || '{}');
    if (!prompt || prompt.length < 5) return respond(400, { error: 'empty_prompt' });

    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=' + process.env.GEMINI_API_KEY;
    const body = { contents: [{ parts: [{ text: prompt }]}] };
    if (json) body.generationConfig = { responseMimeType: 'application/json' };

    const r = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
    const data = await r.json().catch(()=> ({}));
    if (!r.ok) return respond(r.status, { error: 'upstream', detail: data });

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
    return respond(200, { text });
  } catch (e) {
    return respond(500, { error: 'fn_error', detail: String(e) });
  }
}
const respond = (status, obj) => ({
  statusCode: status,
  headers: {
    'content-type': 'application/json',
    'access-control-allow-origin': '*',
    'cache-control': 'no-store'
  },
  body: JSON.stringify(obj)
});
