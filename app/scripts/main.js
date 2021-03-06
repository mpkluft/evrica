$(function(){

  $.fn.extend({
      animateCss: function (animationName) {
          var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          $(this).addClass('animated ' + animationName).one(animationEnd, function() {
              $(this).removeClass('animated ' + animationName);
          });
      }
  });
  //раскрытие меню .top-nav__ul по клику на бургер
  $('.burger').click(function(){
    $(this).toggleClass('is-active')
    if($('.top-nav__ul').css('display') != 'block'){  
      $('.top-nav__ul').css('display', 'block').animateCss('bounceInDown');
      $('.autorization__ul').css('display', '');
    } else {
      $('.top-nav__ul').css('display', '');
    }
  });
  //раскрытие меню .autorization__ul по клику на человечка
  $('.authorization__button').click(function(){
    if($('.autorization__ul').css('display') != 'block'){  
      $('.autorization__ul').css('display', 'block').animateCss('bounceInDown');
      $('.top-nav__ul').css('display', '');
      $('.burger').removeClass('is-active');
    } else {
      $('.autorization__ul').css('display', '');
    }
  });
  // При ресайзе закрывать все меню
  $(window).resize(function(){
      $('.burger').removeClass('is-active');
      $('.autorization__ul').css('display', '');
      $('.top-nav__ul').css('display', '');
  })
  // слайдер 
  $('.slider2').owlCarousel({
      items: 1,
      lazyLoad: true,
      singleItem: true,
  }); 

  $('.slider').owlCarousel({
    singleItem: true,
    autoPlay: 40000,
    items: 1
  });

  $('.goods__slider').owlCarousel({
    autoPlay: 10000,
    items: 4
  });


  $('.popular').add('div').addClass('hi');
  console.log($('.popular .hi').length)

  $('.goods__slider:before').click(function() {
    console.log($('.goods__slider:before'));
    owl.trigger('next.owl.carousel');
  })
  // Go to the previous item

  $('.goods__slider:after').click(function() {
      // With optional speed parameter
      owl.trigger('prev.owl.carousel');
  })

  $('.clients__slider').owlCarousel({
    autoPlay: 10000,
    items: 5
  });

  

  $('.goods__item').matchHeight();
  $('.goods__img-wrap').matchHeight();
  $('.goods__description').matchHeight();
  $('.goods__name').matchHeight();

});
