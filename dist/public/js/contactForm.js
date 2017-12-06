'use strict';

$(document).ready(function () {

	$('#contact-form').on('submit', function (e) {
		e.preventDefault();

		var data = {
			name: $('#name').val().trim(),
			email: $('#email').val().trim(),
			message: $('#message').val().trim()
		};

		$.post('api/send-email', data).done(function (returnedData) {
			console.log(returnedData);
		});
	});
});