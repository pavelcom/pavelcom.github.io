menu.onclick = function myFunction() {
    var x = document.getElementById('myTopnav');

    if (x.className === "topnav") {
        x.className += " resposive";
    } else {
        x.className = "topnav";
    }
}
