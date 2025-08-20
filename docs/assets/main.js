(function(){
  const supportsRAF = 'requestAnimationFrame' in window;
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const layers = Array.from(document.querySelectorAll('.parallax-layer'));
  const cards = Array.from(document.querySelectorAll('.card'));

  // Fallback تصویر: اگر لایه‌ها تصویر پس‌زمینه ندارند یا van-gogh.webp موجود نبود، از header2.webp استفاده کن
  layers.forEach(l => {
    const style = getComputedStyle(l);
    if (!style.backgroundImage || style.backgroundImage === 'none'){
      l.style.backgroundImage = "url('../header2.webp')"; // TODO: replace with van-gogh.webp when available
    }
  });

  // Parallax
  if (supportsRAF && !reduceMotion){
    let ticking = false;
    const onScroll = () => {
      if (!ticking){
        requestAnimationFrame(() => {
          const y = window.scrollY || window.pageYOffset;
          layers.forEach(layer => {
            const speed = parseFloat(layer.getAttribute('data-speed') || '0');
            layer.style.transform = `translate3d(0, ${y * speed}px, 0)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    if (!isMobile){ onScroll(); window.addEventListener('scroll', onScroll, {passive:true}); }
  }

  // Cards reveal
  if ('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting){
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, {rootMargin:'-10% 0px'});
    cards.forEach(c => io.observe(c));
  } else {
    cards.forEach(c => c.classList.add('visible'));
  }
})();
