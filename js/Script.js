$(document).ready(function(){
  $(".slider").slick({
  		slidesToShow: 3,
		prevArrow: '.slider-container .prev',
  		nextArrow: '.slider-container .next',
  		responsive: [
		    {
		      breakpoint: 960,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		      }
		    },

		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },

		    {
		      breakpoint: 544,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
  		]
  }); 
 });