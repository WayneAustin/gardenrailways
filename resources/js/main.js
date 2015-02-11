/**
 * Created by wayneaustin on 08/02/2015.
 */
$(function() {
    "use strict";

    var viewModel = function() {
        var backgroundImageRandomise = function() {
            var num = Math.floor((Math.random() * 4) + 1);
            $('body').css('background-image', 'url("resources/images/garden-model-railway-background' + num + '.jpg")');
        };
        var setContentPosition = function() {
            if(window.innerWidth > 450) {
                var windowHeight = window.innerHeight;
                if (windowHeight > 280) {
                    $('body').css('padding-top', (windowHeight - 220) + 'px'); //set content to sit 200px from bottom to show image
                }
            } else {
                $('body').css('padding-top', '0');
            }
        };
        var setHeader = function() {
            if(window.innerWidth > 450) {
                var windowHeight = window.innerHeight;
                var target = windowHeight - 276;
                if (target > $(window).scrollTop()) {
                    $('body').removeClass('scroll-shift');
                } else {
                    $('body').addClass('scroll-shift');
                }
            }
        };
        return {
            ready:function() {
                if(window.innerWidth > 450) {
                    backgroundImageRandomise();
                    setContentPosition();
                }

                $('a[href*=#]:not([href=#])').click(function() {
                    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                        if (target.length) {
                            $('html,body').animate({
                                scrollTop: target.offset().top
                            }, 1000);
                            return false;
                        }
                    }
                });
            },
            resize:function() {
                setContentPosition();
            },
            scroll:function() {
                setHeader();
            }
        }
    };

    var view = new viewModel();
    view.ready();

    $(window).on('resize', function () {
        view.resize();
    });
    $(window).scroll(function () {
        view.scroll();
    });
});
