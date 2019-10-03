/* Menu Hamburger */
(function () {
  const menuBtn = document.querySelector('.header-nav__btn');
  const menu = document.querySelector('.header-nav');
  const links = document.querySelectorAll('.main-nav__link');
  const active = 'header-nav_active';

  // Hamburger clicked
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle(active);
  });

  // Someone menu's links clicked
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.toggle(active);
    })
  });


  // Clicked out of menu
  document.body.addEventListener('click', event => {
    if (!menu.contains(event.target) && menu.className === `header-nav ${active}`) {
      menu.classList.toggle(active);
    }
  });
}());


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