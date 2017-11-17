var menu = document.querySelector('.js-menu');
var menuOpenButton = document.querySelector('.js-open-menu');
var menuCloseButton = document.querySelector('.js-close-menu');
var menuItemButtonList = document.querySelectorAll('.js-menu-item');
var menuItemButtonListLength = menuItemButtonList.length;
var html = document.querySelector('html');
var body = document.querySelector('body');
var menuCloseDelay = 1000;


function openMenu() {
  menu.classList.add('open');

  // setTimeout(function(){
  //   html.style.overflow = 'hidden';
  //   body.style.overflow = 'hidden';
  // }, 800);
}


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

menuOpenButton.addEventListener(
  'click',
  openMenu
);


menuCloseButton.addEventListener(
  'click',
  closeMenu
);

for (var i = 0; i < menuItemButtonListLength; i++) {
  menuItemButtonList[i].addEventListener(
    'click',
    function(e) {

      var target = $(e.target.getAttribute('href'));

      if( target.length ) {
          e.preventDefault();

          $('html, body').stop().delay( menuCloseDelay ).animate({
              scrollTop: target.offset().top
          }, 1000);
      }

      closeMenu();
    }

  );
}
