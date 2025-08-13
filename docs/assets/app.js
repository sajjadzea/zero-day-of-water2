const nf = new Intl.NumberFormat('fa-IR');
const pf = new Intl.NumberFormat('fa-IR', { maximumFractionDigits: 1 });

async function parseMaybeJson(res) {
  const raw = await res.text();
  console.log('[AI raw]', res.status, raw);
  try { return JSON.parse(raw); } catch { return raw; }
}

function pickByType(payload, type) {
  if (!payload) return null;
  if (Array.isArray(payload)) {
    const found = payload.find(x => x && x.type === type);
    if (found) return found;
    if (payload.length === 1) return payload[0];
    return null;
  }
  if (payload.type === type) return payload;
  return null;
}

function toNum(v) {
  const n = typeof v === 'string' ? Number(v.replace(/[^\d\.\-]/g,'')) : Number(v);
  return Number.isFinite(n) ? n : 0;
}

function renderSkeleton(target) {
  const wrapper = document.createElement('div');
  wrapper.className = 'space-y-2 animate-pulse';
  const line1 = document.createElement('div');
  line1.className = 'h-4 bg-gray-200 rounded';
  const line2 = document.createElement('div');
  line2.className = 'h-4 bg-gray-200 rounded w-5/6';
  const line3 = document.createElement('div');
  line3.className = 'h-4 bg-gray-200 rounded w-4/6';
  wrapper.append(line1, line2, line3);
  target.replaceChildren(wrapper);
}

function showThinking(btn, thinkingEl, inputEls = []) {
  thinkingEl.classList.remove('hidden');
  btn.disabled = true;
  btn.dataset.orig = btn.textContent;
  btn.textContent = '✨ در حال پردازش…';
  btn.classList.add('opacity-90');
  inputEls.forEach(el => el.setAttribute('aria-busy', 'true'));
}

function hideThinking(btn, thinkingEl, inputEls = []) {
  thinkingEl.classList.add('hidden');
  btn.disabled = false;
  btn.textContent = btn.dataset.orig || btn.textContent;
  btn.classList.remove('opacity-90');
  inputEls.forEach(el => el.removeAttribute('aria-busy'));
}

// 1) ردپای آب غذا -------------------------------------------------------
(function () {
  const btn = document.getElementById('calc-water-btn');
  const inp = document.getElementById('food-input');
  const out = document.getElementById('water-result');
  const thinking = document.getElementById('ai-thinking');
  if (!btn || !inp || !out || !thinking) return;

  btn.addEventListener('click', async () => {
    const foods = (inp.value || '').trim();
    if (!foods) { out.textContent = 'لطفاً مواد غذایی را وارد کنید.'; return; }

    renderSkeleton(out);
    showThinking(btn, thinking, [inp]);
    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ feature: 'water', q: foods })
      });
      const data = await parseMaybeJson(res);
      const block = pickByType(data, 'water');
      if (!block) throw new Error('water: invalid block');

      const total = toNum(block.totalWater);
      out.innerHTML = '';
      const h = document.createElement('div');
      h.className = 'font-bold mb-1';
      h.textContent = `مجموع ردپای آب: ${nf.format(total)} لیتر`;
      const ul = document.createElement('ul');
      ul.className = 'list-disc pr-4';
      (block.items || []).forEach(it => {
        const li = document.createElement('li');
        li.textContent = `${it.name}: ${nf.format(toNum(it.water))} لیتر`;
        ul.append(li);
      });
      out.append(h, ul);
    } catch (e) {
      console.error('[water]', e);
      out.textContent = '⚠ پاسخ نامعتبر.';
    } finally {
      hideThinking(btn, thinking, [inp]);
    }
  });
})();

// 2) شبیه‌ساز آینده آب ---------------------------------------------------
(function () {
  const btn = document.getElementById('simulate-btn');
  const rain = document.getElementById('rain-slider');
  const cut = document.getElementById('cut-slider');
  const out = document.getElementById('simulate-result');
  const thinking = document.getElementById('simulate-thinking');
  if (!btn || !rain || !cut || !out || !thinking) return;

  btn.addEventListener('click', async () => {
    renderSkeleton(out);
    showThinking(btn, thinking, [rain, cut]);
    try {
      const payload = {
        feature: 'simulate',
        rainfall: toNum(rain.value || rain.getAttribute('value') || '0'),
        reduction: toNum(cut.value || cut.getAttribute('value') || '0')
      };
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await parseMaybeJson(res);
      const block = pickByType(data, 'simulate');
      if (!block || !block.forecast) throw new Error('simulate: invalid block');

      const fc = block.forecast;
      const pct = toNum(fc.reservoirChangePct);
      const status = fc.status || '';
      const notes = fc.notes || '';

      out.innerHTML = '';
      const p1 = document.createElement('p');
      p1.className = 'font-bold';
      p1.textContent = `وضعیت: ${status}`;
      const p2 = document.createElement('p');
      p2.textContent = `تغییر مخزن: ${pf.format(pct)}%`;
      const p3 = document.createElement('p');
      p3.textContent = notes;
      out.append(p1, p2, p3);
    } catch (e) {
      console.error('[simulate]', e);
      out.textContent = '⚠ خطا در شبیه‌سازی.';
    } finally {
      hideThinking(btn, thinking, [rain, cut]);
    }
  });
})();

// 3) راهکارهای صرفه‌جویی -------------------------------------------------
(function () {
  const btn = document.getElementById('solution-btn');
  const fam = document.getElementById('family-input');
  const shw = document.getElementById('shower-input');
  const out = document.getElementById('solution-result');
  const thinking = document.getElementById('solution-thinking');
  if (!btn || !fam || !shw || !out || !thinking) return;

  btn.addEventListener('click', async () => {
    renderSkeleton(out);
    showThinking(btn, thinking, [fam, shw]);
    try {
      const payload = {
        feature: 'solutions',
        family: toNum(fam.value),
        shower: toNum(shw.value)
      };
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await parseMaybeJson(res);
      const block = pickByType(data, 'solutions');
      if (!block || !Array.isArray(block.tips)) throw new Error('solutions: invalid block');

      out.innerHTML = '';
      const ul = document.createElement('ul');
      ul.className = 'list-disc pr-4 space-y-1';
      block.tips.forEach(t => {
        const li = document.createElement('li');
        li.textContent = `${t.title} — صرفه‌جویی: ${nf.format(toNum(t.impact_liters))} لیتر/روز`;
        ul.append(li);
      });
      out.append(ul);
    } catch (e) {
      console.error('[solutions]', e);
      out.textContent = '⚠ خطا در تولید راهکار.';
    } finally {
      hideThinking(btn, thinking, [fam, shw]);
    }
  });
})();

