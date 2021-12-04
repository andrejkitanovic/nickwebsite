'use strict';

import gsap from 'gsap';
import { matchMedia } from '../helpers/media';

const caseButton = $('.case-scroller__scroll-segment');
const caseScroller = document.querySelector('.case-scroller__scroller');

// const firstSegment = document.getElementById('case-scroller--segment-01');
const secondSegment = document.getElementById('case-scroller--segment-02');
const thirdSegment = document.getElementById('case-scroller--segment-03');

const secondSegmentImage = document.getElementById('case-scroller--segment-image-02');
const thirdSegmentImage = document.getElementById('case-scroller--segment-image-03');

const firstSegmentBtn = document.getElementById('case-scroller__scroll-segment-01');
const secondSegmentBtn = document.getElementById('case-scroller__scroll-segment-02');
const thirdSegmentBtn = document.getElementById('case-scroller__scroll-segment-03');

const segmentBars = document.querySelectorAll('.case-scroller__scroll-segment-bar-scrolled');

let height = 2600;

$(document).ready(function () {
    height = (window.innerHeight * 2) - 400;

    if (matchMedia('xxl').matches) {
        // height = 2100;
        height = (window.innerHeight * 2);
    }

    if (matchMedia('xl').matches) {
        // height = 1900;
        height = (window.innerHeight * 2) + 40;
    }

    if (matchMedia('lg').matches) {
        // height = 1700;
        height = (window.innerHeight * 2) + 80;
    }

    if (matchMedia('sm').matches) {
        // height = 2200;
        height = (window.innerHeight * 2) + 100;
    }

    if (gsap) {
        if (caseScroller) {
            const url = new URL(window.location.href);

            const typeSelected = url.searchParams.get('type');

            if (typeSelected) {
                handleNavScroll(typeSelected);
            }

            if (secondSegment && secondSegment.classList.contains('case-scroller__segment--active')) {
                caseScroller.scrollTo({ top: secondSegment.offsetTop - 70, behavior: 'smooth' });
            }

            if (thirdSegment && thirdSegment.classList.contains('case-scroller__segment--active')) {
                caseScroller.scrollTo({ top: thirdSegment.offsetTop - 70, behavior: 'smooth' });
            }

            const handleScroll = (e) => {
                const progress = e.progress;
                const direction = e.direction;

                gsap.to(caseScroller, {
                    scrollTo:{ y: progress * height },
                    ease: 'power1'
                });

                if (progress <= 0.66) {
                    if (progress > 0.1 || direction === 0) {
                        if (matchMedia('sm').matches) {
                            secondSegment.style.opacity = progress * 2.5;
                        } else {
                            secondSegment.style.opacity = progress * 1.66;
                        }
                    }
                    segmentBars[0].style.transform = `scaleY(${progress * 2})`;
                }

                if (progress <= 1) {
                    if (matchMedia('sm').matches) {
                        if (progress > 0.55 || direction === 0) {
                            thirdSegment.style.opacity = progress * 2.86;
                        }
                    } else {
                        if (progress > 0.76 || direction === 0) {
                            thirdSegment.style.opacity = (progress - 0.66) * 2.86;
                        }
                    }
                    segmentBars[1].style.transform = `scaleY(${(progress - 0.66) * 2.86})`;
                }

                if (progress < 0.35) {
                    firstSegmentBtn.classList.add('case-scroller__scroll-segment--active');
                } else {
                    firstSegmentBtn.classList.remove('case-scroller__scroll-segment--active');
                }

                if (progress >= 0.35 && progress < 0.80) {
                    secondSegmentBtn.classList.add('case-scroller__scroll-segment--active');
                } else {
                    secondSegmentBtn.classList.remove('case-scroller__scroll-segment--active');
                }

                if (progress >= 0.80) {
                    thirdSegmentBtn.classList.add('case-scroller__scroll-segment--active');
                } else {
                    thirdSegmentBtn.classList.remove('case-scroller__scroll-segment--active');
                }

                // if (progress >= 0.48) {
                //     secondSegmentBtn.classList.add('case-scroller__scroll-segment--active');
                // } else {
                //     secondSegmentBtn.classList.remove('case-scroller__scroll-segment--active');
                // }
                //
                // if (progress === 1) {
                //     thirdSegmentBtn.classList.add('case-scroller__scroll-segment--active');
                // } else {
                //     thirdSegmentBtn.classList.remove('case-scroller__scroll-segment--active');
                // }

                if (progress >= 0.35) {
                    secondSegmentImage.classList.add('case-scroller__segment-image-holder--active');
                } else {
                    secondSegmentImage.classList.remove('case-scroller__segment-image-holder--active');
                }

                if (progress >= 0.80) {
                    thirdSegmentImage.classList.add('case-scroller__segment-image-holder--active');
                } else {
                    thirdSegmentImage.classList.remove('case-scroller__segment-image-holder--active');
                }
            };

            // const from = $('.case-scroller').offset().top;

            ScrollTrigger.create({
                trigger:'.case-scroller',
                // trigger: '.main',
                // start:`top+=${from}`,
                // end:`top+=${from + height}`,
                start: 'top',
                pin: !matchMedia('sm').matches,
                onUpdate: handleScroll
            });

            if (caseButton) {
                caseButton.click(function () {
                    let segmentId = $(this).attr('data-segment');
                    // let newActive = document.getElementById(
                    //     `case-scroller--segment-${segmentId}`
                    // );
                    // // let rect = newActive.getBoundingClientRect();
                    // let parentTop = caseScroller.getBoundingClientRect().height - 150;

                    // let childTop = newActive.offsetTop - 40;
                    // let sum = parentTop + childTop;

                    // window.scrollTo({ top: sum, behavior: 'smooth' });

                    handleNavScroll(segmentId);
                });
            }
        }
    }

    window.addEventListener('resize', resizeHandler);
});

function resizeHandler () {
    height = (window.innerHeight * 2) - 400;

    if (matchMedia('xxl').matches) height = (window.innerHeight * 2);

    if (matchMedia('xl').matches) height = (window.innerHeight * 2) + 40;

    if (matchMedia('lg').matches) height = (window.innerHeight * 2) + 80;

    if (matchMedia('sm').matches) height = (window.innerHeight * 2) + 100;

    if (gsap) {
        if (caseScroller) {
            ScrollTrigger.refresh();
        }
    }
}

function handleNavScroll (id) {
    const idString = `case-scroller--segment-0${id}`;
    let elem = document.getElementById(idString);
    let parentTop = caseScroller.getBoundingClientRect().height;

    id = parseInt(id);

    if (matchMedia('sm').matches) {
        let sum = ($(window).height() * id) + 90;

        if (id === 2) {
            sum += ($(window).height() / 3) + 60;
        }
        if (id === 3) {
            sum += ($(window).height() / 2) + 160;
        }

        window.scrollTo({ top: sum, behavior: 'smooth' });
    } else {
        let childTop = elem.offsetTop;
        let sum = parentTop + childTop - $(window).height();

        if (id === 1) {
            sum += ($(window).height() / 3 - 180);
        }

        if (id === 2) {
            sum += ($(window).height() / 3 - 480);
        }

        if (id === 3) {
            sum -= ($(window).height() / 3 + 290);
        }

        // if (matchMedia('xxl').matches) {
        //     sum += 115;
        // }

        // if (matchMedia('xl').matches) {
        //     sum += 80;
        // }

        // if (window.innerHeight <= 800 && window.innerHeight >= 700) {
        //     if (id === 2) {
        //         sum -= 30;
        //     } else {
        //         sum += 50;
        //     }
        // }
        //
        // if (matchMedia('xl').matches) {
        //     sum += 70;
        // }

        // if (matchMedia('sm').matches) {
        //     if (id === 1) {
        //         sum -= 50;
        //     }
        //     if (id === 2) {
        //         // sum -= ($(window).width() / 3 + 30);
        //     }
        //     if (id === 3) {
        //         sum -= 90;
        //         // sum -= ($(window).width() / 3 + 180);
        //     }
        // }
        window.scrollTo({ top: sum, behavior: 'smooth' });
    }
}
