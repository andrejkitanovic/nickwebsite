'use strict';

import Swiper from 'swiper';

if (Swiper) {
    $(function () {
        // ---- ALL SLIDERS -----
        const sliderMomentumRatio = 0.455;
        const IsInitialized = (ele) => ele.hasClass('swiper-container-initialized');
        window.swiperInstances = {
            imageSlider:     { instance: null, init: false },
            caseStudySlider: { instance: null, init: false }
        };

        // --------  IMAGE SLIDER --------

        const imageSlider = $('.image-line__slider');

        function setupImageSlider () {
            window.swiperInstances.imageSlider.instance = new Swiper(imageSlider[0], { // eslint-disable-line
                slidesPerView: 3,
                freeMode: true,
                freeModeMomentumRatio: sliderMomentumRatio,
                loop: true,
                speed: 1600,
                autoplay:{
                    delay:600,
                    disableOnInteraction:false
                },
                breakpoints: {
                    // when window width is >= 580px
                    580:{
                        slidesPerView: 6,
                    },
                    899: {
                        slidesPerView: 9,
                    },
                }
            });
        }

        if (imageSlider.length > 0) {
            if (!IsInitialized(imageSlider)) {
                setupImageSlider();
            }
        }

        // --------  CASE STUDY SLIDER --------

        const caseStudySlider = $('.case-studies__list');

        function setupCaseStudySlider () {
            window.swiperInstances.caseStudySlider.instance = new Swiper(caseStudySlider[0], { // eslint-disable-line
                slidesPerView: 1,
                freeMode: false,
                centeredSlides: true,
                loop: true,
                effect: 'fade',
                allowTouchMove: false,
                fadeEffect: {
                    crossFade: true
                },
            });
        }

        if (caseStudySlider.length > 0) {
            if (!IsInitialized(caseStudySlider)) {
                setupCaseStudySlider();
            }
        }

        const nextBtn = $('.case-studies__nav-button--next');
        const prevBtn = $('.case-studies__nav-button--prev');

        nextBtn.click(function (e) {
            e.preventDefault();
            window.swiperInstances.caseStudySlider.instance.slideNext();
        });

        prevBtn.click(function (e) {
            e.preventDefault();
            window.swiperInstances.caseStudySlider.instance.slidePrev();
        });
    });
}
