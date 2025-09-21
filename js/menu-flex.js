$(function () {

    var header = document.getElementById('header');
    var headroom = new Headroom(header);
    headroom.init();

    var ancho = $(window).width(),
        enlaces = $('.enlaces'),
        btnMenu = $('#btn-menu'),
        icono = $('#btn-menu .icono-menu');

    // 🔹 Siempre iniciar cerrado en pantallas pequeñas
    if (ancho < 1024) {
        enlaces.hide();
        icono.removeClass('fa-times').addClass('fa-bars');
    } else {
        enlaces.show();
        icono.removeClass('fa-bars').addClass('fa-times');
    }

    // Toggle menú al hacer clic
    btnMenu.on('click', function (e) {
        enlaces.slideToggle();
        icono.toggleClass('fa-bars');
        icono.toggleClass('fa-times');
    });

    // Ajustar cuando cambie el tamaño de la ventana
    $(window).on('resize', function () {
        if ($(this).width() > 1023) {
            enlaces.show();
            icono.removeClass('fa-bars').addClass('fa-times');
        } else {
            enlaces.hide();
            icono.removeClass('fa-times').addClass('fa-bars');
        }
    });

    // 🔹 Extra: cuando hago clic en un enlace, cerrar el menú (opcional)
    enlaces.find('a').on('click', function () {
        if ($(window).width() < 1024) {
            enlaces.slideUp();
            icono.removeClass('fa-times').addClass('fa-bars');
        }
    });
});
