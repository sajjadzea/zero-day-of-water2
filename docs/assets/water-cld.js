(function () {
  function simulate({ eff = 0, dem = 0, delay = 0, years = 30 }) {
    const inflow = 2;
    const baseOut = 2.2;
    let stock = 100;
    const series = [stock];
    for (let t = 0; t < years; t++) {
      let out = baseOut;
      if (t >= delay) {
        out = baseOut * (1 + dem * 0.8) * (1 - eff * 0.6);
      }
      stock = Math.max(0, stock + inflow - out);
      series.push(stock);
    }
    return { years: Array.from({ length: years + 1 }, (_, i) => i), series };
  }

  let cy;
  let simChart;
  let baseline = { eff: 0, dem: 0, delay: 0 };

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
        return;
      } catch (e) {
        console.warn('elk layout failed, falling back to dagre', e);
      }
    }
    try {
      cy.layout({ name: 'dagre', rankDir: 'LR', nodeDimensionsIncludeLabels: true, fit: true }).run();
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

    const elements = [];
    const groups = data.groups || [];
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
    (data.nodes || []).forEach(n => elements.push({ data: { id: n.id, label: n.label, parent: n.group } }));
    (data.edges || []).forEach((e, idx) => elements.push({
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
            'background-color': '#ffffff18',
            'border-width': 1.4,
            'border-color': '#ffffffcc',
            'label': 'data(label)',
            'color': '#e8fff3',
            'text-valign': 'center',
            'text-halign': 'center',
            'font-family': 'Vazirmatn, sans-serif',
            'font-size': 14,
            'shape': 'round-rectangle',
            'shadow-blur': 8,
            'shadow-color': '#00000055',
            'shadow-offset-x': 0,
            'shadow-offset-y': 2
          }
        },
        {
          selector: 'node.group',
          style: {
            'background-color': 'data(color)',
            'background-opacity': 0.4,
            'padding': '10px',
            'shape': 'round-rectangle',
            'border-width': 0,
            'label': 'data(id)',
            'text-halign': 'center',
            'text-valign': 'top',
            'font-family': 'Vazirmatn, sans-serif',
            'font-size': 12
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 4,
            'curve-style': 'bezier',
            'line-style': ele => ele.data('delayYears') > 0 ? 'dashed' : 'solid',
            'line-dash-pattern': ele => ele.data('delayYears') > 0 ? [8,6] : [0],
            'target-arrow-shape': 'triangle',
            'line-color': '#ffffff66',
            'target-arrow-color': '#ffffff66',
            'label': 'data(label)',
            'edge-text-rotation': 'autorotate',
            'text-background-opacity': 1,
            'text-background-color': '#142a20',
            'text-background-padding': '2px',
            'text-wrap': 'wrap',
            'font-family': 'Vazirmatn, sans-serif',
            'font-size': 12,
            'color': '#e8fff3'
          }
        },
        {
          selector: 'edge.positive',
          style: {
            'line-color': '#24c46b',
            'target-arrow-color': '#24c46b',
            'line-style': 'solid'
          }
        },
        {
          selector: 'edge.negative',
          style: {
            'line-color': '#e76060',
            'target-arrow-color': '#e76060',
            'line-style': 'dashed',
            'line-dash-pattern': [8,6]
          }
        },
        {
          selector: 'node:locked',
          style: {
            'border-color': '#f97316',
            'border-width': 3
          }
        },
        {
          selector: 'node.highlighted',
          style: {
            'border-color': '#facc15',
            'border-width': 3
          }
        },
        {
          selector: '.hide',
          style: { 'display': 'none' }
        },
        {
          selector: '.faded',
          style: { 'opacity': 0.1 }
        }
      ],
      layout: { name: 'grid' }
    });

    runLayout('elk');

    if (cy) {
      cy.on('dblclick', 'node', e => {
        const n = e.target;
        if (n.locked()) {
          n.unlock();
        } else {
          n.lock();
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
      if (fPos) cy.edges('.pos').toggleClass('hide', !fPos.checked);
      if (fNeg) cy.edges('.neg').toggleClass('hide', !fNeg.checked);
    }
    if (fPos) fPos.addEventListener('change', updateSignFilter);
    if (fNeg) fNeg.addEventListener('change', updateSignFilter);
    updateSignFilter();

    if (fGroup) {
      fGroup.addEventListener('change', () => {
        cy.elements().removeClass('faded');
        const val = fGroup.value;
        if (val) {
          cy.nodes().filter(n => n.data('parent') !== val && n.id() !== val).addClass('faded');
          cy.edges().filter(e => e.source().data('parent') !== val || e.target().data('parent') !== val).addClass('faded');
        }
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
              borderColor: '#dc2626',
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

  window.CLDSim = { simulate, runLayout, resetScenario };
})();
