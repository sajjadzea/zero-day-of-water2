(() => {
  'use strict';

  const app = document.getElementById('water-cost-app');
  if (!app) return;

  const tomanFmt = v => new Intl.NumberFormat('fa-IR').format(Math.round(v));
  const pctFmt = new Intl.NumberFormat('fa-IR', { maximumFractionDigits: 1 });

  const c_production = document.getElementById('c_production');
  const c_production_val = document.getElementById('c_production_val');
  const c_maintenance = document.getElementById('c_maintenance');
  const c_maintenance_val = document.getElementById('c_maintenance_val');
  const p_loss = document.getElementById('p_loss');
  const p_loss_val = document.getElementById('p_loss_val');
  const c_energy = document.getElementById('c_energy');
  const c_energy_val = document.getElementById('c_energy_val');
  const p_power_outage = document.getElementById('p_power_outage');
  const p_power_outage_val = document.getElementById('p_power_outage_val');

  const realCostEl = document.getElementById('real_cost');
  const finalPriceEl = document.getElementById('final_price');
  const breakdownTable = document.getElementById('breakdown_table');
  const costChartEl = document.getElementById('costChart');
  const sensitivityTable = document.getElementById('sensitivity_table');
  const summaryEl = document.getElementById('summary');

  realCostEl.setAttribute('aria-live', 'polite');
  finalPriceEl.setAttribute('aria-live', 'polite');

  const hasChart = !!window.Chart;
  if (hasChart) {
    Chart.defaults.font.family = "'Vazirmatn', sans-serif";
  }
  let chart;

  function updateDisplays() {
    c_production_val.textContent = tomanFmt(c_production.value);
    c_maintenance_val.textContent = tomanFmt(c_maintenance.value);
    c_energy_val.textContent = tomanFmt(c_energy.value);
    p_loss_val.textContent = p_loss.value;
    p_power_outage_val.textContent = p_power_outage.value;
  }

  function calcCosts(vals) {
    const base = vals.c_production + vals.c_maintenance + vals.c_energy;
    const withLoss = base / (1 - vals.p_loss / 100);
    const final = withLoss * (1 + vals.p_power_outage / 100);
    return { real: withLoss, final };
  }

  function renderBreakdown(realCost, data) {
    let html = '<thead><tr><th class="p-2">آیتم</th><th class="p-2">هزینه (تومان)</th><th class="p-2">درصد</th></tr></thead><tbody>';
    data.forEach(item => {
      const percentage = (item.value / realCost) * 100;
      html += `<tr><td class="p-2">${item.label}</td><td class="p-2">${tomanFmt(item.value)}</td><td class="p-2">${pctFmt.format(percentage)}%</td></tr>`;
    });
    html += '</tbody>';
    breakdownTable.innerHTML = html;
  }

  function renderChart(data) {
    if (!hasChart) return;
    const labels = data.map(i => i.label);
    const values = data.map(i => i.value);
    const colors = ['#3b82f6', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6'];
    if (!chart) {
      chart = new Chart(costChartEl.getContext('2d'), {
        type: 'pie',
        data: { labels, datasets: [{ data: values, backgroundColor: colors }] },
        options: { plugins: { legend: { position: 'bottom' } } }
      });
    } else {
      chart.data.labels = labels;
      chart.data.datasets[0].data = values;
      chart.update();
    }
  }

  function renderSensitivity(baseVals, baseFinal) {
    const scenarios = [
      { key: 'c_production', label: 'هزینه تولید', isPercent: false },
      { key: 'c_maintenance', label: 'هزینه نگهداری', isPercent: false },
      { key: 'c_energy', label: 'هزینه انرژی', isPercent: false },
      { key: 'p_loss', label: 'تلفات شبکه', isPercent: true },
      { key: 'p_power_outage', label: 'قطعی برق', isPercent: true }
    ];
    let html = '<thead><tr><th class="p-2">سناریو</th><th class="p-2">قیمت نهایی</th><th class="p-2">تغییر</th></tr></thead><tbody>';
    scenarios.forEach(sc => {
      const newVals = { ...baseVals };
      newVals[sc.key] = baseVals[sc.key] * 1.1;
      const { final } = calcCosts(newVals);
      const change = final - baseFinal;
      const percentageChange = (change / baseFinal) * 100;
      const sign = change >= 0 ? '+' : '-';
      const colorClass = change >= 0 ? 'text-red-600' : 'text-green-600';
      html += `<tr><td class="p-2">+۱۰٪ ${sc.label}</td><td class="p-2">${tomanFmt(final)}</td><td class="p-2 font-semibold ${colorClass}">${sign} ${pctFmt.format(Math.abs(percentageChange))}% (${tomanFmt(Math.abs(change))} تومان)</td></tr>`;
    });
    html += '</tbody>';
    sensitivityTable.innerHTML = html;
  }

  function renderSummary(realCost, finalPrice) {
    summaryEl.textContent = `هزینه واقعی هر مترمکعب ${tomanFmt(realCost)} تومان و قیمت نهایی پیشنهادی ${tomanFmt(finalPrice)} تومان است.`;
  }

  function calculate() {
    const vals = {
      c_production: c_production.valueAsNumber,
      c_maintenance: c_maintenance.valueAsNumber,
      p_loss: p_loss.valueAsNumber,
      c_energy: c_energy.valueAsNumber,
      p_power_outage: p_power_outage.valueAsNumber
    };
    const { real, final } = calcCosts(vals);
    realCostEl.textContent = tomanFmt(real);
    finalPriceEl.textContent = tomanFmt(final);

    const breakdownData = [
      { label: 'هزینه تولید', value: vals.c_production },
      { label: 'هزینه نگهداری', value: vals.c_maintenance },
      { label: 'هزینه انرژی', value: vals.c_energy },
      { label: 'تلفات شبکه', value: real - (vals.c_production + vals.c_maintenance + vals.c_energy) },
      { label: 'قطعی برق', value: final - real }
    ];

    renderBreakdown(real, breakdownData);
    renderChart(breakdownData);
    renderSensitivity(vals, final);
    renderSummary(real, final);
  }

  function debounce(fn, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  const recalcDebounced = debounce(calculate, 200);
  [c_production, c_maintenance, p_loss, c_energy, p_power_outage].forEach(inp => {
    inp.addEventListener('input', () => {
      updateDisplays();
      recalcDebounced();
    });
  });

  updateDisplays();
  calculate();

  window.WaterCost = { recalc: () => calculate() };
})();
