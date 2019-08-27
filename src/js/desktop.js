$("._header_inner_container").hover(function(){
	$(this).stop().animate({color: "rgb(" + parseInt(Math.random() * 256) + ", " + parseInt(Math.random() * 256) + ", " + parseInt(Math.random() * 256) + ")"});
}, function(){
	$(this).delay(2500).animate({color: 'black'});
});
var menu_detail_show_timeout;
$("._menu_container").on("mouseover",function(){
	$("._menu_container:hover ._menu_info").stop().fadeIn();
});
$("._menu_container").on("mouseout",function(){
	$("._menu_container ._menu_info").stop().fadeOut();
});