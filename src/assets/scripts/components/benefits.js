'use strict';

import gsap from 'gsap';

if (gsap) {
    $(function () {
        const benefits = $('.benefits');

        if (benefits.length > 0) {
            const benefitsIcons = $('.benefits__benefit-icon');
            const benefitsTitles = $('.benefits__benefit-title');
            const benefitsText = $('.benefits__benefit-text');
            const benefitsImage = $('.benefits__image');

            let tl = gsap.timeline({});

            tl.from(benefitsIcons,
                {
                    autoAlpha:0,
                    ease: 'power3',
                    y:-20,
                    stagger:0.3,
                    scrollTrigger: {
                        trigger: benefits,
                        start: 'top-=5%',
                        end: 'center-=5%',
                        scrub:1,
                    },
                });

            tl.from(benefitsTitles,
                {
                    autoAlpha:0,
                    ease: 'power3',
                    stagger:0.3,
                    x:-5,
                    skewX:-5,
                    scrollTrigger: {
                        trigger: benefits,
                        start: 'top-=5%',
                        end: 'center-=5%',
                        scrub:1,
                    },
                });

            tl.from(benefitsText,
                {
                    autoAlpha:0,
                    ease: 'power3',
                    stagger:0.3,
                    x:-30,
                    scrollTrigger: {
                        trigger: benefits,
                        start: 'top-=5%',
                        end: 'center-=5%',
                        scrub:1,
                    },
                });

            tl.from(benefitsImage,
                {
                    autoAlpha:0,
                    ease: 'power3',
                    y:120,
                    scrollTrigger: {
                        trigger: benefits,
                        start: 'top',
                        end: 'center-=5%',
                        scrub:1,
                    },
                });
        }
    });
}
