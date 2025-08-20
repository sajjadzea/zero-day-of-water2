document.addEventListener('DOMContentLoaded', () => {
  const cld = d3.select('#cld-diagram');
  cld.append('p').text('Causal loop diagram placeholder');

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
