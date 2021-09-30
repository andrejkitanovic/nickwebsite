'use strict';

import gsap from 'gsap';

if (gsap) {
    $(function () {
        const imageBlock = $('.image-block');

        if (imageBlock.length > 0) {
            const imageContainer = $('.image-block__image');

            gsap.set(imageContainer, {
                scale: 1,
            });

            gsap
                .to(imageContainer, {
                    ease: 'Power3.easeOut',
                    scrollTrigger: {
                        trigger: '.image-block',
                        start: 'center center',
                        scrub:1,
                    },
                    scale: 1.05,
                }, 0);
        }
    });
}
