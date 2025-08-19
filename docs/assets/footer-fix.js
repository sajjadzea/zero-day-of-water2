(function(){
  if (window.__FOOTER_FIX_LOADED__) return; // guard
  window.__FOOTER_FIX_LOADED__ = true;

  const themeByPath = () => {
    const p = location.pathname;
    if (p.startsWith('/electricity')) return 'electric';
    if (p.startsWith('/water'))       return 'water';
    if (p.startsWith('/gas'))         return 'gas';
    return 'electric';
  };

  document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.setAttribute('data-theme', themeByPath());

    // فوترها را پیدا و تکراری‌ها را حذف کن
    const all = Array.from(document.querySelectorAll('footer, .site-footer, #footer'));
    if (!all.length) return;
    const keep = all[all.length - 1];
    all.forEach(f => { if (f !== keep) f.remove(); });

    const footer = keep;
    footer.classList.add('site-footer');

    // ظرف داخلی یکتا
    let inner = footer.querySelector('.footer-inner');
    if (!inner) {
      inner = document.createElement('div');
      inner.className = 'footer-inner';
      while (footer.firstChild) inner.appendChild(footer.firstChild);
      footer.appendChild(inner);
    }

    // جعبهٔ متن یکتا
    let textBox = inner.querySelector('.footer-text');
    if (!textBox) {
      textBox = document.createElement('span');
      textBox.className = 'footer-text';
      while (inner.firstChild) textBox.appendChild(inner.firstChild);
      inner.appendChild(textBox);
    }

    // پرچم اگر نیست، اضافه کن
    if (!textBox.querySelector('.footer-flag')) {
      const img = new Image();
      img.className = 'footer-flag';
      img.alt = 'IR';
      img.loading = 'lazy';
      img.src = '/assets/IRAN-FLAG.png';
      textBox.prepend(img);
    }
  });
})();
