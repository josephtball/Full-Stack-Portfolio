// node packages
var express = require('express');
var exphbs = require('express-handlebars');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

var port = process.env.PORT || 8080;

var app = express();

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
	layoutsDir: path.join(__dirname, 'views/layouts'),
	partialsDir: path.join(__dirname, 'views/partials')
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// express static folder
app.use('/static', express.static(path.join(__dirname, '../public')));

// setup Mongoose connection to database
// mongoose.Promise = Promise;
// mongoose.connect('mongodb://localhost/portfolio_db', {
// 	useMongoClient: true
// });
// const db = mongoose.connection;
// db.on('error', (error) => console.log('Mongoose error: ', error));
// db.once('open', () => console.log('Mongoose connection successful.'));

// routes
var htmlRoutes = require('./controllers/htmlRoutes.js');
var apiRoutes = require('./controllers/apiRoutes.js');
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

// start server
app.listen(port, function() { console.log('Server listening on PORT ' + port) });