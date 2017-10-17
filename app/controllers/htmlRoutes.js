import express from 'express';

let router = express.Router();

router.get ('/', function(req, res) {
	const hbsObj = {
		title: 'Joseph Ball - Full Stack Developer'
	};
	res.render('landing', hbsObj);
});

router.get ('/about', function(req, res) {
	const hbsObj = {
		about: true,
		title: 'Joseph Ball - Full Stack Developer'
	};
	res.render('about', hbsObj);
});

router.get ('/portfolio', function(req, res) {
	const hbsObj = {
		portfolio: true,
		title: 'Joseph Ball - Full Stack Developer'
	};
	res.render('portfolio', hbsObj);
});

router.get ('/contact', function(req, res) {
	const hbsObj = {
		contact: true,
		title: 'Joseph Ball - Full Stack Developer'
	};
	res.render('contact', hbsObj);
});

export default router;