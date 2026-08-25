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

// ===== CINEMATIC 5D CRICKET STADIUM & GLASS SHATTER INTRO =====
function initCricketSplash() {
  const splash = document.getElementById('cricket-splash');
  if (!splash) return;

  const cinemaCanvas = document.getElementById('stadium-cinema-canvas');
  const glassCanvas = document.getElementById('glass-shatter-canvas');
  const flash = document.getElementById('impact-chromatic-flash');
  const shockwave = document.getElementById('impact-shockwave-circle');
  const speedVal = document.getElementById('hud-speed-val');
  const alertBox = document.getElementById('hud-center-alert');
  const alertTag = document.getElementById('hud-alert-tag');
  const alertTitle = document.getElementById('hud-alert-title');
  const skipBtn = document.getElementById('splash-skip-btn');

  if (!cinemaCanvas || !glassCanvas) return;

  const cCtx = cinemaCanvas.getContext('2d');
  const gCtx = glassCanvas.getContext('2d');

  let width = (cinemaCanvas.width = glassCanvas.width = window.innerWidth);
  let height = (cinemaCanvas.height = glassCanvas.height = window.innerHeight);

  const onResize = () => {
    width = cinemaCanvas.width = glassCanvas.width = window.innerWidth;
    height = cinemaCanvas.height = glassCanvas.height = window.innerHeight;
  };
  window.addEventListener('resize', onResize, { passive: true });

  // Load Stadium Background Image
  const stadiumImg = new Image();
  stadiumImg.src = 'cricket-stadium-bg.jpg';
  let stadiumLoaded = false;
  stadiumImg.onload = () => { stadiumLoaded = true; };

  // Particle systems
  const crowdFlashes = [];
  for (let i = 0; i < 40; i++) {
    crowdFlashes.push({
      x: Math.random(),
      y: Math.random() * 0.45,
      alpha: 0,
      active: false,
      timer: Math.random() * 200
    });
  }

  const sparks = [];
  const glassShards = [];
  const crackLines = [];
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

  // Animation timeline clock
  let startTime = performance.now();

  function spawnGlassShatter(centerX, centerY) {
    isCracked = true;
    splash.classList.add('shake-extreme');

    // Impact chromatic flare
    if (flash) {
      flash.style.opacity = '1';
      setTimeout(() => { flash.style.opacity = '0'; }, 180);
    }

    if (shockwave) {
      shockwave.style.opacity = '1';
      shockwave.style.transition = 'transform 0.6s cubic-bezier(0.1, 0.9, 0.2, 1), opacity 0.6s ease-out';
      shockwave.style.transform = 'translate(-50%, -50%) scale(25)';
      setTimeout(() => { shockwave.style.opacity = '0'; }, 400);
    }

    // Generate procedural crack lines branching outward
    const numPrimaryCracks = 16;
    for (let i = 0; i < numPrimaryCracks; i++) {
      const angle = (i / numPrimaryCracks) * Math.PI * 2 + (Math.random() - 0.5) * 0.35;
      const maxLength = Math.max(width, height) * (0.6 + Math.random() * 0.5);
      const points = [{ x: centerX, y: centerY }];
      let currentDist = 0;
      let currX = centerX;
      let currY = centerY;
      let currAngle = angle;

      while (currentDist < maxLength) {
        const step = 20 + Math.random() * 45;
        currentDist += step;
        currAngle += (Math.random() - 0.5) * 0.45;
        currX += Math.cos(currAngle) * step;
        currY += Math.sin(currAngle) * step;
        points.push({ x: currX, y: currY });

        // Branching sub-cracks
        if (Math.random() > 0.6 && points.length > 2) {
          const subAngle = currAngle + (Math.random() > 0.5 ? 0.7 : -0.7);
          const subPoints = [{ x: currX, y: currY }];
          let subX = currX;
          let subY = currY;
          for (let s = 0; s < 3 + Math.floor(Math.random() * 4); s++) {
            subX += Math.cos(subAngle) * (15 + Math.random() * 25);
            subY += Math.sin(subAngle) * (15 + Math.random() * 25);
            subPoints.push({ x: subX, y: subY });
          }
          crackLines.push({ points: subPoints, width: 1.2 + Math.random() * 1.5, alpha: 0.85 });
        }
      }
      crackLines.push({ points, width: 2 + Math.random() * 2.5, alpha: 0.95 });
    }

    // Generate concentric spiderweb crack loops
    for (let r = 40; r < Math.min(width, height) * 0.45; r += 35 + Math.random() * 25) {
      const ringPoints = [];
      const steps = 14;
      for (let s = 0; s <= steps; s++) {
        const a = (s / steps) * Math.PI * 2;
        const dist = r + (Math.random() - 0.5) * 15;
        ringPoints.push({ x: centerX + Math.cos(a) * dist, y: centerY + Math.sin(a) * dist });
      }
      crackLines.push({ points: ringPoints, width: 1.5, alpha: 0.8 });
    }

    // Spawn 3D flying glass shards
    for (let i = 0; i < 90; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 18;
      glassShards.push({
        x: centerX + (Math.random() - 0.5) * 40,
        y: centerY + (Math.random() - 0.5) * 40,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (2 + Math.random() * 6),
        rot: Math.random() * Math.PI * 2,
        vrot: (Math.random() - 0.5) * 0.25,
        size: 8 + Math.random() * 26,
        shape: [
          { x: 0, y: -(8 + Math.random() * 15) },
          { x: 6 + Math.random() * 12, y: 4 + Math.random() * 8 },
          { x: -(6 + Math.random() * 12), y: 6 + Math.random() * 10 }
        ],
        alpha: 0.95,
        gravity: 0.28
      });
    }

    // Spawn high-energy spark particles
    for (let i = 0; i < 110; i++) {
      const a = Math.random() * Math.PI * 2;
      const s = 6 + Math.random() * 22;
      sparks.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(a) * s,
        vy: Math.sin(a) * s,
        size: 2.5 + Math.random() * 5,
        color: Math.random() > 0.4 ? '#00ff66' : (Math.random() > 0.5 ? '#ffffff' : '#00e5ff'),
        life: 1,
        decay: 0.015 + Math.random() * 0.025
      });
    }
  }

  function render(time) {
    if (isEnded) return;

    const elapsed = (time - startTime) / 1000; // in seconds

    // Clear canvases
    cCtx.clearRect(0, 0, width, height);
    gCtx.clearRect(0, 0, width, height);

    // ==========================================
    // LAYER 1: STADIUM & PITCH ENVIRONMENT
    // ==========================================
    if (stadiumLoaded) {
      // Dynamic camera zoom/pan
      const zoom = 1.05 + Math.sin(elapsed * 0.6) * 0.03;
      const panX = Math.sin(elapsed * 0.4) * 15;
      const panY = Math.cos(elapsed * 0.3) * 10;
      cCtx.save();
      cCtx.translate(width / 2 + panX, height / 2 + panY);
      cCtx.scale(zoom, zoom);
      cCtx.drawImage(stadiumImg, -width / 2, -height / 2, width, height);
      cCtx.restore();
    } else {
      // Dark fallback stadium gradient
      const bgGrad = cCtx.createRadialGradient(width / 2, height * 0.4, 50, width / 2, height * 0.4, width * 0.8);
      bgGrad.addColorStop(0, '#0a1a12');
      bgGrad.addColorStop(0.5, '#040d08');
      bgGrad.addColorStop(1, '#020305');
      cCtx.fillStyle = bgGrad;
      cCtx.fillRect(0, 0, width, height);
    }

    // Crowd flashbulbs
    crowdFlashes.forEach(f => {
      f.timer--;
      if (f.timer <= 0) {
        f.active = true;
        f.alpha = 1;
        f.timer = 120 + Math.random() * 240;
      }
      if (f.active) {
        cCtx.fillStyle = `rgba(255, 255, 255, ${f.alpha * 0.8})`;
        cCtx.beginPath();
        cCtx.arc(f.x * width, f.y * height, 2.5 + Math.random() * 3, 0, Math.PI * 2);
        cCtx.fill();
        f.alpha -= 0.08;
        if (f.alpha <= 0) f.active = false;
      }
    });

    // 3D Perspective Pitch Geometry
    const pitchTopW = width * 0.08;
    const pitchBottomW = width * 0.38;
    const pitchTopY = height * 0.42;
    const pitchBottomY = height * 0.95;
    const pitchCenterX = width * 0.5;

    cCtx.save();
    // Pitch turf gradient
    const turfGrad = cCtx.createLinearGradient(pitchCenterX, pitchTopY, pitchCenterX, pitchBottomY);
    turfGrad.addColorStop(0, 'rgba(120, 150, 75, 0.4)');
    turfGrad.addColorStop(0.6, 'rgba(145, 175, 85, 0.65)');
    turfGrad.addColorStop(1, 'rgba(110, 140, 65, 0.8)');

    cCtx.fillStyle = turfGrad;
    cCtx.beginPath();
    cCtx.moveTo(pitchCenterX - pitchTopW / 2, pitchTopY);
    cCtx.lineTo(pitchCenterX + pitchTopW / 2, pitchTopY);
    cCtx.lineTo(pitchCenterX + pitchBottomW / 2, pitchBottomY);
    cCtx.lineTo(pitchCenterX - pitchBottomW / 2, pitchBottomY);
    cCtx.closePath();
    cCtx.fill();

    // Crease Lines
    cCtx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    cCtx.lineWidth = 2.5;

    // Bowling crease (top)
    cCtx.beginPath();
    cCtx.moveTo(pitchCenterX - pitchTopW * 0.8, pitchTopY + 15);
    cCtx.lineTo(pitchCenterX + pitchTopW * 0.8, pitchTopY + 15);
    cCtx.stroke();

    // Popping crease (striker bottom)
    cCtx.beginPath();
    cCtx.moveTo(pitchCenterX - pitchBottomW * 0.45, pitchBottomY - 40);
    cCtx.lineTo(pitchCenterX + pitchBottomW * 0.45, pitchBottomY - 40);
    cCtx.stroke();

    // Stumps / Wickets at bowler end
    cCtx.fillStyle = '#f0c070';
    for (let st = -6; st <= 6; st += 6) {
      cCtx.fillRect(pitchCenterX + st - 1, pitchTopY + 2, 2, 16);
    }
    // Stumps at batter end
    for (let st = -14; st <= 14; st += 14) {
      cCtx.fillRect(pitchCenterX + st - 2, pitchBottomY - 32, 4, 32);
    }
    cCtx.restore();

    // ==========================================
    // LAYER 2: CINEMATIC BOWLER & BATTER ACTION
    // ==========================================

    // TIMELINE PHASES:
    // 0.0s - 3.5s: Bowler Run-Up
    // 3.5s - 5.5s: Bowling Delivery & Ball Release (Speed Radar updates)
    // 5.5s - 7.5s: Batter Front-Foot Power Drive
    // 7.5s: Sweet Spot Impact Flash
    // 7.5s - 9.5s: 5D Ball Flights to Screen
    // 9.5s: Glass Shatter Impact!
    // 14.0s: Reveal Website

    // Bowler Coordinates
    let bowlerProgress = Math.min(1, Math.max(0, elapsed / 4.8));
    let bowlerX = pitchCenterX - (35 * (1 - bowlerProgress));
    let bowlerY = pitchTopY - 40 + (bowlerProgress * 55);
    let bowlerScale = 0.5 + bowlerProgress * 0.45;

    // Draw Bowler
    if (elapsed < 6.0) {
      cCtx.save();
      cCtx.translate(bowlerX, bowlerY);
      cCtx.scale(bowlerScale, bowlerScale);

      // Running stride legs
      const runCycle = Math.sin(elapsed * 16);
      cCtx.strokeStyle = '#ffffff';
      cCtx.lineWidth = 4.5;
      cCtx.lineCap = 'round';

      // Left leg
      cCtx.beginPath();
      cCtx.moveTo(0, 0);
      cCtx.lineTo(-10 + runCycle * 12, 28);
      cCtx.lineTo(-12 + runCycle * 16, 52);
      cCtx.stroke();

      // Right leg
      cCtx.beginPath();
      cCtx.moveTo(0, 0);
      cCtx.lineTo(10 - runCycle * 12, 26);
      cCtx.lineTo(12 - runCycle * 16, 50);
      cCtx.stroke();

      // Jersey Torso
      cCtx.fillStyle = '#00ff66';
      cCtx.beginPath();
      cCtx.roundRect(-12, -28, 24, 30, 4);
      cCtx.fill();

      // Head / Cap
      cCtx.fillStyle = '#111';
      cCtx.beginPath();
      cCtx.arc(0, -38, 9, 0, Math.PI * 2);
      cCtx.fill();

      // Bowling Arm windup
      const armAngle = elapsed > 4.2 ? (elapsed - 4.2) * 14 : elapsed * 6;
      cCtx.strokeStyle = '#fff';
      cCtx.lineWidth = 4;
      cCtx.beginPath();
      cCtx.moveTo(8, -22);
      cCtx.lineTo(8 + Math.cos(armAngle) * 24, -22 - Math.sin(armAngle) * 24);
      cCtx.stroke();

      // Ball in bowler hand before release
      if (elapsed < 4.8) {
        cCtx.fillStyle = '#d70015';
        cCtx.beginPath();
        cCtx.arc(8 + Math.cos(armAngle) * 24, -22 - Math.sin(armAngle) * 24, 4.5, 0, Math.PI * 2);
        cCtx.fill();
      }

      cCtx.restore();
    }

    // Update Speed HUD
    if (elapsed >= 4.8 && elapsed < 7.5) {
      if (speedVal) speedVal.textContent = '153.8 KM/H';
      if (alertBox && !alertBox.classList.contains('show') && elapsed < 6.8) {
        if (alertTag) alertTag.textContent = 'EXPRESS PACE';
        if (alertTitle) alertTitle.textContent = '153.8 KM/H INCOMING';
        alertBox.classList.add('show');
      }
    }

    // Batter Coordinates
    const batterX = pitchCenterX + 25;
    const batterY = pitchBottomY - 80;
    const batterScale = 1.15;

    // Draw Batter
    cCtx.save();
    cCtx.translate(batterX, batterY);
    cCtx.scale(batterScale, batterScale);

    // Stance legs with protective batting pads
    cCtx.fillStyle = '#e8edf2'; // White pads
    cCtx.fillRect(-18, 10, 14, 52);
    cCtx.fillRect(2, 10, 14, 52);

    // Jersey & Helmet
    cCtx.fillStyle = '#0055ff'; // Team Blue Jersey
    cCtx.beginPath();
    cCtx.roundRect(-16, -34, 32, 46, 5);
    cCtx.fill();

    // Helmet with grill
    cCtx.fillStyle = '#0a2040';
    cCtx.beginPath();
    cCtx.arc(0, -48, 12, 0, Math.PI * 2);
    cCtx.fill();

    // Batting swing angle
    let batAngle = -0.6; // Stance backlift
    if (elapsed >= 6.2 && elapsed < 7.6) {
      // Downswing
      const swingT = (elapsed - 6.2) / 1.4;
      batAngle = -0.6 + swingT * 2.8;
    } else if (elapsed >= 7.6) {
      // Follow through
      batAngle = 2.2;
    }

    // Bat Blade
    cCtx.save();
    cCtx.translate(6, -10);
    cCtx.rotate(batAngle);

    // Bat Handle
    cCtx.fillStyle = '#1a1a1a';
    cCtx.fillRect(-3, -38, 6, 22);

    // Willow Blade
    cCtx.fillStyle = '#d4a359';
    cCtx.beginPath();
    cCtx.roundRect(-7, -16, 14, 60, [2, 8, 8, 2]);
    cCtx.fill();

    // MCL sticker
    cCtx.fillStyle = '#00ff66';
    cCtx.fillRect(-5, -6, 10, 18);

    cCtx.restore();
    cCtx.restore();

    // ==========================================
    // LAYER 3: 5D FLYING BALL TRAJECTORY
    // ==========================================

    if (elapsed >= 4.8 && elapsed < 7.4) {
      // Ball pitching from bowler to batter
      const t = (elapsed - 4.8) / 2.6;
      const bX = pitchCenterX + (t * 20);
      const bY = pitchTopY + 20 + (t * (pitchBottomY - pitchTopY - 90));
      const bR = 4.5 + t * 9;

      cCtx.fillStyle = '#d70015';
      cCtx.beginPath();
      cCtx.arc(bX, bY, bR, 0, Math.PI * 2);
      cCtx.fill();
    } else if (elapsed >= 7.4 && elapsed < 9.6) {
      // BAT IMPACT & 5D BALL FLYING DIRECTLY AT CAMERA!
      if (elapsed >= 7.4 && elapsed < 7.7) {
        // Contact spark burst at bat
        cCtx.save();
        cCtx.fillStyle = '#ffffff';
        cCtx.shadowColor = '#00ff66';
        cCtx.shadowBlur = 30;
        cCtx.beginPath();
        cCtx.arc(batterX - 10, batterY - 15, 32, 0, Math.PI * 2);
        cCtx.fill();
        cCtx.restore();

        if (alertBox) {
          if (alertTag) alertTag.textContent = '💥 MAXIMUM 6';
          if (alertTitle) alertTitle.textContent = '126 METERS POWER SHOT';
        }
      }

      // 5D Projectile towards center screen
      const flyProgress = (elapsed - 7.4) / 2.2; // 0 to 1
      const startX = batterX - 10;
      const startY = batterY - 15;
      const targetX = width * 0.5;
      const targetY = height * 0.5;

      const currBallX = startX + (targetX - startX) * flyProgress;
      const currBallY = startY + (targetY - startY) * flyProgress;
      // Exponential 5D scale up
      const currRadius = 12 + Math.pow(flyProgress, 2.8) * Math.min(width, height) * 0.55;

      // Realistic 3D Shaded Cricket Ball with Seam
      cCtx.save();
      cCtx.translate(currBallX, currBallY);

      // Motion blur trail
      cCtx.shadowColor = 'rgba(0, 255, 102, 0.8)';
      cCtx.shadowBlur = 25 * flyProgress;

      const ballGrad = cCtx.createRadialGradient(-currRadius * 0.35, -currRadius * 0.35, currRadius * 0.1, 0, 0, currRadius);
      ballGrad.addColorStop(0, '#ff4d4d');
      ballGrad.addColorStop(0.4, '#cc001b');
      ballGrad.addColorStop(0.8, '#7a0010');
      ballGrad.addColorStop(1, '#2c0005');

      cCtx.fillStyle = ballGrad;
      cCtx.beginPath();
      cCtx.arc(0, 0, currRadius, 0, Math.PI * 2);
      cCtx.fill();

      // Spinning 3D Seam Stitching
      cCtx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
      cCtx.lineWidth = Math.max(1.5, currRadius * 0.06);
      cCtx.setLineDash([currRadius * 0.08, currRadius * 0.06]);
      cCtx.beginPath();
      cCtx.ellipse(0, 0, currRadius * 0.95, currRadius * 0.25, elapsed * 12, 0, Math.PI * 2);
      cCtx.stroke();

      // Specular highlight
      cCtx.fillStyle = 'rgba(255, 255, 255, 0.65)';
      cCtx.beginPath();
      cCtx.ellipse(-currRadius * 0.3, -currRadius * 0.3, currRadius * 0.25, currRadius * 0.14, -0.4, 0, Math.PI * 2);
      cCtx.fill();

      cCtx.restore();
    }

    // ==========================================
    // LAYER 4: GLASS CRACK & SCREEN SHATTER FX
    // ==========================================

    if (elapsed >= 9.6 && !isCracked) {
      spawnGlassShatter(width * 0.5, height * 0.5);
    }

    if (isCracked) {
      // Draw procedural branching glass crack veins
      gCtx.save();
      crackLines.forEach(line => {
        gCtx.strokeStyle = `rgba(220, 245, 255, ${line.alpha})`;
        gCtx.lineWidth = line.width;
        gCtx.shadowColor = 'rgba(0, 255, 180, 0.8)';
        gCtx.shadowBlur = 6;
        gCtx.beginPath();
        line.points.forEach((pt, idx) => {
          if (idx === 0) gCtx.moveTo(pt.x, pt.y);
          else gCtx.lineTo(pt.x, pt.y);
        });
        gCtx.stroke();
      });

      // Impact center frosted shatter zone
      const frostedGrad = gCtx.createRadialGradient(width * 0.5, height * 0.5, 10, width * 0.5, height * 0.5, 160);
      frostedGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      frostedGrad.addColorStop(0.3, 'rgba(200, 250, 255, 0.5)');
      frostedGrad.addColorStop(0.7, 'rgba(0, 255, 102, 0.2)');
      frostedGrad.addColorStop(1, 'transparent');
      gCtx.fillStyle = frostedGrad;
      gCtx.beginPath();
      gCtx.arc(width * 0.5, height * 0.5, 160, 0, Math.PI * 2);
      gCtx.fill();

      // Render 3D Flying Glass Shards
      glassShards.forEach((shard, idx) => {
        shard.x += shard.vx;
        shard.y += shard.vy;
        shard.vy += shard.gravity;
        shard.rot += shard.vrot;
        shard.alpha -= 0.005;

        if (shard.alpha > 0) {
          gCtx.save();
          gCtx.translate(shard.x, shard.y);
          gCtx.rotate(shard.rot);
          gCtx.fillStyle = `rgba(220, 245, 255, ${shard.alpha * 0.75})`;
          gCtx.strokeStyle = `rgba(255, 255, 255, ${shard.alpha})`;
          gCtx.lineWidth = 1.5;
          gCtx.shadowColor = '#00ff66';
          gCtx.shadowBlur = 8;
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
      gCtx.fillStyle = p.color;
      gCtx.shadowColor = p.color;
      gCtx.shadowBlur = 10;
      gCtx.beginPath();
      gCtx.arc(p.x, p.y, Math.max(0.5, p.size), 0, Math.PI * 2);
      gCtx.fill();
      gCtx.restore();
    }

    // Auto finish after cinematic sequence
    if (elapsed >= 14.5 && !isEnded) {
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

