const fs = require('fs');
const vm = require('vm');

const FILE = process.argv[2] || 'docs/assets/js/amaayesh-map.js';

function cleanupOldFixes(src) {
  // آثار پچ‌های قبلی را حذف کن
  src = src.replace(/\/\*\s*AMA EOF FIX APPLIED\s*\*\/[\s\S]*$/m, '');
  src = src.replace(/__AMA__close_unmatched.*$/gm, '');
  src = src.replace(/\/\/\s*AMA:\s*close unmatched.*$/gm, '');
  // خطوطی که فقط بسته‌های تکراری هستند (حداقل دو بسته) در انتهای فایل
  src = src.replace(/(?:\n\s*[)\]}]{2,}(\s*\/\/.*)?)+$/g, '');
  return src;
}

function normalizeBackticksNearTail(src) {
  // بکتیک‌های نیمه‌کاره را به ' تبدیل کن (فقط در صورت فرد بودن تعداد)
  const cut = Math.max(0, src.length - 10000);
  const head = src.slice(0, cut);
  let tail = src.slice(cut);
  const count = (tail.match(/`/g) || []).length;
  if (count % 2 === 1) {
    tail = tail.replace(/(`)/g, "'");
  }
  return head + tail;
}

function fixTailByStateMachine(src) {
  const stack = []; // { ( [
  const pair = { '{':'}', '(':')', '[':']' };
  let i=0, ch, prev=null;
  let inSL=false, inDL=false, inBT=false; // ' " `
  let inLC=false, inBC=false;             // // /* */
  let esc=false;

  while (i < src.length) {
    ch = src[i];

    if (inLC) { if (ch === '\n') inLC = false; i++; prev=ch; continue; }
    if (inBC) { if (prev === '*' && ch === '/') inBC = false; i++; prev=ch; continue; }

    if (inSL || inDL || inBT) {
      if (esc) { esc=false; i++; prev=ch; continue; }
      if (ch === '\\') { esc=true; i++; prev=ch; continue; }
      if (inSL && ch === "'") inSL=false;
      else if (inDL && ch === '"') inDL=false;
      else if (inBT && ch === '`') inBT=false;
      i++; prev=ch; continue;
    }

    if (prev === '/' && ch === '/') { inLC=true; i++; prev=ch; continue; }
    if (prev === '/' && ch === '*') { inBC=true; i++; prev=ch; continue; }

    if (ch === "'") { inSL=true; i++; prev=ch; continue; }
    if (ch === '"') { inDL=true; i++; prev=ch; continue; }
    if (ch === '`') { inBT=true; i++; prev=ch; continue; }

    if (ch === '{' || ch === '(' || ch === '[') stack.push(ch);
    else if (ch === '}' || ch === ')' || ch === ']') {
      const top = stack[stack.length-1];
      if ((top==='{'&&ch==='}')||(top==='('&&ch===')')||(top==='['&&ch===']')) stack.pop();
      else if (stack.length) stack.pop(); // mismatch را یک پله اصلاح کن
    }

    i++; prev=ch;
  }

  let tail = '';
  if (inBC) tail += '*/';
  if (inSL) tail += "'";
  if (inDL) tail += '"';
  if (inBT) tail += '`';
  for (let k=stack.length-1; k>=0; k--) tail += pair[stack[k]];

  if (tail) src += '\n' + tail + ' // AMA: auto-closed tail';
  if (!src.endsWith('\n')) src += '\n';
  return src;
}

function ensureFinalIIFE(src) {
  const marker = '// === AMA: start bootstrap (final, single-call) ===';
  if (!src.includes(marker)) {
    src += '\n' + marker + '\n' +
`(async function(){
  try { await ama_bootstrap(); }
  catch (err) { console.error('[AMA] bootstrap failed:', err); }
})();\n`;
  }
  // برچسب انتهای فایل
  src += '\n/* AMA EOF FIX APPLIED */\n';
  return src;
}

function compileOrThrow(code) {
  new vm.Script(code, { filename: FILE });
}

function main() {
  let src = fs.readFileSync(FILE, 'utf8');
  src = cleanupOldFixes(src);
  src = normalizeBackticksNearTail(src);
  src = fixTailByStateMachine(src);
  src = ensureFinalIIFE(src);

  try {
    compileOrThrow(src);
    console.log('[repair_ama_tail] compile OK');
  } catch (e) {
    console.error('[repair_ama_tail] compile error:', e.message);
    console.error((e.stack||'').split('\n')[0]);
  }

  fs.writeFileSync(FILE, src, 'utf8');
  console.log('[repair_ama_tail] written:', FILE);
}

main();
