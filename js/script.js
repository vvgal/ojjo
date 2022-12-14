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

    // Tabs mobile
    $('.events__tabs_mobile').on('click', 'div:not(.events__tab_active, .events__substrate)', function() {
        let now = $(this),
            idx = $('.events__tabs_mobile > li').index(now.parent());
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
    // $.iMissYou({
    //     title: "OJJO",
    //     favicon: {
    //         enabled: true,
    //         src:'icons/favicon.svg'
    //     }
    // });

    $.mFancyTitle({
        mftMissYou: false,
        mftMissYouFavicon: {
            // 'apple-touch-icon-precomposed': 'path-to/apple-touch-icon-152x152.png',
            'shortcut icon': 'icons/black-favicon.svg'
        }
    });

    // Burger menu
    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.mobile-menu'),
        menuItem = document.querySelectorAll('.mobile-menu__link, .mobile-menu__account, .mobile-menu__social'),
        hamburger = document.querySelector('.promo__burger');
        cross = document.querySelector('.mobile-menu__cross');
    
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('mobile-menu_active');
        });

        cross.addEventListener('click', () => {
            menu.classList.toggle('mobile-menu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                menu.classList.toggle('mobile-menu_active');
            });
        });
    });

    // Validate form
    $('form').validate({
        rules: {
            email: {
            required: true,
            email: true
            }
        },
        messages: {
            email: {
            required: "Пожалуйста, введите e-mail",
            email: "Введите корректный e-mail"
            }
        }
    });

    // Mailer
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('form').trigger('reset');
        });
        return false;
    })
    
    // Modal
    $('.mailing__button').on('click', function() {
        if ($('input[name="email"]').hasClass('valid')) {
            $('.overlay, .modal').fadeIn('fast');
        } 
    });
    $('.modal__exit').on('click', function() {
        $('.overlay, .modal').fadeOut('fast');
    });

    // Scroll page up
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1400) {
          $('.pageup').fadeIn();
        } else {
          $('.pageup').fadeOut();
        }
    });
  
    $("a[href=#up]").click(function() {
    let _href = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(_href).offset().top+"px"
    });
    return false;
    });
});