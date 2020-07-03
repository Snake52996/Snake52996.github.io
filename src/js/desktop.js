$("._header_inner_container").hover(function(){
	$(this).stop().animate({color: "rgb(" + parseInt(Math.random() * 256) + ", " + parseInt(Math.random() * 256) + ", " + parseInt(Math.random() * 256) + ")"});
}, function(){
	$(this).delay(2500).animate({color: 'black'});
});
// Inner Lib
{
	let is_inner = false;
	$("html").on("keypress", function(e){
		if(e.key == 'q'){
			if(is_inner){
				$("#library a p")[0].innerHTML = "Library";
				$("#library a div").addClass("_menu_icon_container").removeClass("_menu_icon_container_inner");
			}else{
				$("#library a p")[0].innerHTML = "INNER LIBRARY";
				$("#library a div").addClass("_menu_icon_container_inner").removeClass("_menu_icon_container");
			}
			is_inner = !is_inner;
		}
	});
}