// ─── Scroll to section (renamed to avoid conflict with window.scrollTo) ───
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// ─── Mobile menu ──────────────────────────────────────────────────────────
let menuOpen = false;

function toggleMenu() {
  menuOpen = !menuOpen;
  document.getElementById('mobileMenu').classList.toggle('open', menuOpen);
  const h1 = document.getElementById('hb1');
  const h2 = document.getElementById('hb2');
  const h3 = document.getElementById('hb3');
  h1.style.transform = menuOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
  h2.style.opacity   = menuOpen ? '0' : '1';
  h3.style.transform = menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
}

function closeMenu() {
  menuOpen = false;
  document.getElementById('mobileMenu').classList.remove('open');
  const h1 = document.getElementById('hb1');
  const h2 = document.getElementById('hb2');
  const h3 = document.getElementById('hb3');
  h1.style.transform = '';
  h2.style.opacity   = '1';
  h3.style.transform = '';
}

// ─── Active nav on scroll ─────────────────────────────────────────────────
const sections = ['home', 'skills', 'experience', 'projects', 'contact'];

window.addEventListener('scroll', () => {
  const y = window.scrollY + 100;
  let current = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && y >= el.offsetTop) current = id;
  });
  document.querySelectorAll('.nav-links li').forEach((li, i) => {
    li.classList.toggle('active', sections[i] === current);
  });
  document.querySelectorAll('.mobile-menu a').forEach((a, i) => {
    a.classList.toggle('active', sections[i] === current);
  });
});

// ─── Skill tabs ───────────────────────────────────────────────────────────
const skillMap = {
  fe: 'active-fe',
  be: 'active-be',
  db: 'active-db',
  cl: 'active-cl',
  au: 'active-au',
  to: 'active-to',
};

function switchSkill(key, btn) {
  document.querySelectorAll('.skill-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.skill-tab').forEach(t => {
    Object.values(skillMap).forEach(c => t.classList.remove(c));
  });
  document.getElementById('skill-' + key).classList.add('active');
  btn.classList.add(skillMap[key]);
}

// ─── Copy email ───────────────────────────────────────────────────────────
function copyEmail() {
  navigator.clipboard.writeText('vikas.kumar721702@gmail.com').then(() => {
    const lbl = document.getElementById('emailLabel');
    lbl.textContent = '✓ Copied to clipboard!';
    lbl.style.color = '#10b981';
    setTimeout(() => {
      lbl.textContent = 'Email — click to copy';
      lbl.style.color = '';
    }, 2500);
  });
}

// ─── Scroll reveal ────────────────────────────────────────────────────────
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
