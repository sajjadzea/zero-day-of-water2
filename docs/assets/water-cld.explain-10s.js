(function(){ if(window.__EXPLAIN10__)return; window.__EXPLAIN10__=true;
function bestDelta(){
  const cards=[...document.querySelectorAll('.kpi')].map(k=>{
    const key=k.dataset.kpi||k.querySelector('.kpi-title')?.textContent?.trim();
    const chip=k.querySelector('.delta-chip')?.textContent||'0%'; const m=chip.match(/([+-]?\d+(\.\d+)?)%/);
    const d=m?parseFloat(m[1]):0; return {key,d};
  });
  return cards.sort((a,b)=>Math.abs(b.d)-Math.abs(a.d))[0]||{key:null,d:0};
}
function sentence(){
  const eff=parseFloat(document.getElementById('p-eff')?.value||'0.3');
  const dem=parseFloat(document.getElementById('p-dem')?.value||'0.6');
  const {key,d}=bestDelta(); if(!key) return '—';
  const dir=d>=0?'\u0627\u0641\u0632\u0627\u06cc\u0634':'\u06a9\u0627\u0647\u0634'; const kfa= key==='supply_demand_gap'?\u0027\u0634\u06a9\u0627\u0641 \u0639\u0631\u0636\u0647\u2013\u062a\u0642\u0627\u0636\u0627\u0027: key==='per_capita_use'?\u0027\u0645\u0635\u0631\u0641 \u0633\u0631\u0627\u0646\u0647\u0027:'\u0646\u0631\u062e \u062a\u0644\u0641\u0627\u062a';
  return `\u0628\u0627 \u062a\u0646\u0638\u06cc\u0645 eff=${eff.toFixed(2)} \u0648 dem=${dem.toFixed(2)}, ${kfa} ${dir} ${Math.abs(d).toFixed(1)}\u066a \u062f\u0627\u0634\u062a.`;
}
function render(){
  let el=document.getElementById('explain-10s'); if(!el){ el=document.createElement('div'); el.id='explain-10s'; el.style.cssText='margin-top:6px;color:#9fb3ad;font-size:12.5px'; const hero=document.querySelector('#hero-kpi .hero-left'); hero?.appendChild(el) }
  el.textContent=sentence();
}
document.addEventListener('model:updated',render);
document.readyState!=='loading'?render():window.addEventListener('DOMContentLoaded',render,{once:true});
})();
