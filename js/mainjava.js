
// once document loads
$(document).ready(function() {

	//define all variables

	var $button = $('.navigation img');
	var $nav = $('nav');



	//begin slider function
	//begin slider function
	//begin slider function
	//begin slider function


	//when hamburger button is pressed
	$button.on('click', function(){

		//if <ul> is hidden
		if ($nav.css('display') === 'none') {

			//display <ul> using slide toggle
			$nav.slideToggle(300, 'linear', function(){
				$nav.css('display', 'inline');
			});

			//change menu button from open to close
			$button.attr('src', 'img/menu-close.svg')
		}

		//if <ul> is currently showing
		else if ($nav.css('display') != 'none')	{
			//hide it using slide toggle
			$nav.slideToggle(300, 'linear', function(){
				$nav.css('display', 'none');	
			});

			//change menu button from close to open
			$button.attr('src', 'img/menu.svg')
		}
	});


	//end slider function
	//end slider function
	//end slider function
	//end slider function





	//begin google maps API
	//begin google maps API
	//begin google maps API
var map;	// Google map object
	
	// Initialize and display a google map
	function Init()
	{
		// Create a Google coordinate object for where to center the map
		var latlng = new google.maps.LatLng( 44.931857, -89.662064 );	// Coordinates of Washington, DC (area centroid)
		
		// Map options for how to display the Google map
		var mapOptions = { zoom: 15, center: latlng  };
		
		// Show the Google map in the div with the attribute id 'map-canvas'.
		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		
		// Place a standard Google Marker at the same location as the map center (Washington, DC)
		// When you hover over the marker, it will display the title
		var marker = new google.maps.Marker( { 
			position: latlng,     
			map: map,      
			title: 'Howard Johnson',
			animation: google.maps.Animation.DROP	// set marker to drop
		});
		
		// Create an InfoWindow for the marker
		var contentString = "<div class='info'><h2>Howard Johnson</h2><p>2101 N. Mountain Road</p><p>Wausau, WI 54401</p></div>";	// HTML text to display in the InfoWindow
		var infowindow = new google.maps.InfoWindow( { content: contentString } );
		
		// Set event to display the InfoWindow anchored to the marker when the marker is clicked.
		google.maps.event.addListener( marker, 'click', function() { infowindow.open( map, marker ); });
	}
	
	// Call the method 'Init()' to display the google map when the web page is displayed ( load event )
	google.maps.event.addDomListener( window, 'load', Init );
    



});