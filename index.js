//simply.scrollable(true);
simply.style('small');

var text = '';

var cats = [];

var listings = [];

var popCats = function(data, st, req) {
	cats = data.Data;
};

var popLists = function(data, st, req) {
	var lists = data.Data;
	for (var j = 0; j < lists.length; j++) {
		listings.push({
			title: lists[j].Title,
			guid: lists[j].CategoryGuid
		});
	}
};


function populateData(opts) {
	ajax({
		url: opts.address,
		type: 'json'
	}, opts.callback);
};


function setText(opts) {
	simply.text(opts, true);
};


var count = parseInt(localStorage.getItem('count')) || 1;

simply.on('singleClick', function(e) {


	if (e.button === 'up') {
		--count;
	} else if (e.button === 'down') {
		++count;
	}

	if (count <= 1) {
		count = 1;
	}
	if (count >= cats.length) {
		count = cats.length;
	}

	setText({
		title: 'Category (' + count + '/' + cats.length + ')',
		body: cats[count - 1].Name
	})

	localStorage.setItem('count', count);

	if (e.button === 'select') {
		var details = '';
		for (var t = 0; t < lists.length; t++) {
			if (listings[t].CategoryGuid === cats[count - 1].Guid) {
				details += listings[t].Title + '\r\n';
			}
		}
		setText({
			title: cats[count - 1].Name,
			body: details
		});
	}

	if (e.button === 'back') {

	}

});

populateData({
	address: 'http://ec2-54-76-161-40.eu-west-1.compute.amazonaws.com/zanduli2/MobileService.svc/V2/en/AllCategory',
	callback: popCats
});

populateData({
	address: 'http://ec2-54-76-161-40.eu-west-1.compute.amazonaws.com/zanduli2/MobileService.svc/V2/en/AllListing',
	callback: popLists
});

simply.title('Zanduli');