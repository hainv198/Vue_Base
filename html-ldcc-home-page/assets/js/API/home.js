$(document).ready(function() {
    sysScroll();

    $(window).scroll(function() {
        sysScroll();
    });

    function scrollToTarget(target) {
        var scrollTop = $(window).scrollTop() + $(window).height() - 81;
        var tgPosHeight = $(target).outerHeight() + $(target).offset().top - 81;

        if (scrollTop >= $(target).offset().top && $(window).scrollTop() <= tgPosHeight) {
            $(target).addClass('active');
        } else {
            $(target).removeClass('active');
        }
    }

    function sysScroll() {
        scrollToTarget('.scroll-page .section-home-banner');
        scrollToTarget('.scroll-page .section-2');
        scrollToTarget('.scroll-page .section-3');
        scrollToTarget('.scroll-page .section-4');
        scrollToTarget('.scroll-page .section-5');
        scrollToTarget('.scroll-page .section-6');
    }



});