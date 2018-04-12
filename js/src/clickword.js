<script type="text/javascript"> 
/* 鼠标特效 */ 
var a_idx = 0; 
jQuery(document).ready(function($) { 
    $("body").click(function(e) { 
        var a = new Array("大佬","佩服","%%%","学不来","比不了","强强强","服气","膜拜","我太蒻了","不存在的","谢谢阅读","花Q"); 
        var $i = $("<span/>").text(a[a_idx]); 
        a_idx = (a_idx + 1) % a.length; 
        var x = e.pageX, 
        y = e.pageY; 
        $i.css({ 
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999, 
            "top": y - 20, 
            "left": x, 
            "position": "absolute", 
            "font-weight": "bold", 
            "color": "rgb(72,85,137)" 
        }); 
        $("body").append($i); 
        $i.animate({ 
            "top": y - 180, 
            "opacity": 0 
        }, 
        1500, 
        function() { 
            $i.remove(); 
        }); 
    }); 
}); 
</script>