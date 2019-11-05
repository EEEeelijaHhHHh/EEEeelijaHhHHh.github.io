/* Navigation Hamburger Menu */
(function () {
  const headerContent = document.querySelector('.header-content')
  const nav = document.querySelector('.nav');
  const menu = document.querySelector('.nav-menu');
  const hamburger = document.querySelector('.nav-hamburger');

  const links = document.querySelectorAll('.nav-menu__link');

  hamburger.addEventListener('click', function () {
    toggleMenu();
  });

  links.forEach(link => link.addEventListener('click', () => {
    toggleMenu();
  }));

  function toggleMenu() {
    headerContent.classList.toggle('header-content_active');
    nav.classList.toggle('nav_active');
    menu.classList.toggle('nav-menu_active');
    hamburger.classList.toggle('nav-hamburger_active');
  }
}());


/* Anchor Smooth Scroll's Animation */
(function () {
  document.querySelectorAll('[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const link = document.querySelector(this.getAttribute('href'));
      link.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}());