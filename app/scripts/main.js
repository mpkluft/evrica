console.log('\'Allo \'Allo!');
// partials/owl.carousel.js
$(".carousel").owlCarousel({
  items: 1,
  autoPlay: 4000,
  lazyLoad: true,
  singleItem: true,
});

$(".carousel__chapter").css('height', $(window).height()-$(".main-header").height()-$(".main-footer").height()-$(".main-nav").height()-80);

$(window).resize(function(){

  var windowHeight = $(window).height(),
      hederHeight = $(".main-header").height(),
      footerHeight = $(".main-footer").height()+50,
      navHeight = $(".main-nav").height();
  $(".carousel__chapter").css('height', windowHeight-hederHeight-footerHeight-navHeight);
});
