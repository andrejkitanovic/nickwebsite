'use strict';

import gsap from 'gsap';

$(document).ready(function () {
    if (gsap) {
        $(function () {
            const textCategories = $('.text-categories');

            if (textCategories.length > 0) {
                const title = $('.text-categories__title');
                const categories = $('.text-categories__item');

                const tl = gsap.timeline({ scrollTrigger: {
                    trigger: textCategories,
                    start: 'top bottom-=300'
                } });

                tl.from(title, {
                    autoAlpha: 0,
                    ease: 'power2',
                    x: -50,

                });

                tl.from(categories,
                    {
                        autoAlpha:0,
                        ease: 'power2',
                        y:30,
                        stagger:0.2,
                    }, '-=0.2');
            }
        });
    }
});
