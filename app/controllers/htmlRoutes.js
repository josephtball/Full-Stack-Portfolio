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
		title: 'Joseph Ball - Full Stack Developer'
	};
	res.render('about', hbsObj);
});

export default router;