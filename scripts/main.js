$(document).ready(function () {
    $('#content_div_main').load("/01_basic_info_site/pages/main.html");
    $('#header_div').load("/01_basic_info_site/pages/components/header.html");
    $('#footer_div').load("/01_basic_info_site/pages/components/footer.html");
    $('#back_to_top_button').load("/01_basic_info_site/pages/components/back_to_top.html");

    setTimeout(() => {
        f_move_backgrounds();
    }, 200);
});

window.addEventListener('scroll', function (e) {
    f_move_backgrounds();
});

function f_move_backgrounds() {
    let y = document.documentElement.scrollTop;
    let base_y = 350;
    let min_speed = 0.3;
    let max_speed = 8;
    let page_height = document.documentElement.clientHeight;
    let maxScroll = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);

    let element_1 = document.querySelector('#parallax_games_1');
    let element_2 = document.querySelector('#parallax_games_2');
    let element_3 = document.querySelector('#parallax_games_3');
    let element_4 = document.querySelector('#parallax_games_4');
    let element_5 = document.querySelector('#parallax_games_5');
    let element_6 = document.querySelector('#parallax_games_6');
    let element_7 = document.querySelector('#parallax_games_7');
    let element_8 = document.querySelector('#parallax_games_8');
    let element_9 = document.querySelector('#parallax_games_9');

    let element_10 = document.querySelector('#parallax_series_1');
    let element_11 = document.querySelector('#parallax_series_2');
    let element_12 = document.querySelector('#parallax_series_3');
    let element_13 = document.querySelector('#parallax_series_4');
    let element_14 = document.querySelector('#parallax_series_5');
    let element_15 = document.querySelector('#parallax_series_6');
    let element_16 = document.querySelector('#parallax_series_7');
    let element_17 = document.querySelector('#parallax_series_8');
    let element_18 = document.querySelector('#parallax_series_9');

    let element_19 = document.querySelector('#parallax_films_1');
    let element_20 = document.querySelector('#parallax_films_2');
    let element_21 = document.querySelector('#parallax_films_3');
    let element_22 = document.querySelector('#parallax_films_4');
    let element_23 = document.querySelector('#parallax_films_5');
    let element_24 = document.querySelector('#parallax_films_6');
    let element_25 = document.querySelector('#parallax_films_7');
    let element_26 = document.querySelector('#parallax_films_8');
    let element_27 = document.querySelector('#parallax_films_9');

    let title_section = document.querySelector('.title_section');
    let games_h_1 = document.querySelector('#games_h_1');
    let games_h_2 = document.querySelector('#games_h_2');
    let series_section = document.querySelector('.series_section');
    let series_h_1 = document.querySelector('#series_h_1');
    let series_h_2 = document.querySelector('#series_h_2');
    let films_section = document.querySelector('.films_section');
    let films_h_1 = document.querySelector('#films_h_1');
    let films_h_2 = document.querySelector('#films_h_2');
    let final_section = document.querySelector('.final_section');

    let footer = document.querySelector('footer>div');

    if (y + page_height + 100 >= maxScroll) {
        footer.style.opacity = 1;
    } else {
        footer.style.opacity = 0;
        final_section.style.opacity = 1;
    };

    if (y <= 50) {
        title_section.style.opacity = 1;
        games_h_1.style.opacity = 0;
    } else {
        title_section.style.opacity = 0;
        games_h_1.style.opacity = 1;
    };

    if (y <= 500) {
        element_1.style.opacity = 1;
        element_2.style.opacity = 1;
        element_3.style.opacity = 1;
        games_h_2.style.opacity = 0;
    } else {
        element_1.style.opacity = 0;
        element_2.style.opacity = 0;
        element_3.style.opacity = 0;
        games_h_1.style.opacity = 0;
        games_h_2.style.opacity = 1;
    };

    if (y <= 940) {
        element_4.style.opacity = 1;
        element_5.style.opacity = 1;
        element_6.style.opacity = 1;
        series_section.style.opacity = 0;
    } else {
        element_4.style.opacity = 0;
        element_5.style.opacity = 0;
        element_6.style.opacity = 0;
        games_h_2.style.opacity = 0;
        series_section.style.opacity = 1;
    };

    if (y <= 1040) {
        series_h_1.style.opacity = 0;
    } else {
        series_h_1.style.opacity = 1;
        series_section.style.opacity = 0;
    };

    if (y <= 1500) {
        element_7.style.opacity = 1;
        element_8.style.opacity = 1;
        element_9.style.opacity = 1;
        series_h_2.style.opacity = 0;
    } else {
        element_7.style.opacity = 0;
        element_8.style.opacity = 0;
        element_9.style.opacity = 0;
        series_h_1.style.opacity = 0;
        series_h_2.style.opacity = 1;
    };

    if (y <= 1950) {
        films_section.style.opacity = 0;
    } else {
        series_h_2.style.opacity = 0;
        films_section.style.opacity = 1;
    };

    if (y <= 2060) {
        films_h_1.style.opacity = 0;
    } else {
        films_h_1.style.opacity = 1;
        films_section.style.opacity = 0;
    };

    if (y <= 2460) {
        films_h_2.style.opacity = 0;
    } else {
        films_h_1.style.opacity = 0;
        films_h_2.style.opacity = 1;
    };

    if (y <= 3030) {
        final_section.style.opacity = 0;
    } else {
        films_h_2.style.opacity = 0;
        final_section.style.opacity = 1;
    };

    /////////////////////////////////////////////////////// GAMES

    if (y > base_y && y <= base_y * 2) {
        element_1.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_1.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };

    if (y > base_y * 3 && y <= base_y * 4) {
        element_2.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_2.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };

    if (y > base_y * 5 && y <= base_y * 6) {
        element_3.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_3.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };

    if (y > base_y * 7 && y <= base_y * 8) {
        element_4.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_4.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };

    if (y > base_y * 9 && y <= base_y * 10) {
        element_5.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_5.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };

    if (y > base_y * 11 && y <= base_y * 12) {
        element_6.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_6.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };

    if (y > base_y * 13 && y <= base_y * 14) {
        element_7.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_7.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };

    if (y > base_y * 15 && y <= base_y * 16) {
        element_8.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_8.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };

    if (y > base_y * 17 && y <= base_y * 18) {
        element_9.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_9.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };

    ///////////////////////////////////////////////////////// SERIES

    if (y > base_y * 19 && y <= base_y * 20) {
        element_10.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_10.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };

    if (y > base_y * 21 && y <= base_y * 22) {
        element_11.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_11.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };

    if (y > base_y * 23 && y <= base_y * 24) {
        element_12.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_12.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };

    if (y > base_y * 25 && y <= base_y * 26) {
        element_13.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_13.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };

    if (y > base_y * 27 && y <= base_y * 28) {
        element_14.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_14.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };

    if (y > base_y * 29 && y <= base_y * 30) {
        element_15.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_15.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };

    if (y > base_y * 31 && y <= base_y * 32) {
        element_16.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_16.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };

    if (y > base_y * 33 && y <= base_y * 34) {
        element_17.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_17.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };

    if (y > base_y * 35 && y <= base_y * 36) {
        element_18.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_18.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };

    ///////////////////////////////////////////////////////// FILMS

    if (y > base_y * 37 && y <= base_y * 38) {
        element_19.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_19.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };

    if (y > base_y * 39 && y <= base_y * 40) {
        element_20.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_20.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };

    if (y > base_y * 41 && y <= base_y * 42) {
        element_21.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_21.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };

    if (y > base_y * 43 && y <= base_y * 44) {
        element_22.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_22.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };

    if (y > base_y * 45 && y <= base_y * 46) {
        element_23.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_23.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };

    if (y > base_y * 47 && y <= base_y * 48) {
        element_24.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_24.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };

    if (y > base_y * 49 && y <= base_y * 50) {
        element_25.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_25.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };

    if (y > base_y * 51 && y <= base_y * 52) {
        element_26.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_26.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };

    if (y > base_y * 53 && y <= base_y * 54) {
        element_27.style.transform = 'translate3d(0px, -' + (min_speed * y) + 'px, 0px)';
    } else {
        element_27.style.transform = 'translate3d(0px, -' + (max_speed * y) + 'px, 0px)';
    };
};
