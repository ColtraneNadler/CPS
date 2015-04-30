var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var myJson = {
	key: "myvalue"
}

var file = require('./filename.json')

fs.writeFile('filename.json', JSON.stringify( myJson ), 'utf8')

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