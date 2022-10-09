$('.js-scroll-top').click(function() {
  $('html,body').animate({
      scrollTop: 0
   }, 1000);
});

$('a[href*="#anchor"]').on('click', function() {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 1000);
  return false;
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 610) {
    $('.js-scroll-top').addClass('is-show');
  } else {
    $('.js-scroll-top').removeClass('is-show');
  }
});

