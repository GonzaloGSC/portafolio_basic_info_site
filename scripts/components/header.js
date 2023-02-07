let show_menu = false;
let show_info = false;
let view_x = window.innerWidth;

function f_change_page(page_html, event) {
    event.preventDefault();
    if (page_html != "index.html") {
        document.getElementById('content_div_main').style.display = "none";
        document.getElementById('content_div').style.display = "flex";
        $('#content_div').load("../../pages/" + page_html);
    } else {
        document.getElementById('content_div_main').style.display = "flex";
        document.getElementById('content_div').style.display = "none";
    };
};

function f_nav_menu_button() {
    if (show_menu) {
        document.getElementById("menu_hidden").style.display = "none";
    } else {
        document.getElementById("menu_hidden").style.display = "grid";
    };
    show_menu = !show_menu;
};

function f_close_nav_menu_button() {
    if (show_menu) {
        document.getElementById("menu_hidden").style.display = "none";
        show_menu = !show_menu;
    };
};

function f_info_menu_button() {
    if (show_info) {
        document.getElementById("info_hidden").style.transition = "0.25s";
        document.getElementById("info_hidden").style.borderTop = "none";
        document.getElementById("info_hidden").style.height = "0";

    } else {
        document.getElementById("info_hidden").style.transition = "0.75s";
        document.getElementById("info_hidden").style.borderTop = "1px solid var(--blue_color)";
        document.getElementById("info_hidden").style.height = "150px";
    };
    show_info = !show_info;
};

function f_close_info_menu_button() {
    if (show_info) {
        document.getElementById("info_hidden").style.transition = "0.25s";
        document.getElementById("info_hidden").style.borderTop = "none";
        document.getElementById("info_hidden").style.height = "0";
        show_info = !show_info;
    };
};

function correct_back_to_top_div() {
    let back_to_top_div = document.getElementById("back_to_top_justify_div");
    if (back_to_top_div) {
        if (view_x <= 680 && view_x > 400) {
            if (show_menu && !show_info) {
                back_to_top_div.style.justifyContent = "right";
            } else if (!show_menu && show_info) {
                back_to_top_div.style.justifyContent = "left";
            } else {
                back_to_top_div.style.justifyContent = "center";
            }
        };
        if (view_x <= 400 && (show_menu || show_info)) {
            back_to_top_div.style.justifyContent = "center";
            back_to_top_div.style.display = "none";
        } else {
            back_to_top_div.style.display = "flex";
        }
    };
};

window.addEventListener('click', function (e) {
    if (document.getElementById('nav_menu_button').contains(e.target)) {
        f_nav_menu_button();
    } else {
        f_close_nav_menu_button();
    };

    if (document.getElementById('info_menu_button').contains(e.target)) {
        f_info_menu_button();
    } else {
        f_close_info_menu_button();
    };
    correct_back_to_top_div();
});

function f_copy_text(text, id) {
    navigator.clipboard.writeText(text)
        .then(() => {
            if (id === "phone_copied") {
                document.getElementById("phone_copied").style.opacity = 1;
                document.getElementById("email_copied").style.opacity = 0;
                document.getElementById("direction_copied").style.opacity = 0;
                document.getElementById("phone_copied").style.transition = 1;
                document.getElementById("email_copied").style.transition = 0;
                document.getElementById("direction_copied").style.transition = 0;
                setTimeout(() => {
                    document.getElementById("phone_copied").style.opacity = 0;
                }, 1000);
            };
            if (id === "email_copied") {
                document.getElementById("phone_copied").style.opacity = 0;
                document.getElementById("email_copied").style.opacity = 1;
                document.getElementById("direction_copied").style.opacity = 0;
                document.getElementById("phone_copied").style.transition = "0s";
                document.getElementById("email_copied").style.transition = "1s";
                document.getElementById("direction_copied").style.transition = "0s";
                setTimeout(() => {
                    document.getElementById("email_copied").style.opacity = 0;
                }, 1000);
            };
            if (id === "direction_copied") {
                document.getElementById("phone_copied").style.opacity = 0;
                document.getElementById("email_copied").style.opacity = 0;
                document.getElementById("direction_copied").style.opacity = 1;
                document.getElementById("phone_copied").style.transition = "0s";
                document.getElementById("email_copied").style.transition = "0s";
                document.getElementById("direction_copied").style.transition = "1s";
                setTimeout(() => {
                    document.getElementById("direction_copied").style.opacity = 0;
                }, 1000);
            };
        })
        .catch(err => {
            console.error('No se pudo copiar el texto: ', err);
        });
};