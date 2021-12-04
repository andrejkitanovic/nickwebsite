'use strict';

const item = $('.capabilities-list__item');

const closeBtn = $('.capabilities-slider__close-btn');

const navPrev = $('.capabilities-slider__nav-left');
const navNext = $('.capabilities-slider__nav-right');

const sliderWrapper = $('.capabilities-slider__wrapper');

$(function () {
    $(item).on('click', function () {
        const dataIndex = $(this).attr('data-index');
        const type = $(this).attr('data-type');

        $(`.capabilities-slider.slider-${type}`).addClass('visible');

        const newActive = $(`#slide-${type}-${dataIndex}`);

        newActive.addClass('active');
    });

    $(closeBtn).on('click', function () {
        $('.capabilities-slider').removeClass('visible');
        $('.capabilities-slider__item.active').removeClass('active');
    });

    $(navPrev).on('click', function () {
        const currentActive = $('.capabilities-slider__item.active');
        const type = $(currentActive).attr('data-type');
        const index = parseInt($(currentActive).attr('data-index'));

        const newActive = $(`#slide-${type}-${index - 1}`);

        if (newActive.length > 0) {
            $(currentActive).removeClass('active');

            newActive.addClass('active');
        }
    });

    $(navNext).on('click', function () {
        const currentActive = $('.capabilities-slider__item.active');
        const type = $(currentActive).attr('data-type');
        const index = parseInt($(currentActive).attr('data-index'));

        const newActive = $(`#slide-${type}-${index + 1}`);

        if (newActive.length > 0) {
            $(currentActive).removeClass('active');

            newActive.addClass('active');
        }
    });

    $(sliderWrapper).on('click', function () {
        $('.capabilities-slider').removeClass('visible');
        $('.capabilities-slider__item.active').removeClass('active');
    });

    $('.capabilities-slider__item').on('click', function (e) {
        e.stopPropagation();
    });
})
;
