const fs = require('fs');

const FILE = process.argv[2] || 'docs/assets/js/amaayesh-map.js';

function stripStringsAndComments(src){
  // حذف کامنت‌ها و رشته‌ها (تقریباً کافی برای شمارش براکت‌ها)
  return src
    .replace(/`(?:\\[\s\S]|[^\\`])*`/g, '') // template literals
    .replace(/'(?:\\.|[^'\\])*'/g, '')      // single quotes
    .replace(/"(?:\\.|[^"\\])*"/g, '')     // double quotes
    .replace(/\/(?:\\.|[^\/\\])+\/[gimsuy]*/g, '') // regex literals
    .replace(/\/\*[\s\S]*?\*\//g, '')       // block comments
    .replace(/\/\/[^\n\r]*/g, '');            // line comments
}

function computeUnclosedStack(code){
  const s = stripStringsAndComments(code);
  const stack = [];
  const opens = {'{':'}','(' :')','[':']'};
  const closes = new Set(['}', ')', ']']); // not used directly

  for (let i=0;i<s.length;i++){
    const ch = s[i];
    if (ch==='{'||ch==='('||ch==='['){
      stack.push(ch);
    }else if (ch==='}'||ch===')'||ch===']'){
      // pop آخرین opener هم‌نوع
      if (stack.length){
        const top = stack[stack.length-1];
        if ((top==='{'&&ch==='}')||(top==='('&&ch===')')||(top==='['&&ch===']')){
          stack.pop();
        }else{
          // ناهماهنگی؛ سعی کن یک پله هم پاک کنی
          stack.pop();
        }
      }else{
        // کلوز اضافی را نادیده بگیر
      }
    }
  }
  return stack; // هرچه مانده باید برعکس بسته شود
}

function cleanupOldFixes(src){
  // هر چیزی که از ابزار قبلی مانده را حذف کن
  src = src.replace(/\/\*\s*AMA EOF FIX APPLIED\s*\*\/[\s\S]*$/m, '');
  src = src.replace(/^[\s\)\]\}\/\*]*__AMA__close_unmatched.*$/gm, '');
  src = src.replace(/^[\s\)\]\}]*\/\/\s*AMA:\s*close unmatched.*$/gm, '');
  // remove trailing fix markers like stray closers only when tagged
  // (lines with only brackets were previously appended by older fixers)
  // We avoid aggressive patterns to preserve legitimate code.
  return src;
}

function ensureFinalIIFE(src){
  const finalIIFE =
`// === AMA: start bootstrap (final, single-call) ===
(async function(){
  try { await ama_bootstrap(); }
  catch (err) { console.error('[AMA] bootstrap failed:', err); }
})();
`;
  // اگر همین IIFE وجود ندارد، اضافه‌اش کن
  if (!/start bootstrap \(final, single-call\)/.test(src)){
    src += '\n' + finalIIFE;
  }
  return src;
}

function fixFile(file){
  let src = fs.readFileSync(file,'utf8');

  // 1) تمیزکاری آثار قبلی
  src = cleanupOldFixes(src);

  // 2) اطمینان از IIFE پایانی
  src = ensureFinalIIFE(src);

  // 3) اگر کد هنوز SyntaxError داشت، با پشته ببند
  let stack = [];
  try {
    new Function(src); // attempt parse
  } catch (e) {
    stack = computeUnclosedStack(src);
    if (stack.length){
      const mapClose = {'{':'}','(' :')','[':']'};
      let closers = '';
      for (let i=stack.length-1;i>=0;i--){
        closers += mapClose[stack[i]];
      }
      src += '\n' + closers + ' // AMA: auto-closed by stack fixer\n';
    }
  }

  // 4) خط خالی انتهای فایل
  if (!src.endsWith('\n')) src += '\n';

  fs.writeFileSync(file, src, 'utf8');
  console.log(`[fix_tail_stack] appended ${stack.length} closers to ${file}`);
}

fixFile(FILE);
