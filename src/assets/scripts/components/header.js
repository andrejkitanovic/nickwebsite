'use strict';

import gsap from 'gsap';

if (gsap) {
    $(function () {
        const header = $('header');

        const loseState = () => {
            $(header).map(function () {
                $(this).addClass('hidden');
            });
        };

        ScrollTrigger.create({
            start: 'top top',
            end: document.innerHeight,
            onUpdate: (self) => {
                self.direction === -1
                    ? $(header).removeClass('hidden')
                    : loseState();
            },
        });
    });
}
