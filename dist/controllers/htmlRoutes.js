'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
	var hbsObj = {
		title: 'Joseph Ball - Full Stack Developer'
	};
	res.render('home', hbsObj);
});

router.get('/admin-login', function (req, res) {
	var hbsObj = {
		title: 'Joseph Ball - Full Stack Developer'
	};
	res.render('adminLogin', hbsObj);
});

exports.default = router;