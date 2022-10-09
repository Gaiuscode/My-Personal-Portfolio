var manuBtn = document.getElementsById('manuBtn')
var aside = document.getElementsById('aside')
var menu = document.getElementsById('menu')

aside.style.left = "-270px";
manuBtn.onclick = function () {
    if (aside.style.left == "-270px") {
        aside.style.left = "0";
        menu.src = "images/menu.png";
    }
    else {
        aside.style.left == "-270px";
        menu.src = "images/menu.png";
    }
}
