//Entry point of the nodejs application!
var express = require('express');
var home = require('./routes/home');
var app = express();
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use('/', home);

app.listen(3000, function(){
	console.log('Nodejs Application is now running (Pharnerosis)');
});

//minimalistic application set up