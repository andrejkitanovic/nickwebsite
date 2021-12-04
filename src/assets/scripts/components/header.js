'use strict';

import gsap from 'gsap';

if (gsap) {
    const header = $('header');

    if (window.location.pathname.includes('capabilities')) {
        header.addClass('blue');
    }

    const changeState = () => {
        // const isDirectionUp = self.direction === -1;

        // if (isDirectionUp) {
        //     $(header)[0].classList.remove('hidden');
        // } else {
        //     $(header)[0].classList.add('hidden');
        // }
    };

    ScrollTrigger.create({
        start: 'top+=250',
        end: document.innerHeight + 500,
        onUpdate: changeState,
    });

    const hamburgerButton = $('.header__hamburger-button');
    const dropdown = $('.header__dropdown');

    hamburgerButton.on('click', () => {
        $(header).toggleClass('open');
        $(dropdown).toggleClass('open');
    });

    // const links = $(dropdown).find('#menu-main-menu .header__link-holder--has-submenu');
    //
    // $(links).map(function () {
    //     $(this).on('click', (e) => {
    //         if (e.target.parentNode.classList.contains('header__link-holder--has-submenu')) {
    //             e.preventDefault();
    //             $('#menu-main-menu .header__link-holder--has-submenu.open').removeClass('open');
    //             $(this).toggleClass('open');
    //         }
    //     });
    // });

    $('.header__link-holder--has-submenu a span').click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        $('#menu-main-menu .header__link-holder--has-submenu.open').removeClass('open');
        $(this).closest('.header__link-holder--has-submenu').toggleClass('open');
    });
}
