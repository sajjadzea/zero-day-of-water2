(function () {
  const Parser = window.exprEval.Parser;

  let model;
  let simParams = {};

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
          delay: (name, d = 1) => {
            const tt = t - d;
            if (tt < 0) return model.initials[name] || 0;
            const st = state[tt];
            return st && st[name] != null ? st[name] : model.initials[name] || 0;
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
    simParams = params;
    const years = params.years || 30;
    const state = [Object.assign({}, model.initials)];
    for (let t = 1; t <= years; t++) {
      state[t] = simulateStep(state, t);
    }
    return { years: Array.from({ length: years + 1 }, (_, i) => i), series: state.map(s => s.gw_stock) };
  }

  let cy;
  let simChart;
  let baseline = { eff: 0, dem: 0, delay: 0 };

  function safeFit() {
    try {
      cy.resize();
      cy.fit(undefined, 20);
    } catch (e) {}
  }

  function runLayout(name) {
    if (!cy) return;
    if (name === 'elk') {
      try {
        cy.layout({
          name: 'elk',
          elk: { algorithm: 'layered' },
          nodeDimensionsIncludeLabels: true,
          fit: true
        }).run();
        safeFit();
        return;
      } catch (e) {
        console.warn('elk layout failed, falling back to dagre', e);
      }
    }
    try {
      cy.layout({ name: 'dagre', rankDir: 'LR', nodeDimensionsIncludeLabels: true, fit: true }).run();
      safeFit();
    } catch (err) {
      console.error('layout failed', err);
    }
  }

  function resetScenario() {
    if (!simChart) return;
    while (simChart.data.datasets.length > 1) {
      simChart.data.datasets.pop();
    }
    simChart.update();
    const effInput = document.getElementById('p-eff');
    const demInput = document.getElementById('p-dem');
    const delayInput = document.getElementById('p-delay');
    if (effInput && demInput && delayInput) {
      effInput.value = baseline.eff;
      demInput.value = baseline.dem;
      delayInput.value = baseline.delay;
    }
  }

  document.addEventListener('DOMContentLoaded', async function () {
    const container = document.getElementById('cy');
    if (!container || typeof window.cytoscape === 'undefined') return;

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
    groups.forEach(g => elements.push({ data: { id: g.id, color: g.color }, classes: 'group' }));
    (modelData.nodes || []).forEach(n => elements.push({ data: { id: n.id, label: n.label, parent: n.group } }));
    (modelData.edges || []).forEach((e, idx) => elements.push({
      data: {
        id: `e${idx}`,
        source: e.source,
        target: e.target,
        label: e.label,
        sign: e.sign,
        weight: e.weight || 0,
        delayYears: e.delayYears || 0
      },
      classes: e.sign === '+' ? 'positive pos' : 'negative neg'
    }));

    cy = cytoscape({
      container,
      elements,
      style: [
        {
          selector: 'node',
          style: {
            'background-color': colorAccent,
            'border-width': 2,
            'border-color': colorLine,
            'label': 'data(label)',
            'color': colorText,
            'text-valign': 'center',
            'text-halign': 'center',
            'font-family': 'Vazirmatn, sans-serif',
            'font-size': 14,
            'shape': 'round-rectangle',
            'text-background-color': 'rgba(0,0,0,0.25)',
            'text-background-opacity': 1,
            'text-background-padding': 2
          }
        },
        {
          selector: 'node.group',
          style: {
            'shape': 'round-rectangle',
            'background-color': 'rgba(255,255,255,0.06)',
            'border-color': '#2b3c39',
            'border-width': 2,
            'label': 'data(id)',
            'color': '#cde6e1',
            'text-halign': 'center',
            'text-valign': 'top',
            'padding': '10px',
            'font-family': 'Vazirmatn, sans-serif',
            'font-size': 12
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 2,
            'curve-style': 'bezier',
            'line-style': ele => ele.data('delayYears') > 0 ? 'dashed' : 'solid',
            'line-dash-pattern': ele => ele.data('delayYears') > 0 ? [8,6] : [0],
            'target-arrow-shape': 'triangle',
            'line-color': colorLine,
            'target-arrow-color': colorLine,
            'source-arrow-color': colorLine,
            'label': 'data(label)',
            'text-rotation': 'autorotate',
            'text-background-color': 'rgba(0,0,0,0.35)',
            'text-background-opacity': 1,
            'text-background-padding': 1,
            'text-wrap': 'wrap',
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
        { selector: '.highlight', style: { 'border-color': colorAccent, 'border-width': 3 } }
      ],
      layout: { name: 'grid' }
    });

    cy.on('ready', safeFit);
    setTimeout(safeFit, 0);
    window.addEventListener('resize', () => requestAnimationFrame(safeFit));
    document.querySelectorAll('details').forEach(el => el.addEventListener('toggle', () => requestAnimationFrame(safeFit)));

    runLayout('elk');

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

    const fPos = document.getElementById('f-pos');
    const fNeg = document.getElementById('f-neg');
    const fGroup = document.getElementById('f-group');
    const qInput = document.getElementById('q');

    function updateSignFilter() {
      if (fPos) cy.edges('.pos').toggleClass('hidden', fPos.classList.contains('off'));
      if (fNeg) cy.edges('.neg').toggleClass('hidden', fNeg.classList.contains('off'));
      safeFit();
    }
    if (fPos) fPos.addEventListener('click', () => { fPos.classList.toggle('off'); updateSignFilter(); });
    if (fNeg) fNeg.addEventListener('click', () => { fNeg.classList.toggle('off'); updateSignFilter(); });
    updateSignFilter();

    if (fGroup) {
      fGroup.addEventListener('change', () => {
        cy.elements().removeClass('hidden');
        cy.elements().removeClass('faded');
        const val = fGroup.value;
        if (val) {
          cy.nodes().filter(n => n.data('parent') !== val && n.id() !== val).addClass('hidden');
          cy.edges().filter(e => e.source().data('parent') !== val || e.target().data('parent') !== val).addClass('hidden');
        }
        safeFit();
      });
    }

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

    const exportPngBtn = document.getElementById('btn-export-png');
    if (exportPngBtn) {
      exportPngBtn.addEventListener('click', () => {
        const png = cy.png({ full: true, scale: 2 });
        const a = document.createElement('a');
        a.href = png;
        a.download = 'water-cld.png';
        a.click();
      });
    }

    const exportSvgBtn = document.getElementById('btn-export-svg');
    if (exportSvgBtn) {
      exportSvgBtn.disabled = true;
      exportSvgBtn.title = 'SVG export requires cytoscape-svg plugin';
    }

    const exportJsonBtn = document.getElementById('btn-export-json');
    if (exportJsonBtn) {
      exportJsonBtn.addEventListener('click', () => {
        const g = [];
        const n = [];
        const e = [];
        cy.elements().forEach(ele => {
          if (ele.isNode()) {
            if (ele.hasClass('group')) {
              g.push({ id: ele.id(), color: ele.data('color') });
            } else {
              n.push({ id: ele.id(), label: ele.data('label'), group: ele.data('parent') });
            }
          } else if (ele.isEdge()) {
            e.push({
              source: ele.data('source'),
              target: ele.data('target'),
              label: ele.data('label'),
              sign: ele.data('sign'),
              weight: ele.data('weight'),
              delayYears: ele.data('delayYears')
            });
          }
        });
        const blob = new Blob([JSON.stringify({ groups: g, nodes: n, edges: e }, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'water-cld.json';
        a.click();
        URL.revokeObjectURL(url);
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
            groups.forEach(g => els.push({ data: { id: g.id, color: g.color }, classes: 'group' }));
            (data.nodes || []).forEach(n => els.push({ data: { id: n.id, label: n.label, parent: n.group } }));
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
              classes: e.sign === '+' ? 'positive pos' : 'negative neg'
            }));
            cy.elements().remove();
            cy.add(els);
            runLayout('elk');
            updateSignFilter();
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

    const chartCanvas = document.getElementById('sim-chart');
    const effInput = document.getElementById('p-eff');
    const demInput = document.getElementById('p-dem');
    const delayInput = document.getElementById('p-delay');
    const runBtn = document.getElementById('btn-run');
    const resetBtn = document.getElementById('btn-reset');
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

    if (chartCanvas && window.Chart) {
      Chart.defaults.font.family = 'Vazirmatn, sans-serif';
      baseline = {
        eff: parseFloat(effInput.value),
        dem: parseFloat(demInput.value),
        delay: parseInt(delayInput.value)
      };
      const baseRes = simulate(baseline);
      simChart = new Chart(chartCanvas, {
        type: 'line',
        data: {
          labels: baseRes.years,
          datasets: [{
            label: 'پایه',
            data: baseRes.series,
            borderColor: '#0ea5e9',
            backgroundColor: 'rgba(14,165,233,0.1)',
            fill: true
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: true } },
          scales: {
            x: { title: { display: true, text: 'سال' } },
            y: { title: { display: true, text: 'ذخیره' } }
          }
        }
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
      if (saveBtn) saveBtn.addEventListener('click', () => {
        try {
          new Parser().parse(formulaExpr.value);
          const n = modelData.nodes.find(nd => nd.id === formulaNode.value);
          if (n) n.expr = formulaExpr.value;
          parseModel(modelData);
          const baseRes = simulate(baseline);
          simChart.data.labels = baseRes.years;
          simChart.data.datasets[0].data = baseRes.series;
          simChart.update();
          if (formulaMsg) formulaMsg.textContent = 'Saved';
        } catch (err) {
          if (formulaMsg) formulaMsg.textContent = err.message;
        }
      });

      if (runBtn) {
        runBtn.addEventListener('click', () => {
          const params = {
            eff: parseFloat(effInput.value),
            dem: parseFloat(demInput.value),
            delay: parseInt(delayInput.value)
          };
          const res = simulate(params);
          if (simChart.data.datasets.length < 2) {
            simChart.data.datasets.push({
              label: 'سناریو',
              data: res.series,
              borderColor: 'rgb(220,38,38)',
              backgroundColor: 'rgba(220,38,38,0.1)',
              fill: true
            });
          } else {
            simChart.data.datasets[1].data = res.series;
          }
          simChart.update();
        });
      }

      if (resetBtn) {
        resetBtn.addEventListener('click', resetScenario);
      }
    } else {
      console.warn('Chart.js not found; rendering CLD only');
    }
  });

  window.CLDSim = { simulate, runLayout, resetScenario, parseModel, simulateStep };
})();
