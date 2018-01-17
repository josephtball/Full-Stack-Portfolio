var nodemailer = require('nodemailer');
var config = require('./config.js');

var transporter = nodemailer.createTransport({
	service: 'hotmail',
	auth: {
		user: config.email,
		pass: config.password
	}
});

var sendEmail = function(data) {
	var mailOptions = {
		to: 'jball321@live.com',
		subject: 'Message from Portfolio',
		text: 'From: '+data.name+'\n'+
			'Email: '+data.email+'\n'+
			'Message:\n'+data.message,
	};

	transporter.sendMail(mailOptions, function(error, info) {
		if(error) return error;
		
		return info.response;
	});
}

module.exports = sendEmail;