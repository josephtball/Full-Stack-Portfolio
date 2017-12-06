'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _nodemailer = require('../emailer/nodemailer.js');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/send-email', function (req, res) {
	console.log(req.body);

	(0, _nodemailer2.default)(req.body);
	res.sendStatus(200);
});

exports.default = router;