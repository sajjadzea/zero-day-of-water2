const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const { minify } = require('terser');
const CleanCSS = require('clean-css');

const ROOT = process.cwd();
const ASSETS = path.join(ROOT, 'docs', 'assets');
const DIST = path.join(ASSETS, 'dist');

(async function main(){
  await fs.ensureDir(DIST);

  // 1) JS های CLD (به‌جز vendor/dist/worker)
  const jsFiles = glob.sync('**/*.js', {
    cwd: ASSETS, nodir: true, absolute: true,
    ignore: ['**/vendor/**','**/dist/**','**/*worker*.js','**/*sim-worker*.js']
  }).filter(f => /cld|water-cld/i.test(f));

  const weight = (p) => {
    const f = path.basename(p).toLowerCase();
    if (/guard|safe|batch|stub/.test(f)) return 10;
    if (/^water-cld(\.|-|$)/.test(f)) return 20; // core
    if (/controls|preset|presets|extras|legend|tour/.test(f)) return 30;
    if (/readability|scenario|scenarios|paths|provenance|param|a11y|aha|delta-kpi|fix-hints|spotlight|ghost/.test(f)) return 40;
    return 50;
  };
  const orderedJs = jsFiles.sort((a,b)=> weight(a)-weight(b) || a.localeCompare(b));

  let jsBundle = '(function(window,document){\n"use strict";\n';
  for (const f of orderedJs) {
    const src = await fs.readFile(f, 'utf8');
    jsBundle += '\n/* === ' + path.relative(ASSETS, f) + ' === */\n' + src + '\n';
  }
  jsBundle += '\n})(window, document);\n';

  const min = await minify(jsBundle, {
    compress:true,
    mangle:{ reserved:['cytoscape','dagre','elk'] },
    ecma:2017
  });
  await fs.writeFile(path.join(DIST,'water-cld.bundle.js'), min.code, 'utf8');

  // 2) CSS های CLD
  const cssFiles = glob.sync('**/*.css', {
    cwd: ASSETS, nodir: true, absolute: true,
    ignore: ['**/vendor/**','**/dist/**']
  }).filter(f => /cld|water-cld/i.test(f));

  let cssConcat = '';
  for (const f of cssFiles) cssConcat += '/* ' + path.relative(ASSETS, f) + ' */\n' + await fs.readFile(f,'utf8') + '\n';
  const minCss = new CleanCSS({}).minify(cssConcat || '/* no CLD css found */');
  if (minCss.errors?.length) { console.error(minCss.errors); process.exit(1); }
  await fs.writeFile(path.join(DIST,'water-cld.bundle.css'), minCss.styles, 'utf8');

  // 3) مانيفست برای شفافیت
  const workers = glob.sync('**/*{worker,sim-worker}*.js', {
    cwd: ASSETS, nodir:true, absolute:true,
    ignore:['**/vendor/**','**/dist/**']
  }).filter(f => /cld|water-cld|sim/i.test(f));

  const manifest = {
    generatedAt: new Date().toISOString(),
    jsSources: orderedJs.map(f=>path.relative(ASSETS,f)),
    cssSources: cssFiles.map(f=>path.relative(ASSETS,f)),
    workers: workers.map(f=>path.relative(ASSETS,f))
  };
  await fs.writeJson(path.join(DIST,'water-cld.manifest.json'), manifest, { spaces: 2 });

  console.log('[CLD] built dist files');
})().catch(e=>{ console.error(e); process.exit(1); });
