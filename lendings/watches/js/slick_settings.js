$(document).ready(function () {
  $('.ui-kit.card_slider').slick({
    dots: true,
    appendDots: $('.ui-kit.card_slider__pagination'),
    arrows: false,
    autoplay: false,
    autoplayspeed: 5000,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  // //
  // $('.main_promo_slider').slick({
  //   dots: true,
  //   appendDots: $('.main_promo_slider__pagination'),
  //   arrows: true,
  //   prevArrow: $('.main_promo .button-circle-left'),
  //   nextArrow: $('.main_promo .button-circle-right'),
  //   autoplay: false,
  //   autoplayspeed: 5000,
  //   infinite: true,
  //   pauseOnFocus: false,
  //   pauseOnHover: false,
  //   responsive: [
  //     {
  //       breakpoint: 770,
  //       settings: {
  //         arrows: false,
  //         prevArrow: null,
  //         nextArrow: null,
  //       }
  //     },
  //   ]
  // });
  //
  // $('.main_sale__slider').slick({
  //   arrows: true,
  //   prevArrow: $('.main_sale .button-circle-left'),
  //   nextArrow: $('.main_sale .button-circle-right'),
  //   infinite: false,
  //   pauseOnFocus: false,
  //   pauseOnHover: false,
  //   slidesToShow: 4,
  //   responsive: [
  //     {
  //       breakpoint: 1300,
  //       settings: { slidesToShow: 3 }
  //     },
  //     {
  //       breakpoint: 950,
  //       settings: { slidesToShow: 2 }
  //     },
  //     {
  //       breakpoint: 770,
  //       settings: { slidesToShow: 1 }
  //     },
  //   ]
  // });
  // 
  // $('.main_daily__slider').slick({
  //   dots: false,
  //   arrows: true,
  //   prevArrow: $('.main_daily .button_left'),
  //   nextArrow: $('.main_daily .button_right'),
  //   autoplay: false,
  //   autoplayspeed: 5000,
  //   infinite: false,
  //   pauseOnFocus: false,
  //   pauseOnHover: false,
  //   draggable: true,
  //   swipe: true,
  //   touchMove: true
  // });
});