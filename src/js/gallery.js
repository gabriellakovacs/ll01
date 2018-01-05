/*
GALLERY

The gallery has 6 types of items: halfLeftLight, halfLeftDark, halfRightLight, halfRightDark, fullLight, fullDark
we need these types to determine whether we should change the cursor and or menu button to black or white
*/
document.addEventListener("DOMContentLoaded", function() {
    var galleryList = document.querySelectorAll('.js-gallery');
    var galleryListLength = galleryList.length;
    var galleryStarter = document.querySelectorAll('.js-start-gallery');
    var menuButton = document.querySelector('.js-open-menu');



    //init all galleries
    for(var i = 0; i < galleryListLength; i++) {
      (function(indexOfGallery) {
        var gallery = galleryList[indexOfGallery];
        var title = galleryStarter[indexOfGallery];

        title.onclick = function() {
            initGallery(gallery, title);
        }
      })(i);

    }


    function initGallery(gallery, title) {

      var galleryNavNext = gallery.querySelector('.js-galleryNext');
      var galleryNavPrev = gallery.querySelector('.js-galleryPrev');
      var galleryNav = gallery.querySelector('.js-galleryNavigation');
      var galleryItemList = gallery.querySelectorAll('.js-galleryItem');
      var galleryItemListLength = galleryItemList.length;
      var currentItemIndex =  -1;
      var currentItem;
      var currentItemType;

      //start gallery with click on title
      title.classList.add('move-left');
      galleryNavNext.classList.add('active');


      //SWIPE NAVIGATION
      var galleryNavSwipe = new Hammer(galleryNav);
      galleryNavSwipe.on('swiperight', function() {
          if(currentItemIndex >= 0) { showPrevItem(); }
      });

      galleryNavSwipe.on('swipeleft', function() {
          if(currentItemIndex <= galleryItemListLength - 2) { showNextItem(); }
      });



      //CLICK NAVIGATION
      galleryNavNext.onclick = showNextItem;
      galleryNavPrev.onclick = showPrevItem;

      function showNextItem() {

          currentItemIndex++;
          currentItem = galleryItemList[currentItemIndex];
          currentItemType = currentItem.dataset.type;
          currentItem.classList.add('active');


          //hide or show the navigation areas based on where we are in the gallery
          if(currentItemIndex === 0) { galleryNavPrev.classList.add('active'); }
          if(currentItemIndex === galleryItemListLength - 1) { galleryNavNext.classList.remove('active'); }


        //check if the cursor and/or the menu open button needs to be white/black because of a dark/light background
        //itemTypeBasedChanges(currentItemType);

      }

      function showPrevItem() {


            currentItem.classList.remove('active');

            currentItemIndex--;

            //hide or show the navigation areas based on where we are in the gallery
            if(currentItemIndex < galleryItemListLength - 1) { galleryNavNext.classList.add('active'); }
            if(currentItemIndex < 0) { galleryNavPrev.classList.remove('active'); }


            if(currentItemIndex >= 0) {
                currentItem = galleryItemList[currentItemIndex];
            //     currentItemType = currentItem.dataset.type; //halfLeftLight, halfLeftDark, halfRightLight, halfRightDark, fullLight, fullDark
            //     previousItmeType = galleryItemList[currentItemIndex - 1] ? galleryItemList[currentItemIndex - 1].dataset.type : 'startFollowedBy' + currentItemType; //if it's the -1 index then we are at the start
            //
            //
            //     //check if the cursor and/or the menu open button needs to be white/black because of a dark/light background
            //     //if the current item is not full we also need to check the previous item
            //     if(currentItemType.indexOf('full') === -1) { itemTypeBasedChanges(previousItmeType); }
            //
            //     itemTypeBasedChanges(currentItemType);
            // } else {
            //     galleryNavNext.classList.remove('white-cursor');
            //     menuButton.classList.remove('white');
            }

      }

      function itemTypeBasedChanges(itemType) {
          switch(itemType) {
              case 'halfLeftLight':
                  galleryNavPrev.classList.remove('white-cursor');
                  break;
              case 'halfLeftDark':
                  galleryNavPrev.classList.add('white-cursor');
                  break;
              case 'halfRightLight':
                  galleryNavNext.classList.remove('white-cursor');
                  menuButton.classList.remove('white');
                  break;
              case 'halfRightDark':
                  galleryNavNext.classList.add('white-cursor');
                  menuButton.classList.add('white');
                  break;
              case 'fullLight':
                  galleryNavNext.classList.remove('white-cursor');
                  galleryNavPrev.classList.remove('white-cursor');
                  menuButton.classList.remove('white');
                  break;
              case 'fullDark':
                  galleryNavNext.classList.add('white-cursor');
                  galleryNavPrev.classList.add('white-cursor');
                  menuButton.classList.add('white');
                  break;
              case 'startFollowedByhalfLeftDark':
                  galleryNavNext.classList.remove('white-cursor');
                  menuButton.classList.remove('white');
                  break;
              case 'startFollowedByhalfLeftLight':
                  galleryNavNext.classList.remove('white-cursor');
                  menuButton.classList.remove('white');
                  break;
              default:
                  false
          }
      }
    }
})
