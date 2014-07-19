var zanduli = {};

var us = require('lib/underscore-min')._;

zanduli.getData = function(uri) {
	var data = [];
	ajax({
		url: uri
	}, function(data) {
		var cats = data.data;
		us.each(cats, function(e,i,l){
			data.push(e.Name);
		});

		return data;
	});

}

module.exports = zanduli;