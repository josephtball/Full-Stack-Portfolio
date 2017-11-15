import express from 'express';

const router = express.Router();

router.get ('/', (req, res) => {
	// const hbsObj = {
	// 	title: 'Joseph Ball - Full Stack Developer'
	// };
	// res.render('home', hbsObj);
	res.send('adminRoute')
});

export default router;