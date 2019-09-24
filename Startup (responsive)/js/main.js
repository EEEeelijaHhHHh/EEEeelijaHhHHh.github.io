// init Isotope
const $worksBlock = $('.works-block').isotope({
  itemSelector: '.works-item',
  layoutMode: 'fitRows'
});
// filter items on button click
$('.works-menu').on('click', '.works-menu__button', function () {
  const filterValue = $(this).attr('data-filter');
  $worksBlock.isotope({
    filter: filterValue
  });
});

// change is-checked class on buttons
$('.works-menu').each(function (i, buttonGroup) {
  $(buttonGroup).on('click', '.works-menu__button', function () {
    $(buttonGroup).find('.works-menu__button_active').removeClass('works-menu__button_active');
    $(this).addClass('works-menu__button_active');
  });
});