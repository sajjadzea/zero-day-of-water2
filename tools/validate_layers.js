const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const dataDir = path.join(root, 'docs', 'amaayesh');
const manPath = path.join(dataDir, 'layers.config.json');
if (!fs.existsSync(manPath)) { console.error('[validate] no layers.config.json'); process.exit(2); }
const man = JSON.parse(fs.readFileSync(manPath, 'utf-8'));
const files = man.files || [];

const withSlash = files.filter(f => f.includes('/'));
if (withSlash.length) console.warn('[validate] files should be bare names:', withSlash);

let missing = [];
for (const f of files) {
  const p1 = path.join(dataDir, f);
  const p2 = path.join(dataDir, 'data', f);
  if (!fs.existsSync(p1) && !fs.existsSync(p2)) missing.push(f);
}
if (missing.length) { console.error('[validate] missing:', missing); process.exit(2); }
console.log('[validate] ok:', files.length, 'files');
