'use strict';

import gsap from 'gsap';

if (gsap) {
    $(function () {
        const header = $('header');

        const loseState = () => {
            $(header).map(function () {
                $(this).addClass('hidden');
            });
        };

        ScrollTrigger.create({
            start: 'top top',
            end: document.innerHeight,
            onUpdate: (self) => {
                self.direction === -1
                    ? $(header).removeClass('hidden')
                    : loseState();
            },
        });

        const linkWithChildren = $(header).find('.has-children .header-blue__link');

        $(linkWithChildren).on('click', function (e) {
            e.preventDefault();

            $(this).parent().toggleClass('open');
        });

        $(header).find('.hamburger').on('click', function () {
            $(header).toggleClass('open');
        });

        $(header).find('.header-blue__subscribe').on('click', function (e) {
            e.preventDefault();

            $('.overlay').toggleClass('open');
            $('.popup-subscribe').toggleClass('open');
        });

        $(header).find('.header-blue__get-in-touch').on('click', function (e) {
            e.preventDefault();

            $('.overlay').toggleClass('open');
            $('.popup-get-in-touch').toggleClass('open');
        });

        $('.overlay').on('click', function () {
            $('.open').toggleClass('open');
        });
    });
}
