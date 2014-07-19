var z = require('lib/zanduli'),
    config = require('config');
    
var catsUri = config.webservice + '/' + config.lang + '/' + config.AllCats;
var cats = z.getData(catsUri);

var text = '';
for (int i=0; i < cats.length; i++){
	text += cats[i];
}

simply.body(text);

