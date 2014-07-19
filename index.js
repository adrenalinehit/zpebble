var conf = require('settings');
var ws = conf.webservice + '/en/AllCategory';

//simply.scrollable(true);
simply.style('small');

var text = '';

var cats = [];

ajax({
	url: ws,
	type: 'json'
}, function(data) {
	cats = data.Data;

	// for (var i = 0; i < cats.length; i++) {
	// 	text += cats[i].Name + '\r\n';
	// }

	// simply.body(text);
});

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
		count = cats.length;
	}
	
	simply.body(cats[count].Name);
	localStorage.setItem('count', count);
});


simply.title('Categories:');