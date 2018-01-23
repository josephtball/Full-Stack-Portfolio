var express = require('express');
var sendEmail = require('../emailer/nodemailer.js');

var router = express.Router();

router.post('/send-email', function(req, res) {
	console.log(req.body);
	
	sendEmail(req.body);
	res.sendStatus(200);
});

module.exports = router;