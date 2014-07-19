var conf = require('settings');
var ws = conf.webservice;

var categories = ws + '/en/AllCategories';
var listing = ws + '/en/Listing/%s';

//simply.scrollable(true);
simply.style('small');

var text = '';

var cats = [];

function populateData(opts) {
	ajax({
		url: opts.address,
		type: 'json'
	}, opts.callback());
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

	simply.body(cats[count].Name);

	localStorage.setItem('count', count);

	if (e.button === 'select') {

	}

	if (e.button === 'back') {


	}

});


function popCats(d){
	cats = d.data.Data;
};

populateData({
	address: categories,
	callback: popCats
});

simply.title('Categories');