const IsMobileDevice = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
$(document).ready(function(){
	//根据设备类型加载js
	let tscript = document.createElement("script");
	tscript.type = "text/javascript";
	if(IsMobileDevice) tscript.src = "src/js/mobile.js";
	else tscript.src = "src/js/desktop.js";
	document.getElementById("poi").appendChild(tscript);
	//对为准备好图片的项目添加说明
	$("[src = 'src/images/unknown.svg']").addClass("_img_unknown").before("<div class='_img_unknown_info'>这个项目的图标还没有决定......</div>");
	setTimeout(function(){
		$("._img_unknown").animate({"opacity": 0}, 1000, function(){
			$("._img_unknown_info").animate({"opacity": 1}, 1000).delay(2000).animate({"opacity": 0}, 1000, function(){
				$("._img_unknown").animate({"opacity": 1}, 1000);
			});
		});
	}, 3000);
});