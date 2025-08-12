# Water Dashboard

This repository hosts a simple dashboard served from the `/docs` directory and a proxy for Gemini API requests.

## GitHub Pages

GitHub Pages is configured to deploy the `docs` directory. To use a custom subdomain:

1. Create a `CNAME` DNS record for `dashboard.YOURDOMAIN.ir` pointing to `USERNAME.github.io.`
2. Ensure `/docs/CNAME` contains `dashboard.YOURDOMAIN.ir`.
3. Push to `main`; the GitHub Action will publish the site.

## Serverless proxy

Gemini API calls are routed through a serverless function so the API key is kept server side.

### Netlify
- Files under `netlify/` contain a function at `/api/gemini`.
- Set the `GEMINI_API_KEY` environment variable in Netlify.
- Deploy the repo and the site will serve from `docs`.
- Content-Security-Policy headers are configured in `netlify.toml` rather than HTML meta tags; production blocks all framing while Deploy Previews allow Netlify embeds to avoid console errors.

The frontend assumes the function lives on the same origin and calls `/api/gemini` accordingly.

## Backlog

- Migrate from `cdn.tailwindcss.com` to CSS compiled with Tailwind CLI at build time.
