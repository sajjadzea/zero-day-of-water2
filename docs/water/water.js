import { createCard } from './components/card.js';

const cards = [
  {
    href: '/dash/pages/water-crisis.html',
    icon: '🚱',
    title: 'بحران آب',
    description: 'اطلاعات و تحلیل وضعیت بحرانی آب',
  },
  {
    href: '/dash/pages/dam-monitoring.html',
    icon: '🏞️',
    title: 'پایش سدها',
    description: 'وضعیت ذخایر و سدهای منطقه',
  },
  {
    href: '/dash/pages/bills-tariffs.html',
    icon: '🧾',
    title: 'قبوض و تعرفه‌ها',
    description: 'مشاهده قبوض و نرخ‌ها',
  },
  {
    href: '/dash/pages/future-forecast.html',
    icon: '🔮',
    title: 'پیش‌بینی آینده',
    description: 'بررسی سناریوهای آینده آب',
  }
];

const container = document.getElementById('cards');
if (container) {
  cards.map(createCard).forEach(card => container.appendChild(card));
}
