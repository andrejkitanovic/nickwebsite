'use strict';

import gsap from 'gsap';

$(function () {
    const textRoller = $('.hero__text-roller');
    const textRoll = $('.hero__text-roll');
    const videoContainer = $('.hero__video-container');
    const videoContainerImage = $('.hero__video-container .hero__image');

    const allTexts = document.querySelectorAll('.hero__text-hidden');
    const allImages = document.querySelectorAll('.hero__image-hidden');

    const changeText = (index) => {
        const tl = gsap.timeline({});
        const tl2 = gsap.timeline({});
        const text = allTexts[index].textContent;
        const imageNewSrc = allImages[index].getAttribute('src');

        tl.to(textRoll, {
            xPercent:-140,
            duration:0.2,
        });

        tl.to(textRoll, {
            text:text,
            duration: 0.2
        });

        tl.to(textRoll, {
            xPercent:0,
            duration:0.2,
        });

        tl2.to(videoContainer, {
            xPercent:200,
            duration: 0.2,
            opacity: 0
        });

        tl2.to(videoContainerImage, { attr: { src: imageNewSrc } }, {
            duration: 0.2
        });

        tl2.to(videoContainer, {
            xPercent:0,
            duration: 0.2,
            opacity: 1
        });
    };

    let currentSlide = 0;

    function updateText () {
        setInterval(() => {
            if (currentSlide === allTexts.length - 1) {
                currentSlide = 0;
            } else {
                currentSlide++;
            }
            changeText(currentSlide);
        }, 4000);
    }

    if (textRoller && textRoller.length > 0) {
        updateText();
    }
});

