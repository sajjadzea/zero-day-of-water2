document.addEventListener('DOMContentLoaded', () => {
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.getElementById('cld-svg');
  const width = 600;
  const height = 420;
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

  const defs = document.createElementNS(svgNS, 'defs');
  const marker = document.createElementNS(svgNS, 'marker');
  marker.setAttribute('id', 'arrow');
  marker.setAttribute('viewBox', '0 -5 10 10');
  marker.setAttribute('refX', '10');
  marker.setAttribute('refY', '0');
  marker.setAttribute('markerWidth', '6');
  marker.setAttribute('markerHeight', '6');
  marker.setAttribute('orient', 'auto');
  const path = document.createElementNS(svgNS, 'path');
  path.setAttribute('d', 'M0,-5L10,0L0,5');
  path.setAttribute('fill', '#555');
  marker.appendChild(path);
  defs.appendChild(marker);
  svg.appendChild(defs);

  const nodes = [
    { id: 'منابع آب زیرزمینی', x: 100, y: 210 },
    { id: 'بهره‌وری آبیاری', x: 300, y: 60 },
    { id: 'محصول کشاورزی', x: 300, y: 360 },
    { id: 'مصرف آب', x: 500, y: 210 }
  ];

  const links = [
    { source: 'منابع آب زیرزمینی', target: 'محصول کشاورزی', sign: '+' },
    { source: 'محصول کشاورزی', target: 'مصرف آب', sign: '+' },
    { source: 'مصرف آب', target: 'منابع آب زیرزمینی', sign: '−' },
    { source: 'بهره‌وری آبیاری', target: 'مصرف آب', sign: '−' }
  ];

  const nodeById = Object.fromEntries(nodes.map(n => [n.id, n]));

  links.forEach(l => {
    const s = nodeById[l.source];
    const t = nodeById[l.target];
    const line = document.createElementNS(svgNS, 'line');
    line.setAttribute('x1', s.x);
    line.setAttribute('y1', s.y);
    line.setAttribute('x2', t.x);
    line.setAttribute('y2', t.y);
    line.setAttribute('stroke', '#999');
    line.setAttribute('stroke-width', '2');
    line.setAttribute('marker-end', 'url(#arrow)');
    svg.appendChild(line);

    const label = document.createElementNS(svgNS, 'text');
    label.setAttribute('x', (s.x + t.x) / 2);
    label.setAttribute('y', (s.y + t.y) / 2 - 10);
    label.setAttribute('font-size', '12');
    label.setAttribute('fill', '#000');
    label.setAttribute('text-anchor', 'middle');
    label.textContent = l.sign;
    svg.appendChild(label);
  });

  nodes.forEach(n => {
    const g = document.createElementNS(svgNS, 'g');
    g.setAttribute('transform', `translate(${n.x},${n.y})`);

    const circle = document.createElementNS(svgNS, 'circle');
    circle.setAttribute('r', '30');
    circle.setAttribute('fill', '#69b3a2');
    g.appendChild(circle);

    const text = document.createElementNS(svgNS, 'text');
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('dy', '4');
    text.textContent = n.id;
    g.appendChild(text);

    svg.appendChild(g);
  });

  const years = 30;
  let waterResources = 100;
  const rainfall = 2;
  const agProductLevel = 2;
  const waterLevels = [];

  for (let year = 0; year <= years; year++) {
    waterLevels.push(waterResources);
    const inflow = rainfall;
    const outflow = agProductLevel * 1.5;
    waterResources += inflow - outflow;
  }

  const labels = Array.from({ length: years + 1 }, (_, i) => i.toString());
  const ctx = document.getElementById('sd-simulation').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'منابع آب',
          data: waterLevels,
          borderColor: '#007bff',
          fill: false
        }
      ]
    },
    options: {
      responsive: true
    }
  });
});

