$( function () {
	//The pexi inview calls your javasript when 100% on screen.
	function hover(){
		function hoverIn() {
	
		}
		//hover out animaties hier
		function hoverOut() {
			
		}
		//hover in en out functies worden aangeroepen bij hover op #stage
		$('#stage').hover(hoverIn, hoverOut);
	}

	$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		//als er een slide veranderd maak de juiste thumb active
		var id = nextSlide + 1;
		$('.thumb').removeClass('active');
		$('#nav_item' + id + '').addClass('active');

		//view slide event
		$('.progress_fill').css('width',id*33.3+'%')
		pexi.event('view_slide_' + id + '');
	});

	$('.slider').on('swipe', function(event, slick, direction){
		pexi.event('user_swipe_' + direction + '');
	});

	setTimeout(function(){
		//maken van de slick slider
		$('.slider').slick({
			slidesToShow: 1,
			initialSlide: 0,
			true: false,
			infinite: true,
			cssEase: 'linear',
			autoplay: true,
			prevArrow: '<img src="arrow_left.svg" class="btn btn-prev">',
			nextArrow: '<img src="arrow_right.svg" class="btn btn-next">',
			speed: 300,
			autoplaySpeed: 4000,
			dots: false,
			//fade: true,
			//cssEase: 'linear',
		});
	}, 500);

	//werking van de thumbs, id selecteren en slickTo..
	$('.thumb').click(function(){
		var id = this.id;
		var id = id.replace('nav_item', '');
		var idd = id - 1;

		$('.slider').slick('slickGoTo', idd);
		//navigatie click
		pexi.event('user_nav_' + id + '');
	});

	$('.transformer').fadeIn();


	//styling en animaties op IE
	if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1))
	{ }

});