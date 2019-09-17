function change_theme(theme_idx) {
	cur_color = document.getElementsByTagName('body')[0].style.background;
	new_color = document.getElementById(theme_idx).style.background;
	document.getElementsByTagName('body')[0].style.background = new_color;
	document.getElementById(theme_idx).style.background = cur_color;
}