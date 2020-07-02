$("._header_inner_container").hover(function(){
	$(this).stop().animate({color: "rgb(" + parseInt(Math.random() * 256) + ", " + parseInt(Math.random() * 256) + ", " + parseInt(Math.random() * 256) + ")"});
}, function(){
	$(this).delay(2500).animate({color: 'black'});
});
// Inner Lib
{
	let itimeout_handle = -1;
	$("html").on("keydown", function(e){
		if(e.key == 'q') itimeout_handle = setTimeout(function(){
			console.log("what?");
			$("#library a p").innerHTML = "INNER LIBRARY";
		}, 3000);
	});
	$("html").on("keyup", function(e){
		clearTimeout(itimeout_handle);
		$("#library a p").innerHTML = "Library";
	});
}