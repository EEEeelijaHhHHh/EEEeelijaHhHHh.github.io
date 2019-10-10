(function () {
  const teamsSlider = new Swiper('.teams', {
    slidesPerView: 4,
    spaceBetween: 5,
    loop: true,
    navigation: {
      nextEl: '.teams__btn_next',
      prevEl: '.teams__btn_prev',
    },
    autoplay: {
      delay: 3000
    },
    breakpoints: {
      576: {
        slidesPerView: 8,
        slidesPerGroup: 4
      },
      769: {
        slidesPerView: 4,
        slidesPerGroup: 2
      },
      992: {
        slidesPerView: 8,
        slidesPerGroup: 4
      },
      1200: {
        slidesPerView: 10,
        slidesPerGroup: 5
      }
    }
  });
}());

(function () {
  const navBtn = document.querySelector('.nav-menu-hamburger');
  const navDropdown = document.querySelector('.nav-dropdown');
  const hoverItems = document.querySelectorAll('.hover');

  navBtn.addEventListener('click', () => {
    navDropdown.classList.toggle('nav-dropdown_active');
    navBtn.classList.toggle('nav-menu-hamburger_active');
    hoverItems.forEach(item => item.classList.toggle('hover_active'));
  });
}());

(function () {
  window.addEventListener('resize', () => {
    adaptive();
  });
  adaptive();

  function adaptive() {
    const width = window.innerWidth;
    const betsItems = document.querySelectorAll('.bets__item');

    betsItems.forEach(item => {
      const infoBlock = item.querySelector('.bets__info');
      const sidebarBlock = item.querySelector('.bets__sidebar');
      const btn = item.querySelector('.bets__btn');
      if (width <= 768) {
        infoBlock.append(btn);
      } else {
        sidebarBlock.append(btn);
      }
    });
  }
}());