$(document).ready(function() {
	$('.menu-toggle').on('click', function() {
		$('.site-nav').toggleClass('site-nav-open');
		$(this).toggleClass('open');
	});

	$('#content').on('click', function() {
		$('.site-nav').removeClass('site-nav-open');
		$('.menu-toggle').removeClass('open');
	});
	$('#footer').on('click', function() {
		$('.site-nav').removeClass('site-nav-open');
		$('.menu-toggle').removeClass('open');
	});
});