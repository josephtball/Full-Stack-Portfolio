import express from 'express';
import logger from 'morgan';
import path from 'path';

const port = process.env.PORT || 8080;

let app = express();

// morgan logger
app.use(logger('dev'));
// express static folder
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/*', (req, res) => {
	res.send('hello world');
});

app.listen(port, () => console.log('Server listening on PORT ' + port));