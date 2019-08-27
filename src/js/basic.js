const IsMobileDevice = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
$(document).ready(function(){
	let tscript = document.createElement("script");
	tscript.type = "text/javascript";
	if(IsMobileDevice) tscript.src = "src/js/mobile.js";
	else tscript.src = "src/js/desktop.js";
	document.getElementById("poi").appendChild(tscript);
});