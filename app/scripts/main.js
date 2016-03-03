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

$(".sub-ul__nav").css("display", "none");

var allLi = $(".li__nav"),
		ulNav = $(".ul__nav"),
		allA  = $(".a__nav"),
		allSubA = $(".sub-a__nav");

allLi
	.has(".ul__nav")
	.find(".a__nav")
	.append("<i class = 'fa fa-sort-desc'></i>");

allA.eq(0).addClass("myMenu-current");

allA.hover(
	function(){
		$(this).parent().find(".sub-ul__nav").css("display", "block");
	},
	function(){
		$(this).parent().find(".sub-ul__nav").delay(1000).css("display", "none");
	}
);

allSubA.hover(
	function(){
		$(this).parent().parent().css("display", "block");
	},
	function(){
		$(this).parent().parent().delay(2000).css("display", "none");
	}
);



})


