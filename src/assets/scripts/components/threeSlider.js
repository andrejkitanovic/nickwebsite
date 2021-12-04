'use strict';

import gsap from 'gsap';

$(document).ready(function () {
    if (gsap) {
        $(function () {
            const threeSlider = $('.three-slider');

            const url = new URL(window.location.href);

            const typeSelected = url.searchParams.get('type');

            if (threeSlider.length > 0 && !typeSelected) {
                const threeSliderItem = $('.three-slider__slide');

                gsap.from(threeSliderItem,
                    {
                        delay: 0.7,
                        autoAlpha:0,
                        ease: 'power2',
                        y:30,
                        stagger:0.2,
                    });
            }
        });
    }

    const threeSliderSticky = $('.three-slider.sticky-slider');
    const elementTrigger = $('.capabilities-list');

    if (elementTrigger.length > 0 && threeSliderSticky.length > 0) {
        const changeSlider = (e) => {
            // if (e.progress === 1 && $(header).hasClass('blue')) {
            //     $(header).removeClass('blue');
            // } else if (e.progress !== 1 && !$(header).hasClass('blue')) {
            //     $(header).addClass('blue');
            // }
            if (e.progress > 0 && e.progress < 1) {
                threeSliderSticky.addClass('is-sticky');
            } else {
                threeSliderSticky.removeClass('is-sticky');
            }
        };

        ScrollTrigger.create({
            trigger:elementTrigger,
            start:'top-=120',
            end:'bottom',
            onUpdate: changeSlider
        });
    }
});
