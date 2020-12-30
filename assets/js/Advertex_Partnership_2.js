$(document).ready(function () {

    $('.responsiveTabsDemo').responsiveTabs({
        startCollapsed: 'accordion',

    });
    $('.responsiveTabsDemo').responsiveTabs('activate', 0);
    $(window).scroll(function() {
        var windowos = $(window).scrollTop();
        if ( windowos > heihgtTopToElement ) {
            $(".value").show('slow');
        }
    });

    $(".r-tabs-tab").on("click", function (event) {
        $(".value").addClass('fadeInLeft');
    });
    $(".r-tabs-anchor").on("click", function (event) {
        $(".value").addClass('fadeInLeft');
    });
});/**
 * Created by Nafta on 22.11.2020.
 */
