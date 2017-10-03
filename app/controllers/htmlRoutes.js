import express from 'express';

let router = express.Router();

router.get ('/', function(req, res) {
	const hbsObj = {
		title: 'Joseph Ball - Full Stack Developer'
	};
	res.render('home', hbsObj);
});

export default router;