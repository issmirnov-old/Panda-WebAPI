<?php
/*
 * Various status methods with health of server.    
 *   
*/
class Status {
    private $CMD_PREFIX = 'sudo -u vania ';
    
   /**
    * 
    * Returns status of /storage/data1
    *
    * @param string filter filtering option.
    * 
    * @url GET /status/data1
    */
	function data1($filter = NULL) {
	    $output = array();
	    if ($filter == NULL) {
	        // return df, du -sh, 
	        exec('df -h /dev/md0', $output); 
	        // exec('du -sh /storage/data1/*', $output);  // permissions issue.
	    }
		else {
		    if ($filter == 'df') {
    		   exec('df -h /dev/md0', $output);  
		    }
		    
		    if ($filter == 'du') {
    		   // exec('du -sh /storage/data1/*', $output); 
    		   // permissions issue.
		    }
		    else {
    		    return "unsupported operation.";
    		}
		}
		return json_encode($output);
	}
	
	/**
    * 
    * Returns status of raid array on md0.
    * 
    * @url GET /status/md0
    */
	function md0() {
        $output = array();
        exec('cat /proc/mdstat', $output); 
	    return json_encode($output);
	}
}
?>