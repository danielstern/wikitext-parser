var http = require('http'),
fs = require('fs'),
parsewiki = require('./parsewiki.js')

var server = http.createServer(function(req,res){
	var url = require("url");
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;

	if (query.text) {
		res.writeHead(200, {'Content-Type':'text/html'});
		var file = fs.readFileSync('example.wtxt');

		res.write(JSON.stringify(parsewiki(file.toString())));
		
	}


	res.end();
});



var port = Number(process.env.PORT || 3000);

server.listen(port);
// var request = require('request');

