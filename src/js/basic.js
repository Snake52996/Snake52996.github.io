var title_color_reset_timeout;
$("._header_inner_container").hover(function(){
	clearTimeout(title_color_reset_timeout);
	$("._header_inner_container:hover ._header_inner").css("color", "rgb(" + parseInt(Math.random() * 256) + ", " + parseInt(Math.random() * 256) + ", " + parseInt(Math.random() * 256) + ")");
}, function(){
	title_color_reset_timeout = setTimeout(function(){
		$("._header_inner_container ._header_inner").css("color", "black");
	}, 2500);
});
var menu_detail_show_timeout;
$("._menu_container").on("mouseover",function(){
	$("._menu_container:hover ._menu_info").stop().fadeIn();
});

$("._menu_container").on("mouseout",function(){
	$("._menu_container ._menu_info").stop().fadeOut();
});