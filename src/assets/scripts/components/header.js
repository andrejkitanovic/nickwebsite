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

        const linkWithChildren = $(header).find('.has-children');

        $(linkWithChildren).on('click', function (e) {
            e.preventDefault();

            $(this).parent().toggleClass('open');
        });

        $(header).find('.hamburger').on('click', function () {
            closeOpenPopups();

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

        $(header).find('.popup-button-get-in-touch').on('click', function (e) {
            e.preventDefault();
            closeOpenPopups();

            $('.overlay').addClass('open');
            $('.popup-get-in-touch').addClass('open');
        });

        $('.overlay, .popup-close').on('click', function () {
            closeOpenPopups();
        });
    });
}
