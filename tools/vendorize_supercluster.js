const fs = require('fs');
const path = require('path');

function ensureDir(p){ if(!fs.existsSync(p)) fs.mkdirSync(p, {recursive:true}); }

function copyFileSafe(src, dst){
  ensureDir(path.dirname(dst));
  fs.copyFileSync(src, dst);
  console.log('[vendor] copied', src, '→', dst);
}

(function(){
  // resolve package root
  const pkg = require.resolve('supercluster/package.json');
  const root = path.dirname(pkg);
  // common dist locations
  const candidates = [
    path.join(root, 'dist/supercluster.min.js'),
    path.join(root, 'dist/supercluster.js'),
    path.join(root, 'index.js') // fallback
  ];
  const src = candidates.find(p => fs.existsSync(p));
  if(!src) { console.error('[vendor] supercluster build not found'); process.exit(1); }
  const dst = path.resolve(__dirname, '../docs/assets/vendor/supercluster/supercluster.min.js');
  copyFileSafe(src, dst);
})();
