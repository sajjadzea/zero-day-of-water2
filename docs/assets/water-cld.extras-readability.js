(function(){
  onCyReady((cy) => {
    // 1) آپدیت برچسب نودها
    function updateNodeLabels(){
      cy.nodes().forEach(n => {
        const lbl = n.data('label') ?? n.data('name') ?? n.data('title') ?? n.id();
        if (n.data('_label') !== lbl) n.data('_label', lbl);
      });
    }

    // 2) Autosize
    const ctx = document.createElement('canvas').getContext('2d');
    function nodeFont(n){
      const fs = parseFloat(n.style('font-size')) || 12;
      const ff = n.style('font-family') || 'IRANSans, Tahoma, sans-serif';
      ctx.font = `${fs}px ${ff}`;
      return fs;
    }
    function autosizeNodes(){
      cy.nodes().forEach(n=>{
        const label = (n.data('_label')||'').toString();
        const fs = nodeFont(n);
        const padX = 16, padY = 8, minW = 64, minH = 28;
        const lines = label.split(/\n|\\n/);
        const widths = lines.map(t => ctx.measureText(t).width);
        const w = Math.max(minW, Math.max(...widths, 0) + padX*2);
        const h = Math.max(minH, lines.length * (fs + 6) + padY*2);
        n.style({ width:w, height:h, shape:'round-rectangle' });
      });
    }

    // 3) قطبیت و تأخیر یال‌ها
    function updateEdges(){
      cy.edges().forEach(e=>{
        const sign = (e.data('sign') ?? e.data('polarity') ?? (e.data('weight')>=0 ? +1 : -1));
        e.data('_signLabel', sign>=0 ? '+' : '–');
        e.removeClass('delayed');
        if (e.data('delay') || e.data('lag') || (Number(e.data('tau'))>0)) e.addClass('delayed');
      });
    }

    // 4) استایل‌های افزوده
    cy.style()
      .selector('node').style({ 'label':'data(_label)', 'text-wrap':'wrap', 'text-valign':'center','text-halign':'center','min-zoomed-font-size':8 })
      .selector('edge').style({ 'label':'data(_signLabel)', 'text-margin-y':'-6px','font-size':12,'min-zoomed-font-size':8 })
      .selector('edge.delayed').style({ 'line-style':'dotted' })
      .update();

    // High contrast toggle
    let hcOn = false;
    function applyHC(on){
      hcOn = !!on;
      cy.style()
        .selector('node')
        .style({ 'text-outline-width': hcOn ? 3 : 1, 'text-outline-color': hcOn ? '#000000' : 'transparent' })
        .selector('edge')
        .style({ 'text-outline-width': hcOn ? 3 : 0, 'text-outline-color': hcOn ? '#000000' : 'transparent' })
        .update();
    }
    if(!document.getElementById('toggle-high-contrast')){
      const btn = document.createElement('button');
      btn.id = 'toggle-high-contrast';
      btn.type = 'button';
      btn.className = 'btn-soft';
      btn.textContent = 'کنتراست بالا';
      (document.querySelector('#cld-toolbar') ||
       document.querySelector('#cld-control-hub .mode .ac-body') ||
       document.querySelector('header') || document.body).appendChild(btn);
      btn.addEventListener('click', ()=>applyHC(!hcOn));
    }

    const refresh = () => { updateNodeLabels(); autosizeNodes(); updateEdges(); };
    refresh();
    applyHC(true);
    cy.on('data add remove style position pan zoom layoutstop', refresh);
  });
})();
