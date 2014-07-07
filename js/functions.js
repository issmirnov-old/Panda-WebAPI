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

function calibre1() {
    console.log("calibre1");
}


// API work
var API_BASE_URL = 'http://puma/polymer/api';

// Returns status of data1
function getData1Status() {
    var data1StatusUrl = API_BASE_URL + '/status/data1'; //.json?
    $.ajax({url:data1StatusUrl, type:"GET", dataType:'json', success:function(result){
        //console.log(result);
        var parsed = JSON.parse(result);
        var html = '';
        for(var i = 0; i < parsed.length; i++)
        {
            html += parsed[i] + '<br>';
        }
        $("#ajax-detailed-results").html(html);
    }});
}


































