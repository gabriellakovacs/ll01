var infoHasFired = false;

$(function() {
  $.scrollify({
    section : "section",
    setHeights: false,
    overflowScroll: false,
    scrollbars: false,
    after:function(index, sections) {
        if(!infoHasFired && index === 1) {
            sections[1].addClass('in-view');
            infoHasFired = true;
        }
    }
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
