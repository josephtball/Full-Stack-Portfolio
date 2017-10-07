import express from 'express';
import exphbs from 'express-handlebars';
import logger from 'morgan';
import path from 'path';

const port = process.env.PORT || 8080;

let app = express();

// morgan logger
app.use(logger('dev'));

// handlebars
app.engine('handlebars', exphbs({
	defaultLayout: 'main',
	layoutsDir:'./app/views/layouts',
	partialsDir:'./app/views/partials'
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));


// express static folder
console.log(path.join(__dirname, '/public'))
app.use('/static', express.static(path.join(__dirname, '/public')))

// routes
import htmlRoutes from './controllers/htmlRoutes.js';
import apiRoutes from './controllers/apiRoutes.js';
import adminRoutes from './controllers/adminRoutes.js';
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);
app.use('/admin', adminRoutes);

app.listen(port, () => console.log('Server listening on PORT ' + port));