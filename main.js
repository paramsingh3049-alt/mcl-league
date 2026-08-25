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

// ===== PREMIUM CINEMATIC MCL T20 CRICKET BALL INTRO =====
function initCricketSplash() {
  const splash = document.getElementById('cricket-splash');
  if (!splash) return;

  const ballCanvas  = document.getElementById('ball-canvas');
  const glassCanvas = document.getElementById('glass-canvas');
  const flashEl     = document.getElementById('impact-flash');
  const shockEl     = document.getElementById('shockwave-ring');
  const skipBtn     = document.getElementById('splash-skip-btn');

  if (!ballCanvas || !glassCanvas) return;

  const bc  = ballCanvas.getContext('2d');
  const gc  = glassCanvas.getContext('2d');

  let W = ballCanvas.width  = glassCanvas.width  = window.innerWidth;
  let H = ballCanvas.height = glassCanvas.height = window.innerHeight;

  const onResize = () => {
    W = ballCanvas.width  = glassCanvas.width  = window.innerWidth;
    H = ballCanvas.height = glassCanvas.height = window.innerHeight;
  };
  window.addEventListener('resize', onResize, { passive: true });

  // ── State ──────────────────────────────────────────────
  const sparks       = [];
  const glassShards  = [];
  const crackLines   = [];
  const dustParticles = [];
  let impacted      = false;
  let isEnded       = false;
  let impactTime    = 0;
  const startTime   = performance.now();

  // ── End splash ─────────────────────────────────────────
  function endSplash() {
    if (isEnded) return;
    isEnded = true;
    splash.classList.add('splash-out');
    setTimeout(() => {
      splash.style.display = 'none';
      window.removeEventListener('resize', onResize);
    }, 1000);
  }
  if (skipBtn) skipBtn.addEventListener('click', endSplash);

  // ── Easing helpers ─────────────────────────────────────
  function easeInExpo(t) { return t === 0 ? 0 : Math.pow(2, 10 * t - 10); }
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
  function easeInCubic(t) { return t * t * t; }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  // ── Draw realistic cricket ball on canvas ──────────────
  function drawCricketBall(cx, x, y, r, spin, blurAmt) {
    if (r <= 0) return;
    cx.save();
    cx.translate(x, y);

    // Motion blur via stacked semi-transparent copies
    if (blurAmt > 0) {
      const blurSteps = Math.min(10, Math.ceil(blurAmt / 4));
      for (let i = 1; i <= blurSteps; i++) {
        const offset = -(blurAmt * i / blurSteps);
        const alpha  = (1 - i / blurSteps) * 0.18;
        cx.save();
        cx.globalAlpha = alpha;
        drawBallBody(cx, 0, offset, r * (1 - i * 0.012), spin);
        cx.restore();
      }
    }

    drawBallBody(cx, 0, 0, r, spin);
    cx.restore();
  }

  function drawBallBody(cx, x, y, r, spin) {
    cx.save();
    cx.translate(x, y);

    // ── Leather base ───────────────────────────────────
    const leatherGrad = cx.createRadialGradient(
      -r * 0.3, -r * 0.35, r * 0.05,
       r * 0.15,  r * 0.2,  r * 1.35
    );
    leatherGrad.addColorStop(0,   '#ff6a3a');  // highlight
    leatherGrad.addColorStop(0.18,'#cc2200');  // bright red
    leatherGrad.addColorStop(0.55,'#8a0000');  // deep red
    leatherGrad.addColorStop(0.82,'#4a0000');  // shadow
    leatherGrad.addColorStop(1,   '#1a0000');  // rim shadow
    cx.fillStyle = leatherGrad;
    cx.beginPath();
    cx.arc(0, 0, r, 0, Math.PI * 2);
    cx.fill();

    // ── Panel seam line (leather halves) ───────────────
    cx.save();
    cx.clip();  // clip to ball circle
    cx.beginPath();
    cx.arc(0, 0, r, 0, Math.PI * 2);
    cx.clip();

    // Vertical equator seam dividing two halves
    cx.strokeStyle = 'rgba(60, 10, 0, 0.55)';
    cx.lineWidth = r * 0.035;
    cx.beginPath();
    cx.ellipse(0, 0, r * 0.08, r * 0.98, spin, 0, Math.PI * 2);
    cx.stroke();

    // ── Raised seam stitching ──────────────────────────
    const stitchCount = 18;
    for (let half = 0; half < 2; half++) {
      const side = half === 0 ? 1 : -1;
      for (let i = 0; i < stitchCount; i++) {
        const t = (i / stitchCount) * Math.PI * 2;
        // Seam follows an ellipse arc on the surface
        const sx = side * r * 0.36 * Math.cos(t + spin);
        const sy = r * 0.95 * Math.sin(t);

        // Seam ridge (raised look)
        cx.strokeStyle = 'rgba(20,5,0,0.6)';
        cx.lineWidth   = r * 0.04;
        cx.beginPath();
        cx.moveTo(sx - Math.cos(t + spin + 0.2) * r * 0.025, sy - Math.sin(t + 0.2) * r * 0.025);
        cx.lineTo(sx + Math.cos(t + spin + 0.2) * r * 0.025, sy + Math.sin(t + 0.2) * r * 0.025);
        cx.stroke();

        // White stitch thread
        cx.strokeStyle = '#f5ead8';
        cx.lineWidth   = r * 0.018;
        cx.beginPath();
        cx.moveTo(sx - Math.cos(t + spin + 0.15) * r * 0.018, sy - Math.sin(t + 0.15) * r * 0.018);
        cx.lineTo(sx + Math.cos(t + spin + 0.15) * r * 0.018, sy + Math.sin(t + 0.15) * r * 0.018);
        cx.stroke();
      }
    }

    // ── Leather texture grain ──────────────────────────
    cx.globalAlpha = 0.06;
    for (let i = 0; i < 5; i++) {
      const tx = -r + Math.random() * r * 2;
      const ty = -r + Math.random() * r * 2;
      if (tx * tx + ty * ty < r * r) {
        const gGrad = cx.createRadialGradient(tx, ty, 0, tx, ty, r * 0.12);
        gGrad.addColorStop(0, '#000');
        gGrad.addColorStop(1, 'transparent');
        cx.fillStyle = gGrad;
        cx.beginPath();
        cx.arc(tx, ty, r * 0.12, 0, Math.PI * 2);
        cx.fill();
      }
    }
    cx.globalAlpha = 1;

    cx.restore(); // end clip

    // ── MCL T20 Logo on ball surface ───────────────────
    drawMCLLogo(cx, r, spin);

    // ── Specular highlight (top-left shine) ────────────
    const specGrad = cx.createRadialGradient(
      -r * 0.38, -r * 0.42, 0,
      -r * 0.28, -r * 0.32, r * 0.52
    );
    specGrad.addColorStop(0,   'rgba(255,255,255,0.72)');
    specGrad.addColorStop(0.3, 'rgba(255,220,180,0.3)');
    specGrad.addColorStop(0.65,'rgba(255,255,255,0.06)');
    specGrad.addColorStop(1,   'transparent');
    cx.fillStyle = specGrad;
    cx.beginPath();
    cx.arc(0, 0, r, 0, Math.PI * 2);
    cx.fill();

    // ── Rim ambient occlusion shadow ───────────────────
    const rimGrad = cx.createRadialGradient(0, 0, r * 0.7, 0, 0, r);
    rimGrad.addColorStop(0,   'transparent');
    rimGrad.addColorStop(0.85,'rgba(0,0,0,0.15)');
    rimGrad.addColorStop(1,   'rgba(0,0,0,0.45)');
    cx.fillStyle = rimGrad;
    cx.beginPath();
    cx.arc(0, 0, r, 0, Math.PI * 2);
    cx.fill();

    cx.restore();
  }

  // ── MCL T20 Logo drawn in canvas ──────────────────────
  function drawMCLLogo(cx, r, spin) {
    // Position the logo on the upper hemisphere of the ball
    // using a mild perspective skew to look painted on the surface
    const logoX =  r * 0.12;
    const logoY = -r * 0.22;
    const logoW =  r * 0.7;
    const logoH =  r * 0.32;
    const skewFactor = Math.sin(spin) * 0.18; // subtle 3D skew

    cx.save();
    cx.beginPath();
    cx.arc(0, 0, r * 0.97, 0, Math.PI * 2);
    cx.clip();

    cx.globalAlpha = 0.92;
    cx.transform(1, 0, skewFactor, 1, logoX, logoY);

    // Gold plate background
    const platGrad = cx.createLinearGradient(-logoW * 0.5, -logoH * 0.5, logoW * 0.5, logoH * 0.5);
    platGrad.addColorStop(0,   '#ffe066');
    platGrad.addColorStop(0.5, '#ffd700');
    platGrad.addColorStop(1,   '#c8a200');
    cx.fillStyle = platGrad;
    cx.beginPath();
    cx.roundRect(-logoW * 0.5, -logoH * 0.5, logoW, logoH, r * 0.04);
    cx.fill();

    // Thin border
    cx.strokeStyle = 'rgba(180,130,0,0.8)';
    cx.lineWidth = r * 0.018;
    cx.stroke();

    // "MCL" bold text
    const fSize = logoH * 0.52;
    cx.font = `900 ${fSize}px "Arial Black", sans-serif`;
    cx.textAlign    = 'center';
    cx.textBaseline = 'alphabetic';
    cx.fillStyle = '#1a0a00';
    cx.fillText('MCL', 0, logoH * 0.06);

    // "T20" smaller subscript
    const f2 = logoH * 0.31;
    cx.font = `800 ${f2}px "Arial Black", sans-serif`;
    cx.fillStyle = '#4a1500';
    cx.fillText('T20', 0, logoH * 0.44);

    cx.restore();
  }

  // ── Cast floor shadow ──────────────────────────────────
  function drawShadow(cx, x, y, r, alpha) {
    if (alpha <= 0) return;
    const shadowY = H * 0.78;
    const shadowW = r * lerp(2.5, 1.1, clamp((y - H * 0.3) / (shadowY - H * 0.3), 0, 1));
    const shadowH = shadowW * 0.25;
    const sg = cx.createRadialGradient(x, shadowY, 0, x, shadowY, shadowW);
    sg.addColorStop(0,   `rgba(0,0,0,${alpha * 0.55})`);
    sg.addColorStop(0.5, `rgba(0,0,0,${alpha * 0.2})`);
    sg.addColorStop(1,   'transparent');
    cx.fillStyle = sg;
    cx.beginPath();
    cx.ellipse(x, shadowY, shadowW, shadowH, 0, 0, Math.PI * 2);
    cx.fill();
  }

  // ── Background cinematic scene ─────────────────────────
  function drawBackground(cx, elapsed) {
    // Deep space / void background
    const bgGrad = cx.createRadialGradient(W * 0.5, H * 0.42, 0, W * 0.5, H * 0.5, Math.max(W, H) * 0.85);
    bgGrad.addColorStop(0,   '#0f0a06');
    bgGrad.addColorStop(0.4, '#080402');
    bgGrad.addColorStop(1,   '#000000');
    cx.fillStyle = bgGrad;
    cx.fillRect(0, 0, W, H);

    // Subtle vignette
    const vig = cx.createRadialGradient(W * 0.5, H * 0.5, H * 0.2, W * 0.5, H * 0.5, Math.max(W, H) * 0.75);
    vig.addColorStop(0,   'transparent');
    vig.addColorStop(0.7, 'rgba(0,0,0,0.3)');
    vig.addColorStop(1,   'rgba(0,0,0,0.75)');
    cx.fillStyle = vig;
    cx.fillRect(0, 0, W, H);

    // Atmospheric light beam from top (cinematic stadium spotlight feel)
    const beamOpacity = clamp(elapsed * 0.6, 0, 0.18);
    const beamGrad = cx.createLinearGradient(W * 0.5, 0, W * 0.5, H * 0.8);
    beamGrad.addColorStop(0,   `rgba(255,200,120,${beamOpacity})`);
    beamGrad.addColorStop(0.6, `rgba(200,120,60,${beamOpacity * 0.35})`);
    beamGrad.addColorStop(1,   'transparent');
    cx.save();
    cx.beginPath();
    cx.moveTo(W * 0.5 - W * 0.08, 0);
    cx.lineTo(W * 0.5 + W * 0.08, 0);
    cx.lineTo(W * 0.5 + W * 0.35, H * 0.8);
    cx.lineTo(W * 0.5 - W * 0.35, H * 0.8);
    cx.closePath();
    cx.fillStyle = beamGrad;
    cx.fill();
    cx.restore();

    // MCL T20 ambient text watermark
    const textAlpha = clamp((elapsed - 0.4) * 0.8, 0, 0.07);
    if (textAlpha > 0) {
      cx.save();
      cx.globalAlpha = textAlpha;
      cx.font = `900 ${Math.min(W * 0.18, 160)}px "Arial Black", sans-serif`;
      cx.textAlign = 'center';
      cx.textBaseline = 'middle';
      cx.fillStyle = '#ffffff';
      cx.fillText('MCL T20', W * 0.5, H * 0.5);
      cx.restore();
    }
  }

  // ── Glass crack impact system ──────────────────────────
  function triggerImpact(cx, gc, impX, impY) {
    impacted   = true;
    impactTime = performance.now();

    // Screen shake
    splash.classList.remove('shake-impact');
    void splash.offsetWidth; // reflow
    splash.classList.add('shake-impact');

    // Chromatic flash
    if (flashEl) {
      flashEl.style.opacity = '1';
      setTimeout(() => { flashEl.style.opacity = '0'; }, 80);
    }

    // Shockwave ring
    if (shockEl) {
      shockEl.style.transition = 'none';
      shockEl.style.opacity    = '0.95';
      shockEl.style.transform  = 'translate(-50%, -50%) scale(0.05)';
      requestAnimationFrame(() => {
        shockEl.style.transition = 'transform 0.65s cubic-bezier(0.1,0.9,0.15,1), opacity 0.65s ease-out';
        shockEl.style.transform  = 'translate(-50%, -50%) scale(32)';
        shockEl.style.opacity    = '0';
      });
    }

    // Build procedural crack lines radiating outward
    const numPrimary = 22;
    for (let i = 0; i < numPrimary; i++) {
      const angle = (i / numPrimary) * Math.PI * 2 + (Math.random() - 0.5) * 0.28;
      const maxLen = Math.max(W, H) * (0.6 + Math.random() * 0.55);
      const pts = [{ x: impX, y: impY }];
      let d = 0, cx2 = impX, cy2 = impY, ca = angle;

      while (d < maxLen) {
        const step = 18 + Math.random() * 42;
        d += step;
        ca  += (Math.random() - 0.5) * 0.55;
        cx2 += Math.cos(ca) * step;
        cy2 += Math.sin(ca) * step;
        pts.push({ x: cx2, y: cy2 });

        // Branch crack
        if (Math.random() > 0.52 && pts.length > 2) {
          const ba   = ca + (Math.random() > 0.5 ? 0.7 : -0.7);
          const bPts = [{ x: cx2, y: cy2 }];
          let bx = cx2, by = cy2;
          const branches = 3 + Math.floor(Math.random() * 5);
          for (let b = 0; b < branches; b++) {
            bx += Math.cos(ba) * (12 + Math.random() * 28);
            by += Math.sin(ba) * (12 + Math.random() * 28);
            bPts.push({ x: bx, y: by });
          }
          crackLines.push({ pts: bPts, w: 1 + Math.random() * 1.8, a: 0.85 + Math.random() * 0.12 });
        }
      }
      crackLines.push({ pts, w: 1.8 + Math.random() * 3, a: 0.95 });
    }

    // Concentric ring fractures
    for (let rad = 35; rad < Math.min(W, H) * 0.48; rad += 38 + Math.random() * 30) {
      const rPts = [];
      const steps = 20;
      for (let s = 0; s <= steps; s++) {
        const a = (s / steps) * Math.PI * 2;
        const r = rad + (Math.random() - 0.5) * 18;
        rPts.push({ x: impX + Math.cos(a) * r, y: impY + Math.sin(a) * r });
      }
      crackLines.push({ pts: rPts, w: 1.2 + Math.random(), a: 0.75 });
    }

    // Launch glass shards
    for (let i = 0; i < 120; i++) {
      const a = Math.random() * Math.PI * 2;
      const s = 7 + Math.random() * 24;
      const pts3 = [];
      const sides = 3 + Math.floor(Math.random() * 3);
      for (let v = 0; v < sides; v++) {
        const va = (v / sides) * Math.PI * 2;
        const vr = 8 + Math.random() * 28;
        pts3.push({ x: Math.cos(va) * vr, y: Math.sin(va) * vr });
      }
      glassShards.push({
        x: impX + (Math.random() - 0.5) * 60,
        y: impY + (Math.random() - 0.5) * 60,
        vx: Math.cos(a) * s,
        vy: Math.sin(a) * s - 4 - Math.random() * 8,
        vrot: (Math.random() - 0.5) * 0.28,
        rot: Math.random() * Math.PI * 2,
        shape: pts3,
        alpha: 0.92,
        gravity: 0.28
      });
    }

    // Dust / particle debris
    for (let i = 0; i < 160; i++) {
      const a = Math.random() * Math.PI * 2;
      const s = 3 + Math.random() * 18;
      dustParticles.push({
        x: impX + (Math.random() - 0.5) * 30,
        y: impY + (Math.random() - 0.5) * 30,
        vx: Math.cos(a) * s,
        vy: Math.sin(a) * s,
        size: 2 + Math.random() * 5,
        color: ['#ffffff', '#ffe0b0', '#ffaa60', '#ff6622', '#cc3300'][Math.floor(Math.random() * 5)],
        life: 1,
        decay: 0.012 + Math.random() * 0.022
      });
    }

    // Larger spark streaks
    for (let i = 0; i < 55; i++) {
      const a = Math.random() * Math.PI * 2;
      const s = 8 + Math.random() * 30;
      sparks.push({
        x: impX, y: impY,
        vx: Math.cos(a) * s,
        vy: Math.sin(a) * s,
        life: 1,
        decay: 0.02 + Math.random() * 0.03,
        len: 8 + Math.random() * 22
      });
    }
  }

  // ── Render glass layer ─────────────────────────────────
  function renderGlass() {
    gc.clearRect(0, 0, W, H);
    if (!impacted) return;

    gc.save();

    // Draw crack lines
    crackLines.forEach(line => {
      gc.strokeStyle = `rgba(255,255,255,${line.a})`;
      gc.lineWidth   = line.w;
      gc.shadowColor = 'rgba(200,230,255,0.6)';
      gc.shadowBlur  = 5;
      gc.beginPath();
      line.pts.forEach((p, i) => {
        if (i === 0) gc.moveTo(p.x, p.y);
        else         gc.lineTo(p.x, p.y);
      });
      gc.stroke();
    });

    // Glass shards
    glassShards.forEach(s => {
      s.x   += s.vx;
      s.y   += s.vy;
      s.vy  += s.gravity;
      s.rot += s.vrot;
      s.alpha -= 0.004;
      if (s.alpha <= 0) return;

      gc.save();
      gc.translate(s.x, s.y);
      gc.rotate(s.rot);
      gc.globalAlpha = s.alpha;

      // Glassy gradient fill
      const sg = gc.createLinearGradient(-15, -15, 15, 15);
      sg.addColorStop(0, 'rgba(210,240,255,0.85)');
      sg.addColorStop(1, 'rgba(255,255,255,0.25)');
      gc.fillStyle   = sg;
      gc.strokeStyle = 'rgba(255,255,255,0.9)';
      gc.lineWidth   = 1.2;
      gc.shadowColor = 'rgba(150,220,255,0.8)';
      gc.shadowBlur  = 8;

      gc.beginPath();
      s.shape.forEach((p, i) => {
        if (i === 0) gc.moveTo(p.x, p.y);
        else         gc.lineTo(p.x, p.y);
      });
      gc.closePath();
      gc.fill();
      gc.stroke();
      gc.restore();
    });

    // Dust particles
    for (let i = dustParticles.length - 1; i >= 0; i--) {
      const p = dustParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.95;
      p.vy *= 0.95;
      p.life -= p.decay;
      if (p.life <= 0) { dustParticles.splice(i, 1); continue; }

      gc.save();
      gc.globalAlpha = p.life * p.life;
      gc.fillStyle   = p.color;
      gc.shadowColor = p.color;
      gc.shadowBlur  = 6;
      gc.beginPath();
      gc.arc(p.x, p.y, Math.max(0.5, p.size * p.life), 0, Math.PI * 2);
      gc.fill();
      gc.restore();
    }

    // Spark streaks
    for (let i = sparks.length - 1; i >= 0; i--) {
      const p = sparks[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.92;
      p.vy *= 0.92;
      p.life -= p.decay;
      if (p.life <= 0) { sparks.splice(i, 1); continue; }

      gc.save();
      gc.globalAlpha  = p.life;
      gc.strokeStyle  = `rgba(255,200,100,${p.life})`;
      gc.lineWidth    = 2 * p.life;
      gc.shadowColor  = '#ff8800';
      gc.shadowBlur   = 10;
      gc.lineCap      = 'round';
      gc.beginPath();
      gc.moveTo(p.x, p.y);
      gc.lineTo(p.x - p.vx * p.len * 0.1, p.y - p.vy * p.len * 0.1);
      gc.stroke();
      gc.restore();
    }

    gc.restore();
  }

  // ── Main render loop ───────────────────────────────────
  function render(now) {
    if (isEnded) return;

    const elapsed = (now - startTime) / 1000;

    // === BALL ANIMATION TIMELINE ===
    // 0.0 – 0.5s  : Fade in, ball far away (tiny)
    // 0.5 – 2.2s  : Ball flies toward camera — growing, spinning, motion blur
    // 2.2 – 2.6s  : Final lunge — extreme acceleration into screen
    // 2.6s        : IMPACT — glass shatters
    // 2.6 – 4.5s  : Glass FX, ball fades, website reveals
    // 4.5s        : Auto-end splash

    const IMPACT_T = 2.55;

    bc.clearRect(0, 0, W, H);

    if (!impacted) {
      // Phase 1 & 2: ball approaching
      const approachT  = clamp(elapsed / IMPACT_T, 0, 1);
      const t          = easeInExpo(approachT);

      // Ball starts far away (~tiny) and grows to fill screen
      const startR  = Math.min(W, H) * 0.012;
      const endR    = Math.min(W, H) * 0.55;
      const ballR   = lerp(startR, endR, t);

      // Ball comes from slightly above-center
      const ballX   = W * 0.5 + (1 - t) * W * 0.04;
      const ballY   = H * 0.5 - (1 - t) * H * 0.08;

      // Spin increases as ball approaches
      const spin    = elapsed * (1.2 + t * 4.5);

      // Motion blur increases dramatically in final approach
      const blurAmt = t > 0.75 ? (t - 0.75) / 0.25 * 40 : 0;

      // Fade in
      const fadeIn  = clamp(elapsed / 0.4, 0, 1);

      drawBackground(bc, elapsed);
      drawShadow(bc, ballX, ballY, ballR, fadeIn * (1 - t * 0.5));

      bc.save();
      bc.globalAlpha = fadeIn;
      drawCricketBall(bc, ballX, ballY, ballR, spin, blurAmt);
      bc.restore();

      // Trigger impact when ball fills screen
      if (elapsed >= IMPACT_T) {
        triggerImpact(bc, gc, W * 0.5, H * 0.5);
      }
    } else {
      // Post-impact: draw dark shattered background; fade out ball
      const postT  = clamp((elapsed - IMPACT_T) / 1.8, 0, 1);

      drawBackground(bc, elapsed);

      // Keep drawing ball briefly at full size then shrink/fade
      const ballAlpha = clamp(1 - (postT * 3), 0, 1);
      if (ballAlpha > 0) {
        bc.save();
        bc.globalAlpha = ballAlpha;
        drawCricketBall(bc, W * 0.5, H * 0.5, Math.min(W, H) * 0.55, elapsed * 6, 60);
        bc.restore();
      }

      // Auto-end
      if (elapsed >= IMPACT_T + 3.2 && !isEnded) {
        endSplash();
      }
    }

    renderGlass();
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

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

