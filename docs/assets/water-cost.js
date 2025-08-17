(() => {
  'use strict';

  const app = document.getElementById('water-cost-app');
  if (!app) return;

  const tomanFmt = v => new Intl.NumberFormat('fa-IR').format(Math.round(v));
  const pctFmt = new Intl.NumberFormat('fa-IR', {
    style: 'percent',
    maximumFractionDigits: 1
  });

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
  const defaultsBtn = document.getElementById('btn_defaults');

  const realCostEl = document.getElementById('real_cost');
  const finalPriceEl = document.getElementById('final_price');
  const breakdownTable = document.getElementById('breakdown_table');
  const costChartEl = document.getElementById('costChart');
  const sensitivityTable = document.getElementById('sensitivity_table');
  const sensitivityChartEl = document.getElementById('sensitivityChart');
  const summaryEl = document.getElementById('summary');

  const inputs = [c_production, c_maintenance, p_loss, c_energy, p_power_outage];
  inputs.forEach(inp => {
    const hint = document.createElement('span');
    hint.id = `${inp.id}_hint`;
    hint.className = 'text-xs text-red-600 ml-2 hidden';
    inp.insertAdjacentElement('afterend', hint);
  });

  realCostEl.setAttribute('aria-live', 'polite');
  finalPriceEl.setAttribute('aria-live', 'polite');

  const hasChart = !!window.Chart;
  if (hasChart) {
    Chart.defaults.font.family = "'Vazirmatn', sans-serif";
  }
  let chart;
  let sensitivityChart;

  function updateDisplays() {
    c_production_val.textContent = tomanFmt(c_production.value);
    c_maintenance_val.textContent = tomanFmt(c_maintenance.value);
    c_energy_val.textContent = tomanFmt(c_energy.value);
    p_loss_val.textContent = pctFmt.format(p_loss.value / 100);
    p_power_outage_val.textContent = pctFmt.format(p_power_outage.value / 100);
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
      html += `<tr><td class="p-2">${item.label}</td><td class="p-2">${tomanFmt(item.value)}</td><td class="p-2">${pctFmt.format(percentage / 100)}</td></tr>`;
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
      const diff = Math.abs(chart.data.labels.length - labels.length);
      if (diff > 2) {
        chart.destroy();
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
  }

  function renderSensitivity(baseVals, baseFinal) {
    const scenarios = [
      { key: 'c_production', label: 'هزینه تولید' },
      { key: 'c_maintenance', label: 'هزینه نگهداری' },
      { key: 'c_energy', label: 'هزینه انرژی' },
      { key: 'p_loss', label: 'تلفات شبکه' },
      { key: 'p_power_outage', label: 'قطعی برق' }
    ];
    const results = scenarios.map(sc => {
      const newVals = { ...baseVals };
      newVals[sc.key] = baseVals[sc.key] * 1.1;
      const { final } = calcCosts(newVals);
      const change = final - baseFinal;
      const percentageChange = (change / baseFinal) * 100;
      return { ...sc, final, change, percentageChange };
    });

    results.sort((a, b) => Math.abs(b.change) - Math.abs(a.change));

    let html = '<thead><tr><th class="p-2">سناریو</th><th class="p-2">قیمت نهایی</th><th class="p-2">تغییر</th></tr></thead><tbody>';
    results.forEach(r => {
      const arrow = r.change >= 0 ? '▲' : '▼';
      const colorClass = r.change >= 0 ? 'text-red-600' : 'text-green-600';
      html += `<tr><td class="p-2">+۱۰٪ ${r.label}</td><td class="p-2">${tomanFmt(r.final)}</td><td class="p-2 font-semibold ${colorClass}">${arrow} ${pctFmt.format(Math.abs(r.percentageChange) / 100)} (${tomanFmt(Math.abs(r.change))} تومان)</td></tr>`;
    });
    html += '</tbody>';
    sensitivityTable.innerHTML = html;

    if (hasChart && sensitivityChartEl) {
      const labels = results.map(r => `+۱۰٪ ${r.label}`);
      const data = results.map(r => r.percentageChange);
      if (!sensitivityChart) {
        sensitivityChart = new Chart(sensitivityChartEl.getContext('2d'), {
          type: 'bar',
          data: { labels, datasets: [{ data }] },
          options: {
            indexAxis: 'y',
            plugins: { legend: { display: false } }
          }
        });
      } else {
        sensitivityChart.data.labels = labels;
        sensitivityChart.data.datasets[0].data = data;
        sensitivityChart.update();
      }
    }
  }

  function renderSummary(realCost, finalPrice) {
    summaryEl.textContent = `هزینه واقعی هر مترمکعب ${tomanFmt(realCost)} تومان و قیمت نهایی پیشنهادی ${tomanFmt(finalPrice)} تومان است.`;
  }

  function showHint(inp, msg) {
    const el = document.getElementById(`${inp.id}_hint`);
    if (el) {
      el.textContent = msg;
      el.classList.remove('hidden');
    }
  }

  function hideHint(inp) {
    const el = document.getElementById(`${inp.id}_hint`);
    if (el) {
      el.textContent = '';
      el.classList.add('hidden');
    }
  }

  function sanitizeInput(inp) {
    let v = inp.valueAsNumber;
    if (Number.isNaN(v)) {
      showHint(inp, 'عدد نامعتبر');
      return NaN;
    }
    hideHint(inp);
    if (inp === p_loss || inp === p_power_outage) {
      v = Math.min(100, Math.max(0, v));
    } else {
      v = Math.max(0, v);
    }
    inp.value = v;
    return v;
  }

  function calculate() {
    const vals = {};
    let hasNaN = false;
    inputs.forEach(inp => {
      const v = sanitizeInput(inp);
      if (Number.isNaN(v)) {
        hasNaN = true;
      } else {
        vals[inp.id] = v;
      }
    });
    if (hasNaN) return;
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
    const debounced = (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
    debounced.cancel = () => clearTimeout(timer);
    return debounced;
  }

  const recalcDebounced = debounce(calculate, 200);
  inputs.forEach(inp => {
    inp.addEventListener('input', () => {
      sanitizeInput(inp);
      updateDisplays();
      recalcDebounced();
    });
  });

  if (defaultsBtn) {
    defaultsBtn.addEventListener('click', () => {
      inputs.forEach(inp => {
        inp.value = inp.defaultValue;
        hideHint(inp);
      });
      updateDisplays();
      calculate();
    });
  }

  updateDisplays();
  calculate();

  ['pagehide', 'unload'].forEach(ev => {
    window.addEventListener(ev, () => recalcDebounced.cancel());
  });

  window.WaterCost = { recalc: () => calculate() };
})();
