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

(function($) {
	function animatedBlocks () {
		$('.need-animate, .need-animate_2').each(function () {
			var scrollPosTop = $(window).scrollTop(), // позиция скролла, верх страницы
				blockPosTop = $(this).offset().top, // позиция блока (верх), который нужно анимировать
				blockPosBottom = blockPosTop+$(this).height(), // позиция блока (низ), который нужно анимировать
				windowHeight = $(window).height(), // высота окна браузера
				windowLineTop = scrollPosTop+(windowHeight*(1/8)), // верхняя граница окна браузера при пересечении которой анимируется блок
				windowsLineBottom = scrollPosTop+(windowHeight*(5/8)); // нижяя граница окна браузера при пересечении которой анимируется блок

			if (
				(windowLineTop <= blockPosBottom && windowLineTop > blockPosTop) // если верхняя часть экрана выше нижней границы блока, но не прошла блок полностью
				|| (windowsLineBottom >= blockPosTop && windowsLineBottom < blockPosBottom) // если нижняя часть экрана дошла до верхней границы блока, но не прошла блок полностью
				|| ((blockPosTop > windowLineTop && blockPosTop < windowsLineBottom) || (blockPosBottom > windowLineTop && blockPosBottom < windowsLineBottom)) // или блок по центру экрана
			) {
        $(this).removeClass('need-animate').addClass('animated');
        $(this).removeClass('need-animate_2').addClass('animated');
			}
		});
	}
	$(document).ready(function () {
		setTimeout(function () {
			animatedBlocks();
		}, 1000);
	});
	$(window).scroll(function () {
		animatedBlocks();
	});
})(jQuery);
