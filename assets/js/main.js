
$(document).ready(function(){

    <!-- меню -->
    $("#navToggle").click(function() {
        $(this).toggleClass("active");
        $(".overlay").toggleClass("open");
        // this line ▼ prevents content scroll-behind
        $("body").toggleClass("locked");
        $(".text_anime").toggleClass("none");

    });
    $(".sub-menu").click(function() {
        $(this).toggleClass('active ');
        $('.sub-menu').not(this).removeClass('active');


    });
    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".sub-menu"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $(".sub-menu").removeClass('active');
        }
    });
    <!-- конец мею -->

    $(function() {
        jcf.replaceAll();


    });

    <!-- Попап-->
    $('.open_login').on("click", function () {
        $('.overlay-login').addClass('active fadeInDown');
        $('.overlay-login').removeClass('fadeOutUp');
        $('body').addClass('hid');

    });
    $('.overlay-login .close,.close-popup, .open_conf').on("click", function () {
        $('.overlay-login').toggleClass('fadeOutUp fadeInDown');
        $('body').removeClass('hid');
        window.setTimeout(function() {
            $('.overlay-login').removeClass('active');
        }, 500);
    });
    $('.overlay-login .closeBtn, .open_conf').on("click", function () {
        $('.overlay-login').removeClass('active fadeInDown ');
        $('body').removeClass('hid');
    });


    $('.open_password').on("click", function () {
        $('.overlay-password').addClass('active fadeInDown');
        $('.overlay-password').removeClass('fadeOutUp');
        $('body').addClass('hid');

    });
    $('.overlay-password .close,.close-popup, .open_conf').on("click", function () {
        $('.overlay-password').toggleClass('fadeOutUp fadeInDown');
        $('body').removeClass('hid');
        window.setTimeout(function() {
            $('.overlay-password').removeClass('active');
        }, 500);
    });
    $('.overlay-password .closeBtn, .open_conf').on("click", function () {
        $('.overlay-password').removeClass('active fadeInDown ');
        $('body').removeClass('hid');
    });


    $('.open_registration').on("click", function () {
        $('.overlay-registration').addClass('active fadeInDown');
        $('.overlay-registration').removeClass('fadeOutUp');
        $('body').addClass('hid');

    });
    $('.overlay-registration .close,.close-popup, .open_conf').on("click", function () {
        $('.overlay-registration').toggleClass('fadeOutUp fadeInDown');
        $('body').removeClass('hid');
        window.setTimeout(function() {
            $('.overlay-registration').removeClass('active');
        }, 500);
    });
    $('.overlay-registration.closeBtn, .open_conf').on("click", function () {
        $('.overlay-registration').removeClass('active fadeInDown ');
        $('body').removeClass('hid');
    });


    $('.overlay-valid .close,.close-popup, .open_conf').on("click", function () {
        $('.overlay-valid').toggleClass('fadeOutUp fadeInDown');
        $('body').removeClass('hid');
        window.setTimeout(function() {
            $('.overlay-password').removeClass('active');
        }, 500);
    });
    <!-- конец Попап-->

    $(".down").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $('.pp-form').on('focus blur', function(e){
        if(!$(this).val())$(this).parents('.input')[e.type === 'focus' ? 'addClass' : 'removeClass']('active');
    });
    $(function() {
        jcf.replaceAll();


    });
});

