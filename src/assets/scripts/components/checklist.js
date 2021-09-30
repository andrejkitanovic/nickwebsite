'use strict';

import gsap from 'gsap';

if (gsap) {
    $(function () {
        const checklist = $('.checklist');
        // let swap = false;

        if (checklist.length > 0) {
            const checlistTexts = $('.checklist__checklist-text');
            const checklistChecks = $('.checklist__checklist-check');
            const checklistItem = $('.checklist__checklist-item');

            let tl = gsap.timeline({});

            tl.from(checklistItem,
                {
                    duration: 0.3,
                    y: 50,
                    autoAlpha: 0,
                    stagger: 0.1,
                    ease: 'power3',
                    scrollTrigger: {
                        trigger: checklist,
                        start: 'top-=40%',
                        end: 'center-=25%',
                        scrub:1,
                    },
                });

            tl.from(checlistTexts,
                {
                    duration: 0.3,
                    x: -20,
                    skewX: -10,
                    autoAlpha: 0,
                    stagger: 0.1,
                    ease: 'power3',
                    scrollTrigger: {
                        trigger: checklist,
                        start: 'top-=40%',
                        end: 'center-=25%',
                        scrub:1,
                    },
                });

            tl.from(checklistChecks,
                {
                    duration: 0.5,
                    autoAlpha: 0,
                    scale:1.8,
                    stagger: 0.1,
                    ease: 'power3',
                    scrollTrigger: {
                        trigger: checklist,
                        start: 'top-=40%',
                        end: 'center-=25%',
                        scrub:1
                    },
                });
        }
    });
}
