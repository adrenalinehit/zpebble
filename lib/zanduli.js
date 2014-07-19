var zanduli = {};

zanduli.getData = function(uri) {
	var zanduliData = [];
	ajax({
		url: uri
	}, function(data) {
		var cats = data.data;
		zanduliData = cats;

	});
	return zanduliData;

}

module.exports = zanduli;