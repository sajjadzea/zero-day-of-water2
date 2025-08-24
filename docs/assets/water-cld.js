window.__WATER_CLD_READY__ = new Promise(function(resolve){ window.__WATER_CLD_RESOLVE__ = resolve; });
// ===== CY READINESS (singleton) =====
window.__CLD_READY__ = window.__CLD_READY__ || false;
window.onCyReady = window.onCyReady || function (run) {
  // اگر cy آماده است همین الآن اجرا کن
  if (window.cy && typeof window.cy.on === 'function') { try { run(window.cy); } catch (e) {} return; }

  // فقط یک‌بار به رویدادها گوش بده
  if (!window.__CLD_READY__) {
    window.__CLD_READY__ = true;
    document.addEventListener('cy:ready', e => {
      const c = e.detail?.cy || window.cy;
      if (c && typeof run === 'function') try { run(c); } catch (e) {}
    }, { once: true });
    if (window.whenModelReady) {
      window.whenModelReady(() => {
        if (window.cy && typeof run === 'function') try { run(window.cy); } catch (e) {}
      });
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        if (window.cy && typeof run === 'function') try { run(window.cy); } catch (e) {}
      }, { once: true });
    }
  }
};

// Debounce عمومی سبک (برای رفرش‌ها)
window.__cldDebounce = window.__cldDebounce || function (fn, ms = 50) {
  let t = 0; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
};

// fit ایمن (صفر المنت → کاری نکن؛ اجرا فقط یک‌بار بعد از layoutstop)
window.__cldSafeFit = window.__cldSafeFit || function (cy) {
  if (!cy || cy.elements().length === 0) return;
  try { cy.fit(cy.elements(), 40); } catch (e) {}
};

// ---- Singleton Cytoscape + ready event ------------------------------------
(function(){
  if (!window.__cld_cy_init) {
    window.__cld_cy_init = true;

    function buildCy(){
      if (window.__cy && typeof window.__cy.startBatch === 'function') {
        return window.__cy; // keep existing instance
      }
      const el = document.getElementById('cy');
      if (!el) { console.warn('[CLD init] #cy missing'); return null; }
      if (!window.cytoscape) { console.warn('[CLD init] cytoscape not loaded'); return null; }

      const cy = cytoscape({ container: el, elements: [] });
      window.cy = window.__cy = window.lastCy = cy;
      document.dispatchEvent(new CustomEvent('cy:ready', { detail:{ cy } }));
      console.log('[CLD init] cy built', true);
      return cy;
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', buildCy, { once:true });
    } else {
      buildCy();
    }
  }
})();

// ---- Safe accessors --------------------------------------------------------
function cldGetStoreGraph(){
  const g = window.graphStore && window.graphStore.graph;
  if (!g || !Array.isArray(g.nodes) || !Array.isArray(g.edges)) return null;
  return g;
}
function cldGetCy(){
  const C = window.__cy || window.lastCy || window.cy || null;
  return (C && typeof C.startBatch === 'function') ? C : null;
}

function findSynonyms(id){
  const graph = (typeof window !== 'undefined' && window.cy && window.cy.graph) ? window.cy.graph : {};
  const meta = graph.meta || {};
  // اگر هنوز آماده نیست، آرایهٔ خالی برگردان
  if (!meta || !meta.synonymToId) return [];

  const node = (meta.nodes instanceof Map) ? meta.nodes.get(id) : undefined;
  const synonymsOfN = Array.isArray(node?.synonyms) ? node.synonyms : [];
  if (!synonymsOfN.length) return [];

  const synonymIds = synonymsOfN
    .map((s) => meta.synonymToId.get(s))
    .filter(Boolean);
  return synonymIds;
}

function findSynonymNodes(id){
  const meta = (window?.cy?.graph?.meta) ?? { synonymToId: new Map(), nodes: new Map(), edges: new Map() };
  const syn = meta.synonymToId instanceof Map ? meta.synonymToId : new Map();
  return (syn.get(id) || []).map(function(x){ return meta.nodes?.get?.(x); }).filter(Boolean);
}
window.findSynonyms = findSynonyms;
window.findSynonymNodes = findSynonymNodes;

// ---- Normalize elements for Cytoscape -------------------------------------
function cldToCyElements(model){
  const nodesSrc = Array.isArray(model?.nodes) ? model.nodes : [];
  const edgesSrc = Array.isArray(model?.edges) ? model.edges : [];

  const seen = new Set();
  const nodes = nodesSrc.map((n,i)=>{
    const d = n?.data ? { ...n.data } : { ...(n||{}) };
    d.id = d.id != null ? String(d.id) : `n_${i}`;
    if (seen.has(d.id)) { console.warn('[CLD] dup node id', d.id); d.id = `${d.id}_${i}`; }
    seen.add(d.id);
    return { data: d };
  });

  let dropped = 0;
  const edges = edgesSrc.reduce((acc,e,i)=>{
    const d = e?.data ? { ...e.data } : { ...(e||{}) };
    d.id = d.id != null ? String(d.id) : `e_${i}`;
    d.source = String(d.source ?? e?.source ?? '');
    d.target = String(d.target ?? e?.target ?? '');
    if (!d.source || !d.target) { dropped++; return acc; }
    acc.push({ data: d }); return acc;
  },[]);
  if (dropped) console.warn('[CLD] edges dropped (no source/target):', dropped);

  return { nodes, edges };
}

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
  window.whenModelReady = whenModelReady;

  function setVhVar(){
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  setVhVar();
  window.addEventListener('resize', setVhVar);
  window.addEventListener('orientationchange', () => { setTimeout(setVhVar, 100); });

  let model;
  let modelData;
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
    const maxTextWidth = opts.maxWidth || opts.maxTextWidth || 260;
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

  window.measureAndResizeNodes = measureAndResizeNodes;

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


  // ---------- helper: seed positions by group (grid) ----------
  function seedByGroup(cy){
    var groups = {};
    cy.nodes().forEach(function(n){
      var g = n.data('group') || '_';
      (groups[g] = groups[g] || []).push(n);
    });

    var gNames = Object.keys(groups);
    var cols = Math.ceil(Math.sqrt(gNames.length));
    var gx = 0, gy = 0, gi = 0;

    gNames.forEach(function(g){
      var baseX = (gi % cols) * 800 + 200;
      var baseY = Math.floor(gi / cols) * 600 + 200;
      var arr = groups[g];

      arr.forEach(function(n, j){
        var col = j % 3, row = Math.floor(j / 3);
        var nx = baseX + col * 260 + (Math.random()*20 - 10);
        var ny = baseY + row * 220 + (Math.random()*20 - 10);
        n.position({x: nx, y: ny});
      });

      gi++;
    });
  }

  // --- load model from URL and rebuild graph (non-module) ---
  function normalizeModel(m){
    const nodes = (m.nodes || []).map(function(n, i){
      const id = n.id || (n.data && n.data.id) || ('n_' + i);
      return { data: { id: id, label: n.label, group: n.group, unit: n.unit, desc: n.desc } };
    });
    const edges = (m.edges || []).map(function(e, i){
      const id = e.id || (e.data && e.data.id) || (e.source + '__' + e.target + '__' + (e.sign || '') || ('e_' + i));
      return { data: { id: id, source: e.source, target: e.target, sign: e.sign, label: e.label || (e.sign === '-' ? '−' : '+'), weight: (typeof e.weight === 'number') ? e.weight : undefined, delayYears: (typeof e.delayYears === 'number') ? e.delayYears : 0 } };
    });
    return { nodes: nodes, edges: edges };
  }

  async function loadModelFromUrl(url){
    // fetch + parse
    const res = await fetch(url, { cache:'no-store' }).catch(e => { console.error('[CLD] fetch failed', e); });
    if (!res || !res.ok) { console.error('[CLD] fetch bad status', res && res.status); return; }
    let model;
    try { model = await res.json(); } catch (e) { console.error('[CLD] invalid model JSON', e); return; }

    // sync store + kernel (raw graph)
    const graph = {
      nodes: Array.isArray(model?.nodes) ? model.nodes : [],
      edges: Array.isArray(model?.edges) ? model.edges : []
    };
    if (window.graphStore?.setGraph) window.graphStore.setGraph(graph);
    else { window.graphStore = window.graphStore || {}; window.graphStore.graph = graph; }
    window.kernel = window.kernel || {}; window.kernel.graph = graph;

    // keep for other modules
    modelData = model;
    if (typeof parseModel === 'function') { try { parseModel(model); } catch(e){ console.error('[CLD] parse model', e); } }
    if (typeof markModelReady === 'function') markModelReady();
    if (__chartReady && typeof initBaselineIfPossible === 'function') initBaselineIfPossible();

    // normalize for Cytoscape, keep for debug
    const els = cldToCyElements(graph);
    window.__lastElementsForCy = els;

    // inject when cy is ready
    const inject = () => {
      const C = cldGetCy();
      if (!C) { console.warn('[CLD] cy missing/invalid for inject'); return; }

      console.debug('[CLD] to-cy arrays', { nNodes: els.nodes.length, nEdges: els.edges.length, sampleNode: els.nodes[0] });

      let viaJson = true;
      try {
        C.startBatch();
        C.json({ elements: { nodes: els.nodes, edges: els.edges } });
        C.endBatch();
      } catch (err) {
        viaJson = false;
        console.error('[CLD] cy.json failed; fallback to add()', err);
        try {
          C.startBatch();
          C.elements().remove();
          C.add( els.nodes.concat(els.edges) );
          C.endBatch();
        } catch (err2) {
          console.error('[CLD] add() also failed', err2);
          return;
        }
      }

      const nn = C.nodes().length, ne = C.edges().length;
      console.log('[CLD] added to cy', { cyNodes: nn, cyEdges: ne, viaJson });

      if (nn !== els.nodes.length) {
        console.warn('[CLD] node mismatch, delaying GRAPH_READY', els.nodes.length, nn);
        console.debug('[CLD] first cy node?', C.nodes()[0]?.data());
        C.off('remove.__cld');
        C.on('remove.__cld', ()=>console.warn('[CLD] element removed after add; now:', C.nodes().length, C.edges().length));
        return;
      }

      window.waterKernel?.emit?.('MODEL_LOADED', graph);
      window.waterKernel?.emit?.('GRAPH_READY', graph);
      window.__WATER_CLD_RESOLVE__?.();
    };

    const C0 = cldGetCy();
    if (C0) inject();
    else document.addEventListener('cy:ready', function once(){ document.removeEventListener('cy:ready', once); inject(); }, { once:true });
  }
  window.loadModelFromUrl = loadModelFromUrl;

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

    const cy = cldGetCy();
    if (!cy) { console.warn('[CLD init] cy missing'); return; }

    if (window.tippy) {
      tippy('.hint', { allowHTML:true, theme:'light', delay:[80,0], placement:'bottom', maxWidth: 320, interactive: true });
    }

    const rootStyle = getComputedStyle(document.documentElement);
    const colorPos = rootStyle.getPropertyValue('--pos').trim() || '#16a34a';
    const colorNeg = rootStyle.getPropertyValue('--neg').trim() || '#dc2626';
    const colorAccent = rootStyle.getPropertyValue('--accent').trim() || '#58a79a';
    const colorLine = rootStyle.getPropertyValue('--line').trim() || '#2f6158';
    const colorText = rootStyle.getPropertyValue('--text').trim() || '#e6f1ef';

    const baseStyle = [
      { selector: 'node', style: { 'background-color': '#f8faf9', 'border-width': 2 } },
      { selector: 'node[label][!isGroup]', style: { 'label': 'data(label)', 'font-family': 'Vazirmatn, sans-serif', 'text-wrap': 'wrap', 'text-max-width': 260, 'font-size': 15, 'font-weight': 500, 'color': '#0a0f0e', 'text-valign': 'center', 'text-halign': 'center', 'text-margin-y': 0, 'text-outline-width': 0, 'background-color': '#eaf3f1', 'shape': 'round-rectangle', 'padding': '12px 18px', 'border-width': 3, 'border-color': '#ffffff', 'min-zoomed-font-size': 8 } },
      { selector: 'node.compound', style: { 'shape': 'round-rectangle', 'background-color': '#ffffff', 'background-opacity': 0.12, 'border-color': '#2b3c39', 'border-width': 1.5, 'label': 'data(label)', 'text-valign': 'top', 'text-halign': 'center', 'font-size': 12, 'color': '#cfe7e2', 'padding': 24, 'font-family': 'Vazirmatn, sans-serif' } },
      { selector: 'edge', style: { 'curve-style': 'bezier', 'width': ele => 2 + (ele.data('weight') || 0), 'line-style': ele => ele.data('delayYears') > 0 ? 'dashed' : 'solid', 'line-dash-pattern': ele => ele.data('delayYears') > 0 ? [8,6] : [0], 'target-arrow-shape': 'triangle', 'arrow-scale': 1.2, 'line-color': colorLine, 'target-arrow-color': colorLine, 'source-arrow-color': colorLine, 'label': 'data(label)', 'text-rotation': 'autorotate', 'text-background-color': 'rgba(0,0,0,0.35)', 'text-background-opacity': 1, 'text-background-padding': 1, 'text-wrap': 'wrap', 'text-max-width': 100, 'font-family': 'Vazirmatn, sans-serif', 'font-size': 12, 'color': colorText } },
      { selector: 'edge.pos', style: { 'line-color': colorPos, 'target-arrow-color': colorPos, 'source-arrow-color': colorPos } },
      { selector: 'edge.neg', style: { 'line-color': colorNeg, 'target-arrow-color': colorNeg, 'source-arrow-color': colorNeg } },
      { selector: '.hidden', style: { 'display': 'none' } },
      { selector: '.faded', style: { 'opacity': 0.1 } },
      { selector: '.highlighted', style: { 'border-color': '#facc15', 'border-width': 3 } },
      { selector: '.highlight', style: { 'border-color': colorAccent, 'border-width': 3 } },
      { selector: 'edge.highlight', style: { 'line-color': colorAccent, 'target-arrow-color': colorAccent, 'source-arrow-color': colorAccent, 'width': 4 } }
    ];
    cy.style().fromJson(baseStyle).update();
    cy.layout({ name: 'grid' }).run();

    // === Edge labels only at higher zoom levels ===
    (function(){
      var showAt = 1.0; // آستانه زوم (zoom threshold)
      function syncEdgeLabels(){
        var z = cy.zoom();
        cy.batch(function(){
          cy.edges().forEach(function(e){
            e.style('label', z >= showAt ? e.data('label') : '');
          });
        });
      }
      window.__WATER_CLD_READY__.then(function(){
        cy.on('zoom', syncEdgeLabels);
        syncEdgeLabels();
      });
    })();

    // === Neighbor highlight with fade on hover ===
    (function(){
      var dim = 0.15; // شدت کم‌رنگ شدن
      window.__WATER_CLD_READY__.then(function(){
        cy.on('mouseover', 'node', function(evt){
          var n = evt.target;
          var hood = n.closedNeighborhood();
          cy.batch(function(){
            const others = cy.elements().difference(hood);
              if (CLD_SAFE?.safeAddClass) {
                CLD_SAFE.safeAddClass(others, 'faded');
              } else {
                console.warn('CLD_SAFE.safeAddClass missing');
                if (others?.forEach) {
                  others.forEach(el => el.classList?.add('faded'));
                } else {
                  others?.classList?.add('faded');
                }
              }
            hood.removeClass('faded');
          });
        });
        cy.on('mouseout', 'node', function(){
          cy.elements().removeClass('faded');
        });

        // تعریف استایل کلاس faded
        cy.style()
          .selector('.faded')
          .style({ 'opacity': dim })
          .update();
      });
    })();

    // ---- Modern Cytoscape styling: card-like nodes & readable edge labels ----
    window.__WATER_CLD_READY__.then(function(){
      cy.style()
        // Nodes: card-like
        .selector('node')
        .style({
          'width': 'label',
          'height': 'label',
          'text-wrap': 'wrap',
          'text-max-width': 240,
          'padding': '16px',
          'font-size': 15,
          'font-weight': 600,
          'color': '#0a0f0e',
          'background-color': '#f8fafc',   // NOTE: Cytoscape از CSS var پشتیبانی مستقیم ندارد
          'border-color': '#94a3b8',
          'border-width': 1,
          'shape': 'round-rectangle'
        })
        .selector('node.compound')
        .style({ 'width': 'auto', 'height': 'auto' })

        // Edges: base
        .selector('edge')
        .style({
          'curve-style': 'bezier',
          'width': 'mapData(weight, 0, 1.2, 2, 6)',
          'target-arrow-shape': 'triangle',
          'line-cap': 'round',
          'label': 'data(label)',
          'text-rotation': 'autorotate',
          'font-size': 11,
          'text-background-color': 'rgba(11,18,32,.65)',
          'text-background-opacity': 1,
          'text-background-shape': 'roundrectangle',
          'text-background-padding': 3,
          'color': '#e6f1ff'
        })

        // Edge color by sign (categorical)
        .selector('edge[sign = "+"]')
        .style({ 'line-color': '#16a34a', 'target-arrow-color': '#16a34a' })
        .selector('edge[sign = "-"]')
        .style({ 'line-color': '#dc2626', 'target-arrow-color': '#dc2626' })

        // Dashed if delayed
        .selector('edge[delayYears > 0]')
        .style({ 'line-style': 'dashed', 'line-dash-pattern': [8,6] })

        .update();

      // Re-measure after layout & fonts load so labels never clip
      cy.on('layoutstop', function(){
        if (window.measureAndResizeNodes) window.measureAndResizeNodes(cy, {maxWidth:240, padding:16});
      });
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(function(){
          if (window.measureAndResizeNodes) window.measureAndResizeNodes(cy, {maxWidth:240, padding:16});
        });
      }

      cy.on('ready', () => setTimeout(() => window.__cldSafeFit(cy), 0));
      window.addEventListener('resize', () => requestAnimationFrame(() => window.__cldSafeFit(cy)));
      window.addEventListener('orientationchange', () => setTimeout(() => window.__cldSafeFit(cy),150));
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => setTimeout(() => window.__cldSafeFit(cy), 60));
      }
    });

    // --- [Tooltips for Cytoscape elements using Tippy] ---------------------------
    (function () {
      if (!window.tippy) return;

      function esc(s) {
        return (s == null) ? '' : String(s).replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
      }

      function makeClientRectFn(ele, cy) {
        return function getClientRect() {
          const bb = ele.renderedBoundingBox({ includeLabels: true });
          const rect = cy.container().getBoundingClientRect();
          const w = Math.max(10, bb.w || (bb.x2 - bb.x1));
          const h = Math.max(10, bb.h || (bb.y2 - bb.y1));
          const left = rect.left + (bb.x1 || 0);
          const top  = rect.top  + (bb.y1 || 0);
          return {
            width:  w,
            height: h,
            top:    top,
            left:   left,
            right:  left + w,
            bottom: top  + h
          };
        };
      }

      function buildContent(ele) {
        const d = ele.data() || {};
        const box = document.createElement('div');
        box.dir = 'rtl';
        box.style.whiteSpace = 'normal';
        box.style.maxWidth = '260px';

        const parts = [];
        if (ele.isNode && ele.isNode()) {
          parts.push(`<div style="font-weight:600;margin-bottom:4px">${esc(d.label || d.id || '')}</div>`);
          if (d.desc) parts.push(`<div>${esc(d.desc)}</div>`);
          const meta = [];
          if (d.unit)  meta.push(`واحد: ${esc(d.unit)}`);
          if (d.group) meta.push(`گروه: ${esc(d.group)}`);
          if (meta.length) parts.push(`<div style="opacity:.8;margin-top:4px">${meta.join(' • ')}</div>`);
        } else {
          parts.push(`<div style="font-weight:600;margin-bottom:4px">${esc(d.label || '')}</div>`);
          const meta = [];
          if (d.sign) meta.push(`قطبیت: ${d.sign === '+' ? 'مثبت (+)' : 'منفی (−)'}`);
          if (typeof d.weight === 'number') meta.push(`وزن: ${d.weight}`);
          if (typeof d.delayYears === 'number') meta.push(`تأخیر: ${d.delayYears} سال`);
          if (meta.length) parts.push(`<div>${meta.join(' • ')}</div>`);
        }
        box.innerHTML = parts.join('');
        return box;
      }

      function createTip(ele, cy) {
        const tip = tippy(document.body, {
          trigger: 'manual',
          appendTo: () => cy.container(),
          allowHTML: true,
          interactive: false,
          arrow: true,
          placement: 'top',
          getReferenceClientRect: makeClientRectFn(ele, cy),
          content: buildContent(ele),
          theme: 'light',
          hideOnClick: false
        });
        return tip;
      }

      function bindCyTooltips(cy) {
        cy.on('mouseover', 'node, edge', function (evt) {
          const ele = evt.target;
          if (ele.scratch('_tippy')) return;
          const tip = createTip(ele, cy);
          ele.scratch('_tippy', tip);
          tip.show();
        });

        cy.on('mouseout tap', 'node, edge', function (evt) {
          const tip = evt.target.scratch('_tippy');
          if (tip) {
            tip.destroy();
            evt.target.scratch('_tippy', null);
          }
        });

        const refreshVisible = () => {
          cy.$('node, edge').forEach(ele => {
            const tip = ele.scratch('_tippy');
            if (tip) {
              tip.setProps({ getReferenceClientRect: makeClientRectFn(ele, cy) });
              if (tip.popperInstance && tip.popperInstance.update) tip.popperInstance.update();
            }
          });
        };
        cy.on('pan zoom drag position', refreshVisible);
        cy.on('layoutstop', refreshVisible);
        cy.on('remove', 'node, edge', function (evt) {
          const tip = evt.target.scratch('_tippy');
          if (tip) tip.destroy();
        });
      }

      window.__WATER_CLD_READY__.then(function(){ bindCyTooltips(cy); });
    })();

    window.__WATER_CLD_READY__.then(function(){
      cy.on('dbltap', 'node', n => {
        if (n.target.locked()) {
          n.target.unlock().removeClass('highlight');
        } else {
            const t = n.target.lock();
            if (CLD_SAFE?.safeAddClass) {
              CLD_SAFE.safeAddClass(t, 'highlight');
            } else {
              console.warn('CLD_SAFE.safeAddClass missing');
              t?.classList?.add('highlight');
            }
        }
      });
    });

    const layoutSel = document.getElementById('layout');

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
        if (!(signOk && groupOk && delayOk)) {
            if (CLD_SAFE?.safeAddClass) {
              CLD_SAFE.safeAddClass(e, 'hidden');
            } else {
              console.warn('CLD_SAFE.safeAddClass missing');
              e?.classList?.add('hidden');
            }
        }
      });

      cy.nodes().forEach(n => {
        if (groupVal && n.data('parent') !== groupVal && n.id() !== groupVal) {
            if (CLD_SAFE?.safeAddClass) {
              CLD_SAFE.safeAddClass(n, 'hidden');
            } else {
              console.warn('CLD_SAFE.safeAddClass missing');
              n?.classList?.add('hidden');
            }
        }
      });

      window.__cldSafeFit(cy);
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
            if (CLD_SAFE?.safeAddClass) {
              CLD_SAFE.safeAddClass(e, 'hidden');
            } else {
              console.warn('CLD_SAFE.safeAddClass missing');
              e?.classList?.add('hidden');
            }
        }
      });
      window.__cldSafeFit(cy);
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
          const nodesAll = cy.nodes();
            if (CLD_SAFE?.safeAddClass) {
              CLD_SAFE.safeAddClass(nodesAll, 'faded');
            } else {
              console.warn('CLD_SAFE.safeAddClass missing');
              if (nodesAll?.forEach) {
                nodesAll.forEach(el => el.classList?.add('faded'));
              } else {
                nodesAll?.classList?.add('faded');
              }
            }
          const edgesAll = cy.edges();
            if (CLD_SAFE?.safeAddClass) {
              CLD_SAFE.safeAddClass(edgesAll, 'faded');
            } else {
              console.warn('CLD_SAFE.safeAddClass missing');
              if (edgesAll?.forEach) {
                edgesAll.forEach(el => el.classList?.add('faded'));
              } else {
                edgesAll?.classList?.add('faded');
              }
            }
          const matches = cy.nodes().filter(n => re.test(n.data('label')));
          matches.removeClass('faded');
            if (CLD_SAFE?.safeAddClass) {
              CLD_SAFE.safeAddClass(matches, 'highlighted');
            } else {
              console.warn('CLD_SAFE.safeAddClass missing');
              if (matches?.forEach) {
                matches.forEach(el => el.classList?.add('highlighted'));
              } else {
                matches?.classList?.add('highlighted');
              }
            }
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
            (cycle.nodeIds || []).forEach(id => {
              const n = cy.getElementById(id);
                if (CLD_SAFE?.safeAddClass) {
                  CLD_SAFE.safeAddClass(n, 'highlight');
                } else {
                  console.warn('CLD_SAFE.safeAddClass missing');
                  n?.classList?.add('highlight');
                }
              col.merge(n);
            });
            (cycle.edgeIds || []).forEach(id => {
              const e = cy.getElementById(id);
                if (CLD_SAFE?.safeAddClass) {
                  CLD_SAFE.safeAddClass(e, 'highlight');
                } else {
                  console.warn('CLD_SAFE.safeAddClass missing');
                  e?.classList?.add('highlight');
                }
              col.merge(e);
            });
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
          CLD_SAFE?.safeAddClass(tr, 'selected');
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
        CLD_SAFE?.safeAddClass(tabParam, 'active');
        tabFormula.classList.remove('active');
        panelParam.style.display = 'block';
        panelFormula.style.display = 'none';
      });
      tabFormula.addEventListener('click', () => {
        CLD_SAFE?.safeAddClass(tabFormula, 'active');
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

    // ===== Layout Direction Control + UI State (non-module, CSP-safe) =====
    (function () {
      var LS_KEY = 'waterCLD.ui.v1';

      // ---------- helpers: LocalStorage
      function loadState() {
        try { return JSON.parse(localStorage.getItem(LS_KEY) || '{}'); }
        catch(e){ return {}; }
      }
      function saveState(patch) {
        var s = loadState();
        for (var k in patch) s[k] = patch[k];
        localStorage.setItem(LS_KEY, JSON.stringify(s));
      }

      // ---------- inject layout-dir control next to #layout
      function ensureLayoutDirControl() {
        var layoutSel = document.getElementById('layout');
        if (!layoutSel) return null;
        var exists = document.getElementById('layout-dir');
        if (exists) return exists;

        var dirSel = document.createElement('select');
        dirSel.id = 'layout-dir';
        dirSel.setAttribute('aria-label','جهت چیدمان');

        var optLR = document.createElement('option');
        optLR.value = 'LR'; optLR.textContent = 'چپ→راست';
        var optTB = document.createElement('option');
        optTB.value = 'TB'; optTB.textContent = 'بالا→پایین';
        dirSel.appendChild(optLR); dirSel.appendChild(optTB);

        // قرار دادن بلافاصله بعد از #layout
        layoutSel.insertAdjacentElement('afterend', dirSel);

        // رویداد تغییر جهت
        dirSel.addEventListener('change', function () {
          var algo = (document.getElementById('layout')||{}).value || 'elk';
          saveState({ dir: dirSel.value, layout: algo });
          if (window.runLayout) window.runLayout(algo, dirSel.value);
        });

        // تغییر الگوریتم نیز جهت را حفظ کند
        layoutSel.addEventListener('change', function () {
          var algo = layoutSel.value;
          var dir  = (document.getElementById('layout-dir')||{}).value || 'LR';
          saveState({ dir: dir, layout: algo });
          if (window.runLayout) window.runLayout(algo, dir);
        });

        return dirSel;
      }

      // ---------- runLayout with generous spacing (ELK/Dagre) ----------
      (function(){
        var runLayoutOrig = window.runLayout;

        window.runLayout = function(name, dir){
          var cy = window.cy; if(!cy) return;
          name = (name||'elk').toLowerCase();
          dir  = dir || (document.getElementById('layout-dir') ? document.getElementById('layout-dir').value : 'LR');

          var opts;
          if (name === 'elk') {
            // map LR->RIGHT, TB->DOWN
            var elkDir = (dir === 'TB' ? 'DOWN' : 'RIGHT');
            opts = {
              name: 'elk',
              nodeDimensionsIncludeLabels: true,
              fit: false,
              animate: 'end',
              animationDuration: 300,
              elk: {
                algorithm: 'layered',
                'elk.direction': elkDir,
                'elk.layered.spacing.nodeNodeBetweenLayers': 140,
                'elk.spacing.nodeNode': 100,
                'elk.layered.considerModelOrder.strategy': 'NODES_AND_EDGES',
                'elk.edgeRouting': 'POLYLINE'
              }
            };
          } else {
            var rankDir = (dir === 'TB' ? 'TB' : 'LR');
            opts = {
              name: 'dagre',
              rankDir: rankDir,
              nodeSep: 120,
              rankSep: 140,
              fit: false,
              animate: 'end',
              animationDuration: 300
            };
          }

          cy.layout(opts).run();

          cy.once('layoutstop', function(){
            if (window.measureAndResizeNodes) window.measureAndResizeNodes(cy, {maxWidth: 240, padding: 16});
            requestAnimationFrame(() => window.__cldSafeFit(cy));
          });
        };
      })();

      // ---------- persist & restore UI controls + cy view
      function bindPersistence() {
        var st = loadState();

        // controls
        var layoutSel = document.getElementById('layout');
        var dirSel    = document.getElementById('layout-dir') || ensureLayoutDirControl();
        var wMin      = document.getElementById('flt-weight-min');
        var dMax      = document.getElementById('flt-delay-max');
        var q         = document.getElementById('q');
        var fGroup    = document.getElementById('f-group');
        var posCbs    = document.querySelectorAll('input[type=checkbox].pos');
        var negCbs    = document.querySelectorAll('input[type=checkbox].neg');
        var posBtn    = document.getElementById('f-pos');
        var negBtn    = document.getElementById('f-neg');

        // --- restore
        if (st.layout && layoutSel) layoutSel.value = st.layout;
        if (st.dir    && dirSel)    dirSel.value    = st.dir;

        if (st.flt) {
          if (wMin && typeof st.flt.weightMin !== 'undefined') wMin.value = st.flt.weightMin;
          if (dMax && typeof st.flt.delayMax  !== 'undefined') dMax.value = st.flt.delayMax;
          if (typeof st.flt.pos === 'boolean') {
            if (posCbs.length) posCbs.forEach(function(cb){ cb.checked = st.flt.pos; });
            if (posBtn) posBtn.classList.toggle('off', !st.flt.pos);
          }
          if (typeof st.flt.neg === 'boolean') {
            if (negCbs.length) negCbs.forEach(function(cb){ cb.checked = st.flt.neg; });
            if (negBtn) negBtn.classList.toggle('off', !st.flt.neg);
          }
          if (fGroup && typeof st.flt.group !== 'undefined') fGroup.value = st.flt.group;
          if (posBtn || negBtn) applyFilters();
        }
        if (q && typeof st.q === 'string') q.value = st.q;

        // trigger existing handlers (اگر در کد اصلی listen شده)
        ['change','input'].forEach(function(ev){
          if (wMin)  wMin.dispatchEvent(new Event(ev));
          if (dMax)  dMax.dispatchEvent(new Event(ev));
          if (q)     q.dispatchEvent(new Event(ev));
          if (fGroup)fGroup.dispatchEvent(new Event(ev));
          if (layoutSel) layoutSel.dispatchEvent(new Event('change'));
          if (dirSel)    dirSel.dispatchEvent(new Event('change'));
          posCbs.forEach(function(cb){ cb.dispatchEvent(new Event('change')); });
          negCbs.forEach(function(cb){ cb.dispatchEvent(new Event('change')); });
        });

        // --- save on changes
        function syncFilters() {
          saveState({
            flt: {
              weightMin: wMin ? Number(wMin.value) : undefined,
              delayMax:  dMax ? Number(dMax.value)  : undefined,
              pos:  posCbs.length ? posCbs[0].checked : !(posBtn && posBtn.classList.contains('off')),
              neg:  negCbs.length ? negCbs[0].checked : !(negBtn && negBtn.classList.contains('off')),
              group: fGroup ? fGroup.value : ''
            }
          });
        }
        if (wMin)  wMin.addEventListener('input', syncFilters);
        if (dMax)  dMax.addEventListener('input', syncFilters);
        posCbs.forEach(function(cb){ cb.addEventListener('change', syncFilters); });
        negCbs.forEach(function(cb){ cb.addEventListener('change', syncFilters); });
        if (posBtn) posBtn.addEventListener('click', syncFilters);
        if (negBtn) negBtn.addEventListener('click', syncFilters);
        if (fGroup) fGroup.addEventListener('change', syncFilters);
        if (q) q.addEventListener('input', function(){ saveState({ q: q.value }); });

        // persist layout/dir (در صورت تغییر از بیرون)
        if (layoutSel) layoutSel.addEventListener('change', function(){
          saveState({ layout: layoutSel.value });
        });
        if (dirSel) dirSel.addEventListener('change', function(){
          saveState({ dir: dirSel.value });
        });

          // --- persist cy view (zoom/pan)
          window.__WATER_CLD_READY__.then(function(){
            var saveViewThrottled;
            function commitView() {
              var z = cy.zoom();
              var p = cy.pan();
              saveState({ zoom: z, pan: {x:p.x, y:p.y} });
              saveViewThrottled = null;
            }
            function scheduleSave() {
              if (saveViewThrottled) return;
              saveViewThrottled = setTimeout(commitView, 200);
            }
            cy.on('zoom pan', scheduleSave);
          });
      }

      // init after DOM & cy
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function(){
          ensureLayoutDirControl();
          bindPersistence();
        });
      } else {
        ensureLayoutDirControl();
        bindPersistence();
      }
    })();

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

  (function(){
    function initSwitcher(){
      var sw = document.getElementById('model-switch');
      if (!sw) return;
      try {
        var last = localStorage.getItem('waterCLD.activeModel');
        if (last) sw.value = last;
      } catch(e){}
      sw.addEventListener('change', function(){
        window.loadModelFromUrl(sw.value);
      });
      if (sw.value) window.loadModelFromUrl(sw.value);
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initSwitcher);
    } else {
      initSwitcher();
    }
  })();

  window.CLDSim = { simulate, runLayout: function(name, dir){ return window.runLayout(name, dir); }, resetScenario, parseModel, simulateStep };
})();
