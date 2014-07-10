

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
    
}






// =====    API work ====== // 
var API_BASE_URL = 'http://puma/panda/api';

// Returns status of data1
function getData1Status() {
    var data1StatusUrl = API_BASE_URL + '/status/data1';
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
    
    // perform animations
    init2col();
}


// Returns status of md0
function getMd0Status() {
    var data1StatusUrl = API_BASE_URL + '/status/md0';
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
    
    // perform animations
    init2col();
}


// === calibre === //

function getCalibreStatus() {
    var data1StatusUrl = API_BASE_URL + '/service/calibre/status';
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
    
    // perform animations
    init2col();
}


function postCalibreStart() {
    var data1StatusUrl = API_BASE_URL + '/service/calibre/start';
    $.ajax({url:data1StatusUrl, type:"POST", dataType:'json', success:function(result){
        //console.log(result);
        var parsed = JSON.parse(result);
        var html = '';
        for(var i = 0; i < parsed.length; i++)
        {
            html += parsed[i] + '<br>';
        }
        $("#ajax-detailed-results").html(html);
    }});
    
    // perform animations
    init2col();
}

function postCalibreStop() {
    var data1StatusUrl = API_BASE_URL + '/service/calibre/stop';
    $.ajax({url:data1StatusUrl, type:"POST", dataType:'json', success:function(result){
        //console.log(result);
        var parsed = JSON.parse(result);
        var html = '';
        for(var i = 0; i < parsed.length; i++)
        {
            html += parsed[i] + '<br>';
        }
        $("#ajax-detailed-results").html(html);
    }});
    
    // perform animations
    init2col();
}

function postCalibreRestart() {
    var data1StatusUrl = API_BASE_URL + '/service/calibre/restart';
    $.ajax({url:data1StatusUrl, type:"POST", dataType:'json', success:function(result){
        //console.log(result);
        var parsed = JSON.parse(result);
        var html = '';
        for(var i = 0; i < parsed.length; i++)
        {
            html += parsed[i] + '<br>';
        }
        $("#ajax-detailed-results").html(html);
    }});
    
    // perform animations
    init2col();
}

function postCalibreStart() {
    var data1StatusUrl = API_BASE_URL + '/service/calibre/start';
    $.ajax({url:data1StatusUrl, type:"POST", dataType:'json', success:function(result){
        //console.log(result);
        var parsed = JSON.parse(result);
        var html = '';
        for(var i = 0; i < parsed.length; i++)
        {
            html += parsed[i] + '<br>';
        }
        $("#ajax-detailed-results").html(html);
    }});
    
    // perform animations
    init2col();
}

// === end calibre == //

// === get dokuwiki == //
function getDokuwikiStatus() {
    var data1StatusUrl = API_BASE_URL + '/script/dokuwiki/git-status';
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
    
    // perform animations
    init2col();
}
function postDokuwikiGitAdd() {
    var data1StatusUrl = API_BASE_URL + '/script/dokuwiki/git-add';
    $.ajax({url:data1StatusUrl, type:"POST", dataType:'json', success:function(result){
        //console.log(result);
        var parsed = JSON.parse(result);
        var html = '';
        for(var i = 0; i < parsed.length; i++)
        {
            html += parsed[i] + '<br>';
        }
        $("#ajax-detailed-results").html(html);
    }});
    
    // perform animations
    init2col();
}
function postDokuwikiCommit() {
    var data1StatusUrl = API_BASE_URL + '/script/dokuwiki/git-commit';
    $.ajax({url:data1StatusUrl, type:"POST", dataType:'json', success:function(result){
        //console.log(result);
        alert("TODO - ask for imput string");
        var parsed = JSON.parse(result);
        var html = '';
        for(var i = 0; i < parsed.length; i++)
        {
            html += parsed[i] + '<br>';
        }
        $("#ajax-detailed-results").html(html);
    }});
    
    // perform animations
    init2col();
}
function postDokuwikiPush() {
    var data1StatusUrl = API_BASE_URL + '/script/dokuwiki/git-push';
    $.ajax({url:data1StatusUrl, type:"POST", dataType:'json', success:function(result){
        //console.log(result);
        var parsed = JSON.parse(result);
        var html = '';
        for(var i = 0; i < parsed.length; i++)
        {
            html += parsed[i] + '<br>';
        }
        $("#ajax-detailed-results").html(html);
    }});
    
    // perform animations
    init2col();
}
function postDokuwikiPull() {
    var data1StatusUrl = API_BASE_URL + '/script/dokuwiki/git-pull';
    $.ajax({url:data1StatusUrl, type:"POST", dataType:'json', success:function(result){
        //console.log(result);
        var parsed = JSON.parse(result);
        var html = '';
        for(var i = 0; i < parsed.length; i++)
        {
            html += parsed[i] + '<br>';
        }
        $("#ajax-detailed-results").html(html);
    }});
    
    // perform animations
    init2col();
}
// === end dokuwiki == //

// === start backup == //
function postBackupVarWww() {
    var data1StatusUrl = API_BASE_URL + '/script/backup/var-www';
    $.ajax({url:data1StatusUrl, type:"POST", dataType:'json', success:function(result){
        //console.log(result);
        var parsed = JSON.parse(result);
        var html = '';
        for(var i = 0; i < parsed.length; i++)
        {
            html += parsed[i] + '<br>';
        }
        $("#ajax-detailed-results").html(html);
    }});
    
    // perform animations
    init2col();
}
function postBackupSystem() {
    var data1StatusUrl = API_BASE_URL + '/script/backup/system';
    $.ajax({url:data1StatusUrl, type:"POST", dataType:'json', success:function(result){
        //console.log(result);
        var parsed = JSON.parse(result);
        var html = '';
        for(var i = 0; i < parsed.length; i++)
        {
            html += parsed[i] + '<br>';
        }
        $("#ajax-detailed-results").html(html);
    }});
    
    // perform animations
    init2col();
}

// === end backup == //






























