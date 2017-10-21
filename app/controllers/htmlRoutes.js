import express from 'express';

let router = express.Router();

router.get('/', (req, res) => {
	const hbsObj = {
		title: 'Joseph Ball - Full Stack Developer'
	};
	res.render('landing', hbsObj);
});

router.get('/about', (req, res) => {
	const hbsObj = {
		about: true,
		title: 'Joseph Ball - Full Stack Developer'
	};
	res.render('about', hbsObj);
});

router.get('/portfolio', (req, res) => {
	const hbsObj = {
		portfolio: true,
		title: 'Joseph Ball - Full Stack Developer'
	};
	res.render('portfolio', hbsObj);
});

router.get('/contact', (req, res) => {
	const hbsObj = {
		contact: true,
		title: 'Joseph Ball - Full Stack Developer'
	};
	res.render('contact', hbsObj);
});

router.get('/admin-login', (req, res) => {
	const hbsObj = {
		title: 'Joseph Ball - Full Stack Developer'
	};
	res.render('adminLogin', hbsObj);
});

export default router;