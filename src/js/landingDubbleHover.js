$(function() {
    var $landingImg = $('.js-landing-img');

    $('.js-scrollNext').mousemove(function (event) {

        if (document.elementFromPoint) {
            var $scrollNext = $(this);

            // hide scrollNext
            $scrollNext.css('visibility', 'hidden');
            // get the element underneath, if any
            var $under = $(document.elementFromPoint(event.clientX, event.clientY));
            // show again scrollNext
            $scrollNext.css('visibility', 'visible');
            $under.hasClass('js-landing-img') ?
               $landingImg.addClass('hover') :
               $landingImg.removeClass('hover');
        }
    }).mouseleave(function () {
        $landingImg.removeClass('hover');
    });
})
