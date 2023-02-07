window.addEventListener("scroll", function () {
    let y = document.documentElement.scrollTop;
    if (document.getElementById("back_to_top_div").style.opacity == "0") {

    }
    if (y > 100) {
        document.getElementById("back_to_top_div").style.display = "flex";
        setTimeout(() => {
            document.getElementById("back_to_top_div").style.opacity = "1";
        }, 100);

    } else {
        document.getElementById("back_to_top_div").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("back_to_top_div").style.display = "none";
        }, 100);
    }
});

