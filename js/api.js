
// =====    API work ====== // 
var API_BASE_URL = 'http://puma/panda/api';

// Clears result div
function clearResult() {
    $("#ajax-detailed-results").html("Loading...");
}

/* Health check on panda api. */
function healthCheck() {
    $.ajax({url:API_BASE_URL + '/health', type:"GET", dataType:'text', success:function(result){
        console.log("panda health: " + result);
        if (result != '"OK"') {
	        alert("Warning: Panda API health check failed!!");
        }
    }});

}


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
    clearResult();
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
    clearResult();
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
    clearResult();
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
    clearResult();
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


function viewDataMirrorLog() {
    //console.log("printing data mirror");
    var data1StatusUrl = API_BASE_URL + '/script/backup/viewdatalog';
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

// === end backup == //


// === music control == //
function playSong() {
    //console.log("printing data mirror");
    var musicUrl = API_BASE_URL + '/script/music/play_song'; // + name of song or query
    $.ajax({url:musicUrl, type:"GET", dataType:'json', success:function(result){
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


// === end music control == //