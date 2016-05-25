$('.bxslider').bxSlider({
  auto: true,
  mode: 'vertical',
  slideMargin: 5
});
$('.media-wrap').waypoint(function() {
		$('.media-wrap').addClass('animated zoomInUp');
	}, {
		offset: '60%'
});
$('.bx-wrap').waypoint(function() {
		$('.bx-wrap').addClass('animated fadeInRight');
	}, {
		offset: '60%'
});
$('.grab-car').waypoint(function() {
		$('.grab-car').addClass('animated zoomInDown');
	}, {
		offset: '80%'
});
$('.title-content').waypoint(function() {
		$('.title-content').addClass('animated fadeInLeft');
	}, {
		offset: '60%'
});
$('.download-content').waypoint(function() {
		$('.download-content').addClass('animated fadeInRight');
	}, {
		offset: '60%'
});
$('.news-title-content').waypoint(function() {
		$('.news-title-content').addClass('animated flipInX');
	}, {
		offset: '75%'
});
$('.news-img').waypoint(function() {
		$('.news-img').addClass('animated zoomInRight');
	}, {
		offset: '75%'
});
$('.viewMore_button').waypoint(function() {
		$('.viewMore_button').addClass('animated shake');
	}, {
		offset: '80%'
});