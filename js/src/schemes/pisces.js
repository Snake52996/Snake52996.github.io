/*$(document).ready(function () {*/
$(window).load(function () {

  /*var sidebarInner = $('.sidebar-inner');
  var hitokoto = $('.sidebar-inner2');*/
  
  var sidebarInner = $("#base1");
  //var hitokoto = $("#target1");

  initAffix();
  resizeListener();

  function initAffix () {
    var headerOffset = getHeaderOffset(),
        footerOffset = getFooterOffset(),
        sidebarHeight = $('#sidebar').outerHeight(true) + NexT.utils.getSidebarb2tHeight(),
		//hitokotoHeight = $(hitokoto).outerHeight(true);
        contentHeight = $('#content').outerHeight(true);
		
		/*
		alert(headerOffset);	//456
		alert(footerOffset);	//164
		alert(sidebarHeight);	//496
		alert(hitokotoHeight);	//56
		alert(contentHeight);	//5590
		*/

    // Not affix if sidebar taller then content (to prevent bottom jumping).
    if (headerOffset + sidebarHeight < contentHeight) {
		//alert("!!");
      sidebarInner.affix({
        offset: {
          top: headerOffset - CONFIG.sidebar.offset,
          bottom: footerOffset
        }
      });
	  /*
	  hitokoto.affix({
        offset: {
          top: headerOffset - CONFIG.sidebar.offset,
          bottom: footerOffset
        }
      });
	  */
    }
	//$(hitokoto).offset({top: $(hitokoto).offset().top + $(sidebarInner).outerHeight(true) + 10});
	/*if($(hitokoto).offset().top > $(sidebarInner).offset().top + $(sidebarInner).outerHeight(true) + 10) {
		$(hitokoto).offset({top: $(sidebarInner).offset().top + $(sidebarInner).outerHeight(true) + 10});
	}*/
	
	/*
	if (headerOffset + sidebarHeight < contentHeight - hitokotoHeight) {
	  hitokoto.affix({
        offset: {
          top: headerOffset + sidebarHeight - CONFIG.sidebar.offset,
          bottom: footerOffset
        }
      });
    }
	*/
    setSidebarMarginTop(headerOffset).css({ 'margin-left': 'initial' });
  }

  function resizeListener () {
    var mql = window.matchMedia('(min-width: 991px)');
    mql.addListener(function(e){
      if(e.matches){
        recalculateAffixPosition();
      }
    });
  }

  function getHeaderOffset () {
    return $('.header-inner').height() + CONFIG.sidebar.offset;
  }

  function getFooterOffset () {
    var footerInner = $('.footer-inner'),
        footerMargin = footerInner.outerHeight(true) - footerInner.outerHeight(),
        footerOffset = footerInner.outerHeight(true) + footerMargin;
    return footerOffset;
  }

  function setSidebarMarginTop (headerOffset) {
    return $('#sidebar').css({ 'margin-top': headerOffset });
  }

  function recalculateAffixPosition () {
    $(window).off('.affix');
    sidebarInner.removeData('bs.affix').removeClass('affix affix-top affix-bottom');
    //hitokoto.removeData('bs.affix').removeClass('affix affix-top affix-bottom');
	initAffix();
	//$(hitokoto).offset({top: $(sidebarInner).offset().top + $(sidebarInner).outerHeight(true) + 10});
  }

});
