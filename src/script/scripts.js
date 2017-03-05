$(document).ready(function () {

    //-- ОСНОВНОЙ СЛАЙДЕР  --//
    $('.main-slider__wrapper').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
    });
    
    var leftCoordinate = $('.logo').offset();
    console.log(leftCoordinate);
});