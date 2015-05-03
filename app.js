var express = require('express');
var app = express();
var path = require('path');
var redis = require('redis');
var client = redis.createClient(6379, '****');
var jquery = require('jquery');

client.on('connect', function() {
    console.log('Connected to REDIS');
})


client.on('error', function() {
    console.log('Could not establish connection to REDIS')
})


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/assets', express.static('../../assets'));

app.get('/', function(req, res) {
	res.render('pages/home.ejs');
});

app.get('/leaderboards', function(req, res) {
	res.render('pages/leaderboards.ejs');
});


var port = 3000;
app.listen(port, function() {
	console.log('Listening on port:' + port + '.');
})

app.locals

app.locals.saveClicks = function(user, cps) {
    client.set(user, cps);
}