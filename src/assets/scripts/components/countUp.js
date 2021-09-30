'use strict';

import gsap from 'gsap';

if (gsap) {
    $(function () {
        const countUp = $('.count-up');

        if (countUp.length > 0) {
            const duration = 4;

            const numbersCount = gsap.utils.toArray('.count-up__box-item-number');

            numbersCount.forEach(number => {
                const finalResult = number.getAttribute('data-number');
                const IsInteger = finalResult % 1 === 0;
                let countObj = { count: 0 };

                gsap.to(countObj, duration, {
                    scrollTrigger: {
                        trigger: number,
                        toggleActions: 'play none none none',
                        start: 'top bottom',
                        end: 'bottom top'
                    },
                    count: finalResult,
                    ease: 'Power3.easeInOut',
                    onUpdate: () => {
                        number.textContent = (IsInteger) ? Math.floor(countObj.count) : Math.floor(countObj.count * 100) / 100;
                    }
                });
            });
        }

        const country = $('.country');

        if (country.length > 0) {
            const duration = 2;

            const numbersCountry = gsap.utils.toArray('.country__country-number');

            numbersCountry.forEach(number => {
                const finalResult = number.getAttribute('data-number');
                const IsInteger = finalResult % 1 === 0;
                let countObj = { count: 0 };

                gsap.to(countObj, duration, {
                    scrollTrigger: {
                        trigger: number,
                        toggleActions: 'play none none none',
                        start: 'top bottom',
                        end: 'bottom top'
                    },
                    count: finalResult,
                    ease: 'Power3.easeInOut',
                    onUpdate: () => {
                        number.textContent = (IsInteger) ? Math.floor(countObj.count) : Math.floor(countObj.count * 100) / 100;
                    }
                });
            });
        }
    });
}
