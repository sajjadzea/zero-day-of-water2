window.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('cy');
  if (!container || typeof window.cytoscape === 'undefined') return;

  try {
    const res = await fetch('/docs/data/water-cld.json');
    const data = await res.json();

    const elements = [];

    // group (compound) nodes
    const groups = data.groups || [];
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
          sign: e.sign
        },
        classes: e.sign === '+' ? 'positive' : 'negative'
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
            'width': 2,
            'curve-style': 'bezier',
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
        }
      ],
      layout: { name: 'grid' }
    });

    // layout using elk, fallback to dagre
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
      }
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

      // simple stock simulation
      function simulate(effect, delay, sign) {
        const years = Array.from({ length: 30 }, (_, i) => i + 1);
        const inflow = 10;
        const baseOutflow = 8;
        let stock = 100;
        const series = [];
        years.forEach(y => {
          let out = baseOutflow;
          if (y > delay) {
            out = baseOutflow * (1 + effect * (sign === '+' ? 1 : -1));
          }
          stock += inflow - out;
          series.push(stock);
        });
        return { years, series };
      }

      const simPanel = document.getElementById('sim-panel');
      const effectInput = document.getElementById('sim-effect');
      const delayInput = document.getElementById('sim-delay');
      const simForm = document.getElementById('sim-form');
      const canvas = document.getElementById('sim-chart');
      let chart;

      function renderSim(edge) {
        if (!simPanel || !canvas) return;
        simPanel.style.display = 'block';
        if (typeof window.Chart === 'undefined') {
          canvas.parentElement.innerHTML = '<p>Chart.js بارگذاری نشد</p>';
          return;
        }

        const run = () => {
          const eff = parseFloat(effectInput.value) || 0;
          const del = parseInt(delayInput.value) || 0;
          const { years, series } = simulate(eff, del, edge.data('sign'));
          if (chart) chart.destroy();
          chart = new Chart(canvas, {
            type: 'line',
            data: {
              labels: years,
              datasets: [{
                label: 'ذخیره آب زیرزمینی',
                data: series,
                borderColor: '#0284c7',
                backgroundColor: 'rgba(2,132,199,0.1)',
                fill: true
              }]
            },
            options: {
              responsive: true,
              scales: {
                x: { title: { display: true, text: 'سال' } },
                y: { title: { display: true, text: 'ذخیره' } }
              }
            }
          });
        };

        run();
        simForm.onsubmit = e => {
          e.preventDefault();
          run();
        };
      }

      // edge tooltip
      let tip;
      cy.on('tap', 'edge', evt => {
        const edge = evt.target;
        if (tip) tip.destroy();
        const content = `${edge.data('label')} (${edge.data('sign')})`;
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

        if (edge.data('sign') === '+' || edge.data('sign') === '-') {
          renderSim(edge);
        }
      });

    // dblclick highlight neighbors
    let tappedNode;
    cy.on('tap', 'node', evt => {
      const node = evt.target;
      if (tappedNode && tappedNode === node) {
        cy.elements().removeClass('highlighted');
        node.closedNeighborhood().addClass('highlighted');
        tappedNode = null;
      } else {
        tappedNode = node;
        setTimeout(() => { tappedNode = null; }, 300);
      }
    });

    // ESC to clear highlight
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') cy.elements().removeClass('highlighted');
    });

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
  } catch (err) {
    console.error('Error loading CLD', err);
  }
});

