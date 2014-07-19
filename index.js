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

function homeScreen(opts) {
	simply.scrollable(false);
	setText({
		title: 'Category (' + opts.count + '/' + cats.length + ')',
		body: cats[opts.count - 1].Name
	})
};

var count = parseInt(localStorage.getItem('count')) || 1;

simply.on('singleClick', function(e) {

	if (e.button === 'up') {
		--count;
		if (count <= 1) {
			count = 1;
		}
		if (count >= cats.length) {
			count = cats.length;
		}
		localStorage.setItem('count', count);
		homeScreen({
			count: count
		});

	} else if (e.button === 'down') {
		++count;
		if (count <= 1) {
			count = 1;
		}
		if (count >= cats.length) {
			count = cats.length;
		}
		localStorage.setItem('count', count);
		homeScreen({
			count: count
		});

	}

	if (e.button === 'select') {
		var details = '';
		for (var t = 0; t < listings.length; t++) {
			if (listings[t].guid === cats[count - 1].Guid) {
				details += listings[t].title + '\r\n';
			}
		}
		setText({
			title: cats[count - 1].Name,
			body: details
		});
		simply.scrollable(true);
	}


});


simply.on('back', function(e) {
	homeScreen({
		count: count
	});

})

populateData({
	address: 'http://ec2-54-76-161-40.eu-west-1.compute.amazonaws.com/zanduli2/MobileService.svc/V2/en/AllCategory',
	callback: popCats
});

populateData({
	address: 'http://ec2-54-76-161-40.eu-west-1.compute.amazonaws.com/zanduli2/MobileService.svc/V2/en/AllListing',
	callback: popLists
});

simply.title('Zanduli');