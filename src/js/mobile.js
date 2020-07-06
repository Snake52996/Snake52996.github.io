$("._menu_container ._menu_info").css("opacity", "1");
var do_random_color = false;
var random_timeout;
$("#_logo").on("click", function(){
	if(do_random_color){
		clearInterval(random_timeout);
		$("._header_inner_container").stop().animate({color: 'black'});
		$("#library a p")[0].innerHTML = "Library";
		$("#library a div").addClass("_menu_icon_container").removeClass("_menu_icon_container_inner");
		$("#library a")[0].href = "/library/"
	}else{
		random_timeout = setInterval(function(){
			$("._header_inner_container:eq(" + parseInt(Math.random() * 9) + ")").stop().animate({color: "rgb(" + parseInt(Math.random() * 256) + ", " + parseInt(Math.random() * 256) + ", " + parseInt(Math.random() * 256) + ")"});
		}, 500);
		$("#library a p")[0].innerHTML = "INNER LIBRARY";
		$("#library a div").addClass("_menu_icon_container_inner").removeClass("_menu_icon_container");
		$("#library a")[0].href = "/inner-library/"
	}
	do_random_color = !do_random_color;
});
