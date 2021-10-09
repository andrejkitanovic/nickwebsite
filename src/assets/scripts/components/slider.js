'use strict';

import Swiper from 'swiper';
// import gsap from 'gsap';
// import { debounce,mediaQuery } from './utils';

if (Swiper) {
    $(function () {
        // ---- ALL SLIDERS -----
        // const sliderMomentumRatio = 0.455;
        const IsInitialized = (ele) => ele.hasClass('swiper-container-initialized');
        const swiperInstances = {
            useCase:         { instance: null, init: false },
        };

        // const swiperState = (slider, swiperInstance, setup) => {
        //     if (mediaQuery('(max-width: 991px)')) {
        //         if (!swiperInstance.init) {
        //             swiperInstance.init = true;
        //             setup();
        //         }
        //     }
        //     if (mediaQuery('(min-width: 992px)')) {
        //         if (swiperInstance.init) {
        //             swiperInstance.instance.destroy();
        //             swiperInstance.init = false;
        //         }
        //     }
        // };

        // -------- USE CASE SLIDER --------
        const useCaseSlider = $('.use-case__items-slider');

        function setupUseCaseSlider () {
            swiperInstances.category.instance = new Swiper(useCaseSlider[0], { // eslint-disable-line
                slidesPerView: 1,
                spaceBetween:20,
                pagination:{
                    el: '.use-case__items-slider-pagination',
                    type: 'bullets'
                },
                autoplay:{
                    delay: 3000,
                }
            });
        }

        if (useCaseSlider.length > 0) {
            if (!IsInitialized(useCaseSlider)) {
                setupUseCaseSlider();
            }
        }
    });
}
