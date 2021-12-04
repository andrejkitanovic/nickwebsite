'use strict';

import gsap from 'gsap';
import { matchMedia } from '../helpers/media';

if (gsap) {
    $(function () {
        const threeBox = $('.three-box');
        const isMobile = matchMedia('sm').matches;

        if (threeBox.length > 0) {
            const box = $('.three-box__box');

            gsap.from(box,
                {
                    autoAlpha:0,
                    ease: 'power2',
                    y:30,
                    stagger:0.2,
                    scrollTrigger: {
                        trigger: threeBox,
                        start: isMobile ? 'top center' : 'center+=100 bottom',
                    },
                });
        }
    });
}
