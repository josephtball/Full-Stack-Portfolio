$(document).ready(function() {

	$('#contact-form').on('submit', function(e) {
		e.preventDefault();

		$('#contact-button').attr('disabled', true);
		$('#send').css('display', 'none');
		$('#contact-loader').css('display', 'inline-block');

		var data = {
			name: $('#name').val().trim(),
			email: $('#email').val().trim(),
			message: $('#message').val().trim(),
		}

		$.post('api/send-email', data).done(function(returnedData) {
			console.log(returnedData);
			if (returnedData) {
				setTimeout(function() {
					$('#name').val('');
					$('#email').val('');
					$('#message').val('');
					$('#send').css('display', 'inline');
					$('#contact-loader').css('display', 'none');
					$('#contact-button').attr('disabled', false);
				}, 500);
			}
		});

	});

});