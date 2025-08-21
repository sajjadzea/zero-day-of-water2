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

window.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('cy');
  if (!container || typeof window.cytoscape === 'undefined') return;

  const dataUrl = "/data/water-cld.json?v=2";
  try {
    const res = await fetch(dataUrl, { cache: 'no-store' });
    if (!res.ok) {
      console.error("CLD JSON load failed:", dataUrl, res && res.status);
      return;
    }
    const data = await res.json();

    const elements = [];

    // group (compound) nodes
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
    groups.forEach(g => {
      elements.push({
        data: { id: g.id, color: g.color },
        classes: 'group'
      });
    });

    // variable nodes
    (data.nodes || []).forEach(n => {
      elements.push({
        data: {
          id: n.id,
          label: n.label,
          parent: n.group
        }
      });
    });

    // edges
    (data.edges || []).forEach((e, idx) => {
      elements.push({
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
      });
    });

    const cy = cytoscape({
      container,
      elements,
      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#f9fafb',
            'border-width': 1,
            'border-color': '#94a3b8',
            'label': 'data(label)',
            'text-valign': 'center',
            'text-halign': 'center',
            'font-family': 'Vazirmatn, sans-serif',
            'font-size': 14,
            'shape': 'round-rectangle'
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
            'width': ele => 1 + (ele.data('weight') * 4),
            'curve-style': 'bezier',
            'line-style': ele => ele.data('delayYears') > 0 ? 'dashed' : 'solid',
            'target-arrow-shape': 'triangle',
            'line-color': '#94a3b8',
            'target-arrow-color': '#94a3b8',
            'label': 'data(label)',
            'edge-text-rotation': 'autorotate',
            'text-background-opacity': 1,
            'text-background-color': '#fff',
            'text-background-padding': '2px',
            'text-wrap': 'wrap',
            'font-family': 'Vazirmatn, sans-serif',
            'font-size': 12
          }
        },
        {
          selector: 'edge.positive',
          style: {
            'line-color': '#16a34a',
            'target-arrow-color': '#16a34a'
          }
        },
        {
          selector: 'edge.negative',
          style: {
            'line-color': '#dc2626',
            'target-arrow-color': '#dc2626'
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
          selector: 'edge.highlighted',
          style: {
            'line-color': '#facc15',
            'target-arrow-color': '#facc15',
            'width': 3
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

 codex/add-export/import-buttons-for-images-and-json
    // layout using elk, fallback to dagre
    const runLayout = () => {
      try {
        cy.layout({
          name: 'elk',
          elk: { algorithm: 'layered' },
          nodeDimensionsIncludeLabels: true,
          fit: true
        }).run();
      } catch (err) {
        try {
          cy.layout({ name: 'dagre', rankDir: 'LR' }).run();
        } catch (e2) {
          console.error('layout failed', e2);

    function runLayout(name) {
      if (name === 'elk') {
        try {
          cy.layout({
            name: 'elk',
            elk: { algorithm: 'layered' },
            nodeDimensionsIncludeLabels: true,
            fit: true
          }).run();
        } catch (err) {
          try {
            cy.layout({ name: 'dagre', rankDir: 'LR', nodeDimensionsIncludeLabels: true, fit: true }).run();
          } catch (e2) {
            console.error('layout failed', e2);
          }
        }
      } else {
        try {
          cy.layout({ name: 'dagre', rankDir: 'LR', nodeDimensionsIncludeLabels: true, fit: true }).run();
        } catch (err) {
          console.error('layout failed', err);
 main
        }
      }
    };
    runLayout();

    runLayout('elk');

    const layoutSel = document.getElementById('layout');
    if (layoutSel) {
      layoutSel.addEventListener('change', e => runLayout(e.target.value));
    }

    // minimap (optional)
      if (typeof cy.minimap === 'function') {
        cy.minimap({
          position: 'bottom-right',
          width: 150,
          height: 100,
          padding: 5
        });
      }

      // edge tooltip
      let tip;
      cy.on('tap', 'edge', evt => {
        const edge = evt.target;
        if (tip) tip.destroy();
        const signText = edge.data('sign') === '+' ? 'مثبت' : 'منفی';
        const content = `اثر: ${signText} | وزن: ${edge.data('weight')} | تاخیر: ${edge.data('delayYears')} سال`;
        if (window.tippy && edge.popperRef) {
          tip = window.tippy(edge.popperRef(), {
            content,
            trigger: 'manual',
            placement: 'bottom',
            hideOnClick: true,
            onHidden(inst) { inst.destroy(); }
          });
          tip.show();
        } else {
          alert(content);
        }
      });

    let tappedNode;
    cy.on('tap', 'node', evt => {
      const n = evt.target;
      if (tappedNode && tappedNode === n) {
        if (n.locked()) {
          n.unlock();
        } else {
          n.lock();
        }
        tappedNode = null;
      } else {
        tappedNode = n;
        setTimeout(() => { tappedNode = null; }, 300);
      }
    });

 codex/add-layout-switch-and-pin-functionality

    // ESC to clear highlight
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') cy.elements().removeClass('highlighted');
    });

    // filter controls
    const fPos = document.getElementById('f-pos');
    const fNeg = document.getElementById('f-neg');
    const fGroup = document.getElementById('f-group');
    const qInput = document.getElementById('q');

    const updateSignFilter = () => {
      if (fPos) cy.edges('.pos').toggleClass('hide', !fPos.checked);
      if (fNeg) cy.edges('.neg').toggleClass('hide', !fNeg.checked);
    };
    if (fPos) fPos.addEventListener('change', updateSignFilter);
    if (fNeg) fNeg.addEventListener('change', updateSignFilter);
    updateSignFilter();

    if (fGroup) {
      fGroup.addEventListener('change', () => {
        cy.elements().removeClass('faded');
        const val = fGroup.value;
        if (val) {
          cy.nodes().filter(n => n.data('parent') !== val && n.id() !== val).addClass('faded');
          cy.edges().filter(e => {
            return e.source().data('parent') !== val || e.target().data('parent') !== val;
          }).addClass('faded');
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

 main
    // legend
    const legend = document.getElementById('legend');
    if (legend) {
      const items = [];
      items.push(`<div style="display:flex;align-items:center;margin:2px"><span style="width:12px;height:12px;background:#16a34a;display:inline-block;margin-left:4px"></span>اثر مثبت</div>`);
      items.push(`<div style="display:flex;align-items:center;margin:2px"><span style="width:12px;height:12px;background:#dc2626;display:inline-block;margin-left:4px"></span>اثر منفی</div>`);
      groups.forEach(g => {
        items.push(`<div style="display:flex;align-items:center;margin:2px"><span style="width:12px;height:12px;background:${g.color};display:inline-block;margin-left:4px"></span>${g.id}</div>`);
      });
      legend.innerHTML = items.join('');
    }

    // export / import controls
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
      exportSvgBtn.addEventListener('click', () => {
        const svg = typeof cy.svg === 'function' ? cy.svg({ full: true }) : container.innerHTML;
        const blob = new Blob([svg], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'water-cld.svg';
        a.click();
        URL.revokeObjectURL(url);
      });
    }

    const exportJsonBtn = document.getElementById('btn-export-json');
    if (exportJsonBtn) {
      exportJsonBtn.addEventListener('click', () => {
        const groups = [];
        const nodes = [];
        const edges = [];
        cy.elements().jsons().forEach(ele => {
          if (ele.group === 'nodes') {
            const el = cy.getElementById(ele.data.id);
            if (el.hasClass('group')) {
              groups.push({ id: ele.data.id, color: ele.data.color });
            } else {
              nodes.push({ id: ele.data.id, label: ele.data.label, group: ele.data.parent });
            }
          } else if (ele.group === 'edges') {
            edges.push({
              source: ele.data.source,
              target: ele.data.target,
              label: ele.data.label,
              sign: ele.data.sign,
              weight: ele.data.weight,
              delayYears: ele.data.delayYears
            });
          }
        });
        const json = { groups, nodes, edges };
        const blob = new Blob([JSON.stringify(json, null, 2)], { type: 'application/json' });
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
            const elements = [];
            groups.forEach(g => {
              elements.push({ data: { id: g.id, color: g.color }, classes: 'group' });
            });
            (data.nodes || []).forEach(n => {
              elements.push({ data: { id: n.id, label: n.label, parent: n.group } });
            });
            (data.edges || []).forEach((e, idx) => {
              elements.push({
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
              });
            });
            cy.elements().remove();
            cy.add(elements);
            if (legend) {
              const items = [];
              items.push(`<div style="display:flex;align-items:center;margin:2px"><span style="width:12px;height:12px;background:#16a34a;display:inline-block;margin-left:4px"></span>اثر مثبت</div>`);
              items.push(`<div style="display:flex;align-items:center;margin:2px"><span style="width:12px;height:12px;background:#dc2626;display:inline-block;margin-left:4px"></span>اثر منفی</div>`);
              groups.forEach(g => {
                items.push(`<div style=\"display:flex;align-items:center;margin:2px\"><span style=\"width:12px;height:12px;background:${g.color};display:inline-block;margin-left:4px\"></span>${g.id}</div>`);
              });
              legend.innerHTML = items.join('');
            }
            runLayout();
            updateSignFilter && updateSignFilter();
          } catch (err) {
            console.error('Import JSON failed', err);
          }
        };
        reader.readAsText(file);
      });
    }

    // scenario simulation panel
    const effInput = document.getElementById('p-eff');
    const demInput = document.getElementById('p-dem');
    const delayInput = document.getElementById('p-delay');
    const runBtn = document.getElementById('btn-run');
    const resetBtn = document.getElementById('btn-reset');
    const chartCanvas = document.getElementById('sim-chart');
    if (chartCanvas && typeof Chart !== 'undefined') {
      Chart.defaults.font.family = 'Vazirmatn, sans-serif';
      const baseline = {
        eff: parseFloat(effInput.value),
        dem: parseFloat(demInput.value),
        delay: parseInt(delayInput.value)
      };
      const baseRes = simulate(baseline);
      const simChart = new Chart(chartCanvas, {
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

      resetBtn.addEventListener('click', () => {
        if (simChart.data.datasets.length > 1) {
          simChart.data.datasets.pop();
          simChart.update();
        }
        effInput.value = baseline.eff;
        demInput.value = baseline.dem;
        delayInput.value = baseline.delay;
      });
    }
  } catch (err) {
    console.error("CLD JSON load failed:", dataUrl, err);
  }
});

