'use strict';

import gsap from 'gsap';

$(document).ready(function () {
    if (gsap) {
        gsap.to('.loader-wrapper', 0.5, { autoAlpha: 0,
            delay: 0.5,
            ease:'power2.out' });
    }
});
