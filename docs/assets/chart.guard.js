// ===== Chart Guard & Auto-Init (singleton, CSP-safe, no interference) =====
(function(){
  if (window.__CHART_GUARD__) return; window.__CHART_GUARD__ = true;

  const LOG_PREFIX = '[ChartGuard]';

  // --- ابزارها
  const $ = (s, r=document)=> r.querySelector(s);
  function log(...a){ try{ console.debug(LOG_PREFIX, ...a); }catch(_){} }
  function warn(...a){ try{ console.warn(LOG_PREFIX, ...a); }catch(_){} }

  function hasVisibleSize(el){
    if (!el) return false;
    const st = getComputedStyle(el);
    if (st.display === 'none' || st.visibility === 'hidden') return false;
    const r = el.getBoundingClientRect();
    return r.width > 10 && r.height > 10;
  }

  // جلوگیری از دوباره‌سازی
  function getChartInstance(canvas){
    return canvas.__chart || canvas.__chartjs || null;
  }
  function setChartInstance(canvas, inst){
    canvas.__chart = inst;
  }

  // ساخت ایمن چارت در صورت نبود
  function makeChartIfMissing(){
    const canvas = $('#sim-chart');
    if (!canvas){ warn('canvas #sim-chart not found'); return; }
    if (!window.Chart){ warn('Chart.js not loaded yet'); return; }

    // اگر قبلاً ساخته شده، کاری نکن
    if (getChartInstance(canvas)){ log('chart exists, skip'); return; }

    const ctx = canvas.getContext('2d');
    if (!ctx){ warn('2d context is null (canvas not visible or zero size)'); return; }

    const baseline = (window.Sim && window.Sim.series) ? window.Sim.series : null;
    const data = baseline || {
      labels: Array.from({length: 30}, (_,i)=> i+1),
      datasets: [{ label: 'baseline', data: Array.from({length:30}, ()=>0.25), borderWidth: 2, fill: false }]
    };

    const chart = new Chart(ctx, {
      type: 'line',
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'nearest', intersect: false },
        plugins: { legend: { display: true } },
        scales: { x: { title: { display: true, text: 't' } },
                  y: { title: { display: true, text: '' } } }
      }
    });

    setChartInstance(canvas, chart);
    log('chart created');
  }

  // اطمینان از ارتفاع/نمایش قبل از ساخت
  function ensureAndBuild(){
    const panel = $('#sim-panel');
    const canvas = $('#sim-chart');
    if (!panel || !canvas){ return; }

    // اگر ارتفاع صفر باشد، CSS فایل chart.autofix.css آن را پوشش می‌دهد.
    if (!hasVisibleSize(canvas)){
      // یک تلاش تاخیر دار برای زمانی که والد هنوز لود می‌شود
      setTimeout(()=>{ if (hasVisibleSize(canvas)) makeChartIfMissing(); }, 120);
      return;
    }
    makeChartIfMissing();
  }

  // ترتیب لود: منتظر Chart.js بمان
  function waitForChartAndBuild(){
    let tries = 0;
    (function spin(){
      if (window.Chart){ ensureAndBuild(); return; }
      if (++tries > 30){ warn('Chart.js still not available'); return; }
      setTimeout(spin, 100);
    })();
  }

  // ResizeObserver برای باز-سایزدهی (بدون دوباره‌سازی)
  function mountResizeObserver(){
    const canvas = $('#sim-chart'); if (!canvas || canvas.__cg_ro) return;
    const inst = getChartInstance(canvas); if (!inst) return;
    const ro = new ResizeObserver(()=>{ inst.resize(); });
    ro.observe(canvas);
    canvas.__cg_ro = ro;
  }

  // رویدادهای پروژه: هنگام آپدیت مدل، اگر چارت نداریم بسازیم
  function wireProjectEvents(){
    document.addEventListener('model:updated', ()=>{
      ensureAndBuild();
      mountResizeObserver();
    });
  }

  // اگر جایی چارت با کدی دیگر ساخته شود، Guard فقط نظارت می‌کند
  function detectDoubleInit(){
    const canvas = $('#sim-chart'); if (!canvas) return;
    const inst = getChartInstance(canvas);
    if (inst && canvas.__cg_seen){ return; }
    if (inst && !canvas.__cg_seen){
      canvas.__cg_seen = true;
      log('external chart detected (ok)');
      mountResizeObserver();
    }
  }

  function boot(){
    waitForChartAndBuild();
    wireProjectEvents();
    // چند بار اول چک دوبرابر‌سازی
    let n=0; const t = setInterval(()=>{ detectDoubleInit(); if (++n>10) clearInterval(t); }, 150);
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') boot();
  else window.addEventListener('DOMContentLoaded', boot, { once:true });
})();
