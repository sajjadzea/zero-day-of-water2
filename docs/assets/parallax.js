(function(){
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hero = document.querySelector('.parallax-section');
  const bgUrl = hero ? hero.getAttribute('data-bg') : null;
  const layers = Array.from(document.querySelectorAll('.parallax-layer'));
  if (bgUrl){ layers.forEach(l => l.style.backgroundImage = `url('${bgUrl}')`); }

  if (!reduceMotion && 'requestAnimationFrame' in window){
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
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const cards = Array.from(document.querySelectorAll('.card'));
  if ('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { rootMargin: '-10% 0px' });
    cards.forEach(c => io.observe(c));
  } else {
    cards.forEach(c => c.classList.add('visible'));
  }
})();
