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
	function prevSong($request_data) {
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
	function prevSong($request_data) {
        $output = array();
	    exec($this->CMD_PREFIX . $this->MUSIC_SCRIPT . ' resume ' , $output);
	    return json_encode($output);
	}
	
	

	// TODO - add volume controls.

}
?>