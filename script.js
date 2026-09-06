document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initCalendar();
  initGallery();
  initSlider();
  initSmoothScrolling();
  initMapPlaceholder();
  initCurrentYear();
  initAnimations();
});

function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const closeMenu = document.getElementById('close-menu');
  const sideMenu = document.getElementById('side-menu');
  const overlay = document.getElementById('overlay');

  if (!menuToggle || !closeMenu || !sideMenu) return;

  const setMenuOpen = (isOpen) => {
    sideMenu.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    if (overlay) overlay.style.display = isOpen ? 'block' : 'none';
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  menuToggle.setAttribute('aria-controls', 'side-menu');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.addEventListener('click', () => setMenuOpen(true));
  closeMenu.addEventListener('click', () => setMenuOpen(false));
  overlay?.addEventListener('click', () => setMenuOpen(false));

  sideMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuOpen(false);
  });
}

function initCalendar() {
  const calendar = document.querySelector('.calendar');
  if (!calendar || calendar.children.length > 0) return;

  const currentDate = new Date();
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate();

  for (let dayNumber = 1; dayNumber <= daysInMonth; dayNumber += 1) {
    const day = document.createElement('div');
    day.classList.add('calendar-day', 'neumorphic');
    day.textContent = dayNumber;
    calendar.appendChild(day);
  }
}

function initGallery() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalDescription = document.getElementById('modalDescription');
  const closeButton = modal?.querySelector('.close');

  if (!galleryItems.length || !modal || !modalImage) return;

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const image = item.querySelector('.gallery-image');
      const description = item.querySelector('.image-description');
      if (!image) return;

      modalImage.src = image.src;
      if (modalDescription) modalDescription.textContent = description?.textContent || '';
      modal.style.display = 'block';
    });
  });

  closeButton?.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) modal.style.display = 'none';
  });
}

function initSlider() {
  const images = [...document.querySelectorAll('.slider-image')];
  const previous = document.querySelector('.slider-arrow.left');
  const next = document.querySelector('.slider-arrow.right');
  if (!images.length || !previous || !next) return;

  let currentIndex = 0;
  const showImage = (index) => {
    images.forEach((image, imageIndex) => {
      image.classList.toggle('active', imageIndex === index);
    });
  };
  const move = (direction) => {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    showImage(currentIndex);
  };

  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  window.setInterval(() => move(1), 5000);
  showImage(currentIndex);
}

function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    const selector = anchor.getAttribute('href');
    if (!selector || selector === '#' || selector === '#!') return;

    const target = document.querySelector(selector);
    if (!target) return;

    anchor.addEventListener('click', (event) => {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function initMapPlaceholder() {
  const map = document.getElementById('map');
  if (map && !map.children.length) {
    map.innerHTML = '<p class="text-center py-20">Interactive map placeholder</p>';
  }
}

function initCurrentYear() {
  const currentYear = document.getElementById('currentYear');
  if (currentYear) currentYear.textContent = new Date().getFullYear();
}

function initAnimations() {
  if (!window.gsap) return;

  if (document.querySelector('.news-card')) {
    window.gsap.from('.news-card', {
      duration: 0.8,
      y: 40,
      opacity: 0,
      stagger: 0.15,
      ease: 'power3.out',
    });
  }

  if (document.querySelector('.calendar-day')) {
    window.gsap.from('.calendar-day', {
      duration: 0.4,
      scale: 0,
      opacity: 0,
      stagger: 0.02,
      ease: 'back.out(1.7)',
    });
  }
}
