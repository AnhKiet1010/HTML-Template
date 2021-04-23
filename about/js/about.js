$( document ).ready(function() {
    setAboutLayoutByTheme(theme);
});

function setAboutLayoutByTheme(currentTheme) {
	if (currentTheme == 'light-mode') {
		$('.about_intro').removeClass('about_intro_dark');
	} else if (currentTheme == 'dark-mode') {
		$('.about_intro').addClass('about_intro_dark');
	}
}