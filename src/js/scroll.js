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


$( window ).resize(function() {
  if($(window).width() < $(window).height()) {
      $.scrollify.disable();
  } else if($.scrollify.isDisabled()) {
      $.scrollify.enable();
  }
});
