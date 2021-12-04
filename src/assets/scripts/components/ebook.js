'use strict';

const ebookUrl = document.querySelector('.url-holder');
const ebookBtn = $('.e-book__mobile-button');
const ebookPopup = $('.e-book-popup');
const ebookInputs = document.querySelectorAll('.e-book__form input[type=hidden]');
const ebookInputsPopup = document.querySelectorAll('.e-book-popup__form input[type=hidden]');
const title = document.querySelector('.e-book__header');

$(function () {
    const url = ebookUrl ? ebookUrl.getAttribute('data-url') : '';

    if (ebookBtn.length > 0) {
        ebookBtn.click(function (e) {
            e.stopPropagation();
            $(ebookPopup).addClass('visible');
        });
    }

    if (ebookPopup.length > 0) {
        ebookPopup.click(function () {
            $(ebookPopup).removeClass('visible');
        });
    }

    if (ebookInputs[0]) {
        ebookInputs[0].setAttribute('value', title ? title.textContent : '');
    }

    if (ebookInputs[1]) {
        ebookInputs[1].setAttribute('value', url);
    }

    if (ebookInputsPopup[0]) {
        ebookInputsPopup[0].setAttribute('value', title ? title.textContent : '');
    }

    if (ebookInputsPopup[1]) {
        ebookInputsPopup[1].setAttribute('value', url);
    }
});

// const downloads = $('.downloads__item-content');

// if (downloads.length > 0) {
//     for (let i = 0; i < downloads.length; i++) {
//         const title = $(downloads[i]).find('.downloads__item-title').text();
//         const url = downloads[i].getAttribute('data-url');

//         const inputsHidden = downloads[i].querySelectorAll('.downloads__item-content input[type=hidden]');
//         inputsHidden[0].setAttribute('value', title);
//         inputsHidden[1].setAttribute('value', url);
//     }
// }
