$(document).ready(function () {

    $('.panel-heading').click(function () {
        $(this).toggleClass('active').next().slideToggle();
        $('.panel-heading').not(this).removeClass('active').next().slideUp();
    });

});/**
 * Created by Nafta on 22.09.2020.
 */
