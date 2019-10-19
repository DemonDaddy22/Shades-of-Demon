// require('dotenv').config();

// var express = require('express'),
// 	app = express(),
// 	bodyParser = require('body-parser'),
// 	ejs = require('ejs'),
// 	methodOverride = require('method-override');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');
// app.use(express.static(__dirname + '/public'));
// app.use(methodOverride('_method'));

// app.get('/', function(req, res) {
// 	res.render('home');
// });

// app.get('*', function(req, res) {
// 	res.redirect('back');
// });

// console.log(process.env.PORT);
// console.log(process.env.IP);
// app.listen(process.env.PORT, process.env.IP, function() {
// 	console.log('> Server started');
// });

require('dotenv').config();

let express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	ejs = require('ejs'),
	methodOverride = require('method-override');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
	res.render('home');
});

app.get('/home', (req, res) => {
	res.redirect('/');
});

app.get('*', (req, res) => {
	// CREATE AN ERROR PAGE TEMPLATE
	res.redirect('back');
});

app.listen(process.env.PORT, process.env.IP, () => {
	console.log('> Server started');
});