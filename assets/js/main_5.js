$(document).ready(function(){

//табы
    $(".tabs-button").click(function(e) {
        $("div [data-id]").removeClass("active");
        $("div [data-id='" + $(this).attr("href").replace("#","") + "']").addClass("active");
        e.preventDefault();
    });
    $(".tabs-button").click(function(e) {
        e.preventDefault();
        $(".tabs-button").removeClass('active');
        $(this).addClass('active');
    });
//конец табы/**

    $('.slider').slick({
        infinite:true,
        draggable:true,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',
        responsive: [

            {

                breakpoint: 1280,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {

                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {


                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {

                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },

        ]

    });



});/**
 * Created by Nafta on 24.12.2020.
 */
