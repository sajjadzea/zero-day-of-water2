# Water Dashboard

This repository hosts a simple dashboard served from the `/docs` directory and a proxy for Gemini API requests.

## GitHub Pages

GitHub Pages is configured to deploy the `docs` directory. To use a custom subdomain:

1. Create a `CNAME` DNS record for `dashboard.YOURDOMAIN.ir` pointing to `USERNAME.github.io.`
2. Ensure `/docs/CNAME` contains `dashboard.YOURDOMAIN.ir`.
3. Push to `main`; the GitHub Action will publish the site.

## Serverless proxy

Gemini API calls are routed through a serverless function so the API key is kept server side.

### Netlify (Serverless Function)
- The frontend calls the relative endpoint `/api/gemini`.
- Set `GEMINI_API_KEY` (and optional `PREVIEW_ORIGIN`) in Netlify Environment Variables.
- CSP headers are configured in `netlify.toml`; `connect-src 'self'` is sufficient.

**Post-deploy tests**
```bash
curl -i -X OPTIONS https://wesh360.ir/api/gemini \
  -H "Origin: https://wesh360.ir" \
  -H "Access-Control-Request-Method: POST"

curl -i -X POST https://wesh360.ir/api/gemini \
  -H "Origin: https://wesh360.ir" \
  -H "Content-Type: application/json" \
  --data '{"q":"ping"}'
Expected: 204 for OPTIONS, 200 for POST, and no query ?key= in downstream calls.
```

**Local check (netlify dev)**
```bash
curl -i -X OPTIONS http://localhost:8888/api/gemini \
  -H "Origin: https://wesh360.ir" \
  -H "Access-Control-Request-Method: POST"

curl -i -X POST http://localhost:8888/api/gemini \
  -H "Origin: https://wesh360.ir" \
  -H "Content-Type: application/json" \
  --data '{"q":"ping"}'
```

## Backlog

- Migrate from `cdn.tailwindcss.com` to CSS compiled with Tailwind CLI at build time.
