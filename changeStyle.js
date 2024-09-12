function toggleCSS() {
    var style1 = document.getElementById("style1");
    var style2 = document.getElementById("style2");

    if (style1.disabled) {
        style1.disabled = false;
        style2.disabled = true;
        localStorage.setItem("selectedCSS", "index.css"); 
    } else {
        style1.disabled = true;
        style2.disabled = false;
        localStorage.setItem("selectedCSS", "newIndex.css"); 
    }
}

window.onload = function() {
    var savedCSS = localStorage.getItem("selectedCSS");
    if (savedCSS === "newIndex.css") {
        document.getElementById("style1").disabled = true;
        document.getElementById("style2").disabled = false;
    } else {
        document.getElementById("style1").disabled = false;
        document.getElementById("style2").disabled = true;
    }

    document.getElementById("change-style").addEventListener("click", toggleCSS);
};
