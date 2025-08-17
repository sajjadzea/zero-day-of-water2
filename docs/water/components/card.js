export function createCard({ href, icon, title, description }) {
  const link = document.createElement('a');
  link.href = href;
  link.className = 'landing-option bg-white rounded-xl p-8 flex flex-col items-center text-lg font-bold text-slate-700';

  const span = document.createElement('span');
  span.className = 'text-5xl mb-4';
  span.textContent = icon;

  const t = document.createElement('div');
  t.textContent = title;

  const p = document.createElement('p');
  p.className = 'text-sm font-normal text-slate-500 mt-2';
  p.textContent = description;

  link.append(span, t, p);
  return link;
}
