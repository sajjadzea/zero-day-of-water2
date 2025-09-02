const fs = require('fs');
const p = require('path');

function readJSON(fp){ try{ return JSON.parse(fs.readFileSync(fp,'utf8')); }catch(e){ return null; } }
function exists(fp){ return fs.existsSync(fp) && fs.statSync(fp).isFile(); }

const root = p.resolve(__dirname, '..');
const manifestPath = p.join(root, 'docs/amaayesh/layers.config.json');
const jsPath       = p.join(root, 'docs/assets/js/amaayesh-map.js');
const htmlPath     = p.join(root, 'docs/amaayesh/index.html');

// 1) Manifest
const manifest = readJSON(manifestPath);
const files = Array.isArray(manifest?.files) ? manifest.files : [];
const repoFiles = files.map(f => p.join(root, 'docs/amaayesh', f.replace(/^data\//,'data/')));

// 2) JS references (inManifest('...') و fetch ... .geojson)
const js = fs.existsSync(jsPath) ? fs.readFileSync(jsPath,'utf8') : '';
const m = [...js.matchAll(/inManifest\('([^']+)'\)/g)].map(x=>x[1]);
const f = [...js.matchAll(/fetchJSONWithFallback\('([^']+\.geojson)'\)/g)].map(x=>x[1]);
const jsRefs = Array.from(new Set([...m, ...f]));

// 3) Province boundary possible locations
const boundaryCandidates = [
  p.join(root, 'docs/data/amaayesh/khorasan_razavi_combined.geojson'),
  p.join(root, 'docs/amaayesh/khorasan_razavi_combined.geojson'),
];

// 4) HTML script type
const html = fs.existsSync(htmlPath) ? fs.readFileSync(htmlPath,'utf8') : '';
const isModule = /<script[^>]+type=["']module["'][^>]*amaayesh-map\.js/.test(html);

// Build report
const missingOnDisk = repoFiles.filter(fp => !exists(fp)).map(fp => p.relative(root, fp));
const manifestVsJs_missingInManifest = jsRefs.filter(x => x.endsWith('.geojson') && !files.includes(x));
const manifestVsJs_unusedInCode      = files.filter(x => !jsRefs.includes(x));
const boundaryFound = boundaryCandidates.find(exists);

const report = {
  ok: true,
  paths: {
    manifest: p.relative(root, manifestPath),
    js:       p.relative(root, jsPath),
    html:     p.relative(root, htmlPath),
  },
  manifest: { title: manifest?.title || null, files },
  js_refs: jsRefs,
  diffs: {
    missing_on_disk: missingOnDisk,
    missing_in_manifest: manifestVsJs_missingInManifest,
    unused_in_code: manifestVsJs_unusedInCode,
  },
  boundary: { exists: !!boundaryFound, path: boundaryFound ? p.relative(root, boundaryFound) : null },
  html_script_is_module: isModule
};

// Print
console.log('=== AMAAYESH AUDIT REPORT ===');
console.table({
  'manifest.exists': !!manifest,
  'manifest.files.count': files.length,
  'js.exists': !!js,
  'html.script.type=module': isModule,
  'repo.missing.files': missingOnDisk.length,
  'refs.missing.in.manifest': manifestVsJs_missingInManifest.length,
  'manifest.unused.in.code': manifestVsJs_unusedInCode.length,
  'boundary.exists': !!boundaryFound,
});
console.log('— missing_on_disk:', missingOnDisk);
console.log('— missing_in_manifest:', manifestVsJs_missingInManifest);
console.log('— unused_in_code:', manifestVsJs_unusedInCode);
console.log('— boundary:', report.boundary);
console.log('— js_refs:', jsRefs);
console.log('— manifest.files:', files);
console.log('=== END REPORT ===');
process.exit(0);
