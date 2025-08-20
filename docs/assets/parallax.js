(function(){
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const layers = Array.from(document.querySelectorAll('.parallax-layer'));
  const cards  = Array.from(document.querySelectorAll('.card'));
  const vh = Math.max(1, window.innerHeight);

  function tick(){
    const y = window.scrollY || 0;
    // اورلی پویا: ابتدای صفحه تیره‌تر، با اسکرول کمی روشن‌تر
    const p = Math.min(1, y / (vh * 0.7));
    document.documentElement.style.setProperty('--overlay', (0.35 - p * 0.2).toFixed(2));

    // پارالاکس با اختلاف سرعت
    if (!reduceMotion){
      for (const el of layers){
        const s = parseFloat(el.getAttribute('data-speed') || '0');
        el.style.transform = `translate3d(0, ${y * s}px, 0)`;
      }
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  // ظاهر شدن کارت‌ها
  if ('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e => {
        if (e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { rootMargin: '-10% 0px' });
    cards.forEach(c => io.observe(c));
  } else {
    cards.forEach(c => c.classList.add('visible'));
  }
})();
