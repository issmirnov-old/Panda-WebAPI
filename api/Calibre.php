<?php
/*
 * Class to manage all calibre tasks.   
 *   
*/
class Calibre {
    private $CMD_PREFIX = 'sudo -u vania ';
    private $SCRIPT = '/storage/data1/Media/Books/calibre_servers.sh';
    
    
    
     /**
    * 
    * Starts calibre-server daemon.
    * 
    * @url GET /whoami
    */
	function whoami(array $target = NULL) {
        $output = array();
        exec('whoami', $output); 
	    return json_encode($output);
	}
	
   /**
    * 
    * Starts calibre-server daemon.
    *
    * @param string[] target specify libraries to start
    * 
    * @url POST /service/calibre/start
    */
	function start(array $target = NULL) {
	    if ($target == NULL) {
	        $output = array();
	        exec($this->CMD_PREFIX . $this->SCRIPT . ' start', $output); 
    	    return json_encode($output);
	    }
		else {
    		return json_encode("unsupported operation - use null arg for target.");
		}
	}
	
	/**
    * 
    * Stops calibre-server daemon.
    *
    * @param string[] target specify libraries to stop
    * 
    * @url POST /service/calibre/stop
    */
	function stop(array $target = NULL) {
	    if ($target == NULL) {
	        $output = array();
	        exec($this->CMD_PREFIX . $this->SCRIPT . ' stop', $output); 
    	    return json_encode($output);
	    }
	    else {
    		return json_encode("unsupported operation - use null arg for target.");
		}
	}
	
	/**
    * 
    * Restarts calibre-server daemon.
    *
    * @param string[] target specify libraries to restart
    * 
    * @url POST /service/calibre/restart
    */
	function restart(array $target = NULL) {
	    if ($target == NULL) {
	        $output = array();
	        exec($this->CMD_PREFIX . $this->SCRIPT . ' restart', $output); 
    	    return json_encode($output);
	    }
	    else {
    		return json_encode("unsupported operation - use null arg for target.");
		}
	}
	
	
	/**
    * 
    * Returns status of calibre-server daemon.
    * 
    * @url GET /service/calibre/status
    */
	function status() {
	    $output = array();
	    exec($this->CMD_PREFIX . $this->SCRIPT . ' status', $output); 
    	return json_encode($output);
    }
	
}
?>