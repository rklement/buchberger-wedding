
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



});