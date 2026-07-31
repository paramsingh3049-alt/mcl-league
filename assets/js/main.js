// MCL T20 - Global JavaScript

const teams = [
  { name: "Team A", state: "", emoji: "🏏", color: "#FF6B00" },
  { name: "Team B", state: "", emoji: "⚡", color: "#FFD700" },
  { name: "Team C", state: "", emoji: "🎯", color: "#E63946" },
  { name: "Team D", state: "", emoji: "🎯", color: "#06D6A0" },
  { name: "Team E", state: "", emoji: "👑", color: "#F72585" },
  { name: "Team F", state: "", emoji: "🌟", color: "#4361EE" },
  { name: "Team G", state: "", emoji: "💥", color: "#FB8500" },
  { name: "Team H", state: "", emoji: "🏆", color: "#7B2D8B" },
];

const matches = [
  { team1: 0, team2: 1, date: "Sep 6, 2026", time: "7:30 PM", venue: "Punjab Stadium", status: "upcoming" },
  { team1: 2, team2: 3, date: "Sep 7, 2026", time: "3:00 PM", venue: "Delhi Arena", status: "upcoming" },
  { team1: 4, team2: 5, date: "Sep 8, 2026", time: "7:30 PM", venue: "Karnataka Ground", status: "upcoming" },
  { team1: 6, team2: 7, date: "Sep 9, 2026", time: "3:00 PM", venue: "Bihar Stadium", status: "upcoming" },
  { team1: 0, team2: 2, date: "Sep 10, 2026", time: "7:30 PM", venue: "Punjab Stadium", status: "upcoming" },
  { team1: 1, team2: 2, date: "Sep 11, 2026", time: "3:00 PM", venue: "Haryana Ground", status: "upcoming" },
  { team1: 3, team2: 6, date: "Sep 12, 2026", time: "7:30 PM", venue: "Jharkhand Arena", status: "upcoming" },
  { team1: 5, team2: 7, date: "Sep 13, 2026", time: "3:00 PM", venue: "Tamil Nadu Stadium", status: "upcoming" },
  { team1: 0, team2: 3, date: "Sep 14, 2026", time: "7:30 PM", venue: "Punjab Stadium", status: "upcoming" },
  { team1: 1, team2: 3, date: "Sep 15, 2026", time: "3:00 PM", venue: "Haryana Ground", status: "upcoming" },
  { team1: 2, team2: 6, date: "Sep 16, 2026", time: "7:30 PM", venue: "Delhi Arena", status: "upcoming" },
  { team1: 5, team2: 4, date: "Sep 17, 2026", time: "3:00 PM", venue: "Tamil Nadu Stadium", status: "upcoming" },
  { team1: 7, team2: 0, date: "Sep 18, 2026", time: "7:30 PM", venue: "Hyderabad Ground", status: "upcoming" },
  { team1: 1, team2: 5, date: "Sep 19, 2026", time: "3:00 PM", venue: "Haryana Ground", status: "upcoming" },
  { team1: 3, team2: 7, date: "Sep 20, 2026", time: "7:30 PM", venue: "Jharkhand Arena", status: "upcoming" },
];

// ===== NAVBAR SCROLL EFFECT =====
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  
  // Highlight active page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!hamburger || !mobileNav) return;
  
  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.querySelectorAll('span')[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
    hamburger.querySelectorAll('span')[1].style.opacity = isOpen ? '0' : '1';
    hamburger.querySelectorAll('span')[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = '1'; });
      document.body.style.overflow = '';
    });
  });
}

// ===== SCROLL REVEAL =====
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, entry.target.dataset.delay || 0);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  document.querySelectorAll('.reveal').forEach((el, i) => {
    if (!el.dataset.delay) el.dataset.delay = (i % 4) * 80;
    observer.observe(el);
  });
}

// ===== PARTICLES =====
function initParticles() {
  const container = document.querySelector('.particles');
  if (!container) return;
  
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      animation-duration: ${Math.random() * 15 + 10}s;
      animation-delay: ${Math.random() * 10}s;
      opacity: ${Math.random() * 0.5};
    `;
    container.appendChild(p);
  }
}

// ===== TOAST =====
function showToast(title, message, icon = '✅') {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<div class="toast-icon">${icon}</div><div class="toast-text"><strong>${title}</strong><span>${message}</span></div>`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

// ===== COUNTER ANIMATION =====
function animateCounter(el) {
  const originalText = el.textContent.trim();
  const hasLeadingZero = originalText.startsWith('0') && originalText.length > 1;
  const target = parseInt(el.dataset.count || originalText);
  if (isNaN(target)) return;
  const duration = 1500;
  const start = performance.now();
  const update = (time) => {
    const progress = Math.min((time - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const val = Math.floor(eased * target);
    let valStr = val.toLocaleString();
    if (hasLeadingZero && val < 10) {
      valStr = '0' + valStr;
    }
    el.textContent = valStr;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));
}

// ===== REGISTRATION FORM =====
function initRegForm() {
  const form = document.getElementById('regForm');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Submitting...';
    btn.style.opacity = '0.7';
    
    setTimeout(() => {
      form.style.display = 'none';
      const success = document.querySelector('.form-success');
      if (success) success.style.display = 'block';
      showToast('Registration Submitted!', 'We will contact you shortly.', '🏏');
    }, 1500);
  });
}

// ===== MATCHES FILTER =====
function initMatchesFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // For future filtering logic
    });
  });
}

// ===== SMOOTH ANCHOR SCROLL =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ===== INIT ALL =====
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initReveal();
  initParticles();
  initCounters();
  initRegForm();
  initMatchesFilter();
  initSmoothScroll();
});
