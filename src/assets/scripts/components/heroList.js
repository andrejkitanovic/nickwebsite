'use strict';

import gsap from 'gsap';

$(document).ready(function () {
    if (gsap) {
        $(function () {
            const header = $('.header');
            const heroList = $('.hero-list');
            const heroListBlue = $('.hero-list.blue');

            if (heroList.length > 0) {
                const heroListImage = $('.hero-list__image');
                const heroListItem = $('.hero-list__item');

                const tl = gsap.timeline({});

                tl.from(heroListImage, {
                    delay: 0.7,
                    autoAlpha: 0,
                    ease: 'power2',
                    x: 100,
                    // scrollTrigger: {
                    //     trigger: reviews,
                    //     start: 'bottom bottom',
                    //     end: 'center top',
                    // },
                });

                tl.from(heroListItem,
                    {
                        autoAlpha:0,
                        ease: 'power2',
                        y:30,
                        stagger:0.2,
                        // scrollTrigger: {
                        //     trigger: reviews,
                        //     start: 'bottom bottom',
                        //     end: 'center top',
                        // },
                    }, '-=0.2');
            }

            if (heroListBlue.length > 0) {
                const changeHeader = (e) => {
                    if (e.progress === 1 && $(header).hasClass('blue')) {
                        $(header).removeClass('blue');
                    } else if (e.progress !== 1 && !$(header).hasClass('blue')) {
                        $(header).addClass('blue');
                    }
                };
                ScrollTrigger.create({
                    trigger:heroListBlue,
                    start:'bottom-=50',
                    end:'bottom',
                    onUpdate: changeHeader
                });
            }
        });
    }
});
