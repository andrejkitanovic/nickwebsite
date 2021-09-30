'use strict';

import $ from 'jquery';
import gsap from 'gsap';

$(document).ready(function () {
    let current = 1;
    let categories = $('.box-content-slider__category');
    let indicator = $('.box-content-slider__indicator-slider')[0];
    let mainCategories = $('.box-content-slider__main-category');

    const goToNext = () => {
        if (current < categories.length) {
            changeCategory(current);
        } else changeCategory(0);
    };

    let interval = setInterval(goToNext, 5000);

    const changeCategory = (index, clicked) => {
        index = parseInt(index);
        if (current === index + 1) return;

        if (clicked) clearInterval(interval);

        categories[current - 1].classList.remove('selected');

        const tl = gsap.timeline({});

        tl.to(mainCategories[current - 1], 0.5,
            {
                autoAlpha: 0,
                display: 'none',
                y:-10,
                ease: 'power2'
            });

        current = index + 1;

        tl.to(mainCategories[index], 0, {
            display: 'block',
            autoAlpha: 0,
            y:-30
        });

        tl.to(mainCategories[index], 0.5,
            {
                autoAlpha: 1,
                y:0,
                ease: 'power2'
            });

        indicator.style.transform = `translateX(${(index) * 100}%)`;
        categories[index].classList.add('selected');
    };

    $('.box-content-slider__category').on('click', function () {
        changeCategory($(this).attr('data-index'), true);
    });
});
