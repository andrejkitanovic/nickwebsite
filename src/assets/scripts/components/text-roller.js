'use strict';

import gsap from 'gsap';

$(function () {
    const textRoller = $('.hero__text-roller');
    const textRoll = $('.hero__text-roll');

    const changeText = (text) => {
        const tl = gsap.timeline({});

        tl.to(textRoll, {
            xPercent:-100,
            duration:0.2,
        });

        tl.to(textRoll, {
            text:text,
            duration: 0.1
        });

        tl.to(textRoll, {
            xPercent:0,
            duration:0.2,
        });
    };

    // let isSafari = navigator.vendor.match(/apple/i) &&
    //          !navigator.userAgent.match(/crios/i) &&
    //          !navigator.userAgent.match(/fxios/i) &&
    //          !navigator.userAgent.match(/Opera|OPT\//);

    if (isSafariBrowser()) {
        // Safari browser is used
        document.querySelector('#hero-video-xl').setAttribute('src', 'https://dev-postie.pantheonsite.io/wp-content/uploads/2021/10/postie-anime_2-1.mov');
        document.querySelector('#hero-video-md').setAttribute('src', 'https://dev-postie.pantheonsite.io/wp-content/uploads/2021/10/postie-anime_2-1.mov');
        document.querySelector('#hero-video-sm').setAttribute('src', 'https://dev-postie.pantheonsite.io/wp-content/uploads/2021/10/postie-anime_2-1.mov');
        // $('#hero-video-xl').trigger('play');
        // $('#hero-video-md').trigger('play');
        // $('#hero-video-sm').trigger('play');
    } else {
        // Other browser is used
    }

    let currentSlide = 1;
    function updateText () {
        if (this.currentTime < 1 && currentSlide === 4) {
            currentSlide = 1;
            textRoller.attr('data-roll-selected', currentSlide);
            changeText('Digital Capabilities');
        } else if (this.currentTime > 19 && currentSlide < 4) {
            currentSlide = 4;
            textRoller.attr('data-roll-selected', currentSlide);
            changeText('Real Time KPI\'s');
        } else if (this.currentTime > 12 && currentSlide < 3) {
            currentSlide = 3;
            textRoller.attr('data-roll-selected', currentSlide);
            changeText('Website Retargeting');
        } else if (this.currentTime > 4 && currentSlide < 2) {
            currentSlide = 2;
            textRoller.attr('data-roll-selected', currentSlide);
            changeText('Lookalike Audiences');
        }
    }

    if (textRoller && textRoller.length > 0) {
        $('#hero-video-xl').on('timeupdate', updateText);
        $('#hero-video-md').on('timeupdate', updateText);
        $('#hero-video-sm').on('timeupdate', updateText);
    }
});

var isChrome = navigator.userAgent.indexOf('Chrome') > -1;
var isSafari = navigator.userAgent.indexOf('Safari') > -1;

function isSafariBrowser () {
    if (isSafari) {
        if (isChrome) {
            return false;
        } else {
            return true;
        }
    }
    return false;
}
