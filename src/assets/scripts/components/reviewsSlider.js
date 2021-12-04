'use strict';

import Swiper from 'swiper';

if (Swiper) {
    $(function () {
        // ---- ALL SLIDERS -----
        const IsInitialized = (ele) => ele.hasClass('swiper-container-initialized');
        const swiperInstances = {
            reviewsSlider:      { instance: null, init: false },
            reviewsSliderMobile: { instance: null, init: false },
        };

        // --------  IMAGE SLIDER --------

        const reviewsSlider = $('.reviews__reviews');
        const reviewsSliderMobile = $('.reviews__reviews-mobile');

        function setupReviewsSlider () {
            swiperInstances.reviewsSlider.instance = new Swiper(reviewsSlider[0], { // eslint-disable-line
                slidesPerView: 1,
                freeMode: false,
                centeredSlides: true,
                loop: true,
                // effect: 'fade',
                // allowTouchMove: false,
                // fadeEffect: {
                //     crossFade: true
                // },
            });
        }

        function setupReviewsSliderMobile () {
            swiperInstances.reviewsSliderMobile.instance = new Swiper(reviewsSliderMobile[0], { // eslint-disable-line
                slidesPerView: 1,
                freeMode: false,
                centeredSlides: true,
                loop: true,
                // effect: 'fade',
                // allowTouchMove: false,
                // fadeEffect: {
                //     crossFade: true
                // },
            });
        }

        if (reviewsSlider.length > 0) {
            if (!IsInitialized(reviewsSlider)) {
                setupReviewsSlider();
            }
        }

        if (reviewsSliderMobile.length > 0) {
            if (!IsInitialized(reviewsSliderMobile)) {
                setupReviewsSliderMobile();
            }
        }

        const nextBtn = $('.reviews__nav-button--next');
        const prevBtn = $('.reviews__nav-button--prev');

        nextBtn.click(function (e) {
            e.preventDefault();
            swiperInstances.reviewsSlider.instance.slideNext();
        });

        prevBtn.click(function (e) {
            e.preventDefault();
            swiperInstances.reviewsSlider.instance.slidePrev();
        });

        const nextBtnMobile = $('.reviews__nav-button-mobile--next');
        const prevBtnMobile = $('.reviews__nav-button-mobile--prev');

        nextBtnMobile.click(function (e) {
            e.preventDefault();
            swiperInstances.reviewsSliderMobile.instance.slideNext();
        });

        prevBtnMobile.click(function (e) {
            e.preventDefault();
            swiperInstances.reviewsSliderMobile.instance.slidePrev();
        });
    });
}
