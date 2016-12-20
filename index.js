$(document).ready(function() {
  var $slider = $('.banners');
  $slider.slick({
    arrows:false,
    dots:true,
    autoplay:true,
    autoplayspeed:2000,
  });

 var $slider2 = $('.posts');
  $slider2.slick({
    infinite: true,
    slidesToShow: 4,
    arrows:false,
    autoplay:true,
  });
});


