(function(){
  if (window.__UNIFIED_BADGE_LOADED__) return; // guard
  window.__UNIFIED_BADGE_LOADED__ = true;

  const TEXT = 'آخرین به‌روزرسانی: ۲۶ مرداد ۱۴۰۴';

  function makeBadge() {
    const wrap = document.createElement('div');
    wrap.className = 'dash-badge-wrap';
    wrap.innerHTML = `
      <span class="badge-update" aria-label="آخرین به‌روزرسانی">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 2v2H5a2 2 0 0 0-2 2v2h18V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zm14 8H3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10zm-5 5h-4v4h4v-4z"/>
        </svg>
        <span>${TEXT}</span>
      </span>`;
    return wrap;
  }

  function installBadges(){
    document.querySelectorAll('.dash-card').forEach(card => {
      // هر نشانهٔ تاریخ قبلی را حذف کن تا دوتا نشود
      card.querySelectorAll('.dash-badge-wrap, .date-badge, .date-chip, time.update-date').forEach(el => el.remove());
      // درج یک‌باره‌ی چیپ جدید
      const badge = makeBadge();
      card.insertBefore(badge, card.firstElementChild || card.firstChild);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    if (!html.getAttribute('data-theme')) {
      const p = location.pathname;
      html.setAttribute('data-theme',
        p.startsWith('/electricity') ? 'electric' :
        p.startsWith('/water')       ? 'water'   :
        p.startsWith('/gas')         ? 'gas'     : 'electric');
    }
    installBadges();
  });
})();
