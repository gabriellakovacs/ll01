var menu = document.querySelector('.js-menu');
var menuOpenButton = document.querySelector('.js-open-menu');
var menuCloseButton = document.querySelector('.js-close-menu');
var html = document.querySelector('html');
var body = document.querySelector('body');


function openMenu() {
  menu.classList.add('open');
  html.style.overflow = 'hidden';
  body.style.overflow = 'hidden';
}


function closeMenu() {
  menu.classList.remove('open');
  html.style.overflow = 'auto';
  body.style.overflow = 'auto';
}

menuOpenButton.addEventListener(
  'click',
  openMenu
);


menuCloseButton.addEventListener(
  'click',
  closeMenu
);
