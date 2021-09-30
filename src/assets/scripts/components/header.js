'use strict';

import gsap from 'gsap';

if (gsap) {
    $(function () {
        const header = $('.header .header-blue');

        console.log(header);

        const loseState = () => {
            $(header).map(function () {
                $(this).classList.add('hide-top');
            });
        };

        ScrollTrigger.create({
            start: 'top top',
            end: document.innerHeight,
            onUpdate: (self) => {
                self.direction === -1
                    ? $(header)[0].classList.remove('hide-top')
                    : loseState();
            },
        });
    });
}
