(function(){
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePtr = window.matchMedia && window.matchMedia('(pointer: fine)').matches; // دسکتاپ/ماوس
  const hero = document.querySelector('.parallax-section');
  const bgUrl = hero ? hero.getAttribute('data-bg') : null;
  const layers = Array.from(document.querySelectorAll('.parallax-layer'));
  if (!layers.length) return;
  if (bgUrl){ layers.forEach(l => l.style.backgroundImage = `url('${bgUrl}')`); }

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const ampMul = isMobile ? 0.55 : 1.0;  // موبایل عمق کمتر

  // اسکرول نرم با LERP (low-pass filter) و کلمپ برای جلوگیری از over-shoot
  let targetY = 0, currentY = 0;
  const lerp = (a,b,t)=>a+(b-a)*t;
  const clamp = (v,min,max)=>Math.max(min, Math.min(max,v));

  // تیلت خفیف با ماوس (اختیاری فقط دسکتاپ) برای حس عمق افقی
  let tiltX = 0, tiltTargetX = 0;
  if (finePtr){
    window.addEventListener('mousemove', (e)=>{
      const w = window.innerWidth || 1;
      const n = (e.clientX / w - 0.5);           // -0.5..+0.5
      tiltTargetX = clamp(n * 10, -10, 10);      // حداکثر 10px جابه‌جایی افقی
    }, {passive:true});
  }

  const vh = Math.max(1, window.innerHeight);
  function frame(){
    targetY = window.scrollY || 0;
    // لِرپ برای روانی
    currentY = lerp(currentY, targetY, 0.08);

    // اورلی تطبیقی (اگر CSS از --overlay استفاده می‌کند)
    const p = Math.min(1, currentY / (vh * 0.7));
    document.documentElement.style.setProperty('--overlay', (0.35 - p * 0.2).toFixed(2));

    // لِرپ تیلت
    if (finePtr){ tiltX = lerp(tiltX, tiltTargetX, 0.1); }

    // اعمال پارالاکس بر اساس data-speed هر لایه (تقویت شده با ampMul)
    for (const el of layers){
      const base = parseFloat(el.getAttribute('data-speed') || '0'); // مثل -0.46 یا -0.14
      // دامنه حرکت را نسبت به ارتفاع ویوپورت کمی نرمال کنیم تا در نمایشگرهای کوتاه/بلند متعادل باشد
      const norm = currentY * base * ampMul * (vh / 900);
      // محدودیت حرکت برای جلوگیری از بیرون‌زدن لبه‌ها
      const limited = clamp(norm, -vh * 0.8, vh * 0.8);
      // اسکیل جزئی همراه با عمق برای لایه جلو (خیلی ظریف)
      const depthScale = base < -0.30 ? 1.02 : 1.0;
      el.style.setProperty('--pz', depthScale.toFixed(3));
      // ترکیب حرکت عمودی + تیلت افقی خفیف
      const dx = finePtr ? (tiltX * (base < -0.30 ? 1.0 : 0.6)) : 0;
      el.style.transform = `translate3d(${dx}px, ${limited}px, 0) scale(var(--pz,1.10))`;
    }

    requestAnimationFrame(frame);
  }

  if (!reduce) requestAnimationFrame(frame);
  else {
    // اگر کاهش حرکت فعال است، هیچ ترنسفورمی اعمال نکن
    layers.forEach(el => el.style.transform = 'none');
  }
})();

(function(){
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

