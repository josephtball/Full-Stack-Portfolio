import express from 'express';

let router = express.Router();

router.get('/', (req, res) => {
	const hbsObj = {
		title: 'Joseph Ball - Full Stack Developer'
	};
	res.render('home', hbsObj);
});

router.get('/admin-login', (req, res) => {
	const hbsObj = {
		title: 'Joseph Ball - Full Stack Developer'
	};
	res.render('adminLogin', hbsObj);
});

export default router;