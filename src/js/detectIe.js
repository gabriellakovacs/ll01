(function() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
  var trident = ua.indexOf('Trident/');
  var edge = ua.indexOf('Edge/');
  var body = document.querySelector('body');

  if (msie > 0 && trident > 0 && edge > 0) {
    // IE 10 or older => return version number
    body.classList.add('ie');
  }


  if (trident > 0) {
    // IE 11 => return version number
    body.classList.add('ie');
  }


  if (edge > 0) {
    body.classList.add('ie');
  }

  return false;
})();
