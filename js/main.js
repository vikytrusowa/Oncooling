$(document).ready(function () {
    $(".header__menu--open").click(function (e) {
        e.preventDefault();
        $(".header__menu-mobile").toggleClass("header__menu-mobile--visible")
    });
    $('.header__section--item ').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 300);
        return false;
    });
    $('.crayfish__dropdown--button').click(function (e){
        e.preventDefault();
        $('.crayfish__dropdown--menu').slideToggle(300);
    })
    var swiper = new Swiper('.partners__slider', {
        spaceBetween: 10,
        slidesPerView: "auto",
        loop: true,
        loopedSlides: 5,
        slideToClickedSlide: true
    });
    var galleryBottom = new Swiper('.partners__description', {
        spaceBetween: 30,
        slidesPerView: 1,
        touchRatio: 0.2,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        slideToClickedSlide: true,
        breakpoints: {
            768: {
                autoHeight: true
            }
        }
    });
    swiper.params.control = galleryBottom;
    galleryBottom.params.control = swiper;

    var swiper = new Swiper('.diseases__slider', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: 7000,
        parallax: true,
        speed: 600
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

    $('#datepicker').datepicker({
        maxViewMode: 0,
        language: "ru",
        todayHighlight: true
    });
    $('#datepicker').on('changeDate', function () {
        $('#my_hidden_input').val(
            $('#datepicker').datepicker('getFormattedDate')
        );
    });

    $(".quiz__item").click(function () {
        var question = $(this).attr('data-number');
        if (question < 7) {
            var current = '#question_' + question;
            var next = '#question_' + (parseInt(question) + 1);
            $(current).addClass('quiz__element--hidden');
            $(next).removeClass('quiz__element--hidden')
        }
    });

    inputs=document.getElementsByTagName("input");
    for(var i=0;i<inputs.length;i++)
    {
        if(inputs[i].type=="radio")
        {
            inputs[i].onchange=function()
            {
                inputs=document.getElementsByTagName("input");
                for(var i=0;i<inputs.length;i++)
                {
                    if(inputs[i].type=="radio")
                    {
                        inputs[i].checked=false;
                    }
                    this.checked=true;
                }
            }
        }
    }
    document.getElementById("map") && ymaps.ready(function () {
        var o = new ymaps.Map("map", {
            center: [55.760180, 37.517482],
            zoom: 17,
        });
        o.controls.remove("zoomControl"),
            o.controls.remove("rulerControl"),
            o.controls.remove("geolocationControl"),
            o.controls.remove("routeButtonControl"),
            o.controls.remove("trafficControl"),
            o.controls.remove("typeSelector"),
            o.controls.remove("fullscreenControl"),
            o.controls.remove("searchControl");
        var e = new ymaps.Placemark(o.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/contacts/Pin.svg',
            // Размеры метки.
            iconImageSize: [54, 66],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -45]
        })
        o.geoObjects.add(e)
    })
});
