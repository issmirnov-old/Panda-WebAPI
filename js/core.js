// remap jQuery to $
(function($){

	/* trigger when page is ready */
	$(document).ready(function (){
	
		// your functions go here
		
		// init dropdown
		$( '#cd-dropdown' ).dropdown();
		
		// sliding
		var ww = $(window).width();
		$("#container").width(ww * 2);
		$("#left").width(ww);
		$("#right").width(ww);
		
		
		// detect mobile
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            // change two column layout
            $("#container").width(ww);
            $("#nav-container").width(ww);
    		$("#right").hide();
    		
        }
        
        
        // on click handlers for tabs
        $('#ahref-status').click(function() {
            console.log("status tab clicked");
            $("#status").show();
            $("#service").hide();
            $("#script").hide();
        });
        
        $('#ahref-service').click(function() {
            console.log("service tab clicked");
            $("#status").hide();
            $("#service").show();
            $("#script").hide();
        });
        
        $('#ahref-script').click(function() {
            console.log("script tab clicked");
            $("#status").hide();
            $("#service").hide();
            $("#script").show();
        });
        
        // check if puma not reachable (usually due to DNS issues)
        healthCheck();
        
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

    // detect mobile
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	    $(".black_overlay").css('display', 'block');
        $("#right").addClass('lightbox');
		$("#right").show();
		return;
    }


    var ww = $(window).width();
    
    $("#left").animate({
        width: ww/2  
    }, "easeIn");
    
    
    // start collapsing the left, and slide in the right as we go.
    $("#right").animate({
        width: ww/2
    }, "easeIn");
    
    //$("#container").width(ww);

}


/* Close black overlay on mobile when tapped. */
function closeOverlay() {
    $(".black_overlay").css('display', 'none');
    $("#right").removeClass('lightbox');
    $("#right").hide();
}


/* Expands left column to full size. */
function expandLeft() {
    $("#left").width('100%');
    $("#right").width('0%');
}



/* referenced in js/jquery.dropdown.js 
 * Do not rename w/o refactor
*/
function updateSelection() {
    // for some reason only shows the previous selection.
    
    // get property value of cd-dropdown to determine what to show.
    var item = parseInt($("[name=cd-dropdown]").val());
    switch (item) {
        case -1:
            console.log("all");
            break;
        case 1:
            console.log("script");
            break;
        case 2:
             console.log("service");
            break;
        case 3:
            console.log("status");
            break;
    }
    $("#ajax-detailed-results").html(html);
}


