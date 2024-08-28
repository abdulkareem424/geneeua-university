  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const closeMenu = document.getElementById('close-menu');
  const sideMenu = document.getElementById('side-menu');
  const overlay = document.getElementById('overlay');

  function openMenu() {
      sideMenu.classList.add('open');
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
  }

  function closeMenuFunction() {
      sideMenu.classList.remove('open');
      overlay.style.display = 'none';
      document.body.style.overflow = 'auto';
  }

  menuToggle.addEventListener('click', openMenu);
  closeMenu.addEventListener('click', closeMenuFunction);
  overlay.addEventListener('click', closeMenuFunction);

  // Calendar functionality
  const calendar = document.querySelector('.calendar');
  const currentDate = new Date();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  for (let i = 1; i <= daysInMonth; i++) {
      const day = document.createElement('div');
      day.classList.add('calendar-day', 'neumorphic');
      day.textContent = i;
      calendar.appendChild(day);
  }

  // Animations
  gsap.from('.news-card', {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.out'
  });

  gsap.from('.calendar-day', {
      duration: 0.5,
      scale: 0,
      opacity: 0,
      stagger: 0.02,
      ease: 'back.out(1.7)'
  });