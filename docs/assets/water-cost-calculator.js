(function () {
  const lsKey = 'water-cost-calculator-v1';
  const defaults = {
    cost_production: 2000,
    cost_energy: 2000,
    cost_om: 1500,
    loss_pct: 25,
    blackout_pct: 15,
    subsidy_pct: 85
  };

  const nf = new Intl.NumberFormat('fa-IR');

  function formatCurrency(n) {
    return nf.format(Math.round(n)) + ' تومان';
  }

  function load() {
    try { return JSON.parse(localStorage.getItem(lsKey)) || {}; }
    catch { return {}; }
  }

  function save(data) {
    localStorage.setItem(lsKey, JSON.stringify(data));
  }

  function initCostCalculator() {
    const statusEl = document.getElementById('calc_status');
    const inputs = {};
    document.querySelectorAll('[data-input]').forEach(el => {
      inputs[el.dataset.input] = el;
    });

    const saved = load();
    Object.keys(defaults).forEach(k => {
      if (inputs[k]) inputs[k].value = saved[k] ?? defaults[k];
    });

    const ctx = document.getElementById('costChart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['تولید', 'نگهداری', 'انرژی', 'تلفات شبکه', 'قطعی برق', 'یارانه'],
        datasets: [{ data: [0, 0, 0, 0, 0, 0] }]
      },
      options: {
        plugins: { legend: { position: 'bottom' } }
      }
    });

    function readInputs() {
      const data = {};
      let invalid = false;
      Object.entries(inputs).forEach(([k, el]) => {
        const v = parseFloat(el.value);
        if (isNaN(v)) {
          data[k] = 0;
          invalid = true;
          el.classList.add('ring-2', 'ring-red-500');
        } else {
          data[k] = v;
          el.classList.remove('ring-2', 'ring-red-500');
        }
        if (el.type === 'range') {
          const disp = document.querySelector(`[data-display="${k}"]`);
          if (disp) disp.textContent = nf.format(v);
        }
      });
      statusEl.textContent = invalid ? 'لطفاً مقادیر معتبر وارد کنید.' : '';
      return data;
    }

    function compute(data) {
      const base = data.cost_production + data.cost_energy + data.cost_om;
      const loss_cost = base * (data.loss_pct / 100);
      const blackout_cost = base * (data.blackout_pct / 100);
      const true_cost = base + loss_cost + blackout_cost;
      const subsidy_cost = true_cost * (data.subsidy_pct / 100);
      const consumer_price = Math.max(0, true_cost - subsidy_cost);
      return { base, loss_cost, blackout_cost, true_cost, subsidy_cost, consumer_price };
    }

    function renderOutputs(calc) {
      document.querySelector('[data-output="consumer_price"]').textContent = formatCurrency(calc.consumer_price);
      document.querySelector('[data-output="true_cost"]').textContent = formatCurrency(calc.true_cost);
    }

    function renderTable(data, calc) {
      const rows = [
        { label: 'هزینه تولید', value: data.cost_production },
        { label: 'هزینه نگهداری', value: data.cost_om },
        { label: 'هزینه انرژی', value: data.cost_energy },
        { label: 'تلفات شبکه', value: calc.loss_cost },
        { label: 'قطعی برق', value: calc.blackout_cost },
        { label: 'یارانه', value: -calc.subsidy_cost }
      ];
      const table = document.getElementById('breakdown_table');
      table.innerHTML = '<thead><tr><th class="px-2 py-1">عامل</th><th class="px-2 py-1">هزینه</th><th class="px-2 py-1">درصد</th></tr></thead>';
      const tbody = document.createElement('tbody');
      rows.forEach(r => {
        const percent = calc.true_cost ? (r.value / calc.true_cost) * 100 : 0;
        const tr = document.createElement('tr');
        if (r.label === 'یارانه') tr.classList.add('text-red-600');
        tr.innerHTML = `<td class="px-2 py-1">${r.label}</td><td class="px-2 py-1">${formatCurrency(r.value)}</td><td class="px-2 py-1">${nf.format(percent.toFixed(1))}%</td>`;
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
    }

    function renderChart(data, calc) {
      chart.data.datasets[0].data = [
        data.cost_production,
        data.cost_om,
        data.cost_energy,
        calc.loss_cost,
        calc.blackout_cost,
        calc.subsidy_cost
      ];
      chart.update();
    }

    function renderSensitivity(data, calc) {
      const scenarios = [
        { label: 'افزایش ۱۰٪ هزینه تولید', change: { cost_production: data.cost_production * 1.1 } },
        { label: 'افزایش ۱۰٪ هزینه انرژی', change: { cost_energy: data.cost_energy * 1.1 } },
        { label: 'کاهش ۱۰٪ یارانه', change: { subsidy_pct: Math.max(0, data.subsidy_pct - 10) } },
        { label: 'افزایش ۱۰٪ تلفات شبکه', change: { loss_pct: Math.min(100, data.loss_pct + 10) } }
      ];
      const ul = document.getElementById('sensitivity_list');
      ul.innerHTML = '';
      scenarios.forEach(sc => {
        const newData = Object.assign({}, data, sc.change);
        const res = compute(newData);
        const diff = res.consumer_price - calc.consumer_price;
        const li = document.createElement('li');
        li.textContent = `${sc.label}: ${formatCurrency(res.consumer_price)} (${diff >= 0 ? '+' : ''}${nf.format(Math.round(diff))})`;
        ul.appendChild(li);
      });
    }

    function renderSummary(data, calc) {
      const summary = document.getElementById('summary');
      const parts = [
        { name: 'هزینه تولید', value: data.cost_production },
        { name: 'هزینه نگهداری', value: data.cost_om },
        { name: 'هزینه انرژی', value: data.cost_energy },
        { name: 'تلفات شبکه', value: calc.loss_cost },
        { name: 'قطعی برق', value: calc.blackout_cost }
      ];
      parts.sort((a, b) => b.value - a.value);
      const top1 = parts[0];
      const top2 = parts[1];
      summary.textContent = `بیشترین سهم هزینه مربوط به ${top1.name}` + (top2 ? ` و سپس ${top2.name}` : '') + ` است. پس از اعمال یارانه ${nf.format(data.subsidy_pct)}٪، قیمت نهایی برای مصرف‌کننده ${formatCurrency(calc.consumer_price)} است.`;
    }

    function render() {
      const data = readInputs();
      save(data);
      const calc = compute(data);
      renderOutputs(calc);
      renderTable(data, calc);
      renderChart(data, calc);
      renderSensitivity(data, calc);
      renderSummary(data, calc);
    }

    Object.values(inputs).forEach(el => {
      el.addEventListener('input', render);
    });

    render();
  }

  document.addEventListener('DOMContentLoaded', initCostCalculator);
})();

