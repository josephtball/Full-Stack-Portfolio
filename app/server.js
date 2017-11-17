import express from 'express';
import exphbs from 'express-handlebars';
import logger from 'morgan';
import bodyParser from 'body-parser'
import path from 'path';
import mongoose from 'mongoose';

const port = process.env.PORT || 8080;

const app = express();

// morgan logger
app.use(logger('dev'));

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// handlebars
app.engine('handlebars', exphbs({
	defaultLayout: 'main',
	layoutsDir:'./app/views/layouts',
	partialsDir:'./app/views/partials'
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// express static folder
app.use('/static', express.static(path.join(__dirname, '/public')));

// setup Mongoose connection to database
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/portfolio_db', {
	useMongoClient: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log('Mongoose error: ', error));
db.once('open', () => console.log('Mongoose connection successful.'));

// routes
import htmlRoutes from './controllers/htmlRoutes.js';
import apiRoutes from './controllers/apiRoutes.js';
import adminRoutes from './controllers/adminRoutes.js';
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);
app.use('/admin', adminRoutes);

app.listen(port, () => console.log('Server listening on PORT ' + port));