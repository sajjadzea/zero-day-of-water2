- نحوه‌ی تست محلی: `npm run serve-docs` و آدرس `http://localhost:5173/test/water-cld.html`
- چک Network برای water-cld.bundle.js با status 200
- اسنیپت کنسولی زیر برای تایید init:
  ```js
  console.log('CLD_SAFE?', !!window.CLD_SAFE, 'cy?', !!window.cy,
    'nodes=', window.cy?.nodes()?.length, 'edges=', window.cy?.edges()?.length);
  ```
