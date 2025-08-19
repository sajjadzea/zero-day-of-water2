const { getStore } = require("@netlify/blobs");

exports.handler = async (event) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://wesh360.ir",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
  if (event.httpMethod === "OPTIONS") return { statusCode: 204, headers };
  if (event.httpMethod !== "POST") return { statusCode: 405, headers, body: JSON.stringify({ error: "POST only" }) };

  const body = JSON.parse(event.body || "{}");
  const id = (body.id && String(body.id)) || crypto.randomUUID();
  const store = getStore("agrivoltaics");
  await store.setJSON(`scenario:${id}`, body.state || {});
  return { statusCode: 200, headers, body: JSON.stringify({ ok: true, id }) };
};
