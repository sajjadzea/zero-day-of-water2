(function(){
  if (window.__READABILITY_BOUND__) return;
  window.__READABILITY_BOUND__ = true;

  onCyReady((cy) => {
    const debounce = window.__cldDebounce;

    // ---- 2.1: استایل فقط یک‌بار، بدون تغییر پالت موجود ----
    if (!cy.scratch('_readability_style_applied')) {
      cy.batch(() => {
        cy.style()
          .selector('node')
          .style({
            'label':'data(_label)',
            'text-wrap':'wrap',
            'text-max-width':'180px',
            'text-valign':'center',
            'text-halign':'center',
            'min-zoomed-font-size':8,
            'shape':'round-rectangle'
          })
          .selector('edge')
          .style({
            'label':'data(_signLabel)',
            'text-margin-y':'-6px',
            'font-size':12,
            'min-zoomed-font-size':8
          })
          .selector('edge.delayed')
          .style({ 'line-style':'dotted' })
          .update();
      });
      cy.scratch('_readability_style_applied', true);
    }

    // ---- 2.2: برچسب نودها ----
    function updateNodeLabels(){
      cy.nodes().forEach(n=>{
        const lbl = n.data('label') ?? n.data('name') ?? n.data('title') ?? n.id();
        if (n.data('_label') !== lbl) n.data('_label', lbl);
      });
    }

    // ---- 2.3: اندازه‌گذاری نودها (ترجیح با تابع اصلی پروژه) ----
    const hasCoreAutosize = typeof window.measureAndResizeNodes === 'function';
    const ctx = hasCoreAutosize ? null : document.createElement('canvas').getContext('2d');

    function autosizeNodesFallback(){
      // فقط اگر تابع اصلی وجود ندارد؛ تا تداخل پیش نیاید.
      if (!ctx) return;
      cy.batch(() => {
        cy.nodes().forEach(n=>{
          const label = (n.data('_label')||'').toString();
          const fs = parseFloat(n.style('font-size')) || 12;
          const ff = n.style('font-family') || 'IRANSans, Tahoma, sans-serif';
          ctx.font = `${fs}px ${ff}`;
          const padX=16, padY=8, minW=64, minH=28;
          const lines = label.split(/\n|\\n/);
          const widths = lines.map(t => ctx.measureText(t).width);
          const w = Math.max(minW, Math.max(...widths,0) + padX*2);
          const h = Math.max(minH, lines.length*(fs+6) + padY*2);
          n.style({ width:w, height:h });
        });
      });
    }

    // ---- 2.4: قطبیت و تأخیر یال‌ها (+/– و dotted) ----
    function updateEdges(){
      cy.batch(() => {
        cy.edges().forEach(e=>{
          const s = (e.data('sign') ?? e.data('polarity') ?? (Number(e.data('weight'))>=0 ? +1 : -1));
          e.data('_signLabel', s>=0 ? '+' : '–');
          const delayed = !!(e.data('delay') || e.data('lag') || Number(e.data('tau'))>0 || Number(e.data('delayYears'))>0);
          e.toggleClass('delayed', delayed);
        });
      });
    }

    // ---- 2.5: رفرش Debounce و بدون رویداد style ----
    const refresh = () => {
      updateNodeLabels();
      if (hasCoreAutosize) {
        try { window.measureAndResizeNodes(cy); } catch(_) {}
      } else {
        autosizeNodesFallback();
      }
      updateEdges();
    };
    const schedule = debounce(refresh, 70);

    refresh(); // بار اول

    // عمداً 'style' را اضافه نکن؛ با 'style' حلقه ایجاد می‌شود.
    const ev = 'data add remove position pan zoom layoutstop';
    cy.on(ev, schedule);

    // ---- 2.6: یک‌بار fit پس از layoutstop ----
    cy.one('layoutstop', () => requestAnimationFrame(() => window.__cldSafeFit(cy)));

    // ---- 2.7: دکمه High-contrast (بدون تغییر خودکار style) ----
    if (!document.getElementById('toggle-high-contrast')) {
      const btn = document.createElement('button');
      btn.id = 'toggle-high-contrast';
      btn.type = 'button';
      btn.textContent = 'کنتراست بالا';
      btn.className = 'btn-soft';
      (document.querySelector('#cld-toolbar')
        || document.querySelector('#cld-control-hub .mode .ac-body')
        || document.querySelector('header') || document.body).appendChild(btn);

      let on = false;
      btn.addEventListener('click', () => {
        on = !on;
        cy.batch(() => {
          cy.style()
            .selector('node').style({'text-outline-width': on?3:1, 'text-outline-color': on?'#000':'transparent'})
            .selector('edge').style({'text-outline-width': on?3:0, 'text-outline-color': on?'#000':'transparent'})
            .update();
        });
      });
    }
  });
})();
