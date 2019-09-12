document.querySelector("button").onclick = function () {
    
    "use strict";
    var menu = document.getElementById("menuTop"),
        result;
    if (menu.getAttribute("class") === "show") {
        menu.setAttribute("class", "main-div");
    } else {
        menu.setAttribute("class", "show main-div");
    }
};
