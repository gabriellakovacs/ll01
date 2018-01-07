document.addEventListener("DOMContentLoaded", function() {

    //BREAKPOINT MAX WIDTHS
    var bp_s = 400;
    var bp_m = 800;
    var bp_l = 1500;
    var bp_xl = 3000;
    var bp_xxl = 5000;

    var bpList = [bp_s, bp_m, bp_l, bp_xl, bp_xxl];
    var bpListLength = bpList.length;

    var window_w = window.innerWidth;
    var currentBpIndex = 0;
    var firstIteration = true;

    var priorityImgList = document.querySelectorAll('.js-img-priority');
    var secondaryImgList = document.querySelectorAll('.js-img-secondary');


    checkIfBreakpointHasChanged();

    function loadImages(imgList) {

        var listLength = imgList.length;
        for(var i = 0; i < listLength; i++) {
            setImgBackground(imgList[i]);
        }
    }

    function loadSecondaryImages() {
        loadImages(secondaryImgList);
    }

    function setImgBackground(img) {

        var background;

        switch (currentBpIndex) {
            case 0:
                //BP_S
                background = img.dataset.bkcgrndS;
                break;
            case 1:
                //BP_M
                background = img.dataset.bkcgrndM;
                break;
            case 2:
                //BP_L
                background = img.dataset.bkcgrndL;
                break;
            case 3:
                //BP_XL
                background = img.dataset.bkcgrndXl;
                break;
            case 4:
                //BP_XXL
                background = img.dataset.bkcgrndXxl;
                break;
            case 5:
                //BP_XXXL
                background = img.dataset.bkcgrndXxxl;
                break;
            default:
                break;
        }

        img.style.backgroundImage = "url(" + background + ")";
    }

    function checkIfBreakpointHasChanged() {

        if(window_w > bpList[currentBpIndex]) {

            if(currentBpIndex === bpListLength - 1) {
                window.removeEventListener('resize', handleResize);

                currentBpIndex = bpListLength;
                
                //resize all images
                loadImages(priorityImgList);
                setTimeout(loadSecondaryImages, 6000);
            } else {
                for(var i = currentBpIndex + 1; i < bpListLength; i++) {
                   if(window_w <= bpList[i]) {
                       currentBpIndex = i;

                       //resize all images!!!!!!!!!
                       loadImages(priorityImgList);
                       setTimeout(loadSecondaryImages, 6000);
                       break;
                   }
                }

                if(i === bpListLength) {

                    currentBpIndex = bpListLength;

                    //resize all images
                    loadImages(priorityImgList);
                    setTimeout(loadSecondaryImages, 6000);
                    window.removeEventListener('resize', handleResize);
                }
            }
        } else if (firstIteration) {
            firstIteration = false;
            loadImages(priorityImgList);
            setTimeout(loadSecondaryImages, 6000);
        }
    }

    function handleResize() {
        window_w = window.innerWidth;
        checkIfBreakpointHasChanged();
    }

    window.addEventListener('resize', handleResize);

})
