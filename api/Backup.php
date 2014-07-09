<?php
/*
 * Class that manages all backup tasks.   
 *   
*/
class Backup {
    private $CMD_PREFIX = 'sudo -u vania ';
    
   /**
    * 
    * Creates a backup of /var/www.
    * 
    * @url POST /script/backup/var-www
    */
	function varwww() {
        $output = array();
        exec($this->CMD_PREFIX . $this->SCRIPT . ' start', $output); 
	    return json_encode($output);
	}
	
   /**
    * 
    * Creates a backup of system partition.
    * 
    * @url POST /script/backup/system
    */
	function system() {
        $output = array();
        exec($this->CMD_PREFIX . $this->SCRIPT . ' start', $output); 
	    return json_encode($output);
	}
	
}
?>