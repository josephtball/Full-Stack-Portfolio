'use strict';

// open and close navbar
$(document).ready(function () {

	$('.menu-toggle').on('click', function () {
		$('body').toggleClass('nav-is-open');
		$(this).toggleClass('open');
	});

	$('.nav-link').on('click', function () {
		$('body').toggleClass('nav-is-open');
		$('.menu-toggle').toggleClass('open');
	});
});

// scroll to page section from nav links
$(document).ready(function () {

	var scrollLink = $('.scroll');

	scrollLink.on('click', function (e) {
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, 1500);
	});
});