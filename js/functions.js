// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }


// remap jQuery to $
(function($){

	/* trigger when page is ready */
	$(document).ready(function (){
	
		// your functions go here
		
		// init dropdown
		$( '#cd-dropdown' ).dropdown();
	
	});
	
	
	/* optional triggers
	
	$(window).load(function() {
		
	});
	
	$(window).resize(function() {
		
	});
	
	*/

})(window.jQuery);


/* Creates two eqaul columns. */
function init2col() {
    $("#left").width('50%');
    $("#right").width('50%');
}


/* Expands left column to full size. */
function expandLeft() {
    $("#left").width('100%');
    $("#right").width('0%');
}