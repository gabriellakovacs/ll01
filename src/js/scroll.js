$(function() {
  $.scrollify({
    section : "section",
    setHeights: false,
    overflowScroll: false,
    scrollbars: false
  });
});


$('.js-scrollNext').click(function() {
    $.scrollify.next();
});
