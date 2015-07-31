<?php
class Music {
    private $CMD_PREFIX = 'sudo -u vania ';
    // private $SCRIPT_DIR = '/home/vania/bin/carbon-control/';
    private $MUSIC_SCRIPT = '/home/vania/bin/carbon-control/music.sh';
    	
	
	
	
	
	
	
   /**
    * 
    * Launches a song on carbon.
    *
    * @url POST /script/music/play_song
    */
	function playSong($request_data) {
	    $query = $request_data['query'];
        $output = array();
	    //exec($this->CMD_PREFIX . $this->SCRIPT_DIR . 'play_song.sh ' . $query , $output);
	    exec($this->CMD_PREFIX . $this->MUSIC_SCRIPT . ' play ' . $query , $output);
	    return json_encode($output);
	}
	
	/**
    * 
    * Skips forward a song on carbon.
    *
    * @url POST /script/music/next_song
    */
	function nextSong($request_data) {
        $output = array();
	    exec($this->CMD_PREFIX . $this->MUSIC_SCRIPT . ' next' , $output);
	    return json_encode($output);
	}
	
	/**
    * 
    * Skips back a song on carbon.
    *
    * @url POST /script/music/prev_song
    */
	function prevSong($request_data) {
        $output = array();
	    exec($this->CMD_PREFIX . $this->MUSIC_SCRIPT . ' prev ' , $output);
	    return json_encode($output);
	}
	
    /**
    * 
    * Pauses a song on carbon.
    *
    * @url POST /script/music/pause
    */
	function pause($request_data) {
        $output = array();
	    exec($this->CMD_PREFIX . $this->MUSIC_SCRIPT . ' pause ' , $output);
	    return json_encode($output);
	}
	
	
   /**
    * 
    * Resumes a song on carbon.
    *
    * @url POST /script/music/resume
    */
	function resume($request_data) {
        $output = array();
	    exec($this->CMD_PREFIX . $this->MUSIC_SCRIPT . ' resume ' , $output);
	    return json_encode($output);
	}
	
	 /**
    * 
    * Volume up
    *
    * @url POST /script/music/volume_up
    */
	function volumeUp($request_data) {
        $output = array();
	    exec($this->CMD_PREFIX . $this->MUSIC_SCRIPT . ' volume up ' , $output);
	    return json_encode($output);
	}
	
	 /**
    * 
    * Volume down
    *
    * @url POST /script/music/volume_down
    */
	function volumeDown($request_data) {
        $output = array();
	    exec($this->CMD_PREFIX . $this->MUSIC_SCRIPT . ' volume down ' , $output);
	    return json_encode($output);
	}
	
   /**
    * 
    * Set volume to some percent
    *
    * @url POST /script/music/volume_set
    */
	function volumeSet($request_data) {
        $output = array();
        $value = $request_data['value'];
	    exec($this->CMD_PREFIX . $this->MUSIC_SCRIPT . ' volume set ' . $value , $output);
	    return json_encode($output);
	}
	
	/**
    * 
    * Play random song from top rated
    *
    * @url POST /script/music/top_rated
    */
	function topRated() {
        $output = array();
	    exec($this->CMD_PREFIX . $this->MUSIC_SCRIPT . ' toprated' , $output);
	    return json_encode($output);
	}
	
	/**
    * 
    * Play random song from frequently played.
    *
    * @url POST /script/music/most_played
    */
	function mostPlayed() {
        $output = array();
	    exec($this->CMD_PREFIX . $this->MUSIC_SCRIPT . ' mostplayed' , $output);
	    return json_encode($output);
	}
	
	/**
    * 
    * Connection test endpoint. Used to determine connectivity in Android Wear app.
    *
    * @url GET /health
    */
	function health() {
	    return "OK";
	}

}
?>