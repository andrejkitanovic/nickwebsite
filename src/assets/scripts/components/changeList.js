'use strict';

import $ from 'jquery';
import gsap from 'gsap';

$(document).ready(function () {
    let current = 1;
    let items = $('.changing-list__list-item');
    let images = $('.changing-list__list-image');

    const goToNext = () => {
        if (current < items.length) {
            changeCategory(current);
        } else changeCategory(0);
    };

    let interval = setInterval(goToNext, 3000);

    const changeCategory = (index, clicked) => {
        index = parseInt(index);
        if (current === index + 1) return;

        if (clicked) clearInterval(interval);

        items[current - 1].classList.remove('selected');

        const tl = gsap.timeline({});

        tl.to(images[current - 1], 0.5,
            {
                autoAlpha: 0,
                display: 'none',
                x:60,
                ease: 'power2'
            });

        current = index + 1;

        tl.to(images[index], 0, {
            display: 'block',
            autoAlpha: 0,
            x:100
        });

        tl.to(images[index], 0.5,
            {
                autoAlpha: 1,
                x:0,
                ease: 'power2'
            });

        items[index].classList.add('selected');
    };

    $('.changing-list__list-item').on('click', function () {
        changeCategory($(this).attr('data-index'), true);
    });
});
