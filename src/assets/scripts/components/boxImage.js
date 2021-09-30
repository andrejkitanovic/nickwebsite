'use strict';

import gsap from 'gsap';

if (gsap) {
    $(function () {
        const boxImage = $('.box-image');

        if (boxImage.length > 0) {
            const boxItem = $('.box-image__box-item');

            let tl = gsap.timeline({});

            tl.from(boxItem,
                {
                    autoAlpha:0,
                    ease: 'power2',
                    y:30,
                    stagger:0.3,
                    scrollTrigger: {
                        trigger: boxItem,
                        start: 'top 50%+=300',
                        end: '+=1000',
                        scrub:0.5,
                    },
                });
        }
    });
}
