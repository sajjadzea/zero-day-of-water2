#!/usr/bin/env node
const { execSync } = require('child_process');
const exts = ['png','jpg','jpeg','webp','gif','svg','woff','woff2','ttf','otf','pdf','zip'];
let diff;
try {
  diff = execSync('git diff --cached --name-only --diff-filter=A', {encoding: 'utf8'});
} catch (e) {
  diff = '';
}
const files = diff.split('\n').filter(Boolean);
const matches = files.filter(f => exts.some(ext => f.toLowerCase().endsWith('.' + ext)));
if (matches.length) {
  console.error('Warning: newly added binary files detected:\n' + matches.join('\n'));
  process.exitCode = 1;
} else {
  console.log('No newly-added binary files detected.');
}
