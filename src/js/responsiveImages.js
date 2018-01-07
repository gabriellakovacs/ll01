document.addEventListener("DOMContentLoaded", function() {

    console.log('load images');

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

    var priorityImgList = document.querySelectorAll('.js-img-priority');
    var secondaryImgList = document.querySelectorAll('.js-img-secondary');

    var imgList = priorityImgList;

    checkIfBreakpointHasChanged();

    function loadImages(imgList) {

        console.log('------------------');

        console.log('FUNCTION loadImages');

        var listLength = imgList.length;
        for(var i = 0; i < listLength; i++) {
            setImgBackground(imgList[i]);
        }

        console.log('------------------');
    }

    function loadSecondaryImages() {
        console.log('------------------');

        console.log('FUNCTION loadSecondaryImages');
        loadImages(secondaryImgList);

        console.log('------------------');
    }

    function setImgBackground(img) {

        console.log('------------------');

        console.log('FUNCTION setImgBackground');

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

        console.log('------------------');
    }

    function checkIfBreakpointHasChanged() {

        console.log('------------------');

        console.log('FUNCTION checkIfBreakpointHasChanged');

        console.log('window_w ' + window_w);

        if(window_w > bpList[currentBpIndex]) {

            console.log('window_w > bpList[currentBpIndex] ');

            if(currentBpIndex === bpListLength - 1) {
                window.removeEventListener('resize', handleResize);
                //resize all images
                currentBpIndex = bpListLength;
                loadImages(imgList);

                setTimeout(loadSecondaryImages, 6000);
            } else {
                for(var i = currentBpIndex + 1; i < bpListLength; i++) {
                    console.log('loop index ' + i);
                   if(window_w <= bpList[i]) {
                       currentBpIndex = i;
                       //resize all images!!!!!!!!!

                       loadImages(imgList);

                       setTimeout(loadSecondaryImages, 6000);
                       break;
                   }
                }

                if(i === bpListLength) {
                    console.log('i === bpListLength');
                    //resize all images
                    currentBpIndex = bpListLength;
                    loadImages(imgList);

                    setTimeout(loadSecondaryImages, 6000);
                    window.removeEventListener('resize', handleResize);
                }
            }
        }

        console.log('------------------');
    }

    function handleResize() {
        window_w = window.innerWidth;
        checkIfBreakpointHasChanged();
    }

    window.addEventListener('resize', handleResize);

})
