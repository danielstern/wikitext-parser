function parsewiki(wiki) {

	var mainBody = wiki.toString().replace(/\{\{(.*?)\}\}/g,'').replace(/[\[]/g,'').replace(/[\]]/g,'').replace(/[\|]/g,', ');


	var str = wiki.toString();
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

	return {
		mainBody:mainBody,
		related:related
	};
}

module.exports = parsewiki;