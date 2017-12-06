// open and close navbar
$(document).ready(function() {

	$('.menu-toggle').on('click', function() {
		$('body').toggleClass('nav-is-open');
		$('.site-nav').toggleClass('site-nav-open', 500);
		$(this).toggleClass('open');
	});

	$('.nav-link').on('click', function() {
		$('body').toggleClass('nav-is-open');
		$('.site-nav').toggleClass('site-nav-open');
		$('.menu-toggle').toggleClass('open');
	});

});

// scroll to page section from nav links
$(document).ready(function() {
	
	var $scrollLink = $('.scroll');

	var topMargin = $('.all-content').css('margin-top');
	topMargin = topMargin.split('px').shift();

	$scrollLink.on('click', function(e) {
		e.preventDefault();

		$('body,html').animate({
			scrollTop: $(this.hash).offset().top - topMargin
		}, 1000);
	});

	$(window).scroll(function() {
		var scrollBarLocation = $(this).scrollTop();

		$scrollLink.each(function() {
			var sectionOffset = $(this.hash).offset().top - topMargin - 3;

			if (sectionOffset <= scrollBarLocation) {
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}
		})
	});

});