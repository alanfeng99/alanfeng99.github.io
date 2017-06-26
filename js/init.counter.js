/* Aura version: 1.8.6 */

jQuery(function($){

	//region piCounter
	if($.fn.piCounter){
		$('.aa-counter').each(function(){
			$(this).one('inview',function(){
				$(this).piCounter();
			});
		});
	}
	//endregion

});