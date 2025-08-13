// === Utils (بالای فایل) ===
const nf = new Intl.NumberFormat('fa-IR');
const pf = new Intl.NumberFormat('fa-IR', { maximumFractionDigits: 1 });

function toNum(v){
  const n = typeof v === 'string' ? Number(v.replace(/[^\d.\-]/g,'')) : Number(v);
  return Number.isFinite(n) ? n : 0;
}
async function parseMaybeJson(res){
  const raw = await res.text();
  try { return JSON.parse(raw); } catch { return raw; }
}
function pickByType(payload, type){
  if (!payload) return null;
  if (Array.isArray(payload)) return payload.find(x => x && x.type === type) || payload[0] || null;
  return payload.type === type ? payload : payload;
}
const faStatus = s => ({normal:'عادی', improving:'روبه‌بهبود', critical:'بحرانی'}[(s||'').toLowerCase()] || (s||''));

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
    const res = await fetch('/api/gemini', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify(payload)
    });
    const data = await parseMaybeJson(res);
    const block = pickByType(data, 'simulate');
    const fc = block?.forecast || {};
    const pct = toNum(fc.reservoirChangePct);
    const status = faStatus(fc.status);

    out.innerHTML = '';
    out.append(
      Object.assign(document.createElement('p'), { className:'font-bold', textContent:`وضعیت: ${status}` }),
      Object.assign(document.createElement('p'), { textContent:`تغییر مخزن: ${pf.format(pct)}٪` }),
      Object.assign(document.createElement('p'), { className:'text-slate-600', textContent: fc.notes || '' })
    );

    if (window.renderShareBar) renderShareBar(document.getElementById('simulate-share'), {
      feature:'simulate',
      state:{ rainfall:payload.rainfall, reduction:payload.reduction },
      result:{ forecast: fc }
    });
  } catch(e){
    console.error('[simulate]', e); out.textContent = '⚠ خطا در شبیه‌سازی.';
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
