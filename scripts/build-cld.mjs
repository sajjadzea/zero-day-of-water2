import { build } from 'esbuild';
const entry = 'docs/assets/js/watercld.entry.js';
await build({
  entryPoints: [entry],
  bundle: true,
  format: 'iife',
  platform: 'browser',
  target: ['es2018'],
  sourcemap: true,
  minify: false,
  keepNames: true,
  legalComments: 'none',
  outfile: 'docs/assets/dist/water-cld.bundle.js',
  define: { 'process.env.NODE_ENV': '"production"' },
}).catch(() => process.exit(1));
