// tools/fix_js_tail.js
const fs = require('fs');
const vm = require('vm');

const FILE = process.argv[2] || 'docs/assets/js/amaayesh-map.js';

function cleanupOldFixes(src) {
  // حذف آثار پچ‌های قبلی
  src = src.replace(/\/\*\s*AMA EOF FIX APPLIED\s*\*\/[\s\S]*$/m, '');
  src = src.replace(/__AMA__close_unmatched.*$/gm, '');
  src = src.replace(/\/\/\s*AMA:\s*close unmatched.*$/gm, '');
  // خطوطی که فقط بسته‌های تکراری هستند
  // خطوط فقط شامل بسته‌ها را فقط در انتهای فایل حذف کن
  src = src.replace(/(?:\n[\s)\]}]+(?:\s*\/\/.*)?)+\s*$/g, '\n');
  return src;
}

function fixTail(src) {
  // state machine برای رشته/کامنت/براکت
  const stack = []; // { ( [
  const closeOf = { '{': '}', '(': ')', '[': ']' };
  let i = 0, ch, prev = null;
  let inSL=false, inDL=false, inBT=false; // ' " `
  let inLC=false, inBC=false;             // //  /* */
  let esc=false;

  while (i < src.length) {
    ch = src[i];

    if (inLC) { if (ch === '\n') inLC = false; i++; prev=ch; continue; }
    if (inBC) { if (prev === '*' && ch === '/') inBC = false; i++; prev=ch; continue; }

    if (inSL || inDL || inBT) {
      if (esc) { esc = false; i++; prev=ch; continue; }
      if (ch === '\\') { esc = true; i++; prev=ch; continue; }
      if (inSL && ch === '\'') inSL = false;
      else if (inDL && ch === '"') inDL = false;
      else if (inBT && ch === '`') inBT = false;
      i++; prev=ch; continue;
    }

    // شروع کامنت
    if (prev === '/' && ch === '/') { inLC = true; i++; prev=ch; continue; }
    if (prev === '/' && ch === '*') { inBC = true; i++; prev=ch; continue; }

    // شروع رشته
    if (ch === '\'') { inSL = true; i++; prev=ch; continue; }
    if (ch === '"')  { inDL = true; i++; prev=ch; continue; }
    if (ch === '`')  { inBT = true; i++; prev=ch; continue; }

    // براکت‌ها
    if (ch === '{' || ch === '(' || ch === '[') stack.push(ch);
    else if (ch === '}' || ch === ')' || ch === ']') {
      const top = stack[stack.length-1];
      if ((top==='{'&&ch==='}')||(top==='('&&ch===')')||(top==='['&&ch===']')) stack.pop();
      else if (stack.length) stack.pop(); // mismatch را یک پله جمع کن
    }

    i++; prev=ch;
  }

  // بستن stateهای باز
  let tail = '';
  if (inBC) tail += '*/';
  if (inSL) tail += '\'';
  if (inDL) tail += '"';
  if (inBT) tail += '`';
  for (let k=stack.length-1; k>=0; k--) tail += closeOf[stack[k]];

  if (tail) src += '\n' + tail + ' // AMA: auto-closed tail\n';
  if (!src.endsWith('\n')) src += '\n';
  return src;
}

function ensureFinalIIFE(src) {
  const final =
`// === AMA: start bootstrap (final, single-call) ===
(async function(){
  try { await ama_bootstrap(); }
  catch (err) { console.error('[AMA] bootstrap failed:', err); }
})();
`;
  if (!/start bootstrap \(final, single-call\)/.test(src)) src += '\n' + final;
  return src;
}

function compileOrFail(code) {
  // تأیید کامپایل بدون محدودیت CSP
  new vm.Script(code, { filename: FILE });
}

function main() {
  let src = fs.readFileSync(FILE, 'utf8');
  src = cleanupOldFixes(src);
  src = ensureFinalIIFE(src);
  src = fixTail(src);

  try { compileOrFail(src); }
  catch (e) {
    console.error('[fix_js_tail] compile error:', e.message);
    console.error((e.stack||'').split('\n')[0]);
    // همچنان می‌نویسیم تا diff بررسی شود
  }

  fs.writeFileSync(FILE, src, 'utf8');
  console.log('[fix_js_tail] written:', FILE);
}

main();
