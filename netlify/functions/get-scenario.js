const { getStore } = require("@netlify/blobs");

exports.handler = async (event) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://wesh360.ir",
  };
  const id = (event.queryStringParameters && event.queryStringParameters.id) || "";
  if (!id) return { statusCode: 400, headers, body: JSON.stringify({ error: "id is required" }) };

  const store = getStore("agrivoltaics");
  const json = await store.get(`scenario:${id}`);
  return { statusCode: 200, headers, body: json || "null" };
};
