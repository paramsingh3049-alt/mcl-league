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

// ===== CINEMATIC 5D PHOTOREALISTIC CRICKET INTRO =====
function initCricketSplash() {
  const splash = document.getElementById('cricket-splash');
  if (!splash) return;

  const sceneBowler = document.getElementById('scene-bowler');
  const sceneBatter = document.getElementById('scene-batter');
  const sceneBall = document.getElementById('scene-ball');
  const sceneGlass = document.getElementById('scene-glass');
  const cinemaBallImg = document.getElementById('cinema-ball-img');
  const fxCanvas = document.getElementById('cinema-fx-canvas');
  const glassCanvas = document.getElementById('glass-shatter-canvas');
  const flash = document.getElementById('impact-chromatic-flash');
  const shockwave = document.getElementById('impact-shockwave-circle');
  const speedVal = document.getElementById('hud-speed-val');
  const alertBox = document.getElementById('hud-center-alert');
  const alertTag = document.getElementById('hud-alert-tag');
  const alertTitle = document.getElementById('hud-alert-title');
  const skipBtn = document.getElementById('splash-skip-btn');

  if (!fxCanvas || !glassCanvas) return;

  const fxCtx = fxCanvas.getContext('2d');
  const gCtx = glassCanvas.getContext('2d');

  let width = (fxCanvas.width = glassCanvas.width = window.innerWidth);
  let height = (fxCanvas.height = glassCanvas.height = window.innerHeight);

  const onResize = () => {
    width = fxCanvas.width = glassCanvas.width = window.innerWidth;
    height = fxCanvas.height = glassCanvas.height = window.innerHeight;
  };
  window.addEventListener('resize', onResize, { passive: true });

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

  function spawnGlassShatter(centerX, centerY) {
    isCracked = true;
    splash.classList.add('shake-extreme');
    if (sceneGlass) sceneGlass.classList.add('active');

    // Impact chromatic flare
    if (flash) {
      flash.style.opacity = '1';
      setTimeout(() => { flash.style.opacity = '0'; }, 160);
    }

    if (shockwave) {
      shockwave.style.opacity = '1';
      shockwave.style.transition = 'transform 0.6s cubic-bezier(0.1, 0.9, 0.2, 1), opacity 0.6s ease-out';
      shockwave.style.transform = 'translate(-50%, -50%) scale(28)';
      setTimeout(() => { shockwave.style.opacity = '0'; }, 420);
    }

    // Generate procedural crack lines branching outward
    const numPrimaryCracks = 18;
    for (let i = 0; i < numPrimaryCracks; i++) {
      const angle = (i / numPrimaryCracks) * Math.PI * 2 + (Math.random() - 0.5) * 0.35;
      const maxLength = Math.max(width, height) * (0.65 + Math.random() * 0.5);
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

        if (Math.random() > 0.55 && points.length > 2) {
          const subAngle = currAngle + (Math.random() > 0.5 ? 0.75 : -0.75);
          const subPoints = [{ x: currX, y: currY }];
          let subX = currX;
          let subY = currY;
          for (let s = 0; s < 4 + Math.floor(Math.random() * 4); s++) {
            subX += Math.cos(subAngle) * (15 + Math.random() * 25);
            subY += Math.sin(subAngle) * (15 + Math.random() * 25);
            subPoints.push({ x: subX, y: subY });
          }
          crackLines.push({ points: subPoints, width: 1.5 + Math.random() * 1.5, alpha: 0.9 });
        }
      }
      crackLines.push({ points, width: 2.2 + Math.random() * 2.5, alpha: 0.95 });
    }

    // Spawn 3D flying glass shards
    for (let i = 0; i < 95; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 5 + Math.random() * 20;
      glassShards.push({
        x: centerX + (Math.random() - 0.5) * 50,
        y: centerY + (Math.random() - 0.5) * 50,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (3 + Math.random() * 6),
        rot: Math.random() * Math.PI * 2,
        vrot: (Math.random() - 0.5) * 0.3,
        size: 10 + Math.random() * 28,
        shape: [
          { x: 0, y: -(10 + Math.random() * 16) },
          { x: 8 + Math.random() * 14, y: 5 + Math.random() * 10 },
          { x: -(8 + Math.random() * 14), y: 7 + Math.random() * 12 }
        ],
        alpha: 0.95,
        gravity: 0.3
      });
    }

    // Spawn high-energy spark particles
    for (let i = 0; i < 120; i++) {
      const a = Math.random() * Math.PI * 2;
      const s = 6 + Math.random() * 24;
      sparks.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(a) * s,
        vy: Math.sin(a) * s,
        size: 3 + Math.random() * 6,
        color: Math.random() > 0.4 ? '#00ff66' : (Math.random() > 0.5 ? '#ffffff' : '#00e5ff'),
        life: 1,
        decay: 0.015 + Math.random() * 0.025
      });
    }
  }

  // Multi-scene cinematic progression
  const startTime = performance.now();

  function render(time) {
    if (isEnded) return;

    const elapsed = (time - startTime) / 1000;

    fxCtx.clearRect(0, 0, width, height);
    gCtx.clearRect(0, 0, width, height);

    // TIMELINE PHASES:
    // 0.0s - 3.2s: Scene 1 - Bowler Delivery
    // 3.2s - 6.6s: Scene 2 - Batter Power Shot
    // 6.6s - 9.0s: Scene 3 - 5D Ball Fly-To-Screen
    // 9.0s: Glass Shatter Impact!
    // 13.5s: Reveal Website

    if (elapsed < 3.2) {
      if (!sceneBowler.classList.contains('active')) {
        sceneBowler.classList.add('active');
        if (alertBox) {
          if (alertTag) alertTag.textContent = 'EXPRESS PACE';
          if (alertTitle) alertTitle.textContent = 'FAST BOWLER SPELL';
          alertBox.classList.add('show');
        }
      }
    } else if (elapsed >= 3.2 && elapsed < 6.6) {
      if (sceneBowler.classList.contains('active')) sceneBowler.classList.remove('active');
      if (!sceneBatter.classList.contains('active')) {
        sceneBatter.classList.add('active');
        if (alertBox) {
          if (alertTag) alertTag.textContent = '💥 POWER SHOT';
          if (alertTitle) alertTitle.textContent = '126 METERS MAXIMUM 6';
        }
      }
    } else if (elapsed >= 6.6 && elapsed < 9.0) {
      if (sceneBatter.classList.contains('active')) sceneBatter.classList.remove('active');
      if (!sceneBall.classList.contains('active')) {
        sceneBall.classList.add('active');
        if (alertBox) {
          if (alertTag) alertTag.textContent = '⚠️ IMPACT ALERT';
          if (alertTitle) alertTitle.textContent = 'DIRECT HIT INCOMING';
        }
      }

      // 5D Ball scaling towards screen
      const ballProgress = Math.min(1, (elapsed - 6.6) / 2.4);
      const scale = 1.0 + Math.pow(ballProgress, 3) * 4.5;
      if (cinemaBallImg) {
        cinemaBallImg.style.transform = `scale(${scale})`;
      }
    }

    if (elapsed >= 9.0 && !isCracked) {
      spawnGlassShatter(width * 0.5, height * 0.5);
    }

    if (isCracked) {
      // Draw procedural glass crack lines
      gCtx.save();
      crackLines.forEach(line => {
        gCtx.strokeStyle = `rgba(220, 245, 255, ${line.alpha})`;
        gCtx.lineWidth = line.width;
        gCtx.shadowColor = 'rgba(0, 255, 180, 0.9)';
        gCtx.shadowBlur = 8;
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
          gCtx.fillStyle = `rgba(220, 245, 255, ${shard.alpha * 0.75})`;
          gCtx.strokeStyle = `rgba(255, 255, 255, ${shard.alpha})`;
          gCtx.lineWidth = 1.5;
          gCtx.shadowColor = '#00ff66';
          gCtx.shadowBlur = 10;
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

