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

function skeleton(){
  return '<div class="space-y-2 animate-pulse"><div class="h-4 bg-slate-200 rounded"></div><div class="h-4 bg-slate-200 rounded w-5/6"></div><div class="h-4 bg-slate-200 rounded w-4/6"></div></div>';
}

function showThinkingUI(){}
function hideThinkingUI(){}

// شبیه‌ساز ---------------------------------------------------------------
async function handleSimulation() {
  const consumptionSlider = document.getElementById('cut-slider');
  const rainfallSlider = document.getElementById('rain-slider');
  const simulateBtn = document.getElementById('simulate-btn');
  const simulationLoader = document.getElementById('simulate-thinking');
  const simulationResultDiv = document.getElementById('simulate-result');
  const simulationResultContainer = simulationResultDiv;

  const baseDays = 32;
  const consumptionReduction = Number(consumptionSlider.value);
  const futureRainfall = Number(rainfallSlider.value);

  simulationResultContainer.classList.remove('hidden');
  simulationLoader.classList.remove('hidden');
  simulationResultDiv.innerHTML = '';
  simulateBtn.disabled = true;
  simulateBtn.classList.add('opacity-50');

  const newDaily = 0.953 * (1 - consumptionReduction / 100);
  const added = futureRainfall * 0.5;
  const newTotal = 30.5 + added;
  const newDayZero = Math.round(newTotal / newDaily);
  const delta = newDayZero - baseDays;

  const deltaColor = delta >= 0 ? 'text-green-600' : 'text-red-600';
  const deltaSign = delta >= 0 ? '+' : '';
  const localParagraph = (dz, d, rain, cut) =>
    `با کاهش ${cut}% مصرف و بارش ${rain} میلی‌متر، روز صفر از ${(dz - d).toLocaleString('fa-IR')} به ${dz.toLocaleString('fa-IR')} رسید (${deltaSign}${Math.abs(d).toLocaleString('fa-IR')} روز). این یعنی با همکاری شهروندان و اندکی بارش، می‌توانیم بحران را عقب بیندازیم.`;

  simulationResultDiv.innerHTML = `
    <div class="simulate-result rounded-xl bg-green-50 border border-green-200 p-6">
      <div class="result-line flex items-baseline justify-center flex-wrap gap-2">
        <span class="result-number main text-blue-600 font-extrabold text-6xl sm:text-7xl">${newDayZero.toLocaleString('fa-IR')}</span>
        <span class="result-unit font-bold text-2xl">روز</span>
        <span class="result-number delta ${deltaColor} font-extrabold text-4xl sm:text-5xl">(${deltaSign}${Math.abs(delta).toLocaleString('fa-IR')} روز)</span>
      </div>
      <p id="sim-paragraph" class="result-paragraph mt-3 text-slate-700 text-lg">${localParagraph(newDayZero, delta, futureRainfall, consumptionReduction)}</p>
    </div>
  `;
  simulationLoader.classList.add('hidden');

  try {
    const prompt = `
      You are a water crisis analyst for Mashhad. Return JSON:
      {
        "new_day_zero": ${newDayZero},
        "explanation": "<FA simple encouraging paragraph>"
      }
      Write explanation in Persian, single paragraph, plain text, no markdown.
    `;
    const res = await fetch('/.netlify/functions/gemini', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ prompt, json: true })
    });
    if (!res.ok) throw new Error('AI_HTTP_' + res.status);
    const data = await res.json();
    const text = (data && data.text) ? data.text : '';
    let ai;
    try { ai = typeof text === 'string' ? JSON.parse(text) : text; } catch {}
    const expl = ai?.explanation || text || '';
    if (expl) document.getElementById('sim-paragraph').textContent = expl;
  } catch (err) {
    console.warn('AI fallback used', err);
  } finally {
    simulateBtn.disabled = false;
    simulateBtn.classList.remove('opacity-50');
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
