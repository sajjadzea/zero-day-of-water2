(function(){
  if (window.__READABILITY_BOUND__) return;  // singleton
  window.__READABILITY_BOUND__ = true;

  onCyReady((cy) => {
    const debounce = window.__cldDebounce;

    // --- 2.1: استایل فقط یک‌بار ---
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

    // --- 2.2: برچسب‌ها و اندازهٔ نود ---
    const ctx = document.createElement('canvas').getContext('2d');
    function updateNodeLabels(){
      cy.nodes().forEach(n=>{
        const lbl = n.data('label') ?? n.data('name') ?? n.data('title') ?? n.id();
        if (n.data('_label') !== lbl) n.data('_label', lbl);
      });
    }
    function autosizeNodes(){
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

    // --- 2.3: قطبیت و تأخیر یال ---
    function updateEdges(){
      cy.batch(() => {
        cy.edges().forEach(e=>{
          const sign = (e.data('sign') ?? e.data('polarity') ?? (Number(e.data('weight'))>=0 ? +1 : -1));
          e.data('_signLabel', sign>=0 ? '+' : '–');
          const delayed = !!(e.data('delay') || e.data('lag') || Number(e.data('tau'))>0);
          e.toggleClass('delayed', delayed);
        });
      });
    }

    // --- 2.4: رفرش Debounce و بدون رویداد style (تا حلقه نشود) ---
    const refresh = () => { updateNodeLabels(); autosizeNodes(); updateEdges(); };
    const schedule = debounce(refresh, 60);

    refresh(); // بار اول

    // توجه: عمداً «style» را از لیست حذف کردیم تا update() → event loop نشود.
    const ev = 'data add remove position pan zoom layoutstop';
    cy.off(ev, schedule); // اگر نسخهٔ قبلی گوش داده بود
    cy.on(ev, schedule);

    // --- 2.5: fit ایمن یک‌بار پس از layout ---
    cy.one('layoutstop', () => requestAnimationFrame(() => window.__cldSafeFit(cy)));
  });
})();

