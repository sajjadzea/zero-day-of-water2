// netlify/functions/gemini.js

// Rate limiting helpers -------------------------------------------------
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 30;
const rateMap = new Map();

function getClientIp(req) {
  const xfwd = req.headers.get('x-forwarded-for') || '';
  const ip = (xfwd.split(',')[0] || '').trim() || req.headers.get('client-ip') || '';
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

// Allowed origins -------------------------------------------------------
const allowlist = [
  'https://wesh360.ir',
  process.env.PREVIEW_ORIGIN,
].filter(Boolean);

// Main handler ----------------------------------------------------------
export default async function handler(req) {
  const origin = req.headers.get('origin') || '';
  const allowed = allowlist.includes(origin);

  const baseHeaders = {
    Vary: 'Origin',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
  const headers = allowed ? { ...baseHeaders, 'Access-Control-Allow-Origin': origin } : baseHeaders;

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  if (!allowed) {
    return new Response(JSON.stringify({ error: 'Origin not allowed' }), {
      status: 403,
      headers: { ...headers, 'Content-Type': 'application/json' },
    });
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return new Response(JSON.stringify({ error: 'Too Many Requests' }), {
      status: 429,
      headers: { ...headers, 'Content-Type': 'application/json' },
    });
  }

  // Parse request body ---------------------------------------------------
  const reqBody = await req.json().catch(() => null);
  if (!reqBody || typeof reqBody !== 'object') {
    return new Response(
      JSON.stringify({ error: 'bad_request', details: 'invalid JSON body' }),
      { status: 400, headers: { ...headers, 'Content-Type': 'application/json' } }
    );
  }

  const { feature } = reqBody;
  if (!feature) {
    return new Response(
      JSON.stringify({ error: 'bad_request', details: 'missing feature' }),
      { status: 400, headers: { ...headers, 'Content-Type': 'application/json' } }
    );
  }

  // Validate per feature -------------------------------------------------
  if (feature === 'water') {
    if (typeof reqBody.q !== 'string') {
      return new Response(
        JSON.stringify({ error: 'bad_request', details: 'water requires {feature:"water", q:string}' }),
        { status: 400, headers: { ...headers, 'Content-Type': 'application/json' } }
      );
    }
  } else if (feature === 'simulate') {
    if (typeof reqBody.rainfall !== 'number' || typeof reqBody.reduction !== 'number') {
      return new Response(
        JSON.stringify({ error: 'bad_request', details: 'simulate requires {rainfall:number,reduction:number}' }),
        { status: 400, headers: { ...headers, 'Content-Type': 'application/json' } }
      );
    }
  } else if (feature === 'solutions') {
    if (typeof reqBody.family !== 'number' || typeof reqBody.shower !== 'number') {
      return new Response(
        JSON.stringify({ error: 'bad_request', details: 'solutions requires {family:number,shower:number}' }),
        { status: 400, headers: { ...headers, 'Content-Type': 'application/json' } }
      );
    }
  } else {
    return new Response(
      JSON.stringify({ error: 'bad_request', details: `unknown feature: ${feature}` }),
      { status: 400, headers: { ...headers, 'Content-Type': 'application/json' } }
    );
  }

  const API_KEY = process.env.GEMINI_API_KEY;
  if (!API_KEY) {
    return new Response(JSON.stringify({ error: 'GEMINI_API_KEY not set' }), {
      status: 500,
      headers: { ...headers, 'Content-Type': 'application/json' },
    });
  }

  // Build prompt ---------------------------------------------------------
  let userPrompt = '';
  if (feature === 'water') {
    userPrompt = `Foods: ${reqBody.q}`;
  } else if (feature === 'simulate') {
    userPrompt = `rainfall=${reqBody.rainfall}; reduction=${reqBody.reduction}`;
  } else {
    userPrompt = `family=${reqBody.family}; shower=${reqBody.shower}`;
  }

  const systemPromptText = `
You are an API. Return ONLY valid JSON for the requested feature.
No prose, no markdown, no code fences.
Schemas:
- water: {"type":"water","totalWater":number,"items":[{"name":string,"water":number}]}
- simulate: {"type":"simulate","forecast":{"status":string,"reservoirChangePct":number,"notes":string}}
- solutions: {"type":"solutions","tips":[{"title":string,"impact_liters":number}]}
`;

  const model = reqBody.model || 'gemini-2.0-flash';
  const temperature = typeof reqBody.temperature === 'number' ? reqBody.temperature : 0.8;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${API_KEY}`;

  const payload = {
    systemInstruction: {
      role: 'system',
      parts: [{ text: systemPromptText }],
    },
    contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
    generationConfig: {
      temperature,
      response_mime_type: 'application/json',
    },
  };

  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Referer: 'https://wesh360.ir',
      },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      const details = await resp.text();
      console.error('[Gemini ERROR]', resp.status, details);
      return new Response(
        JSON.stringify({ error: 'gemini_error', status: resp.status, details }),
        {
          status: resp.status === 400 ? 400 : 502,
          headers: { ...headers, 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
        }
      );
    }

    const data = await resp.json();
    const aiText =
      data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join('') || '';

    let out;
    try {
      out = JSON.parse(aiText);
    } catch (_) {
      return new Response(JSON.stringify({ error: 'invalid_ai_output' }), {
        status: 502,
        headers: { ...headers, 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      });
    }

    return new Response(JSON.stringify(out), {
      status: 200,
      headers: { ...headers, 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
    });
  } catch (err) {
    const status = err?.status || 502;
    const details = err?.response ? await err.response.text() : String(err);
    console.error('[Gemini ERROR]', status, details);
    return new Response(
      JSON.stringify({ error: 'gemini_error', status, details }),
      {
        status: status === 400 ? 400 : 502,
        headers: { ...headers, 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      }
    );
  }
}

