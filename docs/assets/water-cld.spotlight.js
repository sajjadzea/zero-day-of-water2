(function(){ if(window.__SPOTLIGHT__)return; window.__SPOTLIGHT__=true;
function flash(){ document.body.classList.add('spot-dim'); setTimeout(()=>document.body.classList.remove('spot-dim'),900) }
document.addEventListener('model:updated',flash);
})();
