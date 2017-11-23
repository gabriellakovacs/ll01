$(function() {
	var infoImgLeft = document.querySelector('.js-info-section--left');

	var infoImgLeftSwipe = new Hammer(infoImgLeft);
	infoImgLeftSwipe.on('swipeleft', function() {
		infoImgLeft.classList.add('move-out');
	});

	infoImgLeftSwipe.on('swiperight', function() {
		infoImgLeft.classList.remove('move-out');
	});


	var infoImgRight = document.querySelector('.js-info-section--right');

	var infoImgRightSwipe = new Hammer(infoImgRight);
	infoImgRightSwipe.on('swiperight', function() {
		infoImgRight.classList.add('move-out');
	});

	infoImgRightSwipe.on('swipeleft', function() {
		infoImgRight.classList.remove('move-out');
	});
})
