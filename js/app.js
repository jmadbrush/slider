var speed = 500,				// fade speed
	autoswitch = true, 			// auto slider options
	autoswitch_speed = 4000; 	// auto slider speed

	
	//add initial class
	$('.slide').first().addClass('active');
	
	//hide all slides
	$('.slide').hide();
	
	//show 1st slide
	$('.active').show();
	
	//next slide handler
	$('#next').on('click', nextSlide);
	
	//prev slide handler
	$('#prev').on('click', prevSlide);
	
	//autoslide handler
	if (autoswitch == true) {
		setInterval(nextSlide,autoswitch_speed);
	}
	
//switch to next slide
function nextSlide() {
	$('.active').removeClass('active').addClass('oldActive');	
	if($('.oldActive').is(':last-child')) {
		$('.slide').first().addClass('active');
	} else {
		$('.oldActive').next().addClass('active');
	}
	$('.oldActive').removeClass('oldActive');
	$('.slide').fadeOut(speed);
	$('.active').fadeIn(speed);
}
//switch to prev slide
function prevSlide() {
	$('.active').removeClass('active').addClass('oldActive');	
	if($('.oldActive').is(':first-child')) {
		$('.slide').last().addClass('active');
	} else {
		$('.oldActive').prev().addClass('active');
	}
	$('.oldActive').removeClass('oldActive');
	$('.slide').fadeOut(speed);
	$('.active').fadeIn(speed);
}