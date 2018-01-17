var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {
	var hbsObj = {
		title: 'Joseph Ball - Full Stack Developer'
	};
	res.render('home', hbsObj);
});

module.exports = router;