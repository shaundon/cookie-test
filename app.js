var express = require('express');
var app = express();
var http = require('http').createServer(app);

var PORT = 7428;

app.use('/', express.static('public'));

app.listen(PORT, function() {
	console.log("Listening on port " + PORT);
})

