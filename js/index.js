/**
 * Created by Home on 08.09.2015.
 */


$(document).ready(function (e) {
    $(".button_main").mouseover(function () {
        $(this).find('img').attr("src", "images/main_menu/main_hover.png");
    });
    $(".button_main").mouseout(function () {
        $(this).find('img').attr("src", "images/main_menu/main.png");
    });

    $(".button_news").mouseover(function () {
        $(this).find('img').attr("src", "images/main_menu/news_hover.png");
    });
    $(".button_news").mouseout(function () {
        $(this).find('img').attr("src", "images/main_menu/news.png");
    });

    $(".button_game").mouseover(function () {
        $(this).find('img').attr("src", "images/main_menu/game_hover.png");
    });
    $(".button_game").mouseout(function () {
        $(this).find('img').attr("src", "images/main_menu/game.png");
    });

    $(".button_galery").mouseover(function () {
        $(this).find('img').attr("src", "images/main_menu/galery_hover.png");
    });
    $(".button_galery").mouseout(function () {
        $(this).find('img').attr("src", "images/main_menu/galery.png");
    });

    $(".button_reference").mouseover(function () {
        $(this).find('img').attr("src", "images/main_menu/reference_hover.png");
    });
    $(".button_reference").mouseout(function () {
        $(this).find('img').attr("src", "images/main_menu/reference.png");
    });

    $(".button_forum").mouseover(function () {
        $(this).find('img').attr("src", "images/main_menu/forum_hover.png");
    });
    $(".button_forum").mouseout(function () {
        $(this).find('img').attr("src", "images/main_menu/forum.png");
    });

    $(".enter").mouseover(function () {
        $(this).find('img').attr("src", "images/index_body/enter_hover.png");
    });
    $(".enter").mouseout(function () {
        $(this).find('img').attr("src", "images/index_body/enter.png");
    });

    $(".forgot").mouseover(function () {
        $(this).find('img').attr("src", "images/index_body/forget_pass_hover.png");
    });
    $(".forgot").mouseout(function () {
        $(this).find('img').attr("src", "images/index_body/forget_pass.png");
    });

    $(".registration").mouseover(function () {
        $(this).find('img').attr("src", "images/index_body/registration_hover.png");
    });
    $(".registration").mouseout(function () {
        $(this).find('img').attr("src", "images/index_body/registration.png");
    });


});