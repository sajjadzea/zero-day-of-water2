export function renderWaffle(el, percent) {
  const grid = 10 * 10;
  const tiles = percent > 0 ? Math.max(1, Math.round(grid * (percent / 100))) : 0;
  el.innerHTML = '';
  el.classList.add('grid','grid-cols-10','gap-1');
  for (let i = 0; i < grid; i++) {
    const d = document.createElement('div');
    d.className = 'h-3 w-3 rounded';
    d.setAttribute('aria-hidden','true');
    if (i < tiles) d.classList.add('bg-sky-500'); else d.classList.add('bg-gray-200');
    el.appendChild(d);
  }
  el.setAttribute('role','img');
  el.setAttribute('aria-label', `پُرشدگی ${percent}%`);
}

document.addEventListener('DOMContentLoaded', () => {
  const DATA = {
    doostiPct: 5,
    toroghPct: 6,
    kardehPct: 0,
    erakPct: 0,
    ...window.DATA
  };
  const dams = [
    {sel:'#waffle-doosti', pct: DATA.doostiPct},
    {sel:'#waffle-torogh', pct: DATA.toroghPct},
    {sel:'#waffle-kardeh', pct: DATA.kardehPct},
    {sel:'#waffle-erak',   pct: DATA.erakPct},
  ];
  dams.forEach(d => {
    const el = document.querySelector(d.sel);
    if (el && typeof d.pct === 'number') {
      renderWaffle(el, d.pct);
    } else if (el) {
      el.textContent = 'داده موجود نیست';
    }
  });
});
