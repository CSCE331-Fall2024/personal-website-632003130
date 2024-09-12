function toggleCSS() {
    var css = document.getElementById("stylesheet");
    if (css.getAttribute("href") == "css/index.css") {
        css.setAttribute("href", "css/newIndex.css");
        localStorage.setItem("selectedCSS", "css/index2.css");
    } else {
        css.setAttribute("href", "css/index.css");
        localStorage.setItem("selectedCSS", "css/index.css");
    }
}

window.onload = function() {
    var savedCSS = localStorage.getItem("selectedCSS");
    if (savedCSS) {
        document.getElementById("stylesheet").setAttribute("href", savedCSS);
    }
}

