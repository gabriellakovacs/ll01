document.addEventListener("DOMContentLoaded", function() {

        var languageSwitchEn = $('.js-language-switch-en');
        var languageSwitchDe = $('.js-language-switch-de');
        //var languageSwitchEn = $('.js-language-switch-en');
        var body = $('body');


        languageSwitchEn.bind( "click", function() {
            body.removeClass('language--de').addClass('language--en');
            closeMenu();
        });


        languageSwitchDe.bind( "click", function() {
            body.removeClass('language--en').addClass('language--de');
            closeMenu();
        });


        function closeMenu() {
          menuCloseButton.classList.add('rotate');

          setTimeout(function(){
            menu.classList.remove('open');
            // html.style.overflow = 'auto';
            // body.style.overflow = 'auto';
          }, 350);

          setTimeout(function(){
            menuCloseButton.classList.remove('rotate');
          }, 1500);

        }

    });
