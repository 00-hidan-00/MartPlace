$(function () {
   $(".rate-star").rateYo({
      starWidth: "15px",
      readOnly: true,
      rating: 4.5,
   });

   var mixer = mixitup('.products__inner-products');


   $('.product-slider__inner').slick({
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button class="slick-arrow slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
      nextArrow: '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>'
   });



   $('.followers-slider__inner').slick({
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button class="slick-arrow slick-prev blue"><span class="lnr lnr-chevron-left"></span></button>',
      nextArrow: '<button class="slick-arrow slick-next blue"><span class="lnr lnr-chevron-right"></span></button>'
   });
});

