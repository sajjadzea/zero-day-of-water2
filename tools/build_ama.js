const esbuild = require('esbuild');
const path = require('path');

const root = path.resolve(__dirname, '..');

const entrySource = `import Supercluster from 'supercluster';\nwindow.Supercluster = Supercluster;\nimport './docs/assets/js/amaayesh-map.js';`;

esbuild.build({
  stdin: {
    contents: entrySource,
    resolveDir: root,
    loader: 'js'
  },
  bundle: true,
  format: 'iife',
  platform: 'browser',
  minify: true,
  target: ['es2020'],
  outfile: path.join(root, 'docs', 'assets', 'js', 'amaayesh-map.js')
}).then(() => {
  console.log('[build:ama] bundled amaayesh map');
}).catch(err => {
  console.error(err);
  process.exit(1);
});
