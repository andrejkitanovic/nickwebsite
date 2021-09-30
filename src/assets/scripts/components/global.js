'use strict';

let showSolutions = false;
let solutionsDropdown = $('.header__solutions')[0];

let showModules = false;
let modulesDropdown = $('.header__modules')[0];

const toggleDropdown = (anchor, flag, target) => {
    if (!flag) {
        target.classList.add('expanded');
        // anchor.classList.add('active');
    } else {
        target.classList.remove('expanded');
        // anchor.classList.remove('active');
    }
    return !flag;
};

$(document).ready(function () {
    $('[href]').each(function () {
        if (window.location.href.includes(this.href)) {
            $(this).addClass('active');
        }
    });

    $('a[href="#solution-dropdown"]').click(function (e) {
        e.preventDefault();
        if (showModules) {
            showModules = toggleDropdown($('a[href="#module-dropdown"]')[0], showModules, modulesDropdown);
            setTimeout(() => { showSolutions = toggleDropdown(this, showSolutions, solutionsDropdown); }, 400);
        } else showSolutions = toggleDropdown(this, showSolutions, solutionsDropdown);
    });

    $('a[href="#module-dropdown"]').click(function (e) {
        e.preventDefault();
        if (showSolutions) {
            showSolutions = toggleDropdown($('a[href="#solution-dropdown"]')[0], showSolutions, solutionsDropdown);
            setTimeout(() => { showModules = toggleDropdown(this, showModules, modulesDropdown); }, 400);
        } else showModules = toggleDropdown(this, showModules, modulesDropdown);
    });
});
