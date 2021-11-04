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
      slidesToScroll: 3,
      dots: false,
      arrows: true,
      prevArrow: '<button class="slick-arrow slick-prev blue"><span class="lnr lnr-chevron-left"></span></button>',
      nextArrow: '<button class="slick-arrow slick-next blue"><span class="lnr lnr-chevron-right"></span></button>',
      responsive: [
         {
            breakpoint: 1181,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true
            }
         },
         {
            breakpoint: 791,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   });




});

$(function () {

   var mixer = mixitup('.blog__aside-posts');

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







const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
   noUiSlider.create(rangeSlider, {
      start: [30, 300],
      connect: true,
      step: 1,
      range: {
         'min': [1],
         'max': [400]
      }
   });

   const input0 = document.getElementById('input-0');
   const input1 = document.getElementById('input-1');
   const inputs = [input0, input1];

   rangeSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = Math.round(values[handle]);
   });

   const setRangeSlider = (i, value) => {
      let arr = [null, null];
      arr[i] = value;

      console.log(arr);

      rangeSlider.noUiSlider.set(arr);
   };

   inputs.forEach((el, index) => {
      el.addEventListener('change', (e) => {
         console.log(index);
         setRangeSlider(index, e.currentTarget.value);
      });
   });
};


(function ($) {
   $('.product-settings-list-grid').on('click', function (e) {
      if ($(this).hasClass('grid')) {
         $('.products-page__grid').removeClass('grid').addClass('list');
      }
      else if ($(this).hasClass('list')) {
         $('.products-page__grid').removeClass('list').addClass('grid');
      }
   });
})(jQuery);

$(document).ready(function () {
   $('.products-page__categories-title').click(function (event) {
      $(this).toggleClass('products-page__categories-title-active').next().slideToggle(0);
   });
});



// function detectClick(element) {
//    element.classList.toggle("highlight");
// }