//@prepros-prepend jquery-2.1.1.min.js
/*@prepros-prepend bootstrap.min.js */
//@prepros-prepend jquery.fancybox.min.js
//@prepros-prepend owl.carousel.min.js

var isIE = false || !!document.documentMode;

if (isIE) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/styles-ie.min.css";
    head.appendChild(link);
}

$(document).ready(function () {
    $(function () {
        var check = $('.check', this),
            email = $('.input-mail', this),
            message = $('.alert-message', this),
            button = $('.button-form', this);
        $(".form").on("submit", function () {
            var check = $('.check', this),
                message = $('.alert-message', this),
                reNone = /.+/,
                email = $('.input-mail', this),
                button = $('.button-form', this);
            if (!email.val().match(reNone)) {
                message.text('Введите email').slideDown(500);
                return false;
            }
            if (!check.prop("checked")) {
                check.next().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                check.next().children().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                message.text('Подтвердите соглашение').slideDown(500);
                return false;
            }
            if (email.val() && check) {
                button.text('Отправляем...');
                setTimeout(function () {
                    button.text('Отправлено!');
                }, 500);
                return true
            }
        });
        email.click(function () {
            // email.css({"borderColor": "rgb(25, 10, 12)",'transition':'all .4s ease'});
            message.slideUp(500);
        });
        check.click(function () {
            check.next().css({
                "color": "#000",
                'transition': 'all .4s ease'
            });
            check.next().children().css({
                "color": "#000",
                'transition': 'all .4s ease'
            });
            message.slideUp(500);
        });
    });
    $(function () {
        $("[data-fancybox]").fancybox({
            buttons: [
                'slideShow',
                'share',
                'zoom',
                'fullScreen',
                // 'download',
                'close'
            ],
            speed: 330,
            loop: true,
            opacity: "auto",
            // autoScale: true,
            mouseWheel: true,
            transitionEffect: 'slide'
        });
    });
    $(".button-modal-up,.polotics-link").fancybox();
    /*Отзывы*/
    $(function () {
        $('#certs').owlCarousel({
            slideSpeed: 200,
            paginationSpeed: 200,
            items: 4,
            loop: true,
            margin: 20,
            // nav: true,
            navText: ["‹", "›"],
            dots: false,
            autoHeightClass: 'owl-height',
            autoHeight: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                767: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
    });
    $(".video-wrapper-rev img, .video-wrapper-rev-item img").click(function (e) {
        var a = $(this).parent().attr("data-youtube");
        $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1&modestbranding=1"  allowfullscreen></iframe>')
    });
    /*Конец документа*/
});