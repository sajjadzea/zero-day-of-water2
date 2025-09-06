const fs = require('fs');

function stripStringsAndComments(src) {
  // حذف رشته‌ها و کامنت‌ها تا شمارش براکت دقیق شود
  return src
    // block comments
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // line comments
    .replace(/\/\/[^\n\r]*/g, '')
    // template strings (بدون پردازش ${})
    .replace(/`(?:\\[\s\S]|[^\\`])*`/g, '')
    // single/double quoted
    .replace(/'(?:\\.|[^'\\])*'/g, '')
    .replace(/"(?:\\.|[^"\\])*"/g, '');
}

function balanceCounts(code) {
  const s = stripStringsAndComments(code);
  let b = 0, p = 0, a = 0; // {} () []
  for (const ch of s) {
    if (ch === '{') b++; else if (ch === '}') b--;
    if (ch === '(') p++; else if (ch === ')') p--;
    if (ch === '[') a++; else if (ch === ']') a--;
  }
  return { b, p, a };
}

function fixFile(path) {
  let src = fs.readFileSync(path, 'utf8');

  // اگر کامنت چندخطی باز مانده
  const openBlockComment = (src.match(/\/\*/g) || []).length > (src.match(/\*\//g) || []).length;
  if (openBlockComment) src += '\n*/ /* AMA: closed dangling block comment */';

  // تضمین خط جدید انتهای فایل
  if (!src.endsWith('\n')) src += '\n';

  // شمارش براکت‌ها
  const { b, p, a } = balanceCounts(src);

  // بستن به‌ترتیب: [] ) }
  if (a > 0) src += ']'.repeat(a) + ' // AMA: close unmatched []\n';
  if (p > 0) src += ')'.repeat(p) + ' // AMA: close unmatched ()\n';
  if (b > 0) src += '}'.repeat(b) + ' // AMA: close unmatched {}\n';

  // درج نشانگر
  src += '\n/* AMA EOF FIX APPLIED */\n';

  fs.writeFileSync(path, src, 'utf8');
  console.log(`[fix_eof] appended: }x${Math.max(b,0)}, )x${Math.max(p,0)}, ]x${Math.max(a,0)} in ${path}`);
}

const target = process.argv[2] || 'docs/assets/js/amaayesh-map.js';
fixFile(target);

