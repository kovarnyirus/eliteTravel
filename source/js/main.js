"use strict"
$(document).ready(function () {
    $('.advantageous__list').slick({
        infinite: true,
        prevArrow: '.prev',
        nextArrow: '.next',
        mobileFirst: true,
        // centerPadding: '60px',
        responsive: [
            {
                breakpoint: 1024,
                settings: "unslick"
            },
        ]
    })
    $('.certificate__list').slick({
        infinite: true,
        prevArrow: '.prev',
        nextArrow: '.next',
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
        ]
    })
});

