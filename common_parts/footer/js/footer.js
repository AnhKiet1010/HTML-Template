$(function () {
	$('#site_footer').load('/common_parts/footer/footer.html', null, function () {
		scrollTop("pageTop", 500);
		var topBtn = $('#pageTop');
		topBtn.hide();
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				topBtn.fadeIn();
			} else {
				topBtn.fadeOut();
			}
		});
		topBtn.click(function () {
			$('body,html').animate(
				{
					scrollTop: 0,
				},
				500
			);
			return false;
		});

		if(theme == "dark-mode") {
			$(".insta_btn").attr("src","/common_parts/header/images/icn_hd_insta_white.svg");
			$(".twitter_btn").attr("src","/common_parts/header/images/icn_hd_twitter_white.svg");
			$(".youtube_btn").attr("src","/common_parts/header/images/icn_hd_youtube_white.svg");
			$('footer').addClass('footer_dark');
		} else if (theme == "light-mode") {
			$(".insta_btn").attr("src","/common_parts/header/images/icn_hd_insta.svg");
			$(".twitter_btn").attr("src","/common_parts/header/images/icn_hd_twitter.svg");
			$(".youtube_btn").attr("src","/common_parts/header/images/icn_hd_youtube.svg");
			$('footer').removeClass('footer_dark');
		}

		// トップページスクロールの処理
		function scrollTop(elem, duration) {
			let target = document.getElementById(elem);
			target.addEventListener("click", function () {
				let currentY = window.pageYOffset;
				let step = duration / currentY > 1 ? 10 : 100;
				let timeStep = (duration / currentY) * step;
				let intervalID = setInterval(scrollUp, timeStep);
				function scrollUp() {
					currentY = window.pageYOffset;
					if (currentY === 0) {
						clearInterval(intervalID);
					} else {
						scrollBy(0, -step);
					}
				}
			});
		}
	});

	// cssVars({
    //     variables: {
    //         "--ft-bg": theme == "dark-mode" ? "#525252" : "#FFFEE5",
    //     }
    // });

});
