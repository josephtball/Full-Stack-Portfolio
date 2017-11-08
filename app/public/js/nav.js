$(document).ready(function() {
	$('.menu-toggle').on('click', function() {
		$('body').toggleClass('nav-is-open');
		$(this).toggleClass('open');
	});
});