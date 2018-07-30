 $(function() {
    $(window).load(function() {
        $(".loading").fadeOut();
        $(".tool-bar").hide()
    });
});

$(function(){	
	$(".hastag1").click(function(){
		$("html,body").animate({scrollTop:$('.part2').offset().top}, 900);
		return false;
  });    
});
$(function(){ 
  $(".hastag2").click(function(){
    $("html,body").animate({scrollTop:$('.part3').offset().top}, 900);
    return false;
  });
});
$(function(){ 
  $(".hastag3").click(function(){
    $("html,body").animate({scrollTop:$('.part4').offset().top}, 900);
    return false;
  });
});
$(function(){ 
  $("#tothetop").click(function(){
    $("html,body").animate({scrollTop:0},900);
    return false;
  });
});

$(document).scroll(function() {
   var height = $(window).scrollTop();
   if ( height > 570 ) {
      $(".tool-bar").show()
   } else {
       $(".tool-bar").hide()
   }
});


$("#fans")
  .mouseenter(function() {
   $(".fb-share-text").css({"opacity":"1"});
  })
  .mouseleave(function() {
    $(".fb-share-text").css({"opacity":"0"});
  });

$(".box").bind("click", function (event) {
    	$(this).addClass("triangle");
        $(this).siblings('.triangle').removeClass('triangle');
});

$('#choice1').click(function(){
	$(".choice1").show();
	$(".choice2").hide();
	$(".choice3").hide();
});
$('#choice2').click(function(){
	$(".choice1").hide();
	$(".choice2").show();
	$(".choice3").hide();
});
$('#choice3').click(function(){
	$(".choice1").hide();
	$(".choice2").hide();
	$(".choice3").show();
});  

$(document).ready(function() {
  var width = $(window).width();

  if (width > 769 && width < 1072) {
$("#article-box0").mouseover(function() {
  $("#inside0").css("bottom",'80px');
  $("#more0").show();
}); 
$("#article-box0").mouseout(function() {
  $("#inside0").css("bottom",'0px');
  $("#more0").hide();
});    

$("#article-box1").mouseover(function() {
  $("#inside1").css("bottom",'80px');
  $("#more1").show();
}); 
$("#article-box1").mouseout(function() {
  $("#inside1").css("bottom",'0px');
  $("#more1").hide();
});    
  } else if ( width < 767 && width > 721) {
$("#article-box0").mouseover(function() {
  $("#inside0").css("bottom",'50px');
  $("#more0").show();
}); 
$("#article-box0").mouseout(function() {
  $("#inside0").css("bottom",'0px');
  $("#more0").hide();
});    
$("#article-box1").mouseover(function() {
  $("#inside1").css("bottom",'50px');
  $("#more1").show();
}); 
$("#article-box1").mouseout(function() {
  $("#inside1").css("bottom",'0px');
  $("#more1").hide();
});
  } else if( width < 720) {
$("#article-box0").mouseover(function() {
  $("#inside0").css("bottom",'25px');
  $("#more0").show();
}); 
$("#article-box0").mouseout(function() {
  $("#inside0").css("bottom",'0px');
  $("#more0").hide();
});    
$("#article-box1").mouseover(function() {
  $("#inside1").css("bottom",'25px');
  $("#more1").show();
}); 
$("#article-box1").mouseout(function() {
  $("#inside1").css("bottom",'0px');
  $("#more1").hide();
});
  } else {
$("#article-box0").mouseover(function() {
  $("#inside0").css("bottom",'100px');
  $("#more0").show();
}); 
$("#article-box0").mouseout(function() {
  $("#inside0").css("bottom",'0px');
  $("#more0").hide();
});    
$("#article-box1").mouseover(function() {
  $("#inside1").css("bottom",'100px');
  $("#more1").show();
}); 
$("#article-box1").mouseout(function() {
  $("#inside1").css("bottom",'0px');
  $("#more1").hide();
});    
  }
});


window.onload = function readymore() {
    for (var i = 1; i <= 20; i++) {
        var butNAME = $('#more').attr('id','more'+(i));
        var cosName = $('#element').attr('id','element'+(i));
        var FaceShow = $('#fb_message').attr('id','fb_message'+(i)); 
        (function(butNAME, cosName, FaceShow) {
        $(butNAME).click(function() {
            $(butNAME).toggleClass('more1');
       if($(this).text() == 'CLOSE')
       {
           $(this).text('MORE');
       } else {
           $(this).text('CLOSE');
       };

       if ($(cosName).hasClass('element')) {
       $(cosName).removeClass('element').addClass('element1');
       } else {
       $(cosName).removeClass('element1').addClass('element');
       }; 

       if ($(FaceShow).hasClass('fb_message')) {
       $(FaceShow).removeClass('fb_message').addClass('fb_message1');
       } else {
       $(FaceShow).removeClass('fb_message1').addClass('fb_message');
       };

            });
        })(butNAME, cosName, FaceShow);
        // console.log($(butNAME));
        // console.log($(cosName));
        // console.log($(FaceShow));

    }}