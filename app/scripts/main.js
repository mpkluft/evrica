console.log('\'Allo \'Allo!');
// partials/owl.carousel.js


$(function(){

	$(".carousel").owlCarousel({
	  items: 1,
	  autoPlay: 4000,
	  lazyLoad: true,
	  singleItem: true,
	});

$(".burger").click(function(){
	$(this).toggleClass("is-active");
});


})


