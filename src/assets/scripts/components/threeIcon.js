'use strict';

import gsap from 'gsap';

$(document).ready(function () {
    if (gsap) {
        $(function () {
            const threeIcon = $('.three-icon');

            if (threeIcon.length > 0) {
                const threeIconItem = $('.three-icon__box');

                gsap.from(threeIconItem,
                    {
                        delay: 0.7,
                        autoAlpha:0,
                        ease: 'power2',
                        y:30,
                        stagger:0.2,
                        scrollTrigger: {
                            trigger: threeIcon,
                            start: 'top center',
                        },
                    });
            }
        });
    }
});
