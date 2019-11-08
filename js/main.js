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
    if (window.innerWidth <= 768) {
      toggleMenu();
    }
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


/* Works Filtering */
(function () {
  const buttons = document.querySelectorAll('.works-control__btn');
  const items = document.querySelectorAll('.works-block__col');

  buttons.forEach(button => button.addEventListener('click', function() {
    const filter = button.dataset.filter;
    const filteredItems = [...items].filter(item => !item.classList.contains(filter));

    buttons.forEach(button => button.classList.remove('works-control__btn_active'));
    this.classList.add('works-control__btn_active');

    items.forEach(item => item.classList.remove('works-block__col_hidden'));
    if (filter === '*') return;
    filteredItems.forEach(item => item.classList.add('works-block__col_hidden'));
  }))
}());