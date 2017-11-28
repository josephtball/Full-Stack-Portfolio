'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressHandlebars = require('express-handlebars');

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _htmlRoutes = require('./controllers/htmlRoutes.js');

var _htmlRoutes2 = _interopRequireDefault(_htmlRoutes);

var _apiRoutes = require('./controllers/apiRoutes.js');

var _apiRoutes2 = _interopRequireDefault(_apiRoutes);

var _adminRoutes = require('./controllers/adminRoutes.js');

var _adminRoutes2 = _interopRequireDefault(_adminRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 8080;

var app = (0, _express2.default)();

// morgan logger
app.use((0, _morgan2.default)('dev'));

// body parser
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.text());
app.use(_bodyParser2.default.json({ type: 'application/vnd.api+json' }));

// handlebars
app.engine('handlebars', (0, _expressHandlebars2.default)({
	defaultLayout: 'main',
	layoutsDir: './app/views/layouts',
	partialsDir: './app/views/partials'
}));
app.set('view engine', 'handlebars');
app.set('views', _path2.default.join(__dirname, 'views'));

// express static folder
app.use('/static', _express2.default.static(_path2.default.join(__dirname, '/public')));

// setup Mongoose connection to database
// mongoose.Promise = Promise;
// mongoose.connect('mongodb://localhost/portfolio_db', {
// 	useMongoClient: true
// });
// const db = mongoose.connection;
// db.on('error', (error) => console.log('Mongoose error: ', error));
// db.once('open', () => console.log('Mongoose connection successful.'));

// routes

app.use('/', _htmlRoutes2.default);
app.use('/api', _apiRoutes2.default);
app.use('/admin', _adminRoutes2.default);

app.listen(port, function () {
	return console.log('Server listening on PORT ' + port);
});