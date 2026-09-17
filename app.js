const toggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const header = document.querySelector('.site-header');
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const motionItems = new Set();
const parallaxMedia = [];

function addReveal(element, options = {}) {
  if (!element || motionItems.has(element)) return;
  const { direction = '', delay = 0, image = false } = options;
  element.classList.add(image ? 'motion-image' : 'motion-reveal');
  if (direction) element.classList.add(`motion-${direction}`);
  element.style.setProperty('--motion-delay', `${delay}ms`);
  motionItems.add(element);
}

function registerMotion() {
  document.body.classList.add('motion-ready');

  const hero = document.querySelector('.home-hero, .page-hero');
  if (hero) {
    const heroSteps = hero.querySelectorAll(
      '.hero-brandmark, .kicker, h1, .hero-lead, .page-lead, .hero-actions, .hero-details, .button-row'
    );
    heroSteps.forEach((item, index) => {
      item.classList.add('hero-enter');
      item.style.setProperty('--hero-delay', `${90 + index * 90}ms`);
    });
  }

  document.querySelectorAll('.section-heading, .menu-intro, .gallery-heading').forEach((el) => addReveal(el));

  const pairedSelectors = [
    '.story-grid > *',
    '.split-feature > *',
    '.narrative-grid > *',
    '.quote-layout > *',
    '.catering-page-grid > *',
    '.visit-grid > *',
    '.visit-band-inner > *',
    '.specials-grid > *'
  ];
  pairedSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el, index) => {
      addReveal(el, { direction: index % 2 === 0 ? 'left' : 'right', delay: index * 80 });
    });
  });

  document.querySelectorAll('.hospitality-grid > *').forEach((el, index) => {
    addReveal(el, { delay: index * 90 });
  });

  const staggerGroups = [
    ['.menu-block', 75],
    ['.gallery-masonry figure', 70],
    ['.gallery-grid figure', 70],
    ['.food-strip figure', 70],
    ['.photo-triptych figure', 80],
    ['.special-notes > div', 65],
    ['.catering-list > span', 60],
    ['.hours-card dl > div', 55]
  ];
  staggerGroups.forEach(([selector, step]) => {
    document.querySelectorAll(selector).forEach((el, index) => {
      addReveal(el, { image: el.tagName === 'FIGURE', delay: (index % 6) * step });
    });
  });

  document.querySelectorAll(
    '.story-photo, .stacked-photos figure, .hospitality-grid figure, .split-feature figure, .catering-page-grid .menu-poster'
  ).forEach((figure) => {
    if (figure.classList.contains('show-full')) return;
    figure.classList.add('motion-parallax');
    parallaxMedia.push(figure);
  });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => document.body.classList.add('motion-start'));
  });
}

function initObserver() {
  if (motionQuery.matches || !('IntersectionObserver' in window)) {
    motionItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, {
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.12
  });

  motionItems.forEach((item) => observer.observe(item));
}

let framePending = false;
function updateScrollMotion() {
  framePending = false;

  if (header) header.classList.toggle('is-scrolled', window.scrollY > 24);
  if (motionQuery.matches) return;

  const hero = document.querySelector('.home-hero, .page-hero');
  if (hero) {
    const rect = hero.getBoundingClientRect();
    const progress = Math.max(-1, Math.min(1, -rect.top / Math.max(rect.height, 1)));
    const shift = Math.max(-18, Math.min(22, progress * 18));
    hero.style.setProperty('--hero-shift', `${shift.toFixed(2)}px`);
  }

  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  parallaxMedia.forEach((figure) => {
    const rect = figure.getBoundingClientRect();
    if (rect.bottom < -80 || rect.top > viewportHeight + 80) return;
    const centerDelta = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
    const shift = Math.max(-12, Math.min(12, centerDelta * -18));
    const image = figure.querySelector('img');
    if (image) image.style.setProperty('--media-shift', `${shift.toFixed(2)}px`);
  });
}

function requestScrollUpdate() {
  if (framePending) return;
  framePending = true;
  requestAnimationFrame(updateScrollMotion);
}

registerMotion();
initObserver();
updateScrollMotion();
window.addEventListener('scroll', requestScrollUpdate, { passive: true });
window.addEventListener('resize', requestScrollUpdate, { passive: true });
motionQuery.addEventListener?.('change', () => {
  if (motionQuery.matches) motionItems.forEach((item) => item.classList.add('is-visible'));
  requestScrollUpdate();
});
