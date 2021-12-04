'use strict';

import gsap from 'gsap';
import Swiper from 'swiper';
import { matchMedia } from '../helpers/media';

$(document).ready(function () {
    if (gsap) {
        $(function () {
            const table = $('.table');

            const isMobile = matchMedia('sm').matches;

            if (table.length > 0) {
                const headItems = $('.table__head-item');
                const listItem = $('.table__list-item');

                const tl = gsap.timeline({ scrollTrigger: {
                    trigger: table,
                    start: isMobile ? 'top bottom' : 'top center+=100',
                } });

                tl.from(headItems,
                    {
                        autoAlpha:0,
                        ease: 'power2',
                        y:30,
                        stagger: isMobile ? 0 : 0.2,
                    });

                tl.from(listItem,
                    {
                        autoAlpha:0,
                        ease: 'power2',
                        x:15,
                        stagger: isMobile ? 0.05 : 0.08,
                    }, '-=0.3');
            }
        });
    }

    if (Swiper) {
        $(function () {
            // ---- ALL SLIDERS -----
            // const sliderMomentumRatio = 0.455;
            const IsInitialized = (ele) => ele.hasClass('swiper-container-initialized');
            const swiperInstances = {
                tableMobileSlider:      { instance: null, init: false },
            };

            // --------  IMAGE SLIDER --------

            const tableMobileSlider = $('.table__table-slider');

            function setupTableMobileSlider () {
                swiperInstances.tableMobileSlider.instance = new Swiper(tableMobileSlider[0], { // eslint-disable-line
                    slidesPerView: 'auto',
                    freeMode: false,
                    centeredSlides: true,
                    loop: false,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                    },
                    // effect: 'fade',
                    // allowTouchMove: false,
                    // fadeEffect: {
                    //     crossFade: true
                    // },
                });
            }

            if (tableMobileSlider.length > 0) {
                if (!IsInitialized(tableMobileSlider)) {
                    setupTableMobileSlider();
                }
            }

            if (swiperInstances.tableMobileSlider.instance) {
                swiperInstances.tableMobileSlider.instance.on('slideChange', function (e) {
                    const activeIndex = e.activeIndex;

                    const activeElements = document.querySelectorAll(`.table__list-item--active`);

                    const newActiveTexts = document.querySelectorAll(`.table__list-text-${activeIndex}`);

                    for (let i = 0; i < activeElements.length; i++) {
                        activeElements[i].textContent = newActiveTexts[i].textContent;
                    }
                });
            }
        });
    }

    // const activeSlide = document.querySelector('.swiper-slide-active');

    // const key = parseInt(activeSlide.getAttribute('data-index'));

    // const activeBottomSlides = document.querySelectorAll(`.table__list-text-${key}`);

    // activeBottomSlides.forEach(element => {
    //     element.classList.toggle('table__list-item--active');
    // });
});
