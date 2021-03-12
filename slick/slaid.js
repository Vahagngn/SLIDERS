$(function(){
    $('.slider_responsive').slick({
        speed: 400,
        autoplay:true,
        slidesToShow: 3,
        slidesToScroll: 2,
        prevArrow: '<span class="prev"><i class="fa fa-angle-left fa-4x" aria-hidden="true"></i></span>',
        nextArrow: '<span class="next"><i class="fa fa-angle-right fa-4x" aria-hidden="true"></i></span>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
    });
});

$(function(){
    $('.slider_responsive_center').slick({
        speed: 400,
        autoplay:true,
        slidesToShow: 3,
        slidesToScroll: 2,
        prevArrow: '<span class="prev"><i class="fa fa-angle-left fa-4x" aria-hidden="true"></i></span>',
        nextArrow: '<span class="next"><i class="fa fa-angle-right fa-4x" aria-hidden="true"></i></span>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
    });
});


$(function(){
    $('.slider_responsive_bottom').slick({
        speed: 400,
        autoplay:true,
        slidesToShow: 8,
        slidesToScroll: 2,
        prevArrow: '<span class="prev_bottom"><i class="fa fa-angle-left fa-4x" aria-hidden="true"></i></span>',
        nextArrow: '<span class="next_bottom"><i class="fa fa-angle-right fa-4x" aria-hidden="true"></i></span>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }
        ],
    });
});
