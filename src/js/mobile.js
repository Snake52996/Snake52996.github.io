$("._menu_container ._menu_info").fadeIn();
var do_random_color = false;
var random_timeout;
$("#_logo").on("click", function(){
	if(do_random_color){
		clearInterval(random_timeout);
		$("._header_inner_container").stop().animate({color: 'black'});
	}else{
		random_timeout = setInterval(function(){
			$("._header_inner_container:eq(" + parseInt(Math.random() * 9) + ")").stop().animate({color: "rgb(" + parseInt(Math.random() * 256) + ", " + parseInt(Math.random() * 256) + ", " + parseInt(Math.random() * 256) + ")"});
		}, 500);
	}
	do_random_color = !do_random_color;
});
