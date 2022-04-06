window.onload = function () {

    const img1 = "img1";
    const img2 = "img2";
    const img3 = "img3";


    let images = new Array(img1, img2, img3);

    let count = 0;
    let previousCount = images.length - 1;

    const rightArrow = document.getElementById("right-arrow");
    if (rightArrow) {
        rightArrow.addEventListener("click", function () {
            count += 1;
            previousCount = count - 1;

            if (count > 2) {
                count = 0;
                previousCount = 2
            }
            document.getElementById(images[count]).style.display = "block";
            document.getElementById(images[previousCount]).style.display = "none";
        });
    }

    const leftArrow = document.getElementById("left-arrow");

    if (leftArrow) {
        leftArrow.addEventListener("click", function () {
            count -= 1;
            previousCount = count + 1;
            if (count < 0) {
                count = 2;
                previousCount = 0;
            }
            document.getElementById(images[count]).style.display = "block";
            document.getElementById(images[previousCount]).style.display = "none";
        });
    }
}