$(function () {
	$('#site_header').load('/common_parts/header/header.html',null,function(){
		if (theme == 'light-mode') {
			$('#switch_darkmode').prop('checked', false);
			$('#switch_darkmode_sp').prop('checked', false);
		} else if (theme == 'dark-mode') {
			$('#switch_darkmode').prop('checked', true);
			$('#switch_darkmode_sp').prop('checked', true);
			$('.separate_line').addClass('separate_line_dark');
			$(".insta_btn").attr("src","/common_parts/header/images/icn_hd_insta_white.svg");
			$(".twitter_btn").attr("src","/common_parts/header/images/icn_hd_twitter_white.svg");
			$(".youtube_btn").attr("src","/common_parts/header/images/icn_hd_youtube_white.svg");
			if (isMobileDevice()) {
				$(".menu_btn img").attr("src","/common_parts/header/images/icn_menu_white.svg");
				$('.overlay').addClass('overlay_dark');
			}
		}
	});
});

function switchDarkmode() {
	if (isMobileDevice()) {
		setTimeout(function() {
			closeNav();
		}, 400);
	}
	var currentTheme = localStorage.getItem("theme");
	if (currentTheme == 'light-mode' ) {
		document.documentElement.classList.remove('light-mode');
		document.documentElement.classList.add('dark-mode');
		localStorage.setItem("theme", 'dark-mode');
		$('.separate_line').addClass('separate_line_dark');
		$(".insta_btn").attr("src","/common_parts/header/images/icn_hd_insta_white.svg");
		$(".twitter_btn").attr("src","/common_parts/header/images/icn_hd_twitter_white.svg");
		$(".youtube_btn").attr("src","/common_parts/header/images/icn_hd_youtube_white.svg");
		if (isMobileDevice()) {
			$(".menu_btn img").attr("src","/common_parts/header/images/icn_menu_white.svg");
		}
	} else if (currentTheme == 'dark-mode') {
		document.documentElement.classList.remove('dark-mode');
		document.documentElement.classList.add('light-mode');
		localStorage.setItem("theme", 'light-mode');
		$('.separate_line').removeClass('separate_line_dark');
		$(".insta_btn").attr("src","/common_parts/header/images/icn_hd_insta.svg");
		$(".twitter_btn").attr("src","/common_parts/header/images/icn_hd_twitter.svg");
		$(".youtube_btn").attr("src","/common_parts/header/images/icn_hd_youtube.svg");
		if (isMobileDevice()) {
			$(".menu_btn img").attr("src","/common_parts/header/images/icn_menu.svg");
		}
	}

	var pathname = window.location.pathname;
	pathname.indexOf(1);
	pathname.toLowerCase();
	pathname = pathname.split("/")[1];
	if (pathname == '') {
		if (currentTheme == 'light-mode') {
			setTopLayoutByTheme('dark-mode');
		} else {
			setTopLayoutByTheme('light-mode');
		}
	} else if (pathname == 'about') {
		if (currentTheme == 'light-mode') {
			setAboutLayoutByTheme('dark-mode');
		} else {
			setAboutLayoutByTheme('light-mode');
		}
	} else if (pathname == 'IT' || pathname == 'agriculture' || pathname == 'self_care') {
		console.log("pathname", pathname);
		if (currentTheme == 'light-mode') {
			setPageLayoutByTheme('dark-mode');
		} else {
			setPageLayoutByTheme('light-mode');
		}
	}
	if (currentTheme == 'dark-mode') {
		$('footer').removeClass('footer_dark');
	} else if (currentTheme == 'light-mode') {
		$('footer').addClass('footer_dark');
	}
}

function openNav() {
	$(".overlay").addClass("open_nav");
	$('body').css('overflow','hidden');
}

function closeNav() {
	$(".overlay").removeClass("open_nav");
	$('body').css('overflow','');
}