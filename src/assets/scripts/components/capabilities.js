'use strict';

import $ from 'jquery';
import gsap from 'gsap';

let wordpressVariables = window.WP_vars || {};

$(document).ready(function () {
    let threeSlider = document.querySelector('.three-slider');
    let categories = $('.three-slider__slide');
    let stickyCategories = $('.three-slider.sticky-slider .three-slider__slide');
    let indicator1 = $('.three-slider__indicator-mover')[0];
    let indicator2 = $('.three-slider__indicator-mover')[1];
    let mainCategories = $('.capabilities-list__items');
    // let capabilities = document.querySelector('.capabilities-list');
    let found = [...mainCategories].find(elem => elem.classList.contains('capabilities-list__items--active'));
    let selectedType = document.querySelector('.capabilities__type');
    let current = [...mainCategories].indexOf(found) + 1;

    const url = new URL(window.location.href);

    const typeSelected = url.searchParams.get('type');
    const IsInitialized = (ele) => ele.hasClass('swiper-container-initialized');
    const caseStudySlider = $('.case-studies__list');

    if (typeSelected && threeSlider) {
        const tabScroll = document.querySelector('.capabilities-list');
        if (tabScroll) {
            window.scrollTo({
                'behavior': 'smooth',
                'left': 0,
                'top': tabScroll.offsetTop - 80
            });
        }
    }

    const changeCategory = (index) => {
        index = parseInt(index);
        if (current === index + 1) return;

        categories[current - 1].classList.remove('expanded');
        stickyCategories[current - 1].classList.remove('expanded');

        console.log(`Category index ${index}`);

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

        if (index === 0) {
            selectedType.textContent = 'Smart Targeting';
        } else if (index === 1) {
            selectedType.textContent = 'Simple Execution';
        } else {
            selectedType.textContent = 'Strong Measurement';
        }

        indicator1.style.transform = `translateX(${(index) * 100}%)`;
        indicator2.style.transform = `translateX(${(index) * 100}%)`;
        categories[index].classList.add('expanded');
        stickyCategories[index].classList.add('expanded');
    };

    const changeCaseStudySliderHeader = (index) => {
        index = parseInt(index);

        const caseStudies = $('.case-studies');

        if (caseStudies && caseStudies.length > 0) {
            let caseStudyHeaderText = ['Smart Targeting', 'Simple Execution', 'Strong Measurement'];

            $('.case-studies__header').html(caseStudyHeaderText[index] + ' in Action');
        }
    };

    if (url.search !== '') {
        let searchType = url.searchParams.get('type'); // Omit ?type=
        let searchTypeNum = 0;

        switch (searchType) {
        case 'targeting': searchTypeNum = 0; break;
        case 'execution': searchTypeNum = 1; break;
        case 'measurement': searchTypeNum = 2; break;
        }

        changeCaseStudySliderHeader(searchTypeNum);
    } else {
        changeCaseStudySliderHeader(0);
    }

    const changeCaseStudySlider = (index) => {
        changeCaseStudySliderHeader(index);
        fetchCaseStudies(index);
    };

    const resetupCaseStudySwiper = () => {
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
    };

    const fetchCaseStudies = (index) => {
        let caseStudyCat = ['targeting', 'execution', 'measurement'];

        let queryData = {
            action: 'loadcasestudies',
            category: caseStudyCat[index]
        };

        const caseStudies = $('.case-studies');

        if (caseStudies && caseStudies.length > 0) {
            if (IsInitialized(caseStudySlider)) {
                $.ajax({
                    url: wordpressVariables.ajaxurl,
                    data: queryData,
                    type: 'POST',
                    beforeSend: function () {
                        // Set up loading information if needed
                    },
                    success: function (response) {
                        const data = $.parseJSON(response);

                        if (data.posts && data.posts !== '') {
                            window.swiperInstances.caseStudySlider.instance.destroy();
                            $('.case-studies__list .swiper-wrapper').html(data.posts);
                        }

                        resetupCaseStudySwiper();
                    }
                });
            }
        }
    };

    categories.on('click', function () {
        // if ($(this).hasClass('sticky-slide')) {

        // }
        const tabScroll = document.querySelector('.capabilities-list');
        window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': tabScroll.offsetTop - 80
        });
        changeCategory($(this).attr('data-index'));
        changeCaseStudySlider($(this).attr('data-index'));
    });

    const capabilitiesItem = $('.capabilities-list__items--active .capabilities-list__item');
    gsap.from(capabilitiesItem,
        {
            delay: 0.7,
            autoAlpha:0,
            ease: 'power2',
            y:30,
            stagger:0.2,
            scrollTrigger: {
                trigger: mainCategories,
                start: 'top center+=250',
                // end: 'center top',
            },
        });
});
