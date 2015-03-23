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

		Messenger.options = {
		    extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
		    theme: 'flat'
		}

		$('a.scroll').click(function(event) {
			// event.preventDefault();
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

		$('html').click(function(event) {
			$('.sub-menu').removeClass('visible');
		});

		$('a.has-submenu').click(function(event){
			event.stopPropagation();
			event.preventDefault();
			var target = $(this).attr('href');
			if(target)
			{
				$(target).ScrollTo({
					offsetTop: 100,
					duration: 1000,
					easing: 'linear'
				});	
			}
		
			$('.sub-menu').toggleClass('visible');
			$('.sub-menu').css('left', $(this).offset().left - 12);
		});

		$('.cd-form').submit(function(event) {
			event.preventDefault();

			$('#cd-submit').val('Sending ...');
			$('#cd-submit').prop('disabled', true);

			var valid = checkFormValidity();

			if(valid)
			{
				var post_data = {
					'name': $('#cd-name').val(),
					'company': $('#cd-company').val(),
					'phone': $('#cd-phone').val(),
					'email': $('#cd-email').val(),
					'description': $('#cd-textarea').val()
				}

				$.ajax({
					url: 'message',
					type: 'POST',
					dataType: 'json',
					data: post_data,
				})
				.always(function(data) {
					if(data.responseText == "success")
					{
						Messenger().post({
							message: "We have received your email. We will get back to you soon!",
							type: 'success',
					  		showCloseButton: true
						});

						$('#cd-name').val('');
						$('#cd-company').val('');
						$('#cd-phone').val('');
						$('#cd-email').val('');
						$('#cd-textarea').val('');
					}
					else
					{
						Messenger().post({
							message: "Kindly fill all the details!",
							type: 'error',
					  		showCloseButton: true
						});					
					}
				});
				$('#cd-submit').val('Send Message');
				$('#cd-submit').prop('disabled', false);
			}
			else
			{
				Messenger().post({
					message: "Kindly fill all the details (JS)!",
					type: 'error',
			  		showCloseButton: true
				});
				$('#cd-submit').val('Send Message');
				$('#cd-submit').prop('disabled', false);
			}

			
		});

		function checkFormValidity(){
			var valid = true;

			if($('#cd-name').val() == "")
			{
				valid = false;
				$('#cd-name-error').html('Enter your name!');
			}
			else
				$('#cd-name-error').html('');

			if($('#cd-phone').val() == "")
			{
				valid = false;
				$('#cd-phone-error').html('Enter your phone number!');
			}
			else
				$('#cd-phone-error').html('');

			if($('#cd-email').val() == "")
			{
				valid = false;
				$('#cd-email-error').html('Enter your email id!');
			}
			else
			{
				var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    			if(!re.test($('#cd-email').val()))
    			{
    				valid = false;
    				$('#cd-email-error').html('Enter a valid email id!');
    			}
    			else
    				$('#cd-email-error').html('');
			}
				

			if($('#cd-company').val() == "")
			{
				valid = false;
				$('#cd-company-error').html('Enter your company name!');
			}
			else
				$('#cd-company-error').html('');

			if($('#cd-textarea').val() == "")
			{
				valid = false;
				$('#cd-textarea-error').html('Enter your project description!');
			}
			else
				$('#cd-textarea-error').html('');

			return valid;
		}

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