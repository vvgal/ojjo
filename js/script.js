$(document).ready(function() {
    // Tabs
    $('.events__tabs').on('click', 'div:not(.events__tab_active, .events__substrate)', function() {
        let now = $(this),
            idx = $('.events__tabs > li').index(now.parent());
        $('.events__tab').removeClass('events__tab_active');
        $('.events__substrate').removeClass('events__substrate_active');
        now.addClass('events__tab_active').siblings().addClass('events__substrate_active');
        if (idx == 0) {
            $('.events__item').addClass('events__item_active');
        } else if (idx == 1) {
            $('.events__item').removeClass('events__item_active');
            $('#rings, #cufflinks, #watches').addClass('events__item_active');
        } else if (idx == 2) {
            $('.events__item').removeClass('events__item_active');
            $('#rings, #earrings, #pendants, #bracelets, #watches').addClass('events__item_active');
        } else if (idx == 3) {
            $('.events__item').removeClass('events__item_active');
            $('#cufflinks, #watches').addClass('events__item_active');
        } else {
            $('.events__item').addClass('events__item_active');
        }
    });

    // Change favicon
    $.mFancyTitle({
        mftMissYou: false,
        mftMissYouFavicon: {
            'shortcut icon': '../icons/favicon.svg'
        }
    });
});