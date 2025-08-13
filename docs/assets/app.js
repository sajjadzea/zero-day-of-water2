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

// شبیه‌ساز آینده آب
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
      const rainVal = rain.value || rain.getAttribute('value') || '0';
      const cutVal = cut.value || cut.getAttribute('value') || '0';
      const prompt = `دستور: شبیه‌ساز منابع آب مشهد.
ورودی:
- تغییر بارش ماه آینده: ${rainVal} میلی‌متر
- کاهش مصرف همگانی: ${cutVal} درصد
خروجی JSON معتبر با ساختار:
{
  "bullets_fa":["نکته"],
  "impact_index":عدد,
  "note_fa":"متن",
}`;
      const text = await askGemini(prompt, { model: 'gemini-2.0-flash' });
      let data;
      try {
        data = JSON.parse(text);
      } catch (_) {
        out.textContent = '⚠️ پاسخ نامعتبر.';
        return;
      }
      const ul = document.createElement('ul');
      ul.className = 'list-disc pr-4';
      (data.bullets_fa || []).forEach(b => {
        const li = document.createElement('li');
        li.className = 'mb-1';
        li.textContent = b;
        ul.appendChild(li);
      });
      const impact = document.createElement('p');
      impact.className = 'font-bold mt-2';
      impact.textContent = 'شاخص تأثیر: ' + nf.format(data.impact_index);
      const note = document.createElement('p');
      note.className = 'mt-1';
      note.textContent = data.note_fa || '';
      out.replaceChildren(ul, impact, note);
    } catch (e) {
      out.textContent = '⚠️ خطا در شبیه‌سازی.';
      console.error(e);
    } finally {
      hideThinking(btn, thinking, [rain, cut]);
    }
  });
})();

// راهکارهای هوشمند
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
      const members = fam.value || '4';
      const shower = shw.value || '10';
      const prompt = `دستور: مشاور صرفه‌جویی آب هستی.
ورودی: خانواده ${members} نفره، زمان حمام ${shower} دقیقه.
۵ توصیه کوتاه ارائه بده.
خروجی JSON معتبر با ساختار:
{
  "bullets_fa":[{"tip":"متن","liters_per_day":عدد}]
}`;
      const text = await askGemini(prompt, { model: 'gemini-2.0-flash' });
      let data;
      try {
        data = JSON.parse(text);
      } catch (_) {
        out.textContent = '⚠️ پاسخ نامعتبر.';
        return;
      }
      const ul = document.createElement('ul');
      ul.className = 'list-disc pr-4';
      (data.bullets_fa || []).forEach(t => {
        const li = document.createElement('li');
        const tip = document.createElement('span');
        tip.textContent = t.tip + ': ';
        const strong = document.createElement('strong');
        strong.textContent = nf.format(t.liters_per_day) + ' لیتر/روز';
        li.appendChild(tip);
        li.appendChild(strong);
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

