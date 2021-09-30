'use strict';
const $ = window.$ || window.jQuery;

$(document).ready(function () {
    var accordionItems = $('section.accordion');

    if (accordionItems.length > 0) {
        var allAccordionTexts = $('section.accordion .accordion__text');
        allAccordionTexts.hide();

        accordionItems.each(function () {
            $(this).find('.accordion__title').click(function () {
                allAccordionTexts.slideUp();
                $(this).next().slideDown();
            });
        });
    }
});
