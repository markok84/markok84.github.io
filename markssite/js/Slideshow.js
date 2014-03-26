window.addEvent('domready', function(){


	$$('ul.pagination li a').addEvent('click', function(ev){
	
		if (ev) ev.stop();
	
		// get image id
		var index = this.getProperty('href').split('#page');
		
		if (index.length > 1){
			index = index[1];
			
			// select link
			$$('ul.pagination li a').removeClass('selected');
			$$('ul.pagination li a')[index - 1].addClass('selected');
			
			// select image
			$$('div.image img').setStyle('display', 'none');
			$$('div.image img')[index - 1].setStyle('display', 'inline');
			
		}
	
	});
	

});