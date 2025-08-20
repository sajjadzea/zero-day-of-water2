(function(){
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const layers = Array.from(document.querySelectorAll('.parallax-layer'));
  const cards = Array.from(document.querySelectorAll('.card'));

  // اگر متغیر CSS ست نشده و تصویر پس‌زمینه خالی بود، مسیر صحیح را اعمال کن
  layers.forEach(l => {
    const bg = getComputedStyle(l).backgroundImage;
    if (!bg || bg === 'none'){
      l.style.backgroundImage = "url('../page/landing/hiro2.webp')";
    }
  });

  // Parallax
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
    window.addEventListener('scroll', onScroll, {passive:true});
  }

  // کارت‌ها با اسکرول ظاهر شوند
  if ('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, {rootMargin:'-10% 0px'});
    cards.forEach(c=>io.observe(c));
  } else {
    cards.forEach(c=>c.classList.add('visible'));
  }
})();
