// docs/assets/electricity-peak.js
// Initializes charts on the electricity peak dashboard

window.addEventListener('DOMContentLoaded', () => {
  // Ensure Chart.js is available
  if (typeof window.Chart === 'undefined') {
    ['totalDemandChart', 'householdBreakdownChart', 'householdBarChart'].forEach(id => {
      const canvas = document.getElementById(id);
      if (canvas && canvas.parentElement) {
        canvas.parentElement.innerHTML = '<p class="text-red-600 text-center">خطا در بارگذاری Chart.js</p>';
      }
    });
    return;
  }

  // Global defaults
  Chart.defaults.font.family = 'Vazirmatn, sans-serif';
  Chart.defaults.locale = 'fa-IR';
  if (Chart.defaults.plugins?.legend) Chart.defaults.plugins.legend.rtl = true;
  if (Chart.defaults.plugins?.tooltip) Chart.defaults.plugins.tooltip.rtl = true;

  let lineChart, doughnutChart, barChart;

  function initLineChart() {
    const ctx = document.getElementById('totalDemandChart');
    if (!ctx) return;
    if (lineChart) lineChart.destroy();

    const labels = Array.from({ length: 19 }, (_, i) =>
      (i + 6).toLocaleString('fa-IR', { minimumIntegerDigits: 2 })
    );
    const consumption = [
      3200, 3300, 3400, 3600, 3800, 4000, 4200, 4400, 4600,
      4700, 4550, 4400, 4250, 4100, 3950, 3700, 3500, 3300, 3150
    ];
    const demand = [
      3300, 3400, 3550, 3800, 4000, 4200, 4400, 4650, 4850,
      4950, 4750, 4600, 4450, 4300, 4150, 3900, 3650, 3450, 3250
    ];

    lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'مصرف',
            data: consumption,
            borderColor: '#1d4ed8',
            backgroundColor: '#1d4ed8',
            tension: 0.3,
            fill: false
          },
          {
            label: 'تقاضا',
            data: demand,
            borderColor: '#f97316',
            backgroundColor: 'rgba(249,115,22,0.15)',
            tension: 0.3,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        scales: {
          x: { title: { display: true, text: 'ساعت' } },
          y: {
            title: { display: true, text: 'MW' },
            ticks: { callback: value => value.toLocaleString('fa-IR') }
          }
        },
        plugins: {
          tooltip: { rtl: true },
          legend: { display: true }
        }
      }
    });
  }

  function initDoughnutChart() {
    const ctx = document.getElementById('householdBreakdownChart');
    if (!ctx) return;
    if (doughnutChart) doughnutChart.destroy();

    const labels = ['سرمایش و گرمایش', 'روشنایی', 'لوازم خانگی', 'سایر'];
    const data = [45, 25, 20, 10];

    doughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor: ['#0ea5e9', '#facc15', '#a855f7', '#94a3b8']
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' },
          tooltip: {
            rtl: true,
            callbacks: {
              label: ctx => {
                const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
                const val = ctx.parsed;
                const pct = ((val / total) * 100).toFixed(1);
                return `${ctx.label}: ${pct}% (${val.toLocaleString('fa-IR')})`;
              }
            }
          }
        }
      }
    });
  }

  function initBarChart() {
    const ctx = document.getElementById('householdBarChart');
    if (!ctx) return;
    if (barChart) barChart.destroy();

    const labels = ['مشهد', 'نیشابور', 'سبزوار', 'تربت حیدریه', 'تویسرکان', 'قوچان', 'کاشمر', 'کلات'];
    const data = [120, 95, 80, 65, 50, 40, 35, 25]; // MWh

    barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'مصرف خانگی',
            data,
            backgroundColor: '#3b82f6'
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: { display: true, text: 'MWh' },
            ticks: { callback: value => value.toLocaleString('fa-IR') }
          },
          y: { ticks: { rtl: true } }
        },
        plugins: {
          tooltip: { rtl: true },
          legend: { display: false }
        }
      }
    });
  }

  // Initialize charts
  initLineChart();
  initDoughnutChart();
  initBarChart();
});

