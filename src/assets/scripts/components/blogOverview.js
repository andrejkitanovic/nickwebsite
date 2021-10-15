'use strict';

$(function () {
    const blogOverview = $('.blog-body__overview');

    if (blogOverview.length > 0) {
        const blogBodyContent = $('.blog-body__content');
        const blogContentH2 = $(blogBodyContent).find('h2');
        // const blogContentH3 = $(blogBodyContent).find('h3');

        const blogBodyOverviewText = $(blogOverview).find('.blog-body__overview-text');

        blogContentH2.map(function () {
            return $(blogBodyOverviewText).append('<p>' + $(this).text() + '</p>');
        });

        $(window).scroll(function () {
            let windscroll = $(window).scrollTop();

            $(blogBodyOverviewText).find('p').each(function (index) {
                let posTop = $(blogContentH2[index]).position().top;

                // let h = $($(this).attr('href')).height();
                if (posTop <= windscroll) {
                //     $('.menu ul li a').removeClass('active');
                    $(blogBodyOverviewText).find('p.active').removeClass('active');
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            });
        });
    }
});
