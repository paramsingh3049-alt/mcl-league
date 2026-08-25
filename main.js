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

// ===== CINEMATIC 5D 3D CARTOON CRICKET ANIMATION ENGINE =====
function initCricketSplash() {
  const splash = document.getElementById('cricket-splash');
  if (!splash) return;

  const cricketCanvas = document.getElementById('cartoon-cricket-canvas');
  const glassCanvas = document.getElementById('cartoon-glass-canvas');
  const flash = document.getElementById('impact-chromatic-flash');
  const shockwave = document.getElementById('impact-shockwave-circle');
  const speedVal = document.getElementById('hud-speed-val');
  const alertBox = document.getElementById('hud-center-alert');
  const alertTag = document.getElementById('hud-alert-tag');
  const alertTitle = document.getElementById('hud-alert-title');
  const skipBtn = document.getElementById('splash-skip-btn');

  if (!cricketCanvas || !glassCanvas) return;

  const ctx = cricketCanvas.getContext('2d');
  const gCtx = glassCanvas.getContext('2d');

  let width = (cricketCanvas.width = glassCanvas.width = window.innerWidth);
  let height = (cricketCanvas.height = glassCanvas.height = window.innerHeight);

  const onResize = () => {
    width = cricketCanvas.width = glassCanvas.width = window.innerWidth;
    height = cricketCanvas.height = glassCanvas.height = window.innerHeight;
  };
  window.addEventListener('resize', onResize, { passive: true });

  const sparks = [];
  const glassShards = [];
  const crackLines = [];
  const comicStars = [];
  let isCracked = false;
  let isEnded = false;

  function endSplash() {
    if (isEnded) return;
    isEnded = true;
    splash.classList.add('splash-out');
    setTimeout(() => {
      splash.style.display = 'none';
      window.removeEventListener('resize', onResize);
    }, 800);
  }

  if (skipBtn) {
    skipBtn.addEventListener('click', endSplash);
  }

  // Crowd particle shapes
  const crowd = [];
  for (let i = 0; i < 60; i++) {
    crowd.push({
      x: Math.random(),
      y: 0.12 + Math.random() * 0.28,
      color: ['#ff0055', '#00ff66', '#00e5ff', '#ffd700', '#ff9900'][Math.floor(Math.random() * 5)],
      size: 6 + Math.random() * 8,
      offset: Math.random() * Math.PI * 2
    });
  }

  function spawnGlassShatter(centerX, centerY) {
    isCracked = true;
    splash.classList.add('shake-extreme');

    if (flash) {
      flash.style.opacity = '1';
      setTimeout(() => { flash.style.opacity = '0'; }, 180);
    }

    if (shockwave) {
      shockwave.style.opacity = '1';
      shockwave.style.transition = 'transform 0.6s cubic-bezier(0.1, 0.9, 0.2, 1), opacity 0.6s ease-out';
      shockwave.style.transform = 'translate(-50%, -50%) scale(30)';
      setTimeout(() => { shockwave.style.opacity = '0'; }, 450);
    }

    // Procedural Spiderweb Glass Cracks
    const numCracks = 20;
    for (let i = 0; i < numCracks; i++) {
      const angle = (i / numCracks) * Math.PI * 2 + (Math.random() - 0.5) * 0.3;
      const maxLength = Math.max(width, height) * (0.7 + Math.random() * 0.5);
      const points = [{ x: centerX, y: centerY }];
      let currentDist = 0;
      let currX = centerX;
      let currY = centerY;
      let currAngle = angle;

      while (currentDist < maxLength) {
        const step = 20 + Math.random() * 40;
        currentDist += step;
        currAngle += (Math.random() - 0.5) * 0.5;
        currX += Math.cos(currAngle) * step;
        currY += Math.sin(currAngle) * step;
        points.push({ x: currX, y: currY });

        if (Math.random() > 0.5 && points.length > 2) {
          const subAngle = currAngle + (Math.random() > 0.5 ? 0.75 : -0.75);
          const subPoints = [{ x: currX, y: currY }];
          let subX = currX;
          let subY = currY;
          for (let s = 0; s < 4; s++) {
            subX += Math.cos(subAngle) * (15 + Math.random() * 25);
            subY += Math.sin(subAngle) * (15 + Math.random() * 25);
            subPoints.push({ x: subX, y: subY });
          }
          crackLines.push({ points: subPoints, width: 1.5, alpha: 0.9 });
        }
      }
      crackLines.push({ points, width: 2.8, alpha: 0.98 });
    }

    // Concentric spiderweb rings
    for (let r = 40; r < Math.min(width, height) * 0.45; r += 45 + Math.random() * 25) {
      const ringPoints = [];
      const steps = 16;
      for (let s = 0; s <= steps; s++) {
        const a = (s / steps) * Math.PI * 2;
        const dist = r + (Math.random() - 0.5) * 16;
        ringPoints.push({ x: centerX + Math.cos(a) * dist, y: centerY + Math.sin(a) * dist });
      }
      crackLines.push({ points: ringPoints, width: 1.8, alpha: 0.85 });
    }

    // 3D Glass Shards
    for (let i = 0; i < 110; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 6 + Math.random() * 22;
      glassShards.push({
        x: centerX + (Math.random() - 0.5) * 60,
        y: centerY + (Math.random() - 0.5) * 60,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (3 + Math.random() * 8),
        rot: Math.random() * Math.PI * 2,
        vrot: (Math.random() - 0.5) * 0.35,
        size: 12 + Math.random() * 32,
        shape: [
          { x: 0, y: -(12 + Math.random() * 18) },
          { x: 10 + Math.random() * 16, y: 6 + Math.random() * 12 },
          { x: -(10 + Math.random() * 16), y: 8 + Math.random() * 14 }
        ],
        alpha: 0.95,
        gravity: 0.32
      });
    }

    // Glowing Cartoon Sparks
    for (let i = 0; i < 130; i++) {
      const a = Math.random() * Math.PI * 2;
      const s = 6 + Math.random() * 26;
      sparks.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(a) * s,
        vy: Math.sin(a) * s,
        size: 4 + Math.random() * 7,
        color: ['#ffd700', '#00ff66', '#ff0055', '#00e5ff', '#ffffff'][Math.floor(Math.random() * 5)],
        life: 1,
        decay: 0.014 + Math.random() * 0.025
      });
    }
  }

  // 3D Drawing Utilities
  function draw3DSphere(c, x, y, radius, colorMain, colorLight, colorDark) {
    const grad = c.createRadialGradient(x - radius * 0.35, y - radius * 0.35, radius * 0.08, x, y, radius);
    grad.addColorStop(0, colorLight || '#ffffff');
    grad.addColorStop(0.35, colorMain);
    grad.addColorStop(1, colorDark || '#000000');
    c.fillStyle = grad;
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2);
    c.fill();
  }

  const startTime = performance.now();

  function render(time) {
    if (isEnded) return;

    const elapsed = (time - startTime) / 1000;

    ctx.clearRect(0, 0, width, height);
    gCtx.clearRect(0, 0, width, height);

    // ==========================================
    // LAYER 1: CARTOON 3D STADIUM & PITCH
    // ==========================================

    // Night Sky Gradient
    const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
    skyGrad.addColorStop(0, '#040b17');
    skyGrad.addColorStop(0.4, '#091e38');
    skyGrad.addColorStop(1, '#051224');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, width, height);

    // Volumetric Stadium Floodlights
    ctx.save();
    const lightGlow1 = ctx.createRadialGradient(width * 0.15, height * 0.15, 20, width * 0.15, height * 0.15, width * 0.35);
    lightGlow1.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
    lightGlow1.addColorStop(0.2, 'rgba(0, 255, 102, 0.4)');
    lightGlow1.addColorStop(1, 'transparent');
    ctx.fillStyle = lightGlow1;
    ctx.beginPath();
    ctx.arc(width * 0.15, height * 0.15, width * 0.35, 0, Math.PI * 2);
    ctx.fill();

    const lightGlow2 = ctx.createRadialGradient(width * 0.85, height * 0.15, 20, width * 0.85, height * 0.15, width * 0.35);
    lightGlow2.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
    lightGlow2.addColorStop(0.2, 'rgba(0, 229, 255, 0.4)');
    lightGlow2.addColorStop(1, 'transparent');
    ctx.fillStyle = lightGlow2;
    ctx.beginPath();
    ctx.arc(width * 0.85, height * 0.15, width * 0.35, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Stadium Tiers & Animated Cheering Cartoon Crowd
    ctx.fillStyle = 'rgba(8, 25, 45, 0.85)';
    ctx.beginPath();
    ctx.ellipse(width * 0.5, height * 0.48, width * 0.65, height * 0.28, 0, 0, Math.PI * 2);
    ctx.fill();

    crowd.forEach(c => {
      const bob = Math.sin(elapsed * 8 + c.offset) * 4;
      draw3DSphere(ctx, c.x * width, c.y * height + bob, c.size, c.color, '#ffffff', '#000000');
    });

    // 3D Cartoon Turf & Pitch
    const pitchTopW = width * 0.14;
    const pitchBottomW = width * 0.48;
    const pitchTopY = height * 0.45;
    const pitchBottomY = height * 0.96;
    const pitchCenterX = width * 0.5;

    // Outer Grass
    const grassGrad = ctx.createRadialGradient(pitchCenterX, height * 0.7, 50, pitchCenterX, height * 0.7, width * 0.6);
    grassGrad.addColorStop(0, '#109b3a');
    grassGrad.addColorStop(0.7, '#086323');
    grassGrad.addColorStop(1, '#043813');
    ctx.fillStyle = grassGrad;
    ctx.beginPath();
    ctx.ellipse(pitchCenterX, height * 0.72, width * 0.58, height * 0.32, 0, 0, Math.PI * 2);
    ctx.fill();

    // Clay Turf Pitch
    const turfGrad = ctx.createLinearGradient(pitchCenterX, pitchTopY, pitchCenterX, pitchBottomY);
    turfGrad.addColorStop(0, '#dcb46e');
    turfGrad.addColorStop(0.5, '#c99e54');
    turfGrad.addColorStop(1, '#a87e38');
    ctx.fillStyle = turfGrad;
    ctx.beginPath();
    ctx.moveTo(pitchCenterX - pitchTopW * 0.5, pitchTopY);
    ctx.lineTo(pitchCenterX + pitchTopW * 0.5, pitchTopY);
    ctx.lineTo(pitchCenterX + pitchBottomW * 0.5, pitchBottomY);
    ctx.lineTo(pitchCenterX - pitchBottomW * 0.5, pitchBottomY);
    ctx.closePath();
    ctx.fill();

    // Crease Markings
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    // Bowling crease
    ctx.beginPath();
    ctx.moveTo(pitchCenterX - pitchTopW * 0.7, pitchTopY + 20);
    ctx.lineTo(pitchCenterX + pitchTopW * 0.7, pitchTopY + 20);
    ctx.stroke();
    // Popping crease
    ctx.beginPath();
    ctx.moveTo(pitchCenterX - pitchBottomW * 0.45, pitchBottomY - 45);
    ctx.lineTo(pitchCenterX + pitchBottomW * 0.45, pitchBottomY - 45);
    ctx.stroke();

    // 3D Cartoon Stumps & Bails
    ctx.fillStyle = '#ffcc00';
    for (let st = -10; st <= 10; st += 10) {
      draw3DSphere(ctx, pitchCenterX + st, pitchTopY + 8, 3, '#ffcc00', '#fff', '#8a6500');
      ctx.fillRect(pitchCenterX + st - 2, pitchTopY + 8, 4, 20);
    }
    // Batter end stumps
    for (let st = -18; st <= 18; st += 18) {
      draw3DSphere(ctx, pitchCenterX + st, pitchBottomY - 38, 5, '#ffcc00', '#fff', '#8a6500');
      ctx.fillRect(pitchCenterX + st - 3, pitchBottomY - 38, 6, 38);
    }

    // ==========================================
    // LAYER 2: 3D CARTOON CHARACTERS ANIMATION
    // ==========================================

    // TIMELINE PHASES:
    // 0.0s - 3.2s: 3D Cartoon Bowler Run-Up
    // 3.2s - 4.8s: Bowler Windup, Leap & Express Ball Release (Speed Radar updates)
    // 4.8s - 6.6s: 3D Cartoon Batter Backlift & Load
    // 6.6s - 7.5s: Batter Monster Power Shot! (Starburst & Comic Text)
    // 7.5s - 9.4s: 5D Cartoon Ball Fly-To-Screen
    // 9.4s: Screen Glass Shatter Impact!
    // 13.5s: Smoothly Reveal Website

    // 1. CARTOON BOWLER
    if (elapsed < 5.8) {
      let bProgress = Math.min(1, Math.max(0, elapsed / 3.4));
      let bX = pitchCenterX - 45 + bProgress * 25;
      let bY = pitchTopY - 60 + bProgress * 80;
      let bScale = 0.55 + bProgress * 0.55;

      const runCycle = Math.sin(elapsed * 14);
      const bobY = Math.abs(Math.cos(elapsed * 14)) * 8;

      ctx.save();
      ctx.translate(bX, bY - (elapsed < 3.4 ? bobY : 0));
      ctx.scale(bScale, bScale);

      // Shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
      ctx.beginPath();
      ctx.ellipse(0, 50, 24, 8, 0, 0, Math.PI * 2);
      ctx.fill();

      // Bouncy Cartoon Legs & Sneakers
      const legL = elapsed < 3.4 ? runCycle * 25 : 0;
      const legR = elapsed < 3.4 ? -runCycle * 25 : 15;

      // Left Leg
      ctx.fillStyle = '#052316';
      ctx.beginPath();
      ctx.roundRect(-14, 15, 10, 32 + legL, 5);
      ctx.fill();
      draw3DSphere(ctx, -9, 48 + legL, 8, '#ffffff', '#ffffff', '#aaaaaa');

      // Right Leg
      ctx.beginPath();
      ctx.roundRect(4, 15, 10, 32 + legR, 5);
      ctx.fill();
      draw3DSphere(ctx, 9, 48 + legR, 8, '#ffffff', '#ffffff', '#aaaaaa');

      // 3D Cartoon Torso (Neon Green Jersey #10)
      draw3DSphere(ctx, 0, 0, 22, '#00ff66', '#80ffb3', '#00993d');

      // Jersey Number
      ctx.fillStyle = '#000000';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('10', 0, 4);

      // 3D Cartoon Head
      draw3DSphere(ctx, 0, -32, 18, '#ffd2a6', '#fff5eb', '#c98a53');

      // 3D Sports Visor / Cap
      ctx.fillStyle = '#0055ff';
      ctx.beginPath();
      ctx.arc(0, -42, 14, Math.PI, 0, false);
      ctx.fill();
      // Cap Brim
      ctx.fillStyle = '#0033aa';
      ctx.beginPath();
      ctx.ellipse(4, -38, 16, 5, 0.2, 0, Math.PI * 2);
      ctx.fill();

      // Big Expressive Cartoon Eyes
      draw3DSphere(ctx, -6, -34, 5, '#ffffff', '#ffffff', '#dddddd');
      draw3DSphere(ctx, 6, -34, 5, '#ffffff', '#ffffff', '#dddddd');
      // Pupils tracking pitch
      draw3DSphere(ctx, -4, -34, 2.5, '#000000', '#333333', '#000000');
      draw3DSphere(ctx, 8, -34, 2.5, '#000000', '#333333', '#000000');

      // Energetic Cartoon Smile
      ctx.strokeStyle = '#8a4b18';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(0, -26, 6, 0.2, Math.PI - 0.2);
      ctx.stroke();

      // Bowling Arm Whirlwind & Release
      let armAngle = elapsed < 3.2 ? elapsed * 6 : (elapsed - 3.2) * 16;
      const armX = 14 + Math.cos(armAngle) * 26;
      const armY = -24 - Math.sin(armAngle) * 26;

      ctx.strokeStyle = '#ffd2a6';
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.moveTo(10, -20);
      ctx.lineTo(armX, armY);
      ctx.stroke();

      // Ball in bowler hand
      if (elapsed < 3.8) {
        draw3DSphere(ctx, armX, armY, 7, '#ff0033', '#ff8099', '#880015');
      }

      ctx.restore();
    }

    // Update Speed HUD
    if (elapsed >= 3.8 && elapsed < 6.8) {
      if (speedVal) speedVal.textContent = '156.4 KM/H';
      if (alertBox && !alertBox.classList.contains('show') && elapsed < 5.8) {
        if (alertTag) alertTag.textContent = '⚡ FAST BALL';
        if (alertTitle) alertTitle.textContent = 'SUPER CARTOON BOWL!';
        alertBox.classList.add('show');
      }
    }

    // 2. CARTOON BATTER ("Master Blaster")
    const batterX = pitchCenterX + 35;
    const batterY = pitchBottomY - 70;
    const batterScale = 1.25;

    ctx.save();
    ctx.translate(batterX, batterY);
    ctx.scale(batterScale, batterScale);

    // Batter Shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.beginPath();
    ctx.ellipse(0, 48, 32, 10, 0, 0, Math.PI * 2);
    ctx.fill();

    // 3D Cartoon Batting Pads
    draw3DSphere(ctx, -14, 30, 11, '#ffffff', '#ffffff', '#cccccc');
    draw3DSphere(ctx, 10, 30, 11, '#ffffff', '#ffffff', '#cccccc');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(-22, 10, 16, 32);
    ctx.fillRect(2, 10, 16, 32);

    // 3D Cartoon Torso (Blue Team Jersey)
    draw3DSphere(ctx, 0, -4, 26, '#0066ff', '#80b3ff', '#003399');

    // 3D Oversized Cartoon Helmet
    draw3DSphere(ctx, 0, -42, 22, '#0044cc', '#66a3ff', '#002266');
    // Helmet Grill
    ctx.strokeStyle = '#cccccc';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, -38, 16, 0.1, Math.PI - 0.1);
    ctx.stroke();

    // Expressive Cartoon Eyes
    draw3DSphere(ctx, -7, -42, 6, '#ffffff', '#ffffff', '#dddddd');
    draw3DSphere(ctx, 7, -42, 6, '#ffffff', '#ffffff', '#dddddd');
    // Pupils
    draw3DSphere(ctx, -5, -42, 3, '#000000', '#333333', '#000000');
    draw3DSphere(ctx, 9, -42, 3, '#000000', '#333333', '#000000');

    // 3D Cartoon Bat Swing Physics
    let batRot = -0.7; // Ready stance
    if (elapsed >= 5.2 && elapsed < 6.8) {
      // Windup Backlift
      const t = (elapsed - 5.2) / 1.6;
      batRot = -0.7 - Math.sin(t * Math.PI) * 0.9;
    } else if (elapsed >= 6.8 && elapsed < 7.4) {
      // Powerful Smash
      const t = (elapsed - 6.8) / 0.6;
      batRot = -1.6 + t * 3.8;
    } else if (elapsed >= 7.4) {
      // Follow through
      batRot = 2.2;
    }

    ctx.save();
    ctx.translate(6, -8);
    ctx.rotate(batRot);

    // Bat Handle
    ctx.fillStyle = '#222222';
    ctx.fillRect(-4, -42, 8, 26);

    // Stylized Willow Blade
    const batGrad = ctx.createLinearGradient(-10, 0, 10, 0);
    batGrad.addColorStop(0, '#ffd999');
    batGrad.addColorStop(0.5, '#e6b866');
    batGrad.addColorStop(1, '#b38633');
    ctx.fillStyle = batGrad;
    ctx.beginPath();
    ctx.roundRect(-9, -16, 18, 68, [4, 12, 12, 4]);
    ctx.fill();

    // MCL 3D Badge on Bat
    ctx.fillStyle = '#00ff66';
    ctx.fillRect(-7, -4, 14, 20);

    // Padded Cartoon Gloves
    draw3DSphere(ctx, -2, -22, 9, '#ff0055', '#ff80aa', '#990033');
    ctx.restore();

    ctx.restore();

    // ==========================================
    // LAYER 3: 5D CARTOON BALL & POWER SHOT
    // ==========================================

    if (elapsed >= 3.8 && elapsed < 6.8) {
      // Ball pitches from bowler to batter
      const t = (elapsed - 3.8) / 3.0;
      const bX = pitchCenterX + (t * 22);
      const bY = pitchTopY + 20 + (t * (pitchBottomY - pitchTopY - 90));
      const bR = 6 + t * 10;

      draw3DSphere(ctx, bX, bY, bR, '#ff0033', '#ff8099', '#880015');
    } else if (elapsed >= 6.8 && elapsed < 9.4) {
      // Contact Spark Blast!
      if (elapsed >= 6.8 && elapsed < 7.2) {
        ctx.save();
        // Starburst shape
        ctx.fillStyle = '#ffd700';
        ctx.shadowColor = '#ff0055';
        ctx.shadowBlur = 40;
        ctx.beginPath();
        for (let s = 0; s < 12; s++) {
          const a = (s / 12) * Math.PI * 2;
          const r = s % 2 === 0 ? 55 : 22;
          const sx = batterX - 10 + Math.cos(a) * r;
          const sy = batterY - 20 + Math.sin(a) * r;
          if (s === 0) ctx.moveTo(sx, sy);
          else ctx.lineTo(sx, sy);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        if (alertBox) {
          if (alertTag) alertTag.textContent = '💥 SUPER SMASH!';
          if (alertTitle) alertTitle.textContent = '130M MAXIMUM 6!';
        }
      }

      // 5D Flying Ball to Camera
      const flyT = (elapsed - 6.8) / 2.6;
      const startX = batterX - 10;
      const startY = batterY - 20;
      const targetX = width * 0.5;
      const targetY = height * 0.5;

      const currX = startX + (targetX - startX) * flyT;
      const currY = startY + (targetY - startY) * flyT;
      const currR = 14 + Math.pow(flyT, 2.9) * Math.min(width, height) * 0.6;

      ctx.save();
      // Comic Speed Lines
      ctx.strokeStyle = 'rgba(255, 215, 0, 0.7)';
      ctx.lineWidth = 6 * flyT;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(currX, currY);
      ctx.stroke();

      // 3D Cartoon Ball with Highlights
      draw3DSphere(ctx, currX, currY, currR, '#ff1a40', '#ff99aa', '#7a0015');

      // Cartoon White Seam Stitching
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = Math.max(2, currR * 0.08);
      ctx.setLineDash([currR * 0.09, currR * 0.06]);
      ctx.beginPath();
      ctx.ellipse(currX, currY, currR * 0.95, currR * 0.3, elapsed * 14, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    // ==========================================
    // LAYER 4: GLASS CRACK & SCREEN SHATTER FX
    // ==========================================

    if (elapsed >= 9.4 && !isCracked) {
      spawnGlassShatter(width * 0.5, height * 0.5);
    }

    if (isCracked) {
      gCtx.save();
      // Draw procedural cartoon glass crack veins
      crackLines.forEach(line => {
        gCtx.strokeStyle = `rgba(255, 255, 255, ${line.alpha})`;
        gCtx.lineWidth = line.width;
        gCtx.shadowColor = '#00ff66';
        gCtx.shadowBlur = 10;
        gCtx.beginPath();
        line.points.forEach((pt, idx) => {
          if (idx === 0) gCtx.moveTo(pt.x, pt.y);
          else gCtx.lineTo(pt.x, pt.y);
        });
        gCtx.stroke();
      });

      // Render 3D Flying Glass Shards
      glassShards.forEach(shard => {
        shard.x += shard.vx;
        shard.y += shard.vy;
        shard.vy += shard.gravity;
        shard.rot += shard.vrot;
        shard.alpha -= 0.005;

        if (shard.alpha > 0) {
          gCtx.save();
          gCtx.translate(shard.x, shard.y);
          gCtx.rotate(shard.rot);
          gCtx.fillStyle = `rgba(230, 250, 255, ${shard.alpha * 0.8})`;
          gCtx.strokeStyle = `rgba(255, 255, 255, ${shard.alpha})`;
          gCtx.lineWidth = 2;
          gCtx.shadowColor = '#ffd700';
          gCtx.shadowBlur = 12;
          gCtx.beginPath();
          shard.shape.forEach((pt, sIdx) => {
            if (sIdx === 0) gCtx.moveTo(pt.x, pt.y);
            else gCtx.lineTo(pt.x, pt.y);
          });
          gCtx.closePath();
          gCtx.fill();
          gCtx.stroke();
          gCtx.restore();
        }
      });
      gCtx.restore();
    }

    // Render Sparks
    for (let i = sparks.length - 1; i >= 0; i--) {
      const p = sparks[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.94;
      p.vy *= 0.94;
      p.life -= p.decay;

      if (p.life <= 0) {
        sparks.splice(i, 1);
        continue;
      }

      gCtx.save();
      gCtx.globalAlpha = p.life;
      draw3DSphere(gCtx, p.x, p.y, Math.max(1, p.size), p.color, '#ffffff', '#000000');
      gCtx.restore();
    }

    // Auto finish after cinematic sequence
    if (elapsed >= 13.5 && !isEnded) {
      endSplash();
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
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

