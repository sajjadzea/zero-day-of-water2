# Plan: Add gas fuel and carbon dashboard for Khorasan Razavi

## Summary
Create a second gas dashboard focusing on fuel usage and carbon emissions in Khorasan Razavi. The new page should coexist with the current gas dashboard without altering existing files.

## Files to Create
- `docs/gas/fuel-carbon.html` – standalone HTML page for the new dashboard.
- `docs/assets/js/gas-fuel-carbon.js` – custom JavaScript handling data and charts.
- *(Optional)* `docs/assets/css/gas-fuel-carbon.css` or inline `<style>` inside the HTML for small local styles.

No existing files will be modified.

## Dependencies & Assets
- Tailwind CSS: reuse `../assets/tailwind.css`.
- Site-wide styles and Vazirmatn font: `../assets/styles.css`.
- Charts: `../assets/libs/chart.umd.min.js` (and adapter/annotation plugins if needed).
- Number formatting helper: `../assets/numfmt.js`.
- Existing images for branding: `../header2.webp` and `../page/landing/logo2.webp`.

## File Structure & Paths
- New HTML resides at `docs/gas/fuel-carbon.html` and loads scripts with:
  - `<script defer src="../assets/libs/chart.umd.min.js"></script>`
  - `<script defer src="../assets/numfmt.js"></script>`
  - `<script defer src="../assets/js/gas-fuel-carbon.js"></script>`
- HTML references images via relative paths:
  - Header: `../header2.webp`
  - Logo: `../page/landing/logo2.webp`

## Acceptance Criteria
- `/docs/gas/fuel-carbon.html` renders a Tailwind-based RTL dashboard for fuel and carbon metrics of Khorasan Razavi.
- Page uses local Vazirmatn fonts and loads only existing assets; no new binaries are introduced.
- At least one interactive chart is drawn via Chart.js using `gas-fuel-carbon.js`.
- Header uses `header2.webp` and logo uses `logo2.webp`.
- Existing gas dashboard files remain unchanged.
- Repository passes `npm test`, `npm run flag:test`, and `npm run check:no-binary`.
