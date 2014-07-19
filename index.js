var conf = require('settings');
var ws = conf.webservice;

var categories = ws + '/en/AllCategories';
var listing = ws + '/en/Listing/%s';

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
	simply.text(opts);
};


var count = parseInt(localStorage.getItem('count')) || 0;

simply.on('singleClick', function(e) {


	if (e.button === 'up') {
		--count;
	} else if (e.button === 'down') {
		++count;
	}

	if (count >= 0) {
		count = 0;
	}
	if (count < cats.length) {
		count = cats.length - 1;
	}

	if (cats.length !== 0) {
		simply.body(cats[count].Name);
	} else {
		simply.body('naff all loaded');
	}

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

simply.title('Categories');