'use strict';
(function () {
  const debug = new URLSearchParams(location.search).get('debug-curtain') === '1';
  function parseMaxTransitionMs(els) {
    let maxMs = 0;
    els.forEach(el => {
      const cs = getComputedStyle(el);
      const durs = cs.transitionDuration.split(',').map(s => parseFloat(s) || 0);
      const dels = cs.transitionDelay.split(',').map(s => parseFloat(s) || 0);
      const n = Math.max(durs.length, dels.length);
      for (let i = 0; i < n; i++) {
        const dur = (durs[i] || durs[durs.length - 1] || 0) * 1000;
        const del = (dels[i] || dels[dels.length - 1] || 0) * 1000;
        maxMs = Math.max(maxMs, dur + del);
      }
    });
    return Math.max(400, maxMs);
  }
  function animatedNavigate(e) {
    e.preventDefault();
    const el = e.currentTarget;
    const href = el.href;
    const sector = el.getAttribute('data-sector');
    if (debug) console.log('Animated navigate start', { href, sector });
    if (sector) localStorage.setItem('sector', sector);
    const curtain = document.getElementById('curtain');
    const halves = curtain ? curtain.querySelectorAll('.curtain-half') : [];
    if (!curtain || !halves.length) {
      window.location.href = href;
      return;
    }
    curtain.classList.remove('hidden');
    curtain.offsetWidth;
    curtain.classList.add('open');
    let remaining = halves.length;
    let navigated = false;
    function go() {
      if (navigated) return;
      navigated = true;
      window.location.assign(href);
    }
    const fallbackMs = parseMaxTransitionMs(halves) + 150;
    if (debug) console.log('Curtain fallback timeout', fallbackMs);
    const timeoutId = setTimeout(go, fallbackMs);
    halves.forEach(half => {
      half.addEventListener('transitionend', function () {
        if (navigated) return;
        if (--remaining === 0) {
          clearTimeout(timeoutId);
          go();
        }
      }, { once: true });
    });
  }
  function bind(el) {
    if (el.__curtainBound) return;
    el.__curtainBound = true;
    el.addEventListener('click', animatedNavigate);
    if (debug) console.log('Curtain bound to', el);
  }
  document.querySelectorAll('[data-sector]').forEach(bind);
  const sector = localStorage.getItem('sector');
  if (sector) {
    const names = { water: 'آب', electricity: 'برق', gas: 'گاز و فرآورده‌های نفتی' };
    const quick = document.getElementById('quick-entry');
    if (quick) {
      quick.href = sector + '/';
      quick.textContent = 'ورود سریع به ' + (names[sector] || sector);
      quick.setAttribute('data-sector', sector);
      quick.classList.remove('hidden');
      bind(quick);
    }
  }
})();
(function () {
  const params = new URLSearchParams(location.search);
  if (params.get('debug-curtain') !== '1') return;
  if (!document.getElementById('curtain') || !document.querySelector('[data-sector]')) return;
  const curtain = document.getElementById('curtain');
  const halves = Array.from(curtain.querySelectorAll('.curtain-half'));
  console.log('Curtain present:', !!curtain);
  console.log('Curtain halves:', halves.length);
  if (!curtain || !halves.length) return;
  halves.forEach((half, i) => {
    const cs = getComputedStyle(half);
    console.log(`Half ${i} computed styles`, {
      'transition-duration': cs.transitionDuration,
      'transition-delay': cs.transitionDelay,
      transform: cs.transform,
    });
    ['transitionend', 'transitioncancel', 'animationend'].forEach(ev => {
      half.addEventListener(ev, e => {
        console.log(`Half ${i} ${ev}`, { elapsedTime: e.elapsedTime });
      });
    });
  });
  let prev = curtain.className;
  console.log('Curtain initial classes:', prev);
  const mo = new MutationObserver(() => {
    const curr = curtain.className;
    if (!prev.includes('open') && curr.includes('open')) {
      console.log('Curtain classes before .open:', prev);
      console.log('Curtain classes after .open:', curr);
    } else {
      console.log('Curtain class change:', curr);
    }
    prev = curr;
  });
  mo.observe(curtain, { attributes: true });
  function parseMaxTransitionMs(els) {
    let maxMs = 0;
    els.forEach(el => {
      const cs = getComputedStyle(el);
      const durs = cs.transitionDuration.split(',').map(s => parseFloat(s) || 0);
      const dels = cs.transitionDelay.split(',').map(s => parseFloat(s) || 0);
      const n = Math.max(durs.length, dels.length);
      for (let i = 0; i < n; i++) {
        const dur = (durs[i] || durs[durs.length - 1] || 0) * 1000;
        const del = (dels[i] || dels[dels.length - 1] || 0) * 1000;
        maxMs = Math.max(maxMs, dur + del);
      }
    });
    return Math.max(400, maxMs);
  }
  console.log('Max transition time (ms):', parseMaxTransitionMs(halves));
})();
