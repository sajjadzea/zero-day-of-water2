(function () {
  // نگاشت دستی برای مواقعی که روی رشتهٔ آزاد کار می‌کنیم:
  const faMap = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
  const enMap = {'۰':'0','۱':'1','۲':'2','۳':'3','۴':'4','۵':'5','۶':'6','۷':'7','۸':'8','۹':'9'};
  const nfFa = new Intl.NumberFormat('fa-IR');

  function toFa(strOrNum) {
    // اگر عدد است: با Intl فرمت کن؛ اگر رشته است: فقط ارقام ASCII را نگاشت کن.
    if (typeof strOrNum === 'number') return nfFa.format(strOrNum);
    const s = String(strOrNum);
    return s.replace(/\d/g, d => faMap[d]);
  }

  function toEn(strOrNum) {
    const s = String(strOrNum);
    return s.replace(/[۰-۹]/g, d => enMap[d] || d);
  }

  function formatTextNodesIn(el) {
    // فقط متنِ فرزندها؛ به input/textarea/script/style/pre/code دست نزن
    const skip = new Set(['SCRIPT','STYLE','TEXTAREA','INPUT','CODE','PRE']);
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (!parent || skip.has(parent.tagName)) continue;
      if (parent.closest('[data-no-fa]')) continue;      // Opt-out
      if (!/\d/.test(node.nodeValue)) continue;          // فقط اگر رقم ASCII دارد
      node.nodeValue = toFa(node.nodeValue);
    }
  }

  function formatMarked() {
    // فقط عناصری که Opt-in شده‌اند
    document.querySelectorAll('[data-fa-digits], .js-fa-digits').forEach(formatTextNodesIn);
  }

  function observeMutations() {
    const mo = new MutationObserver(muts => {
      for (const m of muts) {
        if (m.type === 'childList') {
          m.addedNodes.forEach(n => {
            if (!(n instanceof HTMLElement)) return;
            if (n.matches?.('[data-fa-digits], .js-fa-digits')) formatTextNodesIn(n);
            n.querySelectorAll?.('[data-fa-digits], .js-fa-digits')?.forEach(formatTextNodesIn);
          });
        } else if (m.type === 'attributes') {
          if (m.attributeName === 'data-fa-digits' || m.target.classList?.contains('js-fa-digits')) {
            formatTextNodesIn(m.target);
          }
        }
      }
    });
    mo.observe(document.documentElement, { subtree: true, childList: true, attributes: true, attributeFilter: ['data-fa-digits','class'] });
  }

  function init() {
    formatMarked();
    observeMutations();
  }

  // API عمومی برای استفاده در محاسبات/ولیدیشن‌ها
  window.digits = {
    toFa, toEn,
    formatElement: formatTextNodesIn  // در صورت نیازِ دستی
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
