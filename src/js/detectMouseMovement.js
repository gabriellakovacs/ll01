/*by defaultthe body has a class 'is-touch'
we only remove this if we detect mouse movement*/
window.addEventListener('mousemove', function mouseMoveDetector() {
    $('body').removeClass('is-touch');
    window.removeEventListener('mousemove', mouseMoveDetector);
});
