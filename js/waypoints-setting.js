$(window).scroll(function() {
	$('.mobileApp-content1').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+650) {
			$(this).addClass('animated pulse');
		}
	});
});

$(window).scroll(function() {
	$('.mobileApp-content2').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+700) {
			$(this).addClass('animated pulse');
		}
	});
});

$(window).scroll(function() {
	$('#footer').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+800) {
			$(this).addClass('animated fadeInUp');
		}
	});
});