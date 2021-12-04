'use strict';

import gsap from 'gsap';
import { matchMedia } from '../helpers/media';

if (gsap) {
    $(function () {
        const checklist = $('.checklist');
        const isMobile = matchMedia('sm').matches;

        if (checklist.length > 0) {
            const check = $('.checklist__check');
            const image = $('.checklist__image');

            gsap.from(image,
                0.8, {
                    autoAlpha:0,
                    ease: 'power2',
                    scrollTrigger: {
                        trigger: checklist,
                        start: isMobile ? 'top center' : 'center+=100 bottom',
                    },
                });

            gsap.from(check,
                {
                    autoAlpha:0,
                    ease: 'power2',
                    y:30,
                    stagger:0.2,
                    scrollTrigger: {
                        trigger: checklist,
                        start: isMobile ? 'center center' : 'center+=100 bottom',
                    },
                });
        }
    });
}
