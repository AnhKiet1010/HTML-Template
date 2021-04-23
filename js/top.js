// スマートフォンのピックアップ部分でスクロールヒントの初期化処理
window.addEventListener('DOMContentLoaded', function () {
    new ScrollHint('.js-scrollable');
});

$(document).ready(function () {
    setTopLayoutByTheme(theme);
});

function setTopLayoutByTheme(currentTheme) {
    if (currentTheme == 'light-mode') {
        $(".title_pic").attr("src", "/images/top/pic_top_illust.svg");
        $('.title_pic').removeClass('title_pic_dark');
        $('.blue_round_tag').removeClass('blue_round_tag_dark');
        $('.blue_theme_item').removeClass('blue_theme_item_dark');
        $('.blue_detail_btn').removeClass('blue_detail_btn_dark');
        $('.blue_detail_square').removeClass('blue_detail_square_dark');
        $(".blue_detail_btn img").attr("src", "/images/common/icn_link_mark_blue.svg");

        $('.green_round_tag').removeClass('green_round_tag_dark');
        $('.green_theme_item').removeClass('green_theme_item_dark');
        $('.green_detail_btn').removeClass('green_detail_btn_dark');
        $('.green_detail_square').removeClass('green_detail_square_dark');
        $(".green_detail_btn img").attr("src", "/images/common/icn_link_mark_green.svg");

        $('.navy_round_tag').removeClass('navy_round_tag_dark');
        $('.navy_theme_item').removeClass('navy_theme_item_dark');
        $('.navy_detail_btn').removeClass('navy_detail_btn_dark');
        $('.navy_detail_square').removeClass('navy_detail_square_dark');
        $(".navy_detail_btn img").attr("src", "/images/common/icn_link_mark_navy.svg");

        $('.orange_round_tag').removeClass('orange_round_tag_dark');
        $('.orange_theme_item').removeClass('orange_theme_item_dark');
        $('.orange_detail_btn').removeClass('orange_detail_btn_dark');
        $('.orange_detail_square').removeClass('orange_detail_square_dark');
        $(".orange_detail_btn img").attr("src", "/images/common/icn_link_mark_orange.svg");

        $(".frame_pic").attr("src", "images/top/pic_pickup_frame.svg");
        $(".pickup_pic").attr("src", "images/top/pic_pickup.svg");
        $(".pickup_icn").attr("src", "images/top/icn_pickup.svg");
        $('.list_news_btn').removeClass('list_news_btn_dark');
        $('.application_btn').removeClass('application_btn_dark');
        $('.title_background').removeClass('title_background_dark');
        $('.news_area').removeClass('news_area_dark');
        $('.pickup_item').removeClass('pickup_item_dark');
        $('.pickup_item_txt label').removeClass('pickup_item_ttl_dark');
        $('.pickup_item_txt span').removeClass('pickup_item_date_dark');
        $(".application_icn").attr("src", "images/top/icn_application.svg");
    } else if (currentTheme == 'dark-mode') {
        $(".title_pic").attr("src", "/images/top/pic_top_illust_darkmode.svg");
        $('.title_pic').addClass('title_pic_dark');

        $('.blue_round_tag').addClass('blue_round_tag_dark');
        $('.blue_theme_item').addClass('blue_theme_item_dark');
        $('.blue_detail_btn').addClass('blue_detail_btn_dark');
        $('.blue_detail_square').addClass('blue_detail_square_dark');
        $(".blue_detail_btn img").attr("src", "/images/common/icn_link_mark_white.svg");

        $('.green_round_tag').addClass('green_round_tag_dark');
        $('.green_theme_item').addClass('green_theme_item_dark');
        $('.green_detail_btn').addClass('green_detail_btn_dark');
        $('.green_detail_square').addClass('green_detail_square_dark');
        $(".green_detail_btn img").attr("src", "/images/common/icn_link_mark_white.svg");

        $('.navy_round_tag').addClass('navy_round_tag_dark');
        $('.navy_theme_item').addClass('navy_theme_item_dark');
        $('.navy_detail_btn').addClass('navy_detail_btn_dark');
        $('.navy_detail_square').addClass('navy_detail_square_dark');
        $(".navy_detail_btn img").attr("src", "/images/common/icn_link_mark_white.svg");

        $('.orange_round_tag').addClass('orange_round_tag_dark');
        $('.orange_theme_item').addClass('orange_theme_item_dark');
        $('.orange_detail_btn').addClass('orange_detail_btn_dark');
        $('.orange_detail_square').addClass('orange_detail_square_dark');
        $(".orange_detail_btn img").attr("src", "/images/common/icn_link_mark_white.svg");

        $(".frame_pic").attr("src", "images/top/pic_pickup_frame_white.svg");
        $(".pickup_pic").attr("src", "images/top/pic_pickup_white.svg");
        $(".pickup_icn").attr("src", "images/top/icn_pickup_white.svg");
        $('.list_news_btn').addClass('list_news_btn_dark');
        $('.application_btn').addClass('application_btn_dark');
        $('.title_background').addClass('title_background_dark');
        $('.news_area').addClass('news_area_dark');
        $('.pickup_item').addClass('pickup_item_dark');
        $('.pickup_item_txt label').addClass('pickup_item_ttl_dark');
        $('.pickup_item_txt span').addClass('pickup_item_date_dark');
        $(".application_icn").attr("src", "images/top/icn_application_white.svg");
    }
}