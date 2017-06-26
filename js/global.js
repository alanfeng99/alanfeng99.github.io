// JavaScript Document
"use strict";


$(window).on("load", function() {
	
	
	 $("#preloader").fadeOut("500", function() {
		$(this).remove()
	})
})

$( document ).ready(function() {
$(window).scroll(function() {
	
	
	if ($(window).width() >= 975) {
     if ($(this).scrollTop() > 1){  
        $('.navbar').addClass("sticky");
		$('.top-bar').addClass("hide");
    }
    else{
        $('.navbar').removeClass("sticky");
		$('.top-bar').addClass("show");
    }
	}
});
});





$('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
          .attr('placeholder','');
}).blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
});

	;(jQuery);