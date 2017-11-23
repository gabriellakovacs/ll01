/*by default the body has a class 'no-touch'
we only remove this if we detect touch movement*/
window.addEventListener('touchstart', function touchDetector() {
  $('body').removeClass('no-touch');
  window.removeEventListener('touchstart', touchDetector);
});

// window.addEventListener('mousemove', function mouseMoveDetector() {
//     $('body').removeClass('is-touch');
//     window.removeEventListener('mousemove', mouseMoveDetector);
// });
