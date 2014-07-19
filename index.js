

ajax({
	url: 'http://ec2-54-76-161-40.eu-west-1.compute.amazonaws.com/zanduli2/MobileService.svc/V2/en/AllCategory'
}, function(data) {
	var cats = data.Data;

	for (var i = 0; i < cats.length; i++) {
		text += cats[i];
	}
		
	simply.body(text);

});

