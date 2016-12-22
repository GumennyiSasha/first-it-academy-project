$(document).ready(function() {
  var $slider = $('.banners');
  $slider.slick({
    arrows:false,
    dots:true,
    autoplay:true,
    autoplayspeed:2000
  });

 var $slider2 = $('.posts');
  $slider2.slick({
    infinite: true,
    slidesToShow: 4,
    arrows:false,
    autoplay:true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }]
  });
});

$(function(){
  $('.product-prewiev .thumbs').slick({
    slidesToShow:3,
    vertical:true,
    verticalSwiping:true,
    arrows:false
    });

  $('.thumbs a').on('click', function(e) {
    e.preventDefault();
    var picLink = $(this).attr('href');
    console.log(picLink);
    $('#product-image').attr('src', picLink)
  })
});


