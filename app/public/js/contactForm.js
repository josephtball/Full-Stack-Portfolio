// onSubmit(e) {
//     e.preventDefault();
//     this.setState({ errors: {}, isLoading: true });
//     helpers.userLogin(this.state.user).then((data) => {
//       // if errors are returned save them to state
//       if (!data.success) {
//         this.setState({ errors: data.errors, isLoading: false });
//       } else {
//       // else if user was successfully created proceed to login form
//         this.props.history.push('/');
//       }
//     });
//   }

//   userLogin: (user) => {
//     return axios.post('/user/login', user).then((response) => {
//       // if user successfully logged in...
//       if (response.data.success) {
//         const token = response.data.token;
//         // ...save token in local storage and...
//         localStorage.setItem('token', token);
//         // ...add 'authorization' header with token to future requests
//         helpers.setAuthorizationToken(token);
//       }
//       // return login in success or errors
//       return response.data;
//     }).catch((error) => {
//       return error;
//     });
//   },

$(document).ready(function() {

	$('#contact-form').on('submit', function(e) {
		e.preventDefault();

		var data = {
			name: $('#name').val().trim(),
			email: $('#email').val().trim(),
			message: $('#message').val().trim(),
		}

		$.post('api/send-email', data).done(function(returnedData) {
			console.log(returnedData);
		});

	});

});