/*jslint browser: true*/
/*global $ */

$(function () {
    'use strict';

    // Sticky Navigation
    $('section:first').waypoint(function(direction) {
        if (direction === "down") {
            $('nav').addClass('nav-sticky animate__animated animate__slideInDown');

        }
        else {
            $('nav').removeClass('nav-sticky animate__animated animate__slideInDown');
        }
    }, {
        offset: '60px'
    });

    // Scroll on buttons
    $('.js-scroll-to-plans').click(function() {
        $('html, body').animate({ scrollTop: $(".js-section-plans").offset().top }, 800);
    });

    $('.js-scroll-to-features').click(function() {
        $('html, body').animate({ scrollTop: $(".js-section-features").offset().top }, 800);
    });


    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Animations on Scroll
    $('.js-wp-1').waypoint(function(direction) {
        $('.js-wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });

    $('.js-wp-2').waypoint(function(direction) {
        $('.js-wp-2').addClass('animate__animated animate__fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js-wp-3').waypoint(function(direction) {
        $('.js-wp-3').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });


    $('.js-wp-4').waypoint(function(direction) {
        $('.js-wp-4').addClass('animate__animated animate__pulse');
    }, {
        offset: '50%'
    });

    // Mobile Nav
    $('.js-nav-icon').click(function() {
        var $nav = $('.js-nav-main');
        var $menuIcon = $(".js-nav-icon ion-icon[name*=menu]")
        var $closeIcon = $(".js-nav-icon ion-icon[name*=close]")

        $nav.slideToggle(200);

        if (!$menuIcon.hasClass('js-open')) {
            $menuIcon.css('display', 'none');
            $closeIcon.css('display', 'block');
            $menuIcon.toggleClass('js-open')
        } else {
            $menuIcon.css('display', 'block');
            $closeIcon.css('display', 'none');
            $menuIcon.toggleClass('js-open')
        }

    });
});