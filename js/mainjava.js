
// once document loads
$(document).ready(function() {

	//define all variables

	var $button = $('.navigation .button');
	var $nav = $('nav');



	//begin slider function
	//begin slider function
	//begin slider function
	//begin slider function


	//when menu button is pressed
	$button.on('click', function(){

		//if <ul> is hidden
		if ($nav.css('display') === 'none') {

			//display <ul> using slide toggle
			$nav.slideToggle(300, 'linear', function(){
				$nav.css('display', 'block');
			});

			//change menu button text to 'close'
			$button.attr('value', 'Close');
			
		}

		//if <ul> is currently showing
		else if ($nav.css('display') != 'none')	{
			//hide it using slide toggle
			$nav.slideToggle(300, 'linear', function(){
				$nav.css('display', 'none');	
			});

			//change menu button text to 'Menu'
			$button.attr('value', 'Menu');
			
		}
	});


	//end slider function
	//end slider function
	//end slider function
	//end slider function





	//BEGIN GOOGLE MAPS API
	
	//HOWARD JOHNSON


	var map1;	// Google map object
	
	// Initialize and display a google map
	function Init1()
	{
		// Create a Google coordinate object for where to center the map
		var latlng = new google.maps.LatLng( 44.931857, -89.662064 );	// Coordinates of Howard Johnson in Wausau
		
		// Map options for how to display the Google map
		var mapOptions = { zoom: 15, center: latlng  };
		
		// Show the Google map in the div with the attribute id 'map-canvas'.
		map1 = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		
		// Place a standard Google Marker at the same location as the map center (Howard Johnson)
		// When you hover over the marker, it will display the title
		var marker = new google.maps.Marker( { 
			position: latlng,     
			map: map1,      
			title: 'Howard Johnson',
			animation: google.maps.Animation.DROP	// set marker to drop
		});
		
		// Create an InfoWindow for the marker
		var contentString = "<div class='info'><h2>Howard Johnson</h2><ul><li>(715) 842-0711</li><li><a href='http://www.hojo.com/hotels/wisconsin/wausau/howard-johnson-inn-and-conference-center/hotel-overview?partner_id=&hotel_id=18049&group_code=&campaign_code=&propId=HJ18049&brand_id=HJ&checkout_date=&modify=false&useWRPoints=false&children=0&corporate_id=&ratePlan=BAR&teens=0&affiliate_id=&altPropId=18049&brand_code=BH%2CDI%2CRA%2CBU%2CHJ%2CKG%2CMT%2CSE%2CTL%2CWG%2CWY%2CWT%2CWP&iata=&childAgeParam=&rate_code=&adults=1&discreteParam=1-0-0-1-0-0-1-0-0-1-0-0&checkin_date=&rooms=1#'>Hotel Website</a></li></ul></div>";	// HTML text to display in the InfoWindow
		var infowindow = new google.maps.InfoWindow( { content: contentString } );
		
		// Set event to display the InfoWindow anchored to the marker when the marker is clicked.
		google.maps.event.addListener( marker, 'click', function() { infowindow.open( map1, marker ); });
	}

	// Call the method 'Init1()' to display the google map when the web page is displayed ( load event )
	google.maps.event.addDomListener( window, 'load', Init1 );


	//QUALITY INN


	var map2;	// Google map object
	
	// Initialize and display a google map
	function Init2()
	{
		// Create a Google coordinate object for where to center the map
		var latlng = new google.maps.LatLng( 44.929606, -89.664417 );	// Coordinates of Quality Inn in Wausau
		
		// Map options for how to display the Google map
		var mapOptions = { zoom: 15, center: latlng  };
		
		// Show the Google map in the div with the attribute id 'map-canvas'.
		map2 = new google.maps.Map(document.getElementById('map-canvas2'), mapOptions);
		
		// Place a standard Google Marker at the same location as the map center (Midway Hotel)
		// When you hover over the marker, it will display the title
		var marker = new google.maps.Marker( { 
			position: latlng,     
			map: map2,      
			title: 'Quality Inn',
			animation: google.maps.Animation.DROP	// set marker to drop
		});
		
		// Create an InfoWindow for the marker
		var contentString = "<div class='info'><h2>Quality Inn</h2><ul><li>(715) 842-1616</li><li><a href='https://www.choicehotels.com/wisconsin/wausau/quality-inn-hotels/wi223'>Hotel Website</a></li></ul></div>";	// HTML text to display in the InfoWindow
		var infowindow = new google.maps.InfoWindow( { content: contentString } );
		
		// Set event to display the InfoWindow anchored to the marker when the marker is clicked.
		google.maps.event.addListener( marker, 'click', function() { infowindow.open( map2, marker ); });
	}

	// Call the method 'Init2()' to display the google map when the web page is displayed ( load event )
	google.maps.event.addDomListener( window, 'load', Init2 );



	//HAMPTON INN


	var map3;	// Google map object
	
	// Initialize and display a google map
	function Init3()
	{
		// Create a Google coordinate object for where to center the map
		var latlng = new google.maps.LatLng( 44.956536, -89.665164 );	// Coordinates of Hampton Inn in Wausau
		
		// Map options for how to display the Google map
		var mapOptions = { zoom: 15, center: latlng  };
		
		// Show the Google map in the div with the attribute id 'map-canvas'.
		map3 = new google.maps.Map(document.getElementById('map-canvas3'), mapOptions);
		
		// Place a standard Google Marker at the same location as the map center (Hampton Inn)
		// When you hover over the marker, it will display the title
		var marker = new google.maps.Marker( { 
			position: latlng,     
			map: map3,      
			title: 'Hampton Inn',
			animation: google.maps.Animation.DROP	// set marker to drop
		});
		
		// Create an InfoWindow for the marker
		var contentString = "<div class='info'><h2>Hampton Inn</h2><ul><li>(715) 848-9700</li><li><a href='http://hamptoninn3.hilton.com/en/hotels/wisconsin/hampton-inn-wausau-AUWWIHX/index.html'>Hotel Website</a></li></ul></div>";	// HTML text to display in the InfoWindow
		var infowindow = new google.maps.InfoWindow( { content: contentString } );
		
		// Set event to display the InfoWindow anchored to the marker when the marker is clicked.
		google.maps.event.addListener( marker, 'click', function() { infowindow.open( map3, marker ); });
	}

	// Call the method 'Init3()' to display the google map when the web page is displayed ( load event )
	google.maps.event.addDomListener( window, 'load', Init3 );


	

	//DAYS INN AND SUITES


	var map4;	// Google map object
	
	// Initialize and display a google map
	function Init4()
	{
		// Create a Google coordinate object for where to center the map
		var latlng = new google.maps.LatLng( 44.913917, -89.650994 );	// Coordinates of Days Inn and Suites in Wausau
		
		// Map options for how to display the Google map
		var mapOptions = { zoom: 15, center: latlng  };
		
		// Show the Google map in the div with the attribute id 'map-canvas'.
		map4 = new google.maps.Map(document.getElementById('map-canvas4'), mapOptions);
		
		// Place a standard Google Marker at the same location as the map center (Days Inn and Suites)
		// When you hover over the marker, it will display the title
		var marker = new google.maps.Marker( { 
			position: latlng,     
			map: map4,      
			title: 'Days Inn and Suites',
			animation: google.maps.Animation.DROP	// set marker to drop
		});
		
		// Create an InfoWindow for the marker
		var contentString = "<div class='info'><h2>Days Inn and Suites</h2><ul><li>(715) 848-9700</li><li><a href='http://www.daysinn.com/hotels/wisconsin/wausau/days-inn-and-suites-wausau/hotel-overview?partner_id=&hotel_id=10201&group_code=&campaign_code=&propId=DI10201&brand_id=DI&checkout_date=&modify=false&useWRPoints=false&children=0&corporate_id=&ratePlan=BAR&teens=0&affiliate_id=&altPropId=10201&brand_code=BH%2CDI%2CRA%2CBU%2CHJ%2CKG%2CMT%2CSE%2CTL%2CWG%2CWY%2CWT%2CWP&iata=&childAgeParam=&rate_code=&adults=1&discreteParam=&checkin_date=&rooms=1'>Hotel Website</a></li></ul></div>";	// HTML text to display in the InfoWindow
		var infowindow = new google.maps.InfoWindow( { content: contentString } );
		
		// Set event to display the InfoWindow anchored to the marker when the marker is clicked.
		google.maps.event.addListener( marker, 'click', function() { infowindow.open( map4, marker ); });
	}

	// Call the method 'Init4()' to display the google map when the web page is displayed ( load event )
	google.maps.event.addDomListener( window, 'load', Init4 );
	
    



});