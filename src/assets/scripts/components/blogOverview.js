'use strict';

$(function () {
    const blogOverview = $('.blog-body__overview');

    if (blogOverview.length > 0) {
        const blogBodyContent = $('.blog-body__content');
        const blogContentH2 = $(blogBodyContent).find('h2');
        const blogContentH3 = $(blogBodyContent).find('h3');

        const blogBodyOverviewText = $(blogOverview).find('.blog-body__overview-text');

        blogContentH2.map(function () {
            return $(blogBodyOverviewText).append('<p><b>' + $(this).text() + '</b></p>');
        });

        blogContentH3.map(function () {
            return $(blogBodyOverviewText).append('<p>' + $(this).text() + '</p>');
        });
    }
});
