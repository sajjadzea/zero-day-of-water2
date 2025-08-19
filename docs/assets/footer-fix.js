/* تعیین تم صفحه + تضمین ساختار واحد فوتر و افزودن پرچم قبل از متن */
(function(){
  const themeByPath = () => {
    const p = location.pathname;
    if (p.startsWith('/electricity')) return 'electric';
    if (p.startsWith('/water'))       return 'water';
    if (p.startsWith('/gas'))         return 'gas';
    return 'electric'; // پیش‌فرض تیره
  };

  document.addEventListener('DOMContentLoaded', () => {
    // تم را روی <html> ست کن تا CSS براساسش اعمال شود
    document.documentElement.setAttribute('data-theme', themeByPath());

    // پیدا کردن فوتر
    const footer = document.querySelector('footer, .site-footer, #footer');
    if (!footer) return;

    footer.classList.add('site-footer');

    // ظرف داخلی یکنواخت
    let inner = footer.querySelector('.footer-inner');
    if (!inner) {
      inner = document.createElement('div');
      inner.className = 'footer-inner';
      // همهٔ گره‌های فعلی فوتر را به inner منتقل کن
      const nodes = Array.from(footer.childNodes);
      nodes.forEach(n => inner.appendChild(n));
      footer.appendChild(inner);
    }

    // جعبهٔ متن فوتر
    let textBox = inner.querySelector('.footer-text');
    if (!textBox) {
      textBox = document.createElement('span');
      textBox.className = 'footer-text';

      // تمام محتوای متنی/المنت‌های inline را داخل textBox جمع‌آوری کن
      const keep = [];
      Array.from(inner.childNodes).forEach(n => {
        if (n !== textBox) keep.push(n);
      });
      keep.forEach(n => textBox.appendChild(n));
      inner.appendChild(textBox);
    }

    // افزودن پرچم در ابتدای متن (اگر نباشد)
    if (!textBox.querySelector('.footer-flag')) {
      const img = new Image();
      img.className = 'footer-flag';
      img.alt = 'IR';
      img.loading = 'lazy';
      img.src = '/assets/IRAN-FLAG.png';  // موجود در مخزن: docs/assets/IRAN-FLAG.png
      textBox.prepend(img);
    }
  });
})();
