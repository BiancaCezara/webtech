const img1 = "img1";
const img2 = "img2";
const img3 = "img3";
let images = [img1, img2, img3];
var count = 0;
let previousCount = images.length - 1;


function slideOnClick(elementID) {
    if (elementID == "left-arrow") {
        count -= 1;
        if (count < 0) {
            count = 2;
            previousCount = 0;
        } else {
            previousCount = count + 1;
        }
    }

    if (elementID == "right-arrow") {
        count += 1;
        if (count > 2) {
            count = 0;
            previousCount = 2
        } else {
            previousCount = count - 1;
        }
    }


    document.getElementById(images[count]).style.display = "block";
    document.getElementById(images[previousCount]).style.display = "none";
}






