$(document).ready(function () {
    "use strict";

    //  ----- FULLPAGE -----
    $('#fullpage').fullpage({
        // anchors: ['screen1', 'screen2', 'screen3', 'screen4', 'screen5', 'screen6', 'screen7', 'screen8', 'screen9'],
        // menu: '#nav-menu',
        scrollOverflow: true,
        css3: true,
        scrollingSpeed: 1000,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['', 'Пам’ятки', 'Тури', 'Екскурсії', 'Квитки на заходи', 'Квитки на транспорт', 'Бронювання готелів', 'Розваги', 'Знижки в кафе / ресторанах', 'Бонуси за відвідані місця'],
        onLeave: function (index, nextIndex) {
            switch (index) {
                case 1:
                    $('.mask').addClass('visible');
                    break;
                case 10:
                    $('.mask').removeClass('visible');
                    break;
                // case 10:
                //     $('.mask').removeClass('visible');
                //     break;
            }

            // switch (nextIndex) {
            //     case 1:
            //         $('.mask').removeClass('visible');
            //         break;
            //     case 9:
            //         $('.mask').removeClass('visible');
            //         break;
            //     case 10:
            //         $('.mask').addClass('visible');
            //         break;
            // }
        }
        // afterResize: function () {
        //     $.fn.fullpage.destroy('all');
        //     createFullpage();
        // },
    });

    // $(function () {
    //     $('.overflow-first').slimScroll({
    //         height: 'auto'
    //     });
    // });

    // $(function () {
    //     $('.overflow-second').slimScroll({
    //         height: 'auto'
    //     });
    // });


    $('.button-choice1').hover(function () {
        $('.choice-description1').toggleClass('active')
        $('.choice2').toggleClass('transform')
        $('.button-choice2').toggleClass('opacity')
    })
    $('.button-choice2').hover(function () {
        $('.choice-description2').toggleClass('active')
        $('.choice1').toggleClass('transform')
        $('.button-choice1').toggleClass('opacity')
    })


    //  ----- SLIDER -----

    // SLICK SLIDER COUNTER
    // $('#link3 .slider').on('init reInit afterChange', function (event, slick, currentSlide) {
    //     var i = (currentSlide ? currentSlide : 0) + 1;
    //     $('.slider-counter').text(i + '/' + slick.slideCount);
    // });
    //
    // // SLICK SLIDER
    // $(".slider-full").slick({
    //     // slide: ".slide",
    //     prevArrow: "<div class='arrow left'><i class='fa fa-angle-left'></i></div>",
    //     nextArrow: "<div class='arrow right'><i class='fa fa-angle-right'></i></div>",
    //     dots: true
    //
    // });
    //
    // $(".slider-two").slick({
    //     // slide: ".slide",
    //     dots: true,
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //     prevArrow: "<div class='arrow left'><i class='fa fa-angle-left'></i></div>",
    //     nextArrow: "<div class='arrow right'><i class='fa fa-angle-right'></i></div>",
    //     responsive: [
    //         {
    //             breakpoint: 991,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // });


    // $(".slider-three").slick({
    //     // slide: ".slide",
    //     dots: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     prevArrow: "<div class='arrow left'><i class='fa fa-angle-left'></i></div>",
    //     nextArrow: "<div class='arrow right'><i class='fa fa-angle-right'></i></div>",
    //     responsive: [
    //         {
    //             breakpoint: 991,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2
    //             }
    //         },
    //         {
    //             breakpoint: 767,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ],
    //
    //
    // });
    //
    // // ----- SELECT -----
    //
    // //CHOSEN
    // $(".chosen-select").chosen({
    //     disable_search_threshold: 10,
    //     no_results_text: "Нічого не знайдено"
    // });
    // $(".chosen-image").chosenImage({disable_search_threshold: 10});

    // ----- MODAL -----

    // MODAAL PLUGIN
    // $(".inline").modaal();

    // ----- ANIMATION -----

    // WOW JS
    // new WOW().init();


    // ----- ACCORDION -----
    // $(function () {
    //     $("#accordion").accordion({
    //         collapsible: true,
    //         heightStyle: "content"
    //     });
    // });
    //
    // // ----- TABS -----
    // $(function () {
    //     $("#tabs").tabs();
    // });

    // ----- SCROLLSPY -----

    // $(function(){ // on document load
    //     $('.menu').ddscrollSpy({ // initialize first demo
    //         scrolltopoffset: -50
    //     });
    // });

    // SCROLLING CLASS CHANGE
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 200) {
    //         $(".link-up").addClass("visible");
    //     }
    //     else {
    //         $(".link-up").removeClass("visible");
    //     }
    // });

    // ANCHOR LINKS SCROLLING
    $(".smooth").click(function (event) {
        event.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top - 70;
        $("body,html").animate({
            scrollTop: top
        }, 1500);
    });
});

// !!! RESPONSIVE SCRIPTS !!!

// $(window).on('load resize', function() {
//     'use strict';
//     if (window.matchMedia("(max-width: 767px)").matches) {
//
//     } else if (window.matchMedia("(min-width: 768px)").matches) {
//
//     }
// });


