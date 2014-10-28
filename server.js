var http = require('http'),
fs = require('fs');

var server = http.createServer(function(req,res){
	var url = require("url");
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;

	if (query.text) {
		res.writeHead(200, {'Content-Type':'text/html'});
		res.write(JSON.stringify(getText()));
		
	}


	

	request.post(
	    'http://www.yoursite.com/formpage',
	    { form: { key: 'value' } },
	    function (error, response, body) {
	        if (!error && response.statusCode == 200) {
	            console.log(body)
	        }
	    }
	);

	res.end();
});



var port = Number(process.env.PORT || 3000);

server.listen(port);
var request = require('request');

function getText() {
	var file = fs.readFileSync('example.wtxt');

	var mainBody = file.toString().replace(/\{\{(.*?)\}\}/g,'');;

	var str = file.toString();
	var links = [];
	while(str.match(/\[\[(.*?)\]\]/)) {
		links.push(str.match(/\[\[(.*?)\]\]/));
		str = str.replace(/[\[\[]/,'')
	}

	var related = [];

	links.forEach(function(link){
		link.toString().split('|').forEach(function(sub){
			related.push(sub.replace(/[\[]/g,'').replace(/[\]]/g,''));
		})

	})


	// var noMarkup = file.toString().replace(/\[(.*?)\]/g,'');
	// var mainTitles =
	// var mainTitles = file.toString().split("'''").filter(function(elem,index){
		// return index % 2;
	// });

	// var subTitles = file.toString().split("''").filter(function(elem,index){
		// return index % 2;
	// });

	return {
		// file:file,
		// mainTitles:mainTitles,
		// mainBody:mainBody,
		related:related
		// subTitles:subTitles,
		// noMarkup:noMarkup
	};
}