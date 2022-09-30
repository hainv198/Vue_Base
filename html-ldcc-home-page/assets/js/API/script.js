$(document).ready(function() {
    changeMenuClass();

    function changeMenuClass() {
        var _header = $('.header').offset().top;

        if (_header > 0) {
            $('.header').addClass('change-style');
        } else {
            $('.header').removeClass('change-style');
        }
    }
    $(window).scroll(function() {
        changeMenuClass();

    });

    // Click show submenu on Mobile menu
    $('.mobile-menu>ul>li:not(:only-child)').prepend('<span class="arrow"></span>');
    $('.mobile-menu>ul>li:not(:only-child) .arrow').click(function(e) {
        var _li = $(this).closest('li');
        var _ul = _li.find('ul').first();
        var _menu = $('.mobile-menu>ul');

        if (!$('.mobile-menu ul').is(':animated')) {
            if (!_ul.hasClass('s-down')) {
                // Remove other active
                _menu.find('.active').removeClass('active');
                _menu.find('.s-down').removeClass('s-down').slideUp(400);
                _li.addClass('active');
                _ul.addClass('s-down').slideDown(400);
            } else {
                _li.removeClass('active');
                _ul.removeClass('s-down').slideUp(400);
            }
        }
    });

    $('.mobile-menu>ul>li.active:not(:only-child) .arrow').click();


    // Buton second menu - Show second menu when click
    $('.header .btn-second-menu, .header .btn-close').on('click', function() {

        if ($(window).width() >= 1200) {
            if ($('.main-menu:animated').length) {
                return false;
            } else {
                if (!$('.header').hasClass('show-cate')) {
                    if (!$('body').hasClass('cms-home')) {
                        $('html, body').scrollTop(0);
                    }
                    $('body').addClass('overflow-hidden');
                    $('.main-menu').hide();

                    $('.header').addClass('show-cate');
                    $('.main-menu').addClass('is-cate');
                    $('.main-menu').css('opacity', 0).slideDown(400)
                        .animate({ opacity: 1 }, { queue: false, duration: 400 });
                } else {
                    $('.main-menu').slideUp(400)
                        .animate({ opacity: 0 }, { queue: false, duration: 390 })
                        .delay(0).queue(function(next) {
                        $('body').removeClass('overflow-hidden');
                        $('.header').removeClass('show-cate');
                        $('.main-menu').removeClass('is-cate');
                        $('.main-menu').css('opacity', 1);
                        $('.main-menu').show();
                        next();
                    });
                }
            }
        } else {

            if ($('.mobile-menu:animated').length) {
                return false;
            } else {
                if (!$('.header').hasClass('show-cate')) {
                    if (!$('body').hasClass('cms-home')) {
                        $('html, body').scrollTop(0);
                    }
                    $('body').addClass('overflow-hidden');

                    $('.header').addClass('show-cate');
                    $('.mobile-menu').addClass('is-cate');
                } else {
                    $('body').removeClass('overflow-hidden');
                    $('.header').removeClass('show-cate');
                    $('.mobile-menu').removeClass('is-cate');
                }
            }
        }
    });

    var xWidth = $(window).width();
    $(window).resize(function() {
        if ($(this).width() !== xWidth) {
            xWidth = $(this).width();
            // console.log(xWidth);
            $('body').removeClass('overflow-hidden');
            $('.header').removeClass('show-cate');

            $('.main-menu').removeClass('is-cate');
            $('.main-menu').removeAttr('style');
            $('.mobile-menu').removeClass('is-cate');
        }
    });



    // Collapse
    function collapse(parent, target) {
        var _target = parent.find(target);
        if (parent.length > 0) {
            parent.find('.opened').next().slideDown();
        }
        _target.click(function(e) {
            e.preventDefault();
            var _next = $(this).next();
            if (!_next.is(':animated') || !parent.find('.opened').next().is(':animated')) {
                if ($(this).hasClass('opened')) {
                    $(this).removeClass('opened');
                    _next.slideUp();
                } else {
                    parent.find('.opened').next().slideUp();
                    parent.find('.opened').removeClass('opened');
                    $(this).addClass('opened');
                    _next.slideDown();
                }
            }
        });
    }

    /*************/
    var scrollPos;
    $('.menu-os').on('click', function() {
        scrollPos = $(window).scrollTop();
        if ($(".mobile-menu").hasClass("is-cate")) {
            $('.header .btn-close').click();
        }
        $('html, body').animate({
            scrollTop: $("#oursolution").offset().top - 120
        }, 500);
    });



});
$(window).on("load", function() {
    var urlHash = window.location.href.split("#")[1];
    if (urlHash) {
        $('html,body').animate({
            scrollTop: $('#' + urlHash).offset().top - 120
        }, 500);
    }
});