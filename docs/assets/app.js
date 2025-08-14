// === Utils (بالای فایل) ===
const nf = new Intl.NumberFormat('fa-IR');
const pf = new Intl.NumberFormat('fa-IR', { maximumFractionDigits: 1 });

function toNum(v){
  const n = typeof v === 'string' ? Number(v.replace(/[^\d.\-]/g,'')) : Number(v);
  return Number.isFinite(n) ? n : 0;
}
async function parseMaybeJson(res){
  if (!res) return res;
  if (typeof res === 'string') {
    try { return JSON.parse(res); } catch { return res; }
  }
  if (typeof res === 'object' && typeof res.text !== 'function') return res;
  const raw = await res.text();
  try { return JSON.parse(raw); } catch { return raw; }
}
function pickByType(payload, type){
  if (!payload) return null;
  if (Array.isArray(payload)) return payload.find(x => x && x.type === type) || payload[0] || null;
  return payload.type === type ? payload : payload;
}
const faStatus = s => ({normal:'عادی', improving:'روبه‌بهبود', critical:'بحرانی'}[(s||'').toLowerCase()] || (s||''));

async function callGeminiAPI(payload){
  const res = await fetch('/api/gemini', {
    method:'POST', headers:{'Content-Type':'application/json'},
    body: JSON.stringify(payload)
  });
  return await res.text();
}

const SAMPLE_SIMULATION = '{"newZeroDay":"۲۵ مهر ۱۴۰۴","daysChange":3,"note":"با این شرایط، روز صفر سه روز به تعویق می‌افتد."}';

function skeleton(){
  return '<div class="space-y-2 animate-pulse"><div class="h-4 bg-slate-200 rounded"></div><div class="h-4 bg-slate-200 rounded w-5/6"></div><div class="h-4 bg-slate-200 rounded w-4/6"></div></div>';
}

function showThinkingUI(){}
function hideThinkingUI(){}

// شبیه‌ساز ---------------------------------------------------------------
async function handleSimulation(){
  showThinkingUI();
  const btn = document.getElementById('simulate-btn');
  const thinking = document.getElementById('simulate-thinking');
  const out = document.getElementById('simulate-result');
  thinking?.classList.remove('hidden');
  btn?.setAttribute('disabled','true');
  out.innerHTML = skeleton();
  try {
    const payload = {
      feature: 'simulate',
      rainfall: toNum(document.getElementById('rain-slider')?.value),
      reduction: toNum(document.getElementById('cut-slider')?.value)
    };
    let raw;
    try {
      raw = await callGeminiAPI(payload);
    } catch (_) {
      raw = SAMPLE_SIMULATION;
    }
    const data = await parseMaybeJson(raw);
    if (!data || typeof data !== 'object') throw new Error('invalid');
    const newDayRaw = data.newZeroDay || data.new_day_zero || '';
    let newDay = newDayRaw;
    if (typeof newDayRaw === 'number' || (typeof newDayRaw === 'string' && /^\s*\d+\s*$/.test(newDayRaw))) {
      newDay = nf.format(toNum(newDayRaw));
    }
    const delta = toNum(data.daysChange ?? data.days_change);
    const note = data.note || data.description || data.explanation || '';

    const color = delta >= 0 ? 'text-green-600' : 'text-red-600';
    const sign = delta >= 0 ? '+' : '-';
    const deltaHtml = `<span class="${color} font-bold text-2xl">(${sign}${nf.format(Math.abs(delta))} روز)</span>`;
    const noteHtml = note ? `<p class="text-slate-700">${note}</p>` : '';

    out.className = 'mt-4 bg-green-50 rounded-xl p-6 shadow-sm text-right space-y-2';
    out.setAttribute('dir','rtl');
    out.innerHTML = `
        <p class="text-slate-600">روز صفر جدید:</p>
        <div class="flex items-baseline gap-2">
          <span class="result-number text-blue-600 text-6xl font-bold">${newDay}</span>
          <span class="text-blue-600 text-2xl">روز</span>
          ${deltaHtml}
        </div>
        ${noteHtml}
      `;

    if (window.renderShareBar) renderShareBar(document.getElementById('simulate-share'), {
      feature:'simulate',
      state:{ rainfall:payload.rainfall, reduction:payload.reduction },
      result:{ newZeroDay:newDay, daysChange:delta, note }
    });
  } catch(e){
    console.error('[simulate]', e);
    out.textContent = '⚠ پاسخ نامعتبر.';
  } finally {
    thinking?.classList.add('hidden');
    btn?.removeAttribute('disabled');
    hideThinkingUI?.();
  }
}

// راهکارها --------------------------------------------------------------
async function handleSolutions(){
  showThinkingUI();
  const btn = document.getElementById('solution-btn');
  const thinking = document.getElementById('solution-thinking');
  const out = document.getElementById('solution-result');
  thinking?.classList.remove('hidden');
  btn?.setAttribute('disabled','true');
  out.innerHTML = skeleton();
  try {
    const payload = {
      feature:'solutions',
      family: toNum(document.getElementById('family-input')?.value),
      shower: toNum(document.getElementById('shower-input')?.value)
    };
    const res = await fetch('/api/gemini', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) });
    const data = await parseMaybeJson(res);
    const block = pickByType(data, 'solutions');
    const tips = block?.tips || [];

    out.innerHTML = '';
    const ul = Object.assign(document.createElement('ul'), { className:'list-disc pr-5 space-y-1' });
    tips.forEach(t => {
      const li = document.createElement('li');
      li.textContent = `${t.title} — صرفه‌جویی: ${nf.format(toNum(t.impact_liters))} لیتر/روز`;
      ul.append(li);
    });
    out.append(ul);

    if (window.renderShareBar) renderShareBar(document.getElementById('solution-share'), {
      feature:'solutions', state:{ family:payload.family, shower:payload.shower }, result:{ tips }
    });
  } catch(e){
    console.error('[solutions]', e); out.textContent = '⚠ خطا در تولید راهکار.';
  } finally {
    thinking?.classList.add('hidden');
    btn?.removeAttribute('disabled');
    hideThinkingUI?.();
  }
}

// ردپای آب --------------------------------------------------------------
async function handleWater(){
  showThinkingUI();
  const btn = document.getElementById('calc-water-btn');
  const inp = document.getElementById('food-input');
  const thinking = document.getElementById('ai-thinking');
  const out = document.getElementById('water-result');
  thinking?.classList.remove('hidden');
  btn?.setAttribute('disabled','true');
  out.innerHTML = skeleton();
  try {
    const q = inp?.value || '';
    const res = await fetch('/api/gemini', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ feature:'water', q }) });
    const data = await parseMaybeJson(res);
    const block = pickByType(data, 'water') || {};
    const total = toNum(block.totalWater);
    const items = block.items || [];

    out.innerHTML = '';
    const head = Object.assign(document.createElement('div'), { className:'font-bold mb-1', textContent:`مجموع ردپای آب: ${nf.format(total)} لیتر` });
    const ul = Object.assign(document.createElement('ul'), { className:'list-disc pr-5 space-y-1' });
    items.forEach(it => {
      const li = document.createElement('li');
      li.textContent = `${it.name}: ${nf.format(toNum(it.water))} لیتر`;
      ul.append(li);
    });
    out.append(head, ul);

    if (window.renderShareBar) renderShareBar(document.getElementById('water-share'), { feature:'water', state:{ q }, result:{ totalWater: total, items } });
  } catch(e){
    console.error('[water]', e); out.textContent = '⚠ پاسخ نامعتبر.';
  } finally {
    thinking?.classList.add('hidden');
    btn?.removeAttribute('disabled');
    hideThinkingUI?.();
  }
}

document.getElementById('simulate-btn')?.addEventListener('click', handleSimulation);
document.getElementById('solution-btn')?.addEventListener('click', handleSolutions);
document.getElementById('calc-water-btn')?.addEventListener('click', handleWater);
