'use strict';

import gsap from 'gsap';

if (gsap) {
    $(function () {
        const categorySlider = $('.category-slider');

        if (categorySlider.length > 0) {
            // const categorySlide = $('.category-slider__slide');

            // let tl = gsap.timeline({});

            // tl.from(categorySlide,
            //     {
            //         autoAlpha:0,
            //         ease: 'power2',
            //         y:30,
            //         stagger:0.3,
            //         scrollTrigger: {
            //             trigger: categorySlider,
            //             start: 'top-=50%',
            //             end: 'top-=20%',
            //             scrub:0.5,
            //         },
            //     });
        }
    });
}
