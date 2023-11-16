var mobMenuContainer = document.getElementById("mobMenuCont");
var mobMenuWrap = document.getElementById("mobMenuWrap");
var button = document.getElementById("btn");
var menuon = 0;

function mobMenuToggle() {
    if (menuon == 0) {
        mobMenuContainer.classList.add("displayon");
        mobMenuWrap.classList.add("displayon");
        button.classList.add("close");
        menuon = 1;
    } else {
        mobMenuContainer.classList.remove("displayon");
        mobMenuWrap.classList.remove("displayon");
        menuon = 0;
    }
    //mobMenuContainer.classList.add("displayon");
    //mobMenuWrap.classList.add("displayon");

}

function closeMobMenuToggle() {
    mobMenuContainer.classList.remove("displayon");
    mobMenuWrap.classList.remove("displayon");
}