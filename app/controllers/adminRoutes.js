import express from 'express';

const router = express.Router();

router.get ('/', function(req, res) {
	// const hbsObj = {
	// 	title: 'Joseph Ball - Full Stack Developer'
	// };
	// res.render('home', hbsObj);
	res.send('adminRoute')
});

export default router;