import nodemailer from 'nodemailer';
import config from './config.js';

const transporter = nodemailer.createTransport({
	service: 'hotmail',
	auth: {
		user: config.email,
		pass: config.password
	}
});

const sendEmail = (data) => {
	const mailOptions = {
		to: 'jball321@live.com',
		subject: 'Message from Portfolio',
		text: 'From: '+data.name+'\n'+
			'Email: '+data.email+'\n'+
			'Message:\n'+data.message,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if(error) return error;
		
		return info.response;
	});
}

export default sendEmail;