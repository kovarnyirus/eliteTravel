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

    $('.nav-toggle').on('click', function (){
        $('.main-nav').toggleClass('main-nav--open')
    })

    function animateScroll(positionToScroll, delay) {
        $('html, body').animate({scrollTop: positionToScroll}, delay);
    }

    $(".animate-scroll, [href^='#']:not([href='#'])").click(function (e) {
        e.preventDefault();
        let elementClick = $(this).attr("href");
        if (elementClick == 'top') {
            animateScroll(0, 600);
        } else {
            let destination = $(elementClick).offset().top;
            let mainNav = $(".main-nav");
            animateScroll(destination, 600);
            if (mainNav.hasClass('main-nav--open')){
                mainNav.toggleClass('main-nav--open')
            }
        }
        return false;
    })

    $('.js_phone_mask').inputmask({
        mask: "+7(999)999-99-99",
        "placeholder": "_",
        showMaskOnHover: false
    });

    $('.step-wrap__plus').click(function(e) {
        e.preventDefault();
        var field = $(this).next(),
            num = field.val(),
            minus = $(this).siblings('.step-wrap__minus');

        num++;
        $(field).val(num);
        if (num === 0) {
            $(minus).prop('disabled', true);
        } else {
            $(minus).prop('disabled', false);
        };
    });

    $('.step-wrap__minus').click(function(e) {
        e.preventDefault();
        var field = $(this).prev(),
            num = field.val();

        num--;
        $(field).val(num);
        if (num === 0) {
            $(this).prop('disabled', true);
        }
    });


    //quiz
    let marginLeft = 0;
    $('.step .btn').click(function() {
        marginLeft -= 100;
        let left = marginLeft + '%';
        if ($(this).val() === 'отправить') {
            return;
        } else {
            $('.steps').css('margin-left', left);
        };
    });

    $('#slider').slider({
        value: 312000,
        min: 0,
        max: 5000000,
        slide: function( event, ui ) {
            $('#amount').val( ui.value + ' р' );
        },
    });
    $('.ui-slider-handle, .step').mousemove(function() {
        left = parseInt($('.ui-slider-handle').css('left')) - 35 + 'px';
        $('#amount').css('left', left)
    });
    $( "#amount" ).val( $( "#slider" ).slider( "value" ) + ' р');

    $('.step-wrap__plus').click(function(e) {
        e.preventDefault();
        var field = $(this).next(),
            num = field.val(),
            minus = $(this).siblings('.step-wrap__minus');

        num++;
        $(field).val(num);
        if (num === 0) {
            $(minus).prop('disabled', true);
        } else {
            $(minus).prop('disabled', false);
        };
    });

    $('.step-wrap__minus').click(function(e) {
        e.preventDefault();
        var field = $(this).prev(),
            num = field.val();

        num--;
        $(field).val(num);
        if (num === 0) {
            $(this).prop('disabled', true);
        }
    });
});

