var express = require('express');
var app = express();
var http = require('http').createServer(app);
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: true
})); 

var PORT = 7428;
var COOKIE_NAME = "cookie-test";

app.use('/', express.static('public'));

app.post('/cookie', function(req, res) {
	var domain = req.body.domain || '';
	var value = req.body.value || 'true';
	res.cookie(COOKIE_NAME, value, {
		domain: domain,
		httpOnly: false
	});
	console.log("Cookie set with " + (domain ? "domain '" + domain + "'" : "no domain."));
	res.sendStatus(201);
});

app.delete('/cookie', function(req, res) {
	res.clearCookie(COOKIE_NAME);
	console.log("Cookie cleared.");
	res.sendStatus(204);
});

app.listen(PORT, function() {
	console.log("Listening on port " + PORT);
});

