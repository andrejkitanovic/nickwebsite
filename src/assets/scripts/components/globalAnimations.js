
'use strict';

import gsap from 'gsap';

if (gsap) {
    $(function () {
        const revealBox = $('.reveal-box');

        if (revealBox.length > 0) {
            revealBox.map(function () {
                gsap.to(this,
                    {
                        ease: 'power3',
                        yPercent:100,
                        scrollTrigger: {
                            trigger: this,
                            start: 'top center',
                            end: 'bottom top',
                            scrub:0.5,
                            markers:true
                        },
                    });
            });
        }

        const underlines = $('.underline .line');

        if (underlines.length > 0) {
            underlines.map(function () {
                gsap.from(this,
                    {
                        ease: 'power3',
                        xPercent:-100,
                        scrollTrigger: {
                            trigger: this,
                            // start: 'top center',
                            start: 'top center',
                            end: 'bottom top',
                            scrub:0.5,
                        },
                    });
            });
        }

        const labels = $('.label-left');

        if (labels.length > 0) {
            labels.map(function () {
                gsap.from(this,
                    {
                        ease: 'power3',
                        autoAlpha:0,
                        skewX:-10,
                        x:-15,
                        scrollTrigger: {
                            trigger: this,
                            // start: 'top center',
                            start: 'top center',
                            end: 'bottom top',
                            scrub:0.5,
                        },
                    });
            });
        }

        const titles = $('.title-left');

        if (titles.length > 0) {
            titles.map(function () {
                gsap.from(this,
                    {
                        ease: 'power3',
                        autoAlpha:0,
                        skewX:-3,
                        x:-30,
                        scrollTrigger: {
                            trigger: this,
                            start: 'top center',
                            end: 'bottom top',
                            scrub:0.5,
                        },
                    });
            });
        }

        const texts = $('.text-left');

        if (texts.length > 0) {
            texts.map(function () {
                gsap.from(this,
                    {
                        ease: 'power3',
                        autoAlpha:0,
                        y:20,
                        scrollTrigger: {
                            trigger: this,
                            start: 'top center',
                            scrub:0.5,
                        },
                    });
            });
        }

        const buttons = $('.button');

        if (buttons.length > 0) {
            buttons.map(function () {
                gsap.from(this,
                    {
                        ease: 'power3',
                        autoAlpha:0,
                        x:-50,
                        scrollTrigger: {
                            trigger: this,
                            start: 'top center',
                            scrub:0.5,
                        },
                    });
            });
        }
    });
}
