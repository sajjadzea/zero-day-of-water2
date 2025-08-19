(function(){
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
      </span>
    `;
    return wrap;
  }

  function installBadges(){
    document.querySelectorAll('.dash-card').forEach(card => {
      // اگر تاریخ قبلی وجود دارد، حذف کن تا تکراری نشود
      card.querySelectorAll('.date-badge, .date-chip, time.update-date').forEach(e=>e.remove());
      if (!card.querySelector('.dash-badge-wrap')) {
        const badge = makeBadge();
        // بالای محتوا قرار بگیرد
        card.insertBefore(badge, card.firstElementChild || card.firstChild);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    // تعیین تم اگر قبلاً ست نشده (بر اساس مسیر)
    const html = document.documentElement;
    if (!html.getAttribute('data-theme')) {
      const p = location.pathname;
      if (p.startsWith('/electricity')) html.setAttribute('data-theme','electric');
      else if (p.startsWith('/water')) html.setAttribute('data-theme','water');
      else if (p.startsWith('/gas')) html.setAttribute('data-theme','gas');
      else html.setAttribute('data-theme','electric'); // پیش‌فرض تیره
    }
    installBadges();
  });
})();
