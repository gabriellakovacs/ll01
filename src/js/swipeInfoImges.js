var infoImgLeft = document.querySelector('.js-info-section--left .js-info-img');

var infoImgLeftSwipe = new Hammer(infoImgLeft);
infoImgLeftSwipe.on('swipe', function() {
	infoImgLeft.addClass('move-out');
});


var infoImgRight = document.querySelector('.js-info-section--right .js-info-img');

var infoImgRightSwipe = new Hammer(infoImgRight);
infoImgLeftSwipe.on('swipe', function() {
	infoImgLeft.addClass('move-out');
});
