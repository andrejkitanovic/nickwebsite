'use strict';

import gsap from 'gsap';

if (gsap) {
    $(function () {
        const header = $('header');

        // const loseState = () => {
        //     $(header).map(function () {
        //         $(this).addClass('hidden');
        //     });
        // };

        // ScrollTrigger.create({
        //     start: 'top top',
        //     end: document.innerHeight,
        //     onUpdate: (self) => {
        //         self.direction === -1
        //             ? $(header).removeClass('hidden')
        //             : loseState();
        //     },
        // });

        const linkWithChildren = $(header).find('.has-children');

        $(linkWithChildren).on('click', function (e) {
            e.preventDefault();

            $(this).parent().toggleClass('open');
        });

        $(header).find('.hamburger').on('click', function () {
            $('.popup-get-in-touch.open').removeClass('open');
            $('.popup-subscribe.open').removeClass('open');

            $(header).toggleClass('open');
        });

        const closeOpenPopups = () => {
            $('.open').removeClass('open');
        };

        $(header).find('.popup-button-subscribe').on('click', function (e) {
            e.preventDefault();
            closeOpenPopups();

            $('.overlay').addClass('open');
            $('.popup-subscribe').addClass('open');
        });
        $('a[href="#subscribe"]').on('click', function (e) {
            e.preventDefault();
            closeOpenPopups();

            $('.overlay').addClass('open');
            $('.popup-subscribe').addClass('open');
        });

        $(header).find('.popup-button-get-in-touch').on('click', function (e) {
            e.preventDefault();
            closeOpenPopups();

            $('.overlay').addClass('open');
            $('.popup-get-in-touch').addClass('open');
        });
        $('a[href="#get-in-touch"]').on('click', function (e) {
            e.preventDefault();
            closeOpenPopups();

            $('.overlay').addClass('open');
            $('.popup-get-in-touch').addClass('open');
        });

        $('.overlay, .popup-close').on('click', function () {
            closeOpenPopups();
        });

        const blogQuoteImage = $('.blog-quote__image');
        const popupBlogVideo = $('.popup-blog-video');
        if (blogQuoteImage.length && popupBlogVideo.length) {
            $('.blog-quote').addClass('hoverable');
            $(popupBlogVideo).find('.popup-blog-video__header').html($('.blog-quote__header').html());
            $(popupBlogVideo).find('.popup-blog-video__author').html($('.blog-quote__author').html());

            $(blogQuoteImage).on('click', function (e) {
                e.preventDefault();
                closeOpenPopups();

                $('.overlay').addClass('open');
                $(popupBlogVideo).addClass('open');
            });
        }

        // window.on('load', function () {
        // });
        // if (window.location.href.includes('#get-in-touch')) {
        //     $('.overlay').addClass('open');
        //     $('.popup-get-in-touch').addClass('open');
        // } else if (window.location.href.includes('#subscribe')) {
        //     $('.overlay').addClass('open');
        //     $('.popup-subscribe').addClass('open');
        // }
    });
}
