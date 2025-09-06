;(function(){
  function ready(fn){ if(document.readyState!=='loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }

  // نگاشت کلیدها به ورودی‌های پنل قدیمی
  const LEGACY = {
    wind:   '#chk-wind-sites',
    solar:  '#chk-solar-sites',
    dams:   '#chk-dam-sites'
  };

  function q(sel){ try { return document.querySelector(sel); } catch { return null; } }

  function findLegacyFor(key){
    // ابتدا بر اساس IDهای مشهور
    let el = q(LEGACY[key]);
    if (el) return el;

    // fallback: بر اساس متن لیبل‌ها (برای زمانی که IDها عوض شده باشد)
    const map = { wind:/باد/i, solar:/خورشیدی/i, dams:/سد/i };
    const rx = map[key]; if (!rx) return null;
    const labels = Array.from(document.querySelectorAll('label'));
    for (const lbl of labels){
      const txt=(lbl.textContent||'').trim();
      if (!rx.test(txt)) continue;
      const forId=lbl.getAttribute('for');
      const input = forId ? q('#'+CSS.escape(forId)) : lbl.querySelector('input[type="checkbox"]');
      if (input) return input;
    }
    return null;
  }

  function bindToggle(newInput, key, legacyInput){
    if (!newInput || !legacyInput) return;
    // همگام‌سازی وضعیت اولیه
    newInput.checked = !!legacyInput.checked;
    // وقتی جدید تغییر کرد، قدیمی را کلیک کن (تا منطق موجود اجرا شود)
    newInput.addEventListener('change', ()=> { legacyInput.click(); newInput.checked = legacyInput.checked; });
    // وقتی قدیمی تغییر کرد، جدید را هم همگام کن (اگر کاربر از پنل قدیم استفاده کند)
    legacyInput.addEventListener('change', ()=> { newInput.checked = legacyInput.checked; });
  }

  ready(function(){
    // همه‌ی کنترل‌های جدید با data-layer-toggle را پیدا کن
    const news = Array.from(document.querySelectorAll('[data-layer-toggle]'));
    if (!news.length) return;

    for (const el of news){
      const key = (el.getAttribute('data-layer-toggle')||'').trim().toLowerCase();
      if (!key) continue;
      const legacy = findLegacyFor(key);
      if (!legacy){
        console.warn('[AMA-bridge] legacy control not found for', key);
        continue;
      }
      bindToggle(el, key, legacy);
    }
  });
})();
