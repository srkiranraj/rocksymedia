// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs
// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }
//
// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);


// remap jQuery to $
(function($){

	/* trigger when page is ready */
	$(document).ready(function (){

		$('a.scroll').click(function(event) {
			event.preventDefault();
			$('.sub-menu').removeClass('visible');
			var target = $(this).attr('href');
			$(target).ScrollTo({
				offsetTop: 100,
				duration: 1000,
				easing: 'linear'
			});
		});

		$('a.close').click(function(event){
			event.preventDefault();
			$('.sub-menu').removeClass('visible');
		});

		$('a.has-submenu').click(function(event){
			event.preventDefault();
			$('.sub-menu').toggleClass('visible');
			$('.sub-menu').css('left', $(this).offset().left);
		});

		$('.cd-form').submit(function(event) {
			event.preventDefault();
			$.ajax({
				url: 'message.php',
				type: 'POST',
				dataType: 'json',
				data: {param1: 'value1'},
			})
			.done(function() {
				console.log("success");
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
			
		});

		if( $('.floating-labels').length > 0 ) floatLabels();

		function floatLabels() {
			var inputFields = $('.floating-labels .cd-label').next();
			inputFields.each(function(){
				var singleInput = $(this);
				//check if user is filling one of the form fields 
				checkVal(singleInput);
				singleInput.on('change keyup', function(){
					checkVal(singleInput);	
				});
			});
		}

		function checkVal(inputField) {
			( inputField.val() == '' ) ? inputField.prev('.cd-label').removeClass('float') : inputField.prev('.cd-label').addClass('float');
		}	
	});
	
	
	/* optional triggers
	
	$(window).load(function() {
		
	});
	
	$(window).resize(function() {
		
	});
	
	*/

})(window.jQuery);