'use strict';

import gsap from 'gsap';
import { matchMedia } from '../helpers/media';

if (gsap) {
    $(function () {
        const expandList = $('.expand-list');
        const isMobile = matchMedia('sm').matches;

        if (expandList.length > 0) {
            let current = 1;

            const items = $('.expand-list__item');
            const image = $('.expand-list__image');

            const changeCategory = (index) => {
                index = parseInt(index);

                if (current === index + 1) return;

                // if (clicked) clearInterval(interval);

                items[current - 1].classList.remove('expand-list__item--expanded');
                image[current - 1].classList.remove('expand-list__image--expanded');
                // gsap.to(items[current - 1], 0.8, { ease: 'power2', height: '' });

                current = index + 1;
                items[index].classList.add('expand-list__item--expanded');
                image[current - 1].classList.add('expand-list__image--expanded');
                // gsap.to(items[index], 0.8, { ease: 'power2', height: 289 });
            };

            // const goToNext = () => {
            //     if (current < items.length) {
            //         changeCategory(current);
            //     } else changeCategory(0);
            // };

            // let interval = setInterval(goToNext, 3000);

            gsap.from(image,
                0.8, {
                    autoAlpha:0,
                    ease: 'power2',
                    scrollTrigger: {
                        trigger: expandList,
                        start: isMobile ? 'top center' : 'center+=100 bottom',
                    },
                });

            gsap.from(items,
                {
                    autoAlpha:0,
                    ease: 'power2',
                    y:30,
                    stagger:0.2,
                    scrollTrigger: {
                        trigger: expandList,
                        start: isMobile ? 'top center' : 'center+=100 bottom',
                    },
                });

            $(this).find('.expand-list__item').on('click', function () {
                changeCategory($(this).attr('data-index'), true);
            });
        }
    });
}

