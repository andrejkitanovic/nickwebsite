'use strict';

$(function () {
    const goUpBtn = $('.footer__go-up');

    if (goUpBtn.length > 0) {
        $(goUpBtn).click(function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
})
;
