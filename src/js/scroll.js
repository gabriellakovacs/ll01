$(function() {

    var infoWasViewed = false;
    var menuButton = $('.js-open-menu');
    var galleryItemList = $('.js-galleryItem');
    var galleryStarter = $('.js-start-gallery');
    var galleryNavNext = $('.js-galleryNext');
    var galleryNavPrev = $('.js-galleryPrev');

    $.scrollify({
        section : "section",
        setHeights: false,
        overflowScroll: false,
        scrollbars: false,
        standardScrollElements: ".js-standard-scroll",
        after:function(index, sections) {
            //ontouchscreen the info panel has an animation to show that the images can be slided
            //this should only happen the first time the info section comes to view
            if(!infoWasViewed && index === 1) {
                sections[1].addClass('in-view');
                infoWasViewed = true;
            }
        },
        before: function(){
            menuButton.removeClass('white');
            galleryItemList.removeClass('active');
            galleryStarter.removeClass('move-left');
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
