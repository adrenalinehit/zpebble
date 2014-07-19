//simply.scrollable(true);
simply.style('small');

var text = '';

var cats = [];

var popCats = function(data, st, req) {
	cats = data.Data;
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


var count = parseInt(localStorage.getItem('count')) || 0;

simply.on('singleClick', function(e) {


	if (e.button === 'up') {
		--count;
	} else if (e.button === 'down') {
		++count;
	}

	if (count < 0) {
		count = 0;
	}
	if (count > cats.length) {
		count = cats.length-1;
	}

	setText({title: 'Category (' + count + '/' + cats.length + ')', body: cats[count].Name})
	
	localStorage.setItem('count', count);

	if (e.button === 'select') {

	}

	if (e.button === 'back') {

	}

});

populateData({
	address: 'http://ec2-54-76-161-40.eu-west-1.compute.amazonaws.com/zanduli2/MobileService.svc/V2/en/AllCategory',
	callback: popCats
});

simply.title('Zanduli');