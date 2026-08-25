// MCL T20 - Global JavaScript

const teams = [
  { name: "Team A", state: "", emoji: "", color: "#FF6B00" },
  { name: "Team B", state: "", emoji: "", color: "#FFD700" },
  { name: "Team C", state: "", emoji: "", color: "#E63946" },
  { name: "Team D", state: "", emoji: "", color: "#06D6A0" },
  { name: "Team E", state: "", emoji: "", color: "#F72585" },
  { name: "Team F", state: "", emoji: "", color: "#4361EE" },
  { name: "Team G", state: "", emoji: "", color: "#FB8500" },
  { name: "Team H", state: "", emoji: "", color: "#7B2D8B" },
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
function showToast(title, message, icon = '') {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = (icon ? `<div class="toast-icon">${icon}</div>` : '') + `<div class="toast-text"><strong>${title}</strong><span>${message}</span></div>`;
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
      showToast('Registration Submitted!', 'We will contact you shortly.');
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
}// ===== CAROUSEL =====
function initCarousel() {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const dotsContainer = document.querySelector('.carousel-dots');
  
  if (!track || slides.length === 0 || !prevBtn || !nextBtn || !dotsContainer) return;

  let currentIndex = 0;
  const slideCount = slides.length;
  let autoPlayInterval;

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('carousel-dot');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });
  
  const dots = document.querySelectorAll('.carousel-dot');

  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function goToSlide(index) {
    if (index < 0) {
      currentIndex = slideCount - 1;
    } else if (index >= slideCount) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
    resetAutoPlay();
  }

  function nextSlide() { goToSlide(currentIndex + 1); }
  function prevSlide() { goToSlide(currentIndex - 1); }

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 4000);
  }
  function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
  }

  startAutoPlay();
}

// ===== CUSTOM BALL CURSOR =====
function initCustomCursor() {
  // Only enable on devices with hover and fine pointer (desktop)
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  let cursor = document.getElementById('customBallCursor');
  if (!cursor) {
    cursor = document.createElement('div');
    cursor.id = 'customBallCursor';
    cursor.className = 'custom-ball-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    cursor.innerHTML = `
      <svg class="ball-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="mclBallGrad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#FF5C5C"/>
            <stop offset="40%" stop-color="#D90429"/>
            <stop offset="85%" stop-color="#8B0014"/>
            <stop offset="100%" stop-color="#4A000A"/>
          </radialGradient>
          <linearGradient id="mclShineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.65"/>
            <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
          </linearGradient>
        </defs>

        <!-- Dark outer contrast rim -->
        <circle cx="12" cy="12" r="10" fill="#0D0F0C" stroke="#0D0F0C" stroke-width="0.5"/>

        <!-- Ball Body -->
        <circle cx="12" cy="12" r="9.5" fill="url(#mclBallGrad)"/>

        <!-- Cricket Ball Curved Seam -->
        <path d="M4 14.8C7.5 17.5 16.5 17.5 20 9.2" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" opacity="0.95"/>
        <path d="M4 14.8C7.5 17.5 16.5 17.5 20 9.2" stroke="#0D0F0C" stroke-width="1.4" stroke-dasharray="1.2 2" stroke-linecap="round" opacity="0.65"/>

        <!-- Glossy Specular Highlight -->
        <ellipse cx="9" cy="7.5" rx="3.5" ry="2" transform="rotate(-30 9 7.5)" fill="url(#mclShineGrad)"/>
      </svg>
    `;
    document.body.appendChild(cursor);
  }

  let mouseX = -100;
  let mouseY = -100;
  let isVisible = false;
  let isHovered = false;
  let rafId = null;

  function updateCursorPos() {
    cursor.style.transform = `translate3d(${mouseX - 9}px, ${mouseY - 9}px, 0)`;
    rafId = null;
  }

  function onPointerMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isVisible) {
      isVisible = true;
      cursor.style.opacity = '1';
    }
    if (!rafId) {
      rafId = requestAnimationFrame(updateCursorPos);
    }
  }

  function onPointerOver(e) {
    const target = e.target;
    if (target && target.closest('a, button, input, select, textarea, label, [role="button"], .filter-btn, .clickable, summary, .interactive')) {
      if (!isHovered) {
        isHovered = true;
        cursor.classList.add('hover');
      }
    } else if (isHovered) {
      isHovered = false;
      cursor.classList.remove('hover');
    }
  }

  function onPointerDown() {
    cursor.classList.add('active');
  }

  function onPointerUp() {
    cursor.classList.remove('active');
  }

  function onMouseLeave() {
    isVisible = false;
    cursor.style.opacity = '0';
  }

  function onMouseEnter() {
    isVisible = true;
    cursor.style.opacity = '1';
  }

  window.addEventListener('pointermove', onPointerMove, { passive: true });
  document.addEventListener('pointerover', onPointerOver, { passive: true });
  window.addEventListener('pointerdown', onPointerDown, { passive: true });
  window.addEventListener('pointerup', onPointerUp, { passive: true });
  document.documentElement.addEventListener('mouseleave', onMouseLeave, { passive: true });
  document.documentElement.addEventListener('mouseenter', onMouseEnter, { passive: true });
}

// ===== CRICKET INTRO SPLASH SCREEN =====
function initCricketSplash() {
  const splash = document.getElementById('cricket-splash');
  if (!splash) return;

  const ball = document.getElementById('splash-ball');
  const batWrapper = document.getElementById('splash-bat-wrapper');
  const ring = document.getElementById('splash-impact-ring');
  const flash = document.getElementById('splash-impact-flash');
  const title = document.getElementById('splash-brand-title');
  const canvas = document.getElementById('splash-spark-canvas');

  // Particle Sparks Setup
  let ctx, sparks = [];
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext('2d');

    window.addEventListener('resize', () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }, { passive: true });
  }

  function createSparks(x, y) {
    if (!ctx) return;
    for (let i = 0; i < 50; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 5 + Math.random() * 14;
      sparks.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 2.5 + Math.random() * 4.5,
        color: Math.random() > 0.4 ? '#00ff66' : (Math.random() > 0.5 ? '#ffffff' : '#ffd700'),
        life: 1,
        decay: 0.02 + Math.random() * 0.035
      });
    }
    requestAnimationFrame(renderSparks);
  }

  function renderSparks() {
    if (!ctx || sparks.length === 0) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = sparks.length - 1; i >= 0; i--) {
      const p = sparks[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.95;
      p.vy *= 0.95;
      p.life -= p.decay;

      if (p.life <= 0) {
        sparks.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    if (sparks.length > 0) {
      requestAnimationFrame(renderSparks);
    }
  }

  // SEQUENCE TIMELINE
  // 1. Ball appears (0.1s - 0.4s)
  setTimeout(() => {
    if (ball) {
      ball.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      ball.style.opacity = '1';
      ball.style.transform = 'scale(1) translateY(0)';
    }
    if (title) {
      title.style.opacity = '1';
      title.style.transform = 'translateY(0)';
    }
  }, 100);

  // 2. Bat swings in (0.45s - 0.8s)
  setTimeout(() => {
    if (batWrapper) {
      batWrapper.style.opacity = '1';
      batWrapper.style.transition = 'transform 0.35s cubic-bezier(0.5, 0, 0.75, 0)';
      batWrapper.style.transform = 'translate(-30px, -20px) rotate(15deg)';
    }
  }, 450);

  // 3. IMPACT SHOT (0.8s)
  setTimeout(() => {
    splash.classList.add('splash-shake');

    if (flash) {
      flash.style.opacity = '1';
      flash.style.transition = 'opacity 0.12s ease-out';
      setTimeout(() => { flash.style.opacity = '0'; }, 90);
    }

    if (ring) {
      ring.style.opacity = '1';
      ring.style.transform = 'scale(14)';
      ring.style.transition = 'transform 0.4s ease-out, opacity 0.4s ease-out';
      setTimeout(() => { ring.style.opacity = '0'; }, 300);
    }

    if (ball) {
      const stageRect = ball.getBoundingClientRect();
      createSparks(stageRect.left + stageRect.width / 2, stageRect.top + stageRect.height / 2);

      // Ball launch rocket shot
      ball.style.transition = 'transform 0.45s cubic-bezier(0.1, 0.9, 0.2, 1), opacity 0.35s ease';
      ball.style.transform = 'translate(-850px, -650px) scale(5) rotate(-360deg)';
      ball.style.filter = 'drop-shadow(0 0 30px #00ff66) blur(2px)';
    }

    if (batWrapper) {
      batWrapper.style.transition = 'transform 0.32s ease-out';
      batWrapper.style.transform = 'translate(-170px, -130px) rotate(60deg)';
    }
  }, 800);

  // 4. Fade/Zoom into website homepage (1.8s)
  setTimeout(() => {
    splash.classList.add('splash-out');
  }, 1800);

  // 5. Hide completely (2.4s)
  setTimeout(() => {
    splash.style.display = 'none';
  }, 2400);
}

// ===== INIT ALL =====
document.addEventListener('DOMContentLoaded', () => {
  initCricketSplash();
  initNavbar();
  initMobileMenu();
  initReveal();
  initParticles();
  initCounters();
  initRegForm();
  initMatchesFilter();
  initSmoothScroll();
  initCarousel();
  initCustomCursor();
});

