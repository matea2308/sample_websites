$(document).ready (function() {
	$('.dropdown').on('click', function() {
		$(this).toggleClass('active');
		$('.menu').toggleClass('active');
	});

	$('.hp-slider').bxSlider({
		controls:false,
		auto: true,
		autoHover: true
	});

	var scrollPosition = 0,
		body = $('body'),
		topOffset = 130;

	$(window).on('scroll', function() {
		scrollPosition = $(this).scrollTop();

		if(scrollPosition > topOffset) {
			body.addClass('scroll-menu');
		} else {
			body.removeClass('scroll-menu');
		}
	});


});