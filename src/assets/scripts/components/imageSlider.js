'use strict';

import gsap from 'gsap';

if (gsap) {
    $(function () {
        const imageSlider = $('.image-slider');

        if (imageSlider.length > 0) {
            const imageSliderTop = $('.image-slider__top');
            const imageSliderBottom = $('.image-slider__bottom');

            gsap.set(imageSliderTop, {
                xPercent: -20,
            });

            gsap
                .to(imageSliderTop, {
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: '.image-slider',
                        scrub: 0.5,
                    },
                    xPercent: 20,
                }, 0);

            gsap.set(imageSliderBottom, {
                xPercent: 20,
            });

            gsap
                .to(imageSliderBottom, {
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: '.image-slider',
                        scrub: 0.5,
                    },
                    xPercent: -20,
                }, 0);

            let proxy = { skew: 0 };
            let skewSetterTop = gsap.quickSetter(imageSliderTop, 'skewX', 'deg');
            let skewSetterBottom = gsap.quickSetter(imageSliderBottom, 'skewX', 'deg');
            let clamp = gsap.utils.clamp(-20, 20);

            const updateSkew = (skew) => {
                skewSetterTop(-skew);
                skewSetterBottom(skew);
            };

            ScrollTrigger.create({
                onUpdate: (self) => {
                    let skew = clamp(self.getVelocity() / -1000);
                    if (Math.abs(skew) > Math.abs(proxy.skew)) {
                        proxy.skew = skew;
                        gsap.to(proxy, { skew: 0, duration: 2, ease: 'power3', overwrite: true, onUpdate: () => updateSkew(proxy.skew) });
                    }
                }
            });

            gsap.set(imageSliderTop, { transformOrigin: 'left center', force3D: true });
            gsap.set(imageSliderBottom, { transformOrigin: 'right center', force3D: true });
        }
    });
}

