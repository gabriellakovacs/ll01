document.addEventListener("DOMContentLoaded", function() {
    var img = $('.hide-while-loading');

    var objImg = new Image();
    objImg.src = img.attr('src');

    objImg.onload = function() {
        setTimeout(function() {
            img.removeClass('hide-while-loading');
        }, 1000);

    }
})
