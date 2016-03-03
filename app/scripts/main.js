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

function menu(menuClass, curElWithoutDot){
	
	var ul = $(menuClass).find("ul").eq(0),
			ulClass =ul.attr("class"),
			li = $(ul).find("li").eq(0),
			liClass =li.attr("class"),
			a = li.find("a").eq(0),
			aClass = a.attr("class"),
			curElement = curElWithoutDot;

	$("." + aClass).eq(0).addClass(curElWithoutDot);
	$("." + liClass)
		.has("." + ulClass)
		.find("." + aClass).eq(0)
		.append("<i class = 'fa fa-sort-desc'></i>");
	$("."+ulClass+" "+"."+ulClass+" "+"."+aClass).removeClass(aClass).addClass("sub");

	$("." + aClass).click(function(){
		$("."+curElWithoutDot).removeClass(curElWithoutDot);
		$(this).addClass(curElWithoutDot);
	});

	$(".sub").click(function(){
		$("."+curElWithoutDot).removeClass(curElWithoutDot);
		$(this).parent().parent().parent().find("." + aClass).addClass(curElWithoutDot);
	});
}

menu(".nav", "a__nav_current");





})


