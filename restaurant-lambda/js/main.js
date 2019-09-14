/* Anchor Smooth Scroll's Animation */
(function () {
  document.querySelectorAll('[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const link = document.querySelector(this.getAttribute('href'));
      console.log(link);
      link.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}());

/* Hamburger Menu */
(function () {
  const button = document.querySelector('.nav__btn');
  const menu = document.querySelector('.nav-menu');
  const menuLink = document.querySelectorAll('.nav-menu__link');

  button.addEventListener('click', toggleMenu);

  menuLink.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  function toggleMenu() {
    menu.classList.toggle('nav-menu_active');
    button.classList.toggle('nav__btn_active');
  };
}());