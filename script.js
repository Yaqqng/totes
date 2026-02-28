const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const yearNode = document.getElementById('year');

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  root.dataset.theme = savedTheme;
}

themeToggle?.addEventListener('click', () => {
  const current = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = current;
  localStorage.setItem('theme', current);
  themeToggle.innerHTML = current === 'light' ? '<span>☀️</span>' : '<span>🌙</span>';
});

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
