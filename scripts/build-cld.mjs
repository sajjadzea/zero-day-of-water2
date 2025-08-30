// scripts/build-cld.mjs
import { build } from 'esbuild';
import { mkdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ورودی و خروجی باندل
const entryFile = join(ROOT, 'docs', 'assets', 'js', 'watercld.entry.js');
const outFile   = join(ROOT, 'docs', 'assets', 'dist', 'water-cld.bundle.js');

// پوشه‌ی خروجی را بساز
await mkdir(dirname(outFile), { recursive: true });

// بیلد با esbuild (بدون minify)
await build({
  entryPoints: [entryFile],
  outfile: outFile,
  bundle: true,
  format: 'iife',
  platform: 'browser',
  target: ['es2018'],
  minify: false,
  keepNames: true,
  sourcemap: true,
  legalComments: 'none',
  define: { 'process.env.NODE_ENV': '"production"' },
});

console.log('[build-cld] water-cld.bundle.js generated at', outFile);
