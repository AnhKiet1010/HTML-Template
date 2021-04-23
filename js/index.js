

$(document).ready(function () {

    new ScrollHint('.js-scrollable');

    setPageLayoutByTheme(theme);

    function activeTab(obj) {
        // Delete class active of all tabs
        $('.page_tag').removeClass('active');

        // Add class active of current tab
        $(obj).addClass('active');

        // Get href
        var id = $(obj).find('a').attr('href');

        // Hidden content of current tab
        $('.tab_item').hide();

        // Show content of current tab
        $(id).show();
    }

    // onClick change tab
    $('.page_tag').click(function () {

        activeTab(this);
        return false;

    });

    // First active tab
    activeTab($(".page_tab_area div:first-child"));

});

function setPageLayoutByTheme(theme) {
    if(theme == "dark-mode") {
        $(".page_ttl_inner").addClass("page_ttl_inner_dark");
        $(".page_name_icn").addClass("page_name_icn_dark");
        $(".page_name_txt").addClass("page_name_txt_dark");

        $(".brand_card").addClass("brand_card_dark");
        $(".detail_btn").addClass("detail_btn_dark");

        $(".page_tag").addClass("page_tag_dark");
        $(".course").addClass("course_dark");
        $(".course_left").addClass("course_left_dark");
        $(".mark_free").addClass("mark_free_dark");
        $(".time_lmt").addClass("time_lmt_dark");
        $(".rg_red_btn").addClass("rg_red_btn_dark");

    } else if(theme == "light-mode") {
        $(".page_ttl_inner").removeClass("page_ttl_inner_dark");
        $(".page_name_icn").removeClass("page_name_icn_dark");
        $(".page_name_txt").removeClass("page_name_txt_dark");

        $(".brand_card").removeClass("brand_card_dark");
        $(".detail_btn").removeClass("detail_btn_dark");

        $(".page_tag").removeClass("page_tag_dark");
        $(".course").removeClass("course_dark");
        $(".course_left").removeClass("course_left_dark");
        $(".mark_free").removeClass("mark_free_dark");
        $(".time_lmt").removeClass("time_lmt_dark");
        $(".rg_red_btn").removeClass("rg_red_btn_dark");
    }

}