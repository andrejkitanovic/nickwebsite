'use strict';

import gsap from 'gsap';
import { matchMedia } from '../helpers/media';

$(document).ready(function () {
    if (gsap) {
        $(function () {
            const reviews = $('.reviews');
            const requestDemo = $('.request-demo');
            const isMobile = matchMedia('sm').matches;

            if (reviews.length > 0) {
                const reviewsImage = $('.reviews__image');
                const review = $('.reviews__review');

                gsap.from(reviewsImage,
                    1, {
                        autoAlpha:0,
                        ease: 'power2',
                        y:40,
                        scrollTrigger: {
                            trigger: reviews,
                            start: 'top center',
                        },
                    });

                gsap.from(review,
                    {
                        autoAlpha:0,
                        ease: 'power2',
                        y:30,
                        stagger: isMobile ? 0 : 0.2,
                        scrollTrigger: {
                            trigger: reviews,
                            start: 'top center+=150',

                        },
                    });
            }

            if (requestDemo.length > 0) {
                const requestDemoItem = $('.request-demo__item');

                gsap.from(requestDemoItem,
                    {
                        delay:0.5,
                        autoAlpha:0,
                        ease: 'power2',
                        y:30,
                        stagger:0.2,
                        // scrollTrigger: {
                        //     trigger: requestDemo,
                        //     start: 'bottom bottom',
                        //     end: 'center top',
                        // },
                    });
            }
        });
    }
});
