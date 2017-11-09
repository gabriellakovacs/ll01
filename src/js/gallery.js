var galleryList = document.querySelectorAll('.js-gallery');
var galleryListLength = galleryList.length;
var gallerySarter = document.querySelectorAll('.js-start-gallery');
var menuButton = document.querySelector('.js-open-menu');

//init all galleries
for(var i = 0; i < galleryListLength; i++) {


  (function(j) {
    var gallery = galleryList[j];
    var title = gallerySarter[j];

    title.onclick = function() {
      initGallery(gallery, title);
    }
  })(i);


}


function initGallery(gallery, title) {
  console.log('init gallery');
  console.log('gallery' + gallery);
  console.log('init gallery' + title);

  var galleryNavigation = gallery.querySelector('.js-galleryNavigation');
  var galleryNavNext = gallery.querySelector('.js-galleryNext');
  var galleryNavPrev = gallery.querySelector('.js-galleryPrev');
  var galleryItemList = gallery.querySelectorAll('.js-galleryItem');
  var galleryItemListLength = galleryItemList.length;
  var currentItemIndex = -1;
  var currentItem;
  var istHalfItem = false;
  var isRightItem = false

  //TODO: start gallery with click on title
  title.classList.add('move-right');
  galleryNavigation.classList.add('active');



  //touchscreen navigation


  galleryNavNext.addEventListener(
    'click',
    showNextItem
  );


  galleryNavPrev.addEventListener(
    'click',
    showPrevItem
  );

  function showNextItem() {
    console.log('show next');
    currentItemIndex++;
    currentItemIndex === galleryItemListLength ? currentItemIndex = 0 : true;

    console.log('currentItemIndex ' + currentItemIndex);

    currentItem = galleryItemList[currentItemIndex];

    istHalfItem = currentItem.classList.contains('gallery-item--half');

    //check if the cursor and/or the menu open button needs to be white because of a dark background
    if(currentItem.classList.contains('js-dark-background')) {
      if(istHalfItem && isRightItem) {
          galleryNavNext.classList.add('white-cursor');
          menuButton.classList.add('white');
      } else if(istHalfItem && !(isRightItem)) {
        galleryNavPrev.classList.add('white-cursor');
      } else {
        galleryNavNext.classList.add('white-cursor');
        galleryNavPrev.classList.add('white-cursor');
        menuButton.classList.add('white');
      }
      //check if the white cursor should be changes back to black
    } else {
      if(istHalfItem && isRightItem) {
          galleryNavNext.classList.remove('white-cursor');
          menuButton.classList.remove('white');
      } else if(istHalfItem && !(isRightItem)) {
        galleryNavPrev.classList.remove('white-cursor');
      } else {
        galleryNavNext.classList.remove('white-cursor');
        galleryNavPrev.classList.remove('white-cursor');
        menuButton.classList.remove('white');
      }
    }

    //check if it's half image where we should position it
    if(istHalfItem && !(isRightItem)) {
      currentItem.classList.add('activeLeft');
      isRightItem = true;
    } else {
      currentItem.classList.add('active');
      isRightItem = false;
    }
  }

  function showPrevItem() {
    console.log('show prev');
    currentItemIndex--;

    currentItemIndex < 0 ? currentItemIndex = galleryItemListLength - 1 : true;

    console.log('currentItemIndex ' + currentItemIndex);

    currentItem = galleryItemList[currentItemIndex];

    currentItem.classList.remove('activeLeft');
    currentItem.classList.remove('active');

  }

}
