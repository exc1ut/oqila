/*
| ----------------------------------------------------------------------------------
| TABLE OF CONTENT
| ----------------------------------------------------------------------------------
-Revolution Slider
-Unit Gallery
-Skills
-Progress Bar Percentage
-Search Popup
-Smooth Scrolling
-Parallax
-Lightbox
-Wow
*/
$(document).ready(function() {
	'use strict';
	
/////////////////////////////////////////////////////////////////
// Revolution Slider
/////////////////////////////////////////////////////////////////
		
			$('.tp-banner').show().revolution(
					{
						dottedOverlay:"none",
						delay:5000,
						startwidth:1170,
						startheight:700,
						hideThumbs:200,

						thumbWidth:100,
						thumbHeight:50,
						thumbAmount:5,

					    navigationType:"bullet",
						navigationArrows:"none",
						navigationStyle:"preview2",

						touchenabled:"on",
						onHoverStop:"off",
						
						//disableProgressBar: "on",

						swipe_velocity: 0.7,
						swipe_min_touches: 1,
						swipe_max_touches: 1,
						drag_block_vertical: false,

						parallax:"mouse",
						parallaxBgFreeze:"on",
						parallaxLevels:[7,4,3,2,5,4,3,2,1,0],

						keyboardNavigation:"off",

						navigationHAlign:"center",
						navigationVAlign:"bottom",
						navigationHOffset:0,
						navigationVOffset:20,

						soloArrowLeftHalign:"left",
						soloArrowLeftValign:"center",
						soloArrowLeftHOffset:20,
						soloArrowLeftVOffset:0,

						soloArrowRightHalign:"right",
						soloArrowRightValign:"center",
						soloArrowRightHOffset:20,
						soloArrowRightVOffset:0,
						

						shadow:0,
						fullWidth:"on",
						fullScreen:"on",

						spinner:"",

						stopLoop:"on",
						stopAfterLoops:0,
						stopAtSlide:-1,

						shuffle:"off",

						autoHeight:"on",
						forceFullWidth:"off",
						

						//disableFocusListener:false,
						

						hideThumbsOnMobile:"off",
						hideNavDelayOnMobile:1500,
						hideBulletsOnMobile:"off",
						hideArrowsOnMobile:"off",
						hideThumbsUnderResolution:0,

						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						startWithSlide:0,
						fullScreenOffsetContainer: "",
						
					});

			
/////////////////////////////////////////////////////////////////
// Unit Gallery
/////////////////////////////////////////////////////////////////

        
            $("#gallery").unitegallery({
                thumb_width: 200,
                thumb_height: 120,
                slider_enable_text_panel: true,
				gallery_autoplay:false,
				gallery_pause_on_mouseover: false,
				slider_enable_fullscreen_button:false
            });
       

/////////////////////////////////////////////////////////////////
// Skills
/////////////////////////////////////////////////////////////////

        $('.skills').on('inview', function() {
            $('.progress .progress-bar').css("width", function() {
                return $(this).attr("aria-valuenow") + "%";
            })
		});

/////////////////////////////////////////////////////////////////
// Progress Bar Percentage
/////////////////////////////////////////////////////////////////

		
			$('.progress-bar-percent').counterUp({
				delay: 10,
				time: 2000
			});
		 

/////////////////////////////////////////////////////////////////
// Search Popup
/////////////////////////////////////////////////////////////////


	$('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })


		
/////////////////////////////////////////////////////////////////
// Smooth Scrolling
/////////////////////////////////////////////////////////////////




	// Add scrollspy to <body>
	$('body').scrollspy({
		target: ".navbar",
		offset: 50
	});
	// Add smooth scrolling on all links inside the navbar
	$("#main-menu a").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();
			// Store hash
			var hash = this.hash;
			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function() {
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});

	
/////////////////////////////////////////////////////////////////
// Parallax 
/////////////////////////////////////////////////////////////////	
	
    function simpleParallax() {
        //This variable is storing the distance scrolled
        var scrolled = $(window).scrollTop() + 1;

        //Every element with the class "scroll" will have parallax background 
        //Change the "0.3" for adjusting scroll speed.
        $('.scroll').css('background-position', '50%' + -(scrolled * 0.3) + 'px');
    }
    //Everytime we scroll, it will fire the function
    $(window).on('scroll', function() {
        simpleParallax();
    });	
	
	
	
	
/////////////////////////////////////////////////////////////////
// Lightbox 
/////////////////////////////////////////////////////////////////		
	
	$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
	});


/////////////////////////////////////////////////////////////////
// Wow 
/////////////////////////////////////////////////////////////////	
	
new WOW().init();
	
	
	
}); // Close Function