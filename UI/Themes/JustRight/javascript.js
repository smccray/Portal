/*
JICS THEME SCRIPT - SAFETY
by cornerstone interactive
cornerstoneinteractive.com
production version should 

be minified and cached for
optimum portal performance
*/


/* =Configurable Settings
-----------------------------------------*/

// Execute on DOM Ready
$(function(){
  csTabs();
  $('body').supersleight();
  //csNav();
  csLogin();
  csSBCurrent();
  csSiteManager();
  //csModules();
  //csFeature();
  csPortletHeaders();
  setTimeout(function(){makePageWide();}, 100);
  //this will need to be updated for jquery 1.7+ (Flip "*" and "click") [[jquery gods, forgive my sins here]]
 $(".gradebookPortlet").delegate("*","click", function(){setTimeout(
															function(){
															makePageWide();
														}, 100)});
}); 

// Execute on Window Resize
$(window).resize(function(){
  csTabOverflow();
});

/* =Do not edit below this line
-----------------------------------------*/
function makePageWide()
{
	if($('.fullGradebookGrid').width() > ($('#portlets').width()))
	{
		$('#mainLayout').css("width", $('.fullGradebookGrid').width()+350);
		$('#mainLayout').css("max-width", $('.fullGradebookGrid').width()+350);
	}
	else
	{
		$('#mainLayout').css("width","auto");
		$('#mainLayout').css("max-width", "1200px");
	}
}
function csNav() {
//[cs] Navigation Menu
  $('#headerTabs ul li').each(function(el){
    txt = $.trim($(this).children('a').text());
    if ($.inArray(txt,$primary)>-1){$(this).appendTo($('#nav-primary'));}
    else if ($.inArray(txt,$ancillary)>-1){$(this).appendTo($('#nav-ancillary'));}
    else {$(this).appendTo($('#otherlinks'));}
  });
} 


function csSiteManager() {
  if ($('#sideBar').children().length==0){
    $('#portlets').css('margin-left','0');
  }
}


function csSBCurrent() {
  if ($('li.currentPage ul').length>0){
    $('li.currentPage').prepend('<a id="xpndPrtlts" href="javascript:void(0);" title="View Portlets on this page">view</a>');
    $('#xpndPrtlts').click(function(){
      $('li.currentPage ul').toggle();
      if($('li.currentPage ul').is(':visible')){
        $(this).addClass('expanded');
      }else{
       $(this).removeClass('expanded');      
    }
    });   
    //If portlet is clicked, expand portlet list
    $('li.currentPage ul li a').each(function(){
      if (location.href.indexOf($(this).attr('href'),0)>-1){
        $('li.currentPage ul').show();
        $(this).addClass('selected');
        $('#xpndPrtlts').addClass('expanded');
      }else{
        $('li.currentPage ul').hide().removeClass('expanded');
      }
    });

  }
  	if($('#xpndPrtlts').hasClass('expanded'))
	{
		$('#pagePortlets').show();
		
	}
}



function csLogin() {

  $('#welcomeBackBar').prependTo('#sideBar');

}


function csFeature() {
// First portlet full-width in the 'Feature' location if custom content
  if (($('.pColumn1 .portlet:eq(0) .wysiwygtext').length>0)&&($('.pColumn2 .portlet:eq(0) .wysiwygtext').length==0)){$('.pColumn1 .portlet:eq(0)').appendTo($('#feature'));}
}


function csSlideshow() {
// Start a slideshow of content if there is more than one child element
	$('.slideshow').each(function(){
    $(this).css('display','block');
		if ($(this).children().length>1) {
      $('head').append('<script src="ui/common/scripts/cycle.js"></script>');
      $(this).cycle();
    }    
	});

}

function csAjax(module){
// Load content from link asynchronously
  if (module.attr('href').indexOf('http')>-1){
    ajaxFrame = module.replaceWith('<iframe class="ajaxFrame" src="'+module.attr('href')+'" width='+module.attr('title')+' frameborder="0" />');
  }else{
   module.parent().load(module.attr('href'));
   module.remove();
  }
}

function csIframe(){
	o = document.getElementsByTagName('iframe');
	for(i=0;i<o.length;i++){
		if (/\bautoHeight\b/.test(o[i].className)){
			csHeight(o[i]);
			csEvent(o[i],'load', csIframe);
		}
	}
}

function csHeight(e){
	if(e.contentDocument){
		e.height = e.contentDocument.body.offsetHeight + 35;
	} else {
		e.height = e.contentWindow.document.body.scrollHeight;
	}
}

function csEvent(obj, evType, fn){
	if(obj.addEventListener)
	{
	obj.addEventListener("on"+evType, fn,false);
	return true;
	} else if (obj.attachEvent){
	var r = obj.attachEvent("on"+evType, fn);
	return r;
	} else {
	return false;
	}
}


function csPortletHeaders() {
  $('.pHead div').hide();
  // Show Portlet Head icons on mouseover
  $(".pHead").mouseover(function(){$("div",this).show();}).mouseout(function(){$("div",this).hide();});
  // Move edit icon to Portlet Head
  $("div[id*=divEditOrAdd]").each(function(){$(this).appendTo($(this).closest('.portlet').find('.pHead div'));$(this).css({'display':'block','margin':'0 32px 0 0'})});
}


if (document.getElementById && document.createTextNode){
 csEvent(window,'load', csIframe);	
}

jQuery.fn.supersleight = function(settings) {
	settings = jQuery.extend({
		imgs: true,
		backgrounds: true,
		shim: 'images/blank.gif',
		apply_positioning: true
	}, settings);
};

function csTabs() {
  $('#headerTabs').append("<a id='more'>more</a>");
  $('#more').css('display','none');
  $('#more').append("<ul id='moreList'></ul>");
  $('#more').mouseenter(function(){showMore();});
  $('#more').mouseleave(function(){hideMore();});
  csTabOverflow();
}

function showMore(){
  $('#more').addClass('moreSelected');
  $('#moreList').css('display','block');
}

function hideMore(){
  if (!$('#moreList .selected').length>0){ $('#more').removeClass('moreSelected');}
  $('#moreList').css('display','none');
}

function csTabOverflow()
{
  try
  {

    //Move all tabs to tab container
    $('#moreList li').each(function(){
      $('#headerTabs ul').append($(this));
    });
    
    $('#moreList').empty();

    //Check width and move as needed
    tabTotalWidth = 0;
    $('#headerTabs ul li').each(function(){
      tabTotalWidth += $(this).width();
      if (tabTotalWidth>($('#headerTabs').width()-500))
      {
        $('#more').css('display','block');
        $('#more').css('margin-left',$('#headerTabs').width()-96);
        $('#moreList').append($(this));
      }      
    });
    if ($('#moreList .selected').length>0){ $('#more').addClass('moreSelected');}else{ $('#more').removeClass('moreSelected');}
    
  }catch(e){}
  finally{
    $('#headerTabs').css('visibility','visible');
  }
}
