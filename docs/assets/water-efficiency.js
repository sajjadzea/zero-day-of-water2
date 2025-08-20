document.addEventListener('DOMContentLoaded', () => {
  const width = 600;
  const height = 400;

  const svg = d3
    .select('#cld-diagram')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  svg
    .append('defs')
    .append('marker')
    .attr('id', 'arrow')
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 10)
    .attr('refY', 0)
    .attr('markerWidth', 6)
    .attr('markerHeight', 6)
    .attr('orient', 'auto')
    .append('path')
    .attr('d', 'M0,-5L10,0L0,5')
    .attr('fill', '#555');

  const nodes = [
    { id: 'منابع آب زیرزمینی' },
    { id: 'بهره‌وری آبیاری' },
    { id: 'محصول کشاورزی' },
    { id: 'مصرف آب' }
  ];

  const links = [
    { source: 'منابع آب زیرزمینی', target: 'محصول کشاورزی', sign: '+' },
    { source: 'محصول کشاورزی', target: 'مصرف آب', sign: '+' },
    { source: 'مصرف آب', target: 'منابع آب زیرزمینی', sign: '−' },
    { source: 'بهره‌وری آبیاری', target: 'مصرف آب', sign: '−' }
  ];

  const simulation = d3
    .forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(d => d.id).distance(150))
    .force('charge', d3.forceManyBody().strength(-500))
    .force('center', d3.forceCenter(width / 2, height / 2));

  const link = svg
    .append('g')
    .attr('stroke', '#999')
    .attr('stroke-width', 2)
    .selectAll('line')
    .data(links)
    .enter()
    .append('line')
    .attr('marker-end', 'url(#arrow)');

  const linkLabels = svg
    .append('g')
    .selectAll('text')
    .data(links)
    .enter()
    .append('text')
    .attr('font-size', 12)
    .attr('fill', '#000')
    .text(d => d.sign);

  const node = svg
    .append('g')
    .selectAll('g')
    .data(nodes)
    .enter()
    .append('g')
    .call(
      d3
        .drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended)
    );

  node
    .append('circle')
    .attr('r', 30)
    .attr('fill', '#69b3a2');

  node
    .append('text')
    .attr('text-anchor', 'middle')
    .attr('dy', 4)
    .text(d => d.id);

  simulation.on('tick', () => {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);

    node.attr('transform', d => `translate(${d.x},${d.y})`);

    linkLabels
      .attr('x', d => (d.source.x + d.target.x) / 2)
      .attr('y', d => (d.source.y + d.target.y) / 2);
  });

  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  const ctx = document.getElementById('sd-simulation').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{ label: 'Stock & Flow Placeholder', data: [] }]
    },
    options: {
      responsive: true
    }
  });
});
