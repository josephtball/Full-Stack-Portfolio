import express from 'express';
import sendEmail from '../emailer/nodemailer.js';

const router = express.Router();

router.post('/send-email', (req, res) => {
	console.log(req);
});

export default router;