'use strict';

document.addEventListener('DOMContentLoaded', () => {
  localStorage.setItem('sector', 'gas');
  // وضعیت فیلترها
  const state = { period: 'monthly', city: 'all', product: 'all' };
  const charts = {};

  // دیتابیس ساختگی
  const mockDatabase = {
    cities: [
      { id: 'mashhad', name: 'مشهد', subscriptions: 1500000 },
      { id: 'sabzevar', name: 'سبزوار', subscriptions: 150000 },
      { id: 'neyshabur', name: 'نیشابور', subscriptions: 200000 },
      { id: 'torbat_jam', name: 'تربت جام', subscriptions: 80000 },
      { id: 'kashmar', name: 'کاشمر', subscriptions: 90000 },
      { id: 'bardaskan', name: 'بردسکن', subscriptions: 950 }, // پنهان شود
    ],
    savingTips: [
      'دمای ترموستات در زمستان روی ۱۸ تا ۲۱ درجه باشد.',
      'از پرده‌های ضخیم برای جلوگیری از هدررفت گرما استفاده کنید.',
      'درزها و شکاف‌های پنجره‌ها را درزگیر کنید.',
      'بخاری برقی پرمصرف را به حداقل برسانید.',
      'در روز از نور خورشید برای گرمایش رایگان استفاده کنید.',
      'لباس گرم در خانه نیاز به مصرف انرژی را کم می‌کند.'
    ],
    averageHouseholdConsumption: 350
  };

  // تولید داده
  const generateData = (city = 'all') => {
    const factor = city === 'all' ? 1 : 0.1 + Math.random() * 0.2;
    return {
      gas: {
        input: 24 * factor,
        consumption: {
          total: 22.5 * factor,
          peak: 1.2 * factor,
          peakHour: 20,
          sectors: { household: 10 * factor, industry: 7 * factor, power_plant: 4 * factor, public: 1 * factor, agriculture: 0.5 * factor }
        }
      },
      products: {
        gasoline: { supply: 50000 * factor, import: 5000 * factor, doc: 15 },
        diesel:   { supply: 80000 * factor, import: 2000 * factor, doc: 21 },
        lpg:      { supply: 10000 * factor, import: 3000 * factor, doc: 30 }
      },
      longTerm: {
        labels: Array.from({length: 24}, (_, i) => `ماه ${i+1}`),
        gas: Array.from({length: 24}, () => 500 + Math.random() * 200),
        gasoline: Array.from({length: 24}, () => 40 + Math.random() * 10),
      }
    };
  };

  const processDataForView = () => {
    const raw = generateData(state.city);
    raw.gas.input = Math.round(raw.gas.input * 2) / 2;
    raw.gas.consumption.total = Math.round(raw.gas.consumption.total * 2) / 2;
    Object.keys(raw.products).forEach(p => { raw.products[p].supply = Math.round(raw.products[p].supply / 1000) * 1000; });
    return raw;
  };

  const updateKPIs = (data) => {
    const balEl = document.getElementById('kpi-gas-balance');
    const conEl = document.getElementById('kpi-gas-consumption');
    const peakEl = document.getElementById('kpi-gas-peak');
    const gasDocEl = document.getElementById('kpi-gasoline-doc');
    const dieselDocEl = document.getElementById('kpi-diesel-doc');
    if (!balEl || !conEl || !peakEl || !gasDocEl || !dieselDocEl) return;

    const gasBalance = data.gas.input - data.gas.consumption.total;
    balEl.textContent = `${gasBalance >= 0 ? '+' : ''}${gasBalance.toFixed(1)}`;
    balEl.className = `text-2xl font-extrabold mt-2 ${gasBalance >= 0 ? 'text-green-400' : 'text-red-400'}`;

    conEl.textContent = data.gas.consumption.total.toFixed(1);
    peakEl.innerHTML = `${data.gas.consumption.peak.toFixed(1)} <span class="text-xs text-slate-500">@ ${data.gas.consumption.peakHour}:00</span>`;
    gasDocEl.textContent = data.products.gasoline.doc;
    dieselDocEl.textContent = data.products.diesel.doc;
  };

  const updatePublicInfoSection = () => {
    const statuses = ['normal', 'high', 'critical'];
    const cur = statuses[Math.floor(Math.random() * statuses.length)];
    const textEl = document.getElementById('network-status-text');
    const g = document.getElementById('light-green');
    const y = document.getElementById('light-yellow');
    const r = document.getElementById('light-red');
    if (!textEl || !g || !y || !r) return;

    [g, y, r].forEach(el => el.className = 'inline-block w-5 h-5 rounded-full bg-slate-600');

    if (cur === 'normal') {
      g.classList.remove('bg-slate-600'); g.classList.add('bg-green-500', 'shadow');
      textEl.textContent = 'مصرف در حالت عادی است.'; textEl.className = 'text-base font-medium text-green-400';
    } else if (cur === 'high') {
      y.classList.remove('bg-slate-600'); y.classList.add('bg-amber-500', 'shadow');
      textEl.textContent = 'مصرف بالا است، لطفا صرفه‌جویی کنید.'; textEl.className = 'text-base font-medium text-amber-400';
    } else {
      r.classList.remove('bg-slate-600'); r.classList.add('bg-red-500', 'shadow');
      textEl.textContent = 'اوج مصرف! مصرف خود را به حداقل برسانید.'; textEl.className = 'text-base font-medium text-red-400';
    }

    const tips = mockDatabase.savingTips;
    const tipIndex = Math.floor(Math.random() * tips.length);
    const tipEl = document.getElementById('saving-tip-text');
    if (tipEl) tipEl.textContent = tips[tipIndex];
  };

  const updateBadges = () => {
    const now = new Date(); now.setHours(now.getHours() - 48);
    const lastUpdated = now.toLocaleDateString('fa-IR', { hour: '2-digit', minute: '2-digit' });
    document.querySelectorAll('.widget-badge').forEach(el => {
      el.innerHTML = `
        <span class="text-[10px] px-2 py-0.5 rounded-full font-medium bg-cyan-700 text-white">عمومی</span>
        <span class="text-xs text-slate-400 mr-2">بروزرسانی: ${lastUpdated}</span>
      `;
    });
  };

  const createOrUpdateCharts = (data) => {
    if (window.Chart && Chart.defaults) {
      Chart.defaults.color = '#94a3b8';
      Chart.defaults.font.family = 'Vazirmatn';
    }

    // آبشاری (bar segment)
    const wEl = document.getElementById('gasBalanceWaterfallChart');
    if (wEl) {
      const ctx = wEl.getContext('2d');
      const c = data.gas.consumption.sectors;
      const balance = data.gas.input - data.gas.consumption.total;
      if (charts.waterfall) charts.waterfall.destroy();
      charts.waterfall = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['ورودی', 'خانگی', 'صنعت', 'نیروگاه', 'سایر', 'تراز نهایی'],
          datasets: [{
            label: 'تراز گاز',
            data: [
              [0, data.gas.input],
              [data.gas.input, data.gas.input - c.household],
              [data.gas.input - c.household, data.gas.input - c.household - c.industry],
              [data.gas.input - c.household - c.industry, data.gas.input - c.household - c.industry - c.power_plant],
              [data.gas.input - c.household - c.industry - c.power_plant, balance],
              [0, balance]
            ],
            backgroundColor: ['#06b6d4','#ef4444','#ef4444','#ef4444','#ef4444', balance >= 0 ? '#22c55e' : '#ef4444'],
            borderRadius: 4,
            parsing: { xAxisKey: undefined, yAxisKey: undefined }
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: { y: { title: { display: true, text: 'MCM' } } }
        }
      });
    }

    // دونات سهم
    const dEl = document.getElementById('gasConsumptionShareChart');
    if (dEl) {
      const ctx = dEl.getContext('2d');
      if (charts.donut) charts.donut.destroy();
      charts.donut = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['خانگی', 'صنعت', 'نیروگاه', 'دولتی', 'کشاورزی'],
          datasets: [{
            data: Object.values(data.gas.consumption.sectors),
            backgroundColor: ['#0ea5e9','#f97316','#8b5cf6','#eab308','#14b8a6'],
            borderColor: '#1e293b'
          }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }
      });
    }

    // بار انباشته تامین فرآورده‌ها
    const pEl = document.getElementById('productSupplyChart');
    if (pEl) {
      const ctx = pEl.getContext('2d');
      if (charts.product) charts.product.destroy();
      charts.product = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['بنزین','گازوئیل','گاز مایع'],
          datasets: [
            { label: 'تولید داخلی', data: Object.values(data.products).map(p => p.supply - p.import), backgroundColor: '#0e7490' },
            { label: 'واردات', data: Object.values(data.products).map(p => p.import), backgroundColor: '#f59e0b' }
          ]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          scales: { x: { stacked: true }, y: { stacked: true, title: { display: true, text: 'هزار لیتر' } } },
          plugins: { legend: { position: 'top' } }
        }
      });
    }

    // روند ۲۴ ماهه
    const tEl = document.getElementById('longTermTrendChart');
    if (tEl) {
      const ctx = tEl.getContext('2d');
      if (charts.trend) charts.trend.destroy();
      charts.trend = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.longTerm.labels,
          datasets: [
            { label: 'مصرف گاز (MCM)', data: data.longTerm.gas, borderColor: '#0ea5e9', backgroundColor: '#0ea5e920', yAxisID: 'yGas', tension: 0.3, fill: true },
            { label: 'مصرف بنزین (kt)', data: data.longTerm.gasoline, borderColor: '#f97316', backgroundColor: '#f9731620', yAxisID: 'yProduct', tension: 0.3, fill: true }
          ]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          scales: {
            yGas: { type: 'linear', display: true, position: 'left', title: { display: true, text: 'MCM' } },
            yProduct: { type: 'linear', display: true, position: 'right', title: { display: true, text: 'kt' }, grid: { drawOnChartArea: false } }
          },
          plugins: { legend: { position: 'top' } }
        }
      });
    }
  };

  const populateFilters = () => {
    const cityFilter = document.getElementById('cityFilter');
    if (!cityFilter) return;
    cityFilter.innerHTML = '<option value="all">کل استان</option>';
    mockDatabase.cities.filter(c => c.subscriptions >= 1000).forEach(city => {
      const opt = document.createElement('option');
      opt.value = city.id; opt.textContent = city.name;
      cityFilter.appendChild(opt);
    });
    cityFilter.value = state.city;
  };

  const handleConsumptionCalculation = () => {
    const inputEl = document.getElementById('user-consumption-input');
    const resultEl = document.getElementById('calculator-result');
    if (!inputEl || !resultEl) return;

    const userValue = parseFloat(inputEl.value);
    if (!userValue || userValue <= 0) {
      resultEl.innerHTML = `<p class="text-amber-400">لطفا یک مقدار معتبر وارد کنید.</p>`;
      return;
    }
    const avg = mockDatabase.averageHouseholdConsumption;
    const diff = ((userValue - avg) / avg) * 100;
    let msg = '';
    if (diff > 10) {
      msg = `<p class="text-red-400 text-lg">مصرف شما <span class="font-bold">${Math.round(diff)}٪</span> بالاتر از میانگین است.</p><p class="text-sm text-slate-400 mt-1">با بررسی نکته روز می‌توانید مصرف را بهینه کنید.</p>`;
    } else if (diff < -10) {
      msg = `<p class="text-green-400 text-lg">عالی! مصرف شما <span class="font-bold">${Math.abs(Math.round(diff))}%</span> پایین‌تر از میانگین است.</p><p class="text-sm text-slate-400 mt-1">از شما برای مدیریت بهینه مصرف سپاسگزاریم.</p>`;
    } else {
      msg = `<p class="text-cyan-400 text-lg">مصرف شما در محدوده میانگین استان قرار دارد.</p><p class="text-sm text-slate-400 mt-1">با صرفه‌جویی بیشتر، به پایداری شبکه کمک کنید.</p>`;
    }
    resultEl.innerHTML = msg;
  };

  const updateDashboard = () => {
    const data = processDataForView();
    updateKPIs(data);
    updateBadges();
    updatePublicInfoSection();
    createOrUpdateCharts(data);
  };

  // لیسنرها
  document.querySelectorAll('.filter-select').forEach(sel => {
    sel.addEventListener('change', (e) => {
      const key = e.target.id.replace('Filter', '');
      if (key === 'time') {
        state.period = e.target.value;
      } else {
        state[key] = e.target.value;
      }
      updateDashboard();
    });
  });
  const calcBtn = document.getElementById('calculate-btn');
  if (calcBtn) calcBtn.addEventListener('click', handleConsumptionCalculation);

  // اولیه
  populateFilters();
  updateDashboard();
});

