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



$('.wrapper .tab').on('click', function (event) {
   var id = $(this).attr('data-id');
   $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
   $('.wrapper .tabs').find('.tab').removeClass('active');
   $(this).addClass('active');
   $('#' + id).addClass('active-tab').fadeIn();
   return false;
});

$('.menu__btn').on('click', function () {
   $('.menu__list').slideToggle();
});

$('.menu__list-home').on('click', function () {
   $('.menu__list-home-active').slideToggle();
});

$('.menu__list-products').on('click', function () {
   $('.menu__list-products-active').slideToggle();
});

$('.menu__list-worpress').on('click', function () {
   $('.menu__list-worpress-active').slideToggle();
});

$('.menu__list-pages').on('click', function () {
   $('.menu__list-pages-active').slideToggle();
});

$('.header__btn-menu').on('click', function () {
   $('.header__box, .header__link, .header__logo').toggleClass('active');
});