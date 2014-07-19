//simply.scrollable(true);
simply.style('small');

var text = '';

var cats = [];

var popCats = function(data, st, req) {
	cats = data.Data;
};

var popLists = function(data, st, req) {
	var lists = data.Data;
	var t = '';
	for (var j = 0; j < lists.length; j++) {
		t += lists[j].Title + '\r\n';
	}
	simply.off('singleClick');
	simply.scrollable(true);
};


function populateData(opts) {
	ajax({
		url: opts.address,
		type: 'json',
		method: opts.method || 'get'
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
		populateData({
			address: 'http://ec2-54-76-161-40.eu-west-1.compute.amazonaws.com/zanduli2/MobileService.svc/ListListingsByCategory/' + cats[count - 1].Guid,
			callback: popLists,
			method: 'post'
		});
	}

	if (e.button === 'back') {

	}

});

populateData({
	address: 'http://ec2-54-76-161-40.eu-west-1.compute.amazonaws.com/zanduli2/MobileService.svc/V2/en/AllCategory',
	callback: popCats
});

simply.title('Zanduli');