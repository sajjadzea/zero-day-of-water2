const nf = new Intl.NumberFormat('fa-IR');

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

async function callGemini(payload) {
  const res = await fetch('/api/gemini', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const raw = await res.clone().text();
  console.log('[AI raw]', res.status, raw);
  let data = null;
  try { data = JSON.parse(raw); } catch (_) {}
  if (!res.ok) {
    const msg = data && typeof data === 'object' ? (data.details || data.error || raw) : raw;
    throw new Error(msg);
  }
  return data;
}

// 1) ردپای آب غذا -------------------------------------------------------
(function () {
  const btn = document.getElementById('btn-footprint');
  const inp = document.getElementById('food-input');
  const out = document.getElementById('out-footprint');
  const thinking = document.getElementById('ai-thinking');
  if (!btn || !inp || !out || !thinking) return;

  btn.addEventListener('click', async () => {
    const foods = (inp.value || '').trim();
    if (!foods) { out.textContent = 'لطفاً مواد غذایی را وارد کنید.'; return; }

    renderSkeleton(out);
    showThinking(btn, thinking, [inp]);
    try {
      const data = await callGemini({ feature: 'water', q: foods });
      const total = document.createElement('p');
      total.className = 'font-bold';
      total.textContent = nf.format(data.totalWater) + ' لیتر';
      const ul = document.createElement('ul');
      ul.className = 'list-disc pr-4';
      (data.items || []).forEach(it => {
        const li = document.createElement('li');
        li.textContent = `${it.name}: ${nf.format(it.water)} لیتر`;
        ul.appendChild(li);
      });
      out.replaceChildren(total, ul);
    } catch (e) {
      out.textContent = '⚠️ خطا در محاسبه.';
      console.error(e);
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
        rainfall: Number(rain.value || rain.getAttribute('value') || '0'),
        reduction: Number(cut.value || cut.getAttribute('value') || '0')
      };
      const data = await callGemini(payload);
      const fc = data.forecast || {};
      const status = document.createElement('p');
      status.className = 'font-bold';
      status.textContent = fc.status || '';
      const change = document.createElement('p');
      change.textContent = 'تغییر مخزن: ' + nf.format(fc.reservoirChangePct) + '%';
      const notes = document.createElement('p');
      notes.textContent = fc.notes || '';
      out.replaceChildren(status, change, notes);
    } catch (e) {
      out.textContent = '⚠️ خطا در شبیه‌سازی.';
      console.error(e);
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
        family: Number(fam.value || '0'),
        shower: Number(shw.value || '0')
      };
      const data = await callGemini(payload);
      const ul = document.createElement('ul');
      ul.className = 'list-disc pr-4';
      (data.tips || []).forEach(t => {
        const li = document.createElement('li');
        li.textContent = `${t.title}: ${nf.format(t.impact_liters)} لیتر`;
        ul.appendChild(li);
      });
      out.replaceChildren(ul);
    } catch (e) {
      out.textContent = '⚠️ خطا در تولید راهکار.';
      console.error(e);
    } finally {
      hideThinking(btn, thinking, [fam, shw]);
    }
  });
})();

