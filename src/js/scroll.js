$(function() {

    var infoHasFired = false;
    var menuButton = $('.js-open-menu');
    var galleryItemList = $('.js-galleryItem');//active
    var galleryStarter = $('.js-start-gallery'); //move-right
    var galleryNavNext = $('.js-galleryNext');
    var galleryNavPrev = $('.js-galleryPrev');

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
        },
        before: function(){
            menuButton.removeClass('white');
            galleryItemList.removeClass('active');
            galleryStarter.removeClass('move-right');
            galleryNavNext.removeClass('active');
            galleryNavPrev.removeClass('active');
        },
        updateHash: false
    });

    // $('.js-scrollNext').click(function() {
    //     $.scrollify.next();
    // });

    $('.js-landing').click(function() {
        $.scrollify.next();
    });


    $( window ).resize(function() {
      if($(window).width() < $(window).height()) {
          $.scrollify.disable();
      } else if($.scrollify.isDisabled()) {
          $.scrollify.enable();
      }
    });
});
