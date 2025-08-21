(function () {
  const Parser = (window.exprEval && window.exprEval.Parser) || function () {
    this.parse = function () {
      return { evaluate: function () { return 0; }, variables: function () { return []; } };
    };
  };

  // --- readiness flags ---
  var __modelReady = false;
  var __chartReady = false;
  var __modelReadyQueue = [];
  function whenModelReady(fn){ if(__modelReady){ try{ fn(); }catch(e){ console.error(e);} } else { __modelReadyQueue.push(fn); } }
  function markModelReady(){ __modelReady = true; for(var i=0;i<__modelReadyQueue.length;i++){ try{ __modelReadyQueue[i](); }catch(e){ console.error(e);} } __modelReadyQueue = []; }

  function setVhVar(){
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  setVhVar();
  window.addEventListener('resize', setVhVar);
  window.addEventListener('orientationchange', () => { setTimeout(setVhVar, 100); });

  let model;
  let simParams = {};
  const SC_KEY = 'cld-scenarios';

  function getScenarios() {
    try { return JSON.parse(localStorage.getItem(SC_KEY)) || {}; } catch (e) { return {}; }
  }

  function setScenarios(obj) {
    localStorage.setItem(SC_KEY, JSON.stringify(obj));
  }

  function parseModel(json) {
    const parser = new Parser();
    model = { nodes: {}, edges: [], order: [], initials: {} };
    (json.nodes || []).forEach(n => {
      const node = { ...n, deps: [] };
      if (n.expr) {
        try { node.fn = parser.parse(n.expr); } catch (e) { console.error('node parse', n.id, e); }
      }
      if (n.type === 'init') {
        node.value = node.fn ? node.fn.evaluate({}) : parseFloat(n.expr) || 0;
        model.initials[n.id] = node.value;
      }
      if (typeof n.init !== 'undefined') model.initials[n.id] = n.init;
      model.nodes[n.id] = node;
    });
    (json.edges || []).forEach(e => {
      const edge = { ...e };
      if (e.expr) {
        try { edge.fn = parser.parse(e.expr); } catch (err) { console.error('edge parse', e.source, e.target, err); }
      }
      model.edges.push(edge);
    });
    Object.values(model.nodes).forEach(n => {
      if (n.type === 'expr' && n.fn) {
        n.deps = n.fn.variables().filter(v => model.nodes[v]);
      }
    });
    const inDeg = {};
    Object.keys(model.nodes).forEach(id => inDeg[id] = 0);
    Object.values(model.nodes).forEach(n => n.deps.forEach(d => inDeg[n.id]++));
    const q = [];
    Object.keys(inDeg).forEach(id => { if (inDeg[id] === 0) q.push(id); });
    const order = [];
    while (q.length) {
      const id = q.shift();
      order.push(id);
      Object.values(model.nodes).forEach(n => {
        if (n.deps.includes(id)) {
          inDeg[n.id]--;
          if (inDeg[n.id] === 0) q.push(n.id);
        }
      });
    }
    Object.keys(model.nodes).forEach(id => { if (!order.includes(id)) order.push(id); });
    model.order = order;
    return model;
  }

  function simulateStep(state, t) {
    const initials = (model && model.initials) ? model.initials : {};
    const prev = state[t - 1] || {};
    const cur = {};
    const tol = 1e-6, maxIter = 8;
    let iter = 0, changed = true;
    while (changed && iter < maxIter) {
      changed = false;
      for (const id of model.order) {
        const n = model.nodes[id];
        if (n.type === 'init') {
          cur[id] = model.initials[id];
          continue;
        }
        const ctx = Object.assign({}, simParams, prev, cur, {
          delay: function(name, d){
            d = (typeof d === 'number') ? d : 1;
            const tt = t - d;
            if (tt < 0) return initials[name] || 0;
            const st = state[tt];
            return st && st[name] != null ? st[name] : initials[name] || 0;
          }
        });
        let val = 0;
        try { val = n.fn ? n.fn.evaluate(ctx) : 0; } catch (e) { console.error('eval', id, e); }
        if (cur[id] === undefined || Math.abs(cur[id] - val) > tol) {
          cur[id] = val;
          changed = true;
        }
      }
      iter++;
    }
    return cur;
  }

  function simulate(params) {
    if (!model || !model.initials) { throw new Error('model not ready'); }
    params = params || {};
    simParams = params;
    const years = params.years || 30;
    const initials = model.initials || {};
    const state = [Object.assign({}, initials)];
    for (var t = 1; t <= years; t++) {
      state[t] = simulateStep(state, t);
    }
    return {
      years: Array.from({ length: years + 1 }, function (_, i) { return i; }),
      series: state.map(function (s) { return s.gw_stock; })
    };
  }

  function createTextMeasurer(fontSizePx) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    return {
      setFont: function(fontFamily) { ctx.font = fontSizePx + 'px ' + fontFamily; },
      measure: function(text) {
        return (ctx && typeof ctx.measureText === 'function') ? ctx.measureText(text).width : 0;
      },
      wrapLines: function(text, maxWidth) {
        if (!text) return [''];
        const words = text.split(/\s+/);
        const lines = [];
        let line = words[0] || '';
        for (let i = 1; i < words.length; i++) {
          const word = words[i];
          const test = line + ' ' + word;
          if (this.measure(test) <= maxWidth) {
            line = test;
          } else {
            lines.push(line);
            line = word;
          }
        }
        lines.push(line);
        return lines;
      }
    };
  }

  function measureAndResizeNodes(cy, opts = {}) {
    const fontSize = opts.fontSize || 15;
    const padding = typeof opts.padding === 'number' ? opts.padding : 18;
    const maxTextWidth = opts.maxTextWidth || 260;
    const minWidth = opts.minWidth || 100;
    const minHeight = opts.minHeight || 48;
    const container = cy.container();
    const comp = window.getComputedStyle(container);
    const fontFamily = comp && comp.fontFamily ? comp.fontFamily : 'sans-serif';
    const measurer = createTextMeasurer(fontSize);
    measurer.setFont(fontFamily);

    cy.batch(() => {
      cy.nodes().forEach(node => {
        if (node.isParent && node.isParent()) return;
        const rawLabel = (node.data('label') !== undefined) ? String(node.data('label')) : (node.id() || '');
        const normalized = rawLabel.replace(/\s+/g, ' ').trim();
        const lines = measurer.wrapLines(normalized, maxTextWidth);
        let maxLineWidth = 0;
        lines.forEach(ln => {
          const w = measurer.measure(ln);
          if (w > maxLineWidth) maxLineWidth = w;
        });
        const lineHeight = Math.ceil(fontSize * 1.3);
        const textHeight = lines.length * lineHeight;
        const newWidth = Math.max(minWidth, Math.ceil(maxLineWidth + padding * 2));
        const newHeight = Math.max(minHeight, Math.ceil(textHeight + padding * 2));
        const multiLabel = lines.join('\n');
        node.data('label', multiLabel);
        node.style({
          'width': newWidth + 'px',
          'height': newHeight + 'px',
          'text-valign': 'center',
          'text-halign': 'center'
        });
      });
    });
  }

  let cy;
  let simChart;
  let baseSim;

  function initSimChart() {
    try {
      const el = document.getElementById('sim-chart');
      if (!el) return console.warn('sim-chart not found');
      if (!window.Chart) return console.warn('Chart.js not loaded');
      const ctx = el.getContext('2d');
      if (!window.__wesh_sim_chart) {
        Chart.defaults.font.family = 'Vazirmatn, sans-serif';
        window.__wesh_sim_chart = new Chart(ctx, {
          type: 'line',
          data: { labels: [], datasets: [{ label: 'پایه', data: [], borderWidth: 2, fill: false }] },
          options: { responsive: true, maintainAspectRatio: false }
        });
      }
      simChart = window.__wesh_sim_chart;
      __chartReady = true;
      whenModelReady(initBaselineIfPossible);
    } catch (e) {
      console.error('initSimChart failed', e);
    }
  }
  document.addEventListener('DOMContentLoaded', initSimChart);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(initSimChart).catch(function(){ initSimChart(); });
  }

  function initBaselineIfPossible(){
    if (!window.__wesh_sim_chart) return;
    try{
      if (typeof simulate === 'function' && model && model.initials){
        var out = simulate({ eff:0, dem:0, delay:0, years:30 });
        var labels = out.years || (out.baseline ? out.baseline.map(function(_,i){return i;}) : []);
        baseSim = { years: labels, baseline: out.baseline || out.series || [] };
        updateChartFromSim(baseSim);
      } else if (!window.__wesh_sim_chart.data.labels.length){
        baseSim = {
          years: Array.from({length:30}, function(_,i){return i;}),
          baseline: Array.from({length:30}, function(){return 100;})
        };
        updateChartFromSim(baseSim);
      }
    }catch(e){ console.error('baseline init failed', e); }
  }

  function updateChartFromSim(out) {
    if (!window.__wesh_sim_chart || !out) return;
    const labels = out.years || Array.from({ length: out.baseline ? out.baseline.length : (out.series ? out.series.length : 0) }, (_, i) => i);
    window.__wesh_sim_chart.data.labels = labels;
    const datasets = [{
      label: 'پایه',
      data: out.baseline || out.series || [],
      borderWidth: 2,
      borderColor: '#0ea5e9',
      backgroundColor: 'rgba(14,165,233,0.1)',
      fill: false
    }];
    if (out.scenario) datasets.push({
      label: 'سناریو',
      data: out.scenario,
      borderWidth: 2,
      borderColor: 'rgb(220,38,38)',
      backgroundColor: 'rgba(220,38,38,0.1)',
      fill: false
    });
    window.__wesh_sim_chart.data.datasets = datasets;
    window.__wesh_sim_chart.update();
  }

  const safeFit = () => {
    try {
      measureAndResizeNodes(cy, { fontSize: 15, padding: 18, maxTextWidth: 260 });
      cy.resize();
      cy.fit(undefined, 48);
    } catch(e){
      console.error('measureAndResizeNodes failed', e);
    }
  };

  function runLayout(name, dir = 'LR') {
    if (!cy) return;
    const horizontal = dir === 'LR';
    if (name === 'elk') {
      try {
        cy.layout({
          name: 'elk',
          elk: {
            algorithm: 'layered',
            nodeSpacing: 80,
            padding: 50,
            direction: horizontal ? 'RIGHT' : 'DOWN'
          },
          nodeSpacing: 80,
          padding: 50,
          nodeDimensionsIncludeLabels: true,
          fit: true
        }).run();
        return;
      } catch (e) {
        console.warn('elk layout failed, falling back to dagre', e);
      }
    }
    try {
      cy.layout({
        name: 'dagre',
        rankDir: dir,
        nodeSep: 80,
        rankSep: 80,
        padding: 50,
        nodeDimensionsIncludeLabels: true,
        fit: true
      }).run();
    } catch (err) {
      console.error('layout failed', err);
    }
  }

  function resetScenario() {
    if (!baseSim) return;
    updateChartFromSim(baseSim);
    const effInput = document.getElementById('p-eff');
    const demInput = document.getElementById('p-dem');
    const delayInput = document.getElementById('p-delay');
    if (effInput) { effInput.value = 0; effInput.dispatchEvent(new Event('input')); }
    if (demInput) { demInput.value = 0; demInput.dispatchEvent(new Event('input')); }
    if (delayInput) { delayInput.value = 0; delayInput.dispatchEvent(new Event('input')); }
  }

  document.addEventListener('DOMContentLoaded', async function () {
    const container = document.getElementById('cy');
    if (!container) { console.warn('cy container not found'); return; }
    if (typeof window.cytoscape === 'undefined') { console.warn('cytoscape not loaded'); return; }

    if (window.tippy) {
      tippy('.hint', { allowHTML:true, theme:'light', delay:[80,0], placement:'bottom', maxWidth: 320, interactive: true });
    }

    const rootStyle = getComputedStyle(document.documentElement);
    const colorPos = rootStyle.getPropertyValue('--pos').trim() || '#16a34a';
    const colorNeg = rootStyle.getPropertyValue('--neg').trim() || '#dc2626';
    const colorAccent = rootStyle.getPropertyValue('--accent').trim() || '#58a79a';
    const colorLine = rootStyle.getPropertyValue('--line').trim() || '#2f6158';
    const colorText = rootStyle.getPropertyValue('--text').trim() || '#e6f1ef';

    const dataUrl = '/data/water-cld.json?v=2';
    let data;
    try {
      const res = await fetch(dataUrl, { cache: 'no-store' });
      if (!res.ok) throw new Error(res.status);
      data = await res.json();
    } catch (err) {
      console.error('CLD JSON load failed:', dataUrl, err);
      return;
    }
    const modelData = data;
    parseModel(modelData);
    markModelReady();
    if (__chartReady) initBaselineIfPossible();

    const elements = [];
    const groups = modelData.groups || [];
    const groupSelect = document.getElementById('f-group');
    if (groupSelect) {
      groups.forEach(g => {
        const opt = document.createElement('option');
        opt.value = g.id;
        opt.textContent = g.id;
        groupSelect.appendChild(opt);
      });
    }
    groups.forEach(g => elements.push({ data: { id: g.id, color: g.color, isGroup: true }, classes: 'compound group' }));
    (modelData.nodes || []).forEach(n => elements.push({ data: { id: n.id, label: n.label, parent: n.group, desc: n.desc, unit: n.unit } }));
    (modelData.edges || []).forEach((e, idx) => elements.push({
      data: {
        id: `e${idx}`,
        source: e.source,
        target: e.target,
        label: e.label || e.sign || '',
        sign: e.sign || '',
        weight: e.weight || 0,
        delayYears: e.delayYears || 0
      },
      classes: e.sign === '-' ? 'neg' : 'pos'
    }));

    cy = cytoscape({
      container,
      elements,
      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#f8faf9',
            'border-width': 2
          }
        },
        {
          selector: 'node[label][!isGroup]',
          style: {
            'label': 'data(label)',
            'font-family': 'Vazirmatn, sans-serif',
            'text-wrap': 'wrap',
            'text-max-width': 260,
            'font-size': 15,
            'font-weight': 500,
            'color': '#0a0f0e',
            'text-valign': 'center',
            'text-halign': 'center',
            'text-margin-y': 0,
            'text-outline-width': 0,
            'background-color': '#eaf3f1',
            'shape': 'round-rectangle',
            'padding': '12px 18px',
            'border-width': 3,
            'border-color': '#ffffff',
            'min-zoomed-font-size': 8
          }
        },
        {
          selector: 'node.compound',
          style: {
            'shape': 'round-rectangle',
            'background-color': '#ffffff',
            'background-opacity': 0.12,
            'border-color': '#2b3c39',
            'border-width': 1.5,
            'label': 'data(label)',
            'text-valign': 'top',
            'text-halign': 'center',
            'font-size': 12,
            'color': '#cfe7e2',
            'padding': 24,
            'font-family': 'Vazirmatn, sans-serif'
          }
        },
        {
          selector: 'edge',
          style: {
            'curve-style': 'bezier',
            'width': ele => 2 + (ele.data('weight') || 0),
            'line-style': ele => ele.data('delayYears') > 0 ? 'dashed' : 'solid',
            'line-dash-pattern': ele => ele.data('delayYears') > 0 ? [8,6] : [0],
            'target-arrow-shape': 'triangle',
            'arrow-scale': 1.2,
            'line-color': colorLine,
            'target-arrow-color': colorLine,
            'source-arrow-color': colorLine,
            'label': 'data(label)',
            'text-rotation': 'autorotate',
            'text-background-color': 'rgba(0,0,0,0.35)',
            'text-background-opacity': 1,
            'text-background-padding': 1,
            'text-wrap': 'wrap',
            'text-max-width': 100,
            'font-family': 'Vazirmatn, sans-serif',
            'font-size': 12,
            'color': colorText
          }
        },
        {
          selector: 'edge.pos',
          style: {
            'line-color': colorPos,
            'target-arrow-color': colorPos,
            'source-arrow-color': colorPos
          }
        },
        {
          selector: 'edge.neg',
          style: {
            'line-color': colorNeg,
            'target-arrow-color': colorNeg,
            'source-arrow-color': colorNeg
          }
        },
        { selector: '.hidden', style: { 'display': 'none' } },
        { selector: '.faded', style: { 'opacity': 0.1 } },
        { selector: '.highlighted', style: { 'border-color': '#facc15', 'border-width': 3 } },
        { selector: '.highlight', style: { 'border-color': colorAccent, 'border-width': 3 } },
        { selector: 'edge.highlight', style: { 'line-color': colorAccent, 'target-arrow-color': colorAccent, 'source-arrow-color': colorAccent, 'width': 4 } }
      ],
      layout: { name: 'grid' }
    });

    cy.on('ready', () => setTimeout(safeFit, 0));
    cy.on('layoutstop', safeFit);
    window.addEventListener('resize', () => requestAnimationFrame(safeFit));
    window.addEventListener('orientationchange', () => setTimeout(safeFit,150));
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => setTimeout(safeFit, 60));
    }

    runLayout('elk');

    if (window.tippy) {
      cy.nodes().forEach(n => {
        const desc = n.data('desc') != null ? String(n.data('desc')) : '';
        const unit = n.data('unit') != null ? String(n.data('unit')) : '';
        if (!desc && !unit) return;
        const tip = tippy(cy.container(), {
          content: `${desc}${unit ? '<br>' + unit : ''}`,
          allowHTML: true,
          theme: 'light-border',
          trigger: 'manual',
          placement: 'top',
          appendTo: document.body,
          getReferenceClientRect: () => {
            const bb = n.renderedBoundingBox({ includeLabels: false, includeOverlays: false });
            const rect = cy.container().getBoundingClientRect();
            return {
              width: bb.w,
              height: bb.h,
              top: bb.y1 + rect.top,
              bottom: bb.y2 + rect.top,
              left: bb.x1 + rect.left,
              right: bb.x2 + rect.left
            };
          }
        });
        n.on('mouseover', () => tip.show());
        n.on('mouseout', () => tip.hide());
        cy.on('pan zoom', () => tip.hide());
      });
    }

    if (cy) {
      cy.on('dbltap', 'node', n => {
        if (n.target.locked()) {
          n.target.unlock().removeClass('highlight');
        } else {
          n.target.lock().addClass('highlight');
        }
      });
    }

    const layoutSel = document.getElementById('layout');
    if (layoutSel) layoutSel.addEventListener('change', e => runLayout(e.target.value));

    const layoutPresetSel = document.getElementById('layout-preset');
    if (layoutPresetSel) layoutPresetSel.addEventListener('change', () => {
      const val = layoutPresetSel.value;
      if (!val) {
        if (layoutSel) runLayout(layoutSel.value);
        return;
      }
      if (window.getLayoutPreset) {
        const opt = window.getLayoutPreset(val);
        if (opt) {
          try { cy.layout(opt).run(); } catch(e) { console.error('layout preset', e); }
        }
      }
    });

    const fPos = document.getElementById('f-pos');
    const fNeg = document.getElementById('f-neg');
    const fGroup = document.getElementById('f-group');
    const fDelay = document.getElementById('f-delay');
    const qInput = document.getElementById('q');
    const loopsList = document.getElementById('loops-list');
    const loopsBtn = document.getElementById('btn-loops');
    const loopsPanel = document.getElementById('panel-loops');
    const wMin = document.getElementById('flt-weight-min');
    const dMax = document.getElementById('flt-delay-max');
    const wMinOut = document.getElementById('flt-weight-min-val');
    const dMaxOut = document.getElementById('flt-delay-max-val');

    function applyFilters() {
      cy.elements().removeClass('hidden');
      const showPos = !(fPos && fPos.classList.contains('off'));
      const showNeg = !(fNeg && fNeg.classList.contains('off'));
      const groupVal = fGroup ? fGroup.value : '';
      const delayOnly = fDelay ? fDelay.checked : false;

      cy.edges().forEach(e => {
        const signOk = e.data('sign') === '+' ? showPos : showNeg;
        const groupOk = !groupVal || (e.source().data('parent') === groupVal && e.target().data('parent') === groupVal);
        const delayOk = !delayOnly || e.data('delayYears') > 0;
        if (!(signOk && groupOk && delayOk)) e.addClass('hidden');
      });

      cy.nodes().forEach(n => {
        if (groupVal && n.data('parent') !== groupVal && n.id() !== groupVal) n.addClass('hidden');
      });

      safeFit();
    }

    function bindOut(inp, out){
      if (inp && out){
        out.textContent = String(inp.value);
        inp.addEventListener('input', () => { out.textContent = String(inp.value); });
      }
    }
    bindOut(wMin, wMinOut);
    bindOut(dMax, dMaxOut);
    function applyEdgeFilters(){
      cy.edges().removeClass('hidden');
      const w = wMin ? Number(wMin.value) : 0;
      const d = dMax ? Number(dMax.value) : 0;
      cy.edges().forEach(e => {
        if (e.data('weight') < w || e.data('delayYears') > d) {
          e.addClass('hidden');
        }
      });
      safeFit();
    }
    if (wMin) wMin.addEventListener('input', applyEdgeFilters, {passive:true});
    if (dMax) dMax.addEventListener('input', applyEdgeFilters, {passive:true});

    if (fPos) fPos.addEventListener('click', () => { fPos.classList.toggle('off'); applyFilters(); });
    if (fNeg) fNeg.addEventListener('click', () => { fNeg.classList.toggle('off'); applyFilters(); });
    if (fGroup) fGroup.addEventListener('change', applyFilters);
    if (fDelay) fDelay.addEventListener('change', applyFilters);
    applyFilters();
    applyEdgeFilters();

    if (qInput) {
      qInput.addEventListener('input', () => {
        cy.elements().removeClass('faded');
        cy.nodes().removeClass('highlighted');
        const val = qInput.value.trim();
        if (val) {
          let re;
          try {
            re = new RegExp(val, 'i');
          } catch (err) {
            return;
          }
          cy.nodes().addClass('faded');
          cy.edges().addClass('faded');
          const matches = cy.nodes().filter(n => re.test(n.data('label')));
          matches.removeClass('faded').addClass('highlighted');
          matches.connectedEdges().removeClass('faded');
        }
      });
    }

    if (loopsBtn) loopsBtn.addEventListener('click', () => { populateLoops(); if (loopsPanel) loopsPanel.open = true; });

    function populateLoops() {
      if (!loopsList || !window.cydetectLoops) return;
      loopsList.innerHTML = '';
      const cycles = window.cydetectLoops(cy) || [];
      cycles.forEach(cycle => {
        const li = document.createElement('li');
        const labels = (cycle.nodeIds || []).map(id => cy.getElementById(id).data('label') || id);
        const negCount = (cycle.edgeIds || []).filter(id => cy.getElementById(id).data('sign') === '-').length;
        const sign = negCount % 2 === 0 ? '+' : '-';
        li.textContent = `${sign}: ${labels.join(' \u2192 ')}`;
        li.style.cursor = 'pointer';
        li.addEventListener('click', () => {
          cy.elements().removeClass('highlight');
          const col = cy.collection();
          (cycle.nodeIds || []).forEach(id => { const n = cy.getElementById(id); n.addClass('highlight'); col.merge(n); });
          (cycle.edgeIds || []).forEach(id => { const e = cy.getElementById(id); e.addClass('highlight'); col.merge(e); });
          cy.fit(col, 50);
        });
        loopsList.appendChild(li);
      });
    }

    const importInput = document.getElementById('import-json');
    if (importInput) {
      importInput.addEventListener('change', e => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = ev => {
          try {
            const data = JSON.parse(ev.target.result);
            const groups = data.groups || [];
            if (groupSelect) {
              groupSelect.innerHTML = '<option value="">همه گروه‌ها</option>';
              groups.forEach(g => {
                const opt = document.createElement('option');
                opt.value = g.id;
                opt.textContent = g.id;
                groupSelect.appendChild(opt);
              });
            }
            const els = [];
            groups.forEach(g => els.push({ data: { id: g.id, color: g.color, isGroup: true }, classes: 'compound group' }));
            (data.nodes || []).forEach(n => els.push({ data: { id: n.id, label: n.label, parent: n.group, desc: n.desc, unit: n.unit } }));
            (data.edges || []).forEach((e, idx) => els.push({
              data: {
                id: `e${idx}`,
                source: e.source,
                target: e.target,
                label: e.label,
                sign: e.sign,
                weight: e.weight || 0,
                delayYears: e.delayYears || 0
              },
              classes: e.sign === '-' ? 'neg' : 'pos'
            }));
            cy.elements().remove();
            cy.add(els);
            runLayout('elk');
            updateSignFilter(); // اگر جایی تعریف نشده، می‌توانید بعداً حذف/جایگزین کنید
          } catch (err) {
            console.error('Import JSON failed', err);
          }
        };
        reader.readAsText(file);
      });
    }

    const legend = document.getElementById('legend');
    if (legend) {
      const items = [
        '<span class="badge pos"><i class="dot" style="background:var(--pos)"></i>مثبت</span>',
        '<span class="badge neg"><i class="dot" style="background:var(--neg)"></i>منفی</span>',
        '<span class="badge dashed"><i class="dot" style="border:2px dashed #cbd5e1"></i>تاخیردار/غیرمستقیم</span>'
      ];
      groups.forEach(g => items.push(`<span class="badge" style="border-color:${g.color}"><i class="dot" style="background:${g.color}"></i>${g.id}</span>`));
      legend.innerHTML = items.join('');
    }

    const effInput = document.getElementById('p-eff');
    const demInput = document.getElementById('p-dem');
    const delayInput = document.getElementById('p-delay');
    const runBtn = document.getElementById('btn-run');
    const resetBtn = document.getElementById('btn-reset');
    const exportBtn = document.getElementById('btn-export-csv');
    const scNew = document.getElementById('sc-new');
    const scSave = document.getElementById('sc-save');
    const scLoad = document.getElementById('sc-load');
    const scDelete = document.getElementById('sc-delete');
    const scTable = document.getElementById('sc-table');
    const sensParam = document.getElementById('sens-param');
    const sensMin = document.getElementById('sens-min');
    const sensMax = document.getElementById('sens-max');
    const sensStep = document.getElementById('sens-step');
    const sensRun = document.getElementById('sens-run');
    const sensProgress = document.getElementById('sens-progress');
    let selectedScenario = null;
    let lastSensitivity = null;
    const worker = new Worker('/assets/sim-worker.js');
    worker.postMessage({ cmd: 'init' });
    const effVal = document.getElementById('val-eff');
    const demVal = document.getElementById('val-dem');
    const delayVal = document.getElementById('val-delay');

    function bindSlider(input, output) {
      if (input && output) {
        output.textContent = input.value;
        input.addEventListener('input', () => {
          output.textContent = input.value;
        });
      }
    }
    bindSlider(effInput, effVal);
    bindSlider(demInput, demVal);
    bindSlider(delayInput, delayVal);

    const scTbody = scTable ? scTable.querySelector('tbody') : null;
    function refreshScenarioTable() {
      if (!scTbody) return;
      scTbody.innerHTML = '';
      const scs = getScenarios();
      Object.entries(scs).forEach(([name, p]) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${name}</td><td>${p.eff}</td><td>${p.dem}</td><td>${p.delay}</td>`;
        tr.addEventListener('click', () => {
          selectedScenario = name;
          Array.from(scTbody.children).forEach(r => r.classList.remove('selected'));
          tr.classList.add('selected');
        });
        scTbody.appendChild(tr);
      });
    }
    refreshScenarioTable();

    if (scNew) scNew.addEventListener('click', () => {
      selectedScenario = null;
      resetScenario();
      if (scTbody) Array.from(scTbody.children).forEach(r => r.classList.remove('selected'));
    });

    if (scSave) scSave.addEventListener('click', () => {
      const name = prompt('Scenario name', selectedScenario || '');
      if (!name) return;
      const scs = getScenarios();
      scs[name] = {
        eff: parseFloat(effInput.value),
        dem: parseFloat(demInput.value),
        delay: parseInt(delayInput.value)
      };
      setScenarios(scs);
      selectedScenario = name;
      refreshScenarioTable();
    });

    if (scLoad) scLoad.addEventListener('click', () => {
      const scs = getScenarios();
      if (!selectedScenario || !scs[selectedScenario]) return;
      const p = scs[selectedScenario];
      effInput.value = p.eff;
      demInput.value = p.dem;
      delayInput.value = p.delay;
      effInput.dispatchEvent(new Event('input'));
      demInput.dispatchEvent(new Event('input'));
      delayInput.dispatchEvent(new Event('input'));
      runBtn.click();
    });

    if (scDelete) scDelete.addEventListener('click', () => {
      const scs = getScenarios();
      if (selectedScenario && scs[selectedScenario]) {
        delete scs[selectedScenario];
        setScenarios(scs);
        selectedScenario = null;
        refreshScenarioTable();
      }
    });

    if (exportBtn) exportBtn.addEventListener('click', () => {
      if (!simChart) return;
      const years = simChart.data.labels || [];
      const ds = simChart.data.datasets || [];
      let csv = 'year,baseline,scenario\n';
      for (let i = 0; i < years.length; i++) {
        const row = [years[i]];
        row.push(ds[0] && ds[0].data ? ds[0].data[i] : '');
        row.push(ds[1] && ds[1].data ? ds[1].data[i] : '');
        csv += row.join(',') + '\n';
      }
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'results.csv';
      a.click();
      URL.revokeObjectURL(url);
    });

    worker.onmessage = e => {
      if (e.data.type === 'progress') {
        if (sensProgress) sensProgress.textContent = Math.round(e.data.value * 100) + '%';
      } else if (e.data.type === 'complete') {
        if (sensProgress) sensProgress.textContent = '';
        const { years, p10, p50, p90 } = e.data;
        while (simChart.data.datasets.length > 1) simChart.data.datasets.pop();
        simChart.data.labels = years;
        simChart.data.datasets.push({
          label: 'p90',
          data: p90,
          borderColor: 'rgba(0,0,0,0)',
          fill: false
        });
        simChart.data.datasets.push({
          label: 'p10',
          data: p10,
          borderColor: 'rgba(0,0,0,0)',
          backgroundColor: 'rgba(99,102,241,0.2)',
          fill: '-1'
        });
        simChart.data.datasets.push({
          label: 'p50',
          data: p50,
          borderColor: '#f97316',
          backgroundColor: 'rgba(249,115,22,0.1)',
          fill: false
        });
        simChart.update();
        lastSensitivity = { years, p10, p50, p90 };
      }
    };

    if (sensRun) sensRun.addEventListener('click', (e) => {
      e.preventDefault();
      const param = sensParam.value;
      const range = { min: parseFloat(sensMin.value), max: parseFloat(sensMax.value), step: parseFloat(sensStep.value) };
      const base = {
        eff: parseFloat(effInput.value),
        dem: parseFloat(demInput.value),
        delay: parseInt(delayInput.value)
      };
      if (sensProgress) sensProgress.textContent = '0%';
      worker.postMessage({ cmd: 'runBatch', param, range, base });
    });

    const tabParam = document.getElementById('tab-param');
    const tabFormula = document.getElementById('tab-formula');
    const panelParam = document.getElementById('panel-param');
    const panelFormula = document.getElementById('panel-formula');
    if (tabParam && tabFormula && panelParam && panelFormula) {
      tabParam.addEventListener('click', () => {
        tabParam.classList.add('active');
        tabFormula.classList.remove('active');
        panelParam.style.display = 'block';
        panelFormula.style.display = 'none';
      });
      tabFormula.addEventListener('click', () => {
        tabFormula.classList.add('active');
        tabParam.classList.remove('active');
        panelParam.style.display = 'none';
        panelFormula.style.display = 'block';
      });
    }

    const formulaNode = document.getElementById('formula-node');
    const formulaExpr = document.getElementById('formula-expr');
    const formulaMsg = document.getElementById('formula-msg');
    if (formulaNode && formulaExpr) {
      (modelData.nodes || []).forEach(n => {
        const opt = document.createElement('option');
        opt.value = n.id;
        opt.textContent = n.label || n.id;
        formulaNode.appendChild(opt);
      });
      formulaNode.addEventListener('change', () => {
        const n = modelData.nodes.find(nd => nd.id === formulaNode.value);
        formulaExpr.value = n && n.expr ? n.expr : '';
        if (formulaMsg) formulaMsg.textContent = '';
      });
      formulaNode.dispatchEvent(new Event('change'));
    }

    const validateBtn = document.getElementById('btn-validate');
    if (validateBtn) validateBtn.addEventListener('click', () => {
      try {
        new Parser().parse(formulaExpr.value);
        if (formulaMsg) formulaMsg.textContent = '✅';
      } catch (err) {
        if (formulaMsg) formulaMsg.textContent = err.message;
      }
    });

    const saveBtn = document.getElementById('btn-save');
    if (saveBtn) saveBtn.addEventListener('click', function(){
      try{
        new Parser().parse(formulaExpr.value);
        var n = modelData.nodes.find(function(nd){ return nd.id === formulaNode.value; });
        if (n) n.expr = formulaExpr.value;
        parseModel(modelData);
        markModelReady();
        if (__chartReady) initBaselineIfPossible();
        whenModelReady(function(){
          try{
            var baseRes = simulate({ eff:0, dem:0, delay:0, years:30 });
            baseSim = { years: baseRes.years, baseline: baseRes.series };
            updateChartFromSim(baseSim);
            if (formulaMsg) formulaMsg.textContent = 'Saved';
          }catch(e){ if (formulaMsg) formulaMsg.textContent = e.message; }
        });
      }catch(err){ if (formulaMsg) formulaMsg.textContent = err.message; }
    });

    if (runBtn) {
      runBtn.addEventListener('click', function(){
        whenModelReady(function(){
          try{
            var params = {
              eff: parseFloat(effInput.value),
              dem: parseFloat(demInput.value),
              delay: parseInt(delayInput.value,10),
              years: baseSim && baseSim.years ? baseSim.years.length - 1 : 30
            };
            var res = simulate(params);
            updateChartFromSim({ years: res.years, baseline: baseSim ? baseSim.baseline : [], scenario: res.series });
            if (window.__wesh_sim_chart) window.__wesh_sim_chart.update();
          }catch(e){ console.error('simulate failed', e); }
        });
      });
    }

    const resetBtnEl = resetBtn;
    if (resetBtnEl) {
      resetBtnEl.addEventListener('click', function(){
        whenModelReady(function(){
          try {
            resetScenario();
            if (window.__wesh_sim_chart) window.__wesh_sim_chart.update();
          } catch(e){ console.error(e); }
        });
      });
    }
  });

  window.CLDSim = { simulate, runLayout, resetScenario, parseModel, simulateStep };
})();
