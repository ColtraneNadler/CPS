var express = require('express');
var app = express();
var path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/assets', express.static('../../assets'));

app.get('/', function(req, res) {
	res.render('pages/home.ejs');
});




var port = 3000;
app.listen(port, function() {
	console.log('Listening on port:' + port + '.');
})