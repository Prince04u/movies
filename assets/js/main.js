// MaleHotMovies — interactions
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-menu');
  if (toggle && menu) toggle.addEventListener('click', () => menu.classList.toggle('open'));

  // Active nav link
  const path = window.location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('.nav-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    const clean = href.replace(/\/index\.html$/, '/');
    if (clean === path || (clean !== '/' && path.startsWith(clean))) a.classList.add('active');
  });

  // Hero slider
  const slider = document.querySelector('.slider');
  if (slider) {
    const slides = slider.querySelector('.slides');
    const items = slider.querySelectorAll('.slide');
    const dotsBox = slider.querySelector('.slider-dots');
    let i = 0;
    items.forEach((_, idx) => {
      const b = document.createElement('button');
      if (idx === 0) b.classList.add('active');
      b.addEventListener('click', () => go(idx));
      dotsBox.appendChild(b);
    });
    const dots = dotsBox.querySelectorAll('button');
    function go(n) {
      i = (n + items.length) % items.length;
      slides.style.transform = `translateX(-${i * 100}%)`;
      dots.forEach((d, k) => d.classList.toggle('active', k === i));
    }
    slider.querySelector('.prev').addEventListener('click', () => go(i - 1));
    slider.querySelector('.next').addEventListener('click', () => go(i + 1));
    setInterval(() => go(i + 1), 6000);
  }

  // Newsletter / contact mock
  document.querySelectorAll('form.mock').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault();
    const msg = f.querySelector('.form-msg');
    if (msg) msg.textContent = 'Thanks! We will be in touch shortly.';
    f.reset();
  }));

  // Year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
