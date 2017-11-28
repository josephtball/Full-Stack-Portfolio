'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _config = require('./config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transporter = _nodemailer2.default.createTransport({
	service: 'hotmail',
	auth: {
		user: _config2.default.email,
		pass: _config2.default.password
	}
});

var sendEmail = function sendEmail(data) {
	var mailOptions = {
		to: 'jball321@live.com',
		subject: 'Message from Portfolio',
		text: 'From: ' + data.name + '\n' + 'Email: ' + data.email + '\n' + 'Message:\n' + data.message
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) return error;

		return info.response;
	});
};

exports.default = sendEmail;