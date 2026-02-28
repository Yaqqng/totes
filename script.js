const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const snow = document.getElementById('snow');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light' || savedTheme === 'dark') {
  root.dataset.theme = savedTheme;
}

const syncThemeIcon = () => {
  if (!themeToggle) return;
  themeToggle.textContent = root.dataset.theme === 'light' ? '☀️' : '🌙';
};

syncThemeIcon();

themeToggle?.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', root.dataset.theme);
  syncThemeIcon();
});

if (snow) {
  const flakesCount = 130;

  for (let i = 0; i < flakesCount; i += 1) {
    const flake = document.createElement('span');
    flake.className = 'flake';

    const size = Math.random() * 4 + 1;
    const left = Math.random() * 100;
    const duration = Math.random() * 9 + 8;
    const delay = Math.random() * -16;
    const drift = `${Math.random() * 80 - 40}px`;

    flake.style.width = `${size}px`;
    flake.style.height = `${size}px`;
    flake.style.left = `${left}vw`;
    flake.style.animationDuration = `${duration}s`;
    flake.style.animationDelay = `${delay}s`;
    flake.style.setProperty('--drift', drift);

    snow.appendChild(flake);
  }
}
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
