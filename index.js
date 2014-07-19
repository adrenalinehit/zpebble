var z = require('lib/zanduli'),
    config = require('settings');
    
var catsUri = config.webservice + '/' + config.lang + '/' + config.allCats;
var cats = z.getData(catsUri);

var text = '';
for (var i=0; i < cats.length; i++){
	text += cats[i];
}

simply.body(text);

