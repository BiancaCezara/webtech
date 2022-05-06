let articlesID = ["article1", "article2", "article3"];
let hiddenDivs = ["hidden-div", "hidden-div-1", "hidden-div-2"];


for (let articleIndex = 0; articleIndex < articlesID.length; articleIndex++) {
    document.getElementById(articlesID[articleIndex]).addEventListener("mouseout", function mouseOut() {
        document.getElementById(hiddenDivs[articleIndex]).style.display = "none";
    });
    document.getElementById(articlesID[articleIndex]).addEventListener("mouseover", function mouseOver() {
        document.getElementById(hiddenDivs[articleIndex]).style.display = 'block';
    });
}
