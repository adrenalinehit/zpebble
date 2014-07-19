var zanduli = {};

zanduli.getData = function(uri) {
	var data = [];
	ajax({
		url: uri
	}, function(data) {
		var cats = data.data;
		return data;
	});

}

module.exports = zanduli;