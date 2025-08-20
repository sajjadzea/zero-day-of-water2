document.addEventListener('DOMContentLoaded', () => {
  const back = document.querySelector('.layer-back');
  const front = document.querySelector('.layer-front');
  if (back) {
    window.addEventListener('scroll', () => {
      const y = window.pageYOffset;
      back.style.transform = `translateY(${y * 0.2}px)`;
      if (front) {
        front.style.transform = `translateY(${y * 0.4}px)`;
      }
    });
  }

  const cta = document.querySelector('.cta-button');
  if (cta) {
    cta.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(cta.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  const cards = document.querySelectorAll('.card');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    cards.forEach(card => observer.observe(card));
  } else {
    cards.forEach(card => card.classList.add('visible'));
  }
});
