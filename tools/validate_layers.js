const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const manifestPath = path.join(root, 'docs', 'data', 'layers.config.json');

if (!fs.existsSync(manifestPath)) {
  console.error('[validate] missing manifest:', manifestPath);
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
const files = manifest.files || [];

const missing = [];
for (const rel of files) {
  const p = path.join(root, 'docs', 'data', rel);
  if (!fs.existsSync(p)) missing.push(rel);
}

if (missing.length) {
  console.error('[validate] missing:', missing.join(', '));
  process.exit(1);
}

console.log('[validate] ok:', files.length, 'files');

