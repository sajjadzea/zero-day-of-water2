// docs/assets/js/watercld.entry.js

// 1) گاردهای آماده‌سازی و ایوندها (موجودند)
import '../water-cld.runtime-guards.js';
import '../water-cld.cy-alias.js';

// 2) منطق اصلی نمودار (فایل موجود در همین پوشه‌ی assets)
import '../water-cld.js';

// 3) pre-shim: اگر به‌خاطر id="cy" روی window پراپرتی DOM ساخته شده، خنثی‌اش کن
try { if (window.cy && window.cy.tagName) window.cy = undefined; } catch (_) {}

// 4) همگام‌سازی ایمن: اگر اینستنس Cytoscape ساخته شد، در فضای‌نام امن ذخیره و رویداد بده
(function syncCy(){
  const cy = window.CLD_SAFE?.cy || window.cy;
  if (cy && typeof cy.nodes === 'function') {
    window.CLD_SAFE = window.CLD_SAFE || {};
    window.CLD_SAFE.cy = cy;
    document.dispatchEvent(new CustomEvent('cld:ready', { detail: { cy } }));
    return; // آماده شد
  }
  requestAnimationFrame(syncCy);
})();

