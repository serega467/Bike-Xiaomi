$(function(){
    $('.bike-slider, .slider__items') .slick({
        arrows: false,    /*отключили стрелки*/
        dots: true,          /*точки под слайдером включили*/
        fade: true,         /*стиль анимации задает*/
        autoplay: true,
        autoplaySpeed: 2000,
    });
});