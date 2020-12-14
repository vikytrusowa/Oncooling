$(".header__menu--open").click(function (e) {
    e.preventDefault(),
        $(".header__menu-mobile").toggleClass("header__menu-mobile--visible")
})

var swiper = new Swiper('.partners__slider', {
    slidesPerView: "auto",
    slidesPerGroup: 1,
    spaceBetween: 30,
    loop: false,
});
var swiper = new Swiper('.diseases__slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: 5000,
});
var swiper = new Swiper('.activity__slider', {
    slidesPerView: 4,
    spaceBetween: 21,
    slidesPerGroup: 1,
    loop: true,
    nextButton: '.activity__next',
    prevButton: '.activity__prev',
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },

        990: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: "auto",
        }
    }
});
var swiper2 = new Swiper('.news__slider', {
    slidesPerView: 4,
    spaceBetween: 21,
    slidesPerGroup: 1,
    loop: true,
    nextButton: '.news__next',
    prevButton: '.news__prev',
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },

        990: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: "auto",
        }
    }
});
// $('#carousel-example').on('slide.bs.carousel', function (e) {
//     /*
//         CC 2.0 License Iatek LLC 2018 - Attribution required
//     */
//     var $e = $(e.relatedTarget);
//     var idx = $e.index();
//     var itemsPerSlide = 5;
//     var totalItems = $('.carousel-item').length;
//
//     if (idx >= totalItems-(itemsPerSlide-1)) {
//         var it = itemsPerSlide - (totalItems - idx);
//         for (var i=0; i<it; i++) {
//             // append slides to end
//             if (e.direction=="left") {
//                 $('.carousel-item').eq(i).appendTo('.carousel-inner');
//             }
//             else {
//                 $('.carousel-item').eq(0).appendTo('.carousel-inner');
//             }
//         }
//     }
// });
// $('#carousel-example').carousel({
//     interval: 50000
// });