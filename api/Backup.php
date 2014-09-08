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
	    // get name of backup
	    $NAME = date("Y-m-d") . '.tgz';
	    exec('touch /var/www/panda/varwww-' . $NAME);
	    
	    // Perform script.
        $output = array();
        exec($this->CMD_PREFIX . 'tar -czvf /storage/data1/Backups/puma-varwww/' . $NAME . ' /var/www', $output); 
	    return json_encode($output);
	}
	
   /**
    * 
    * Creates a backup of system partition.
    * 
    * @url POST /script/backup/system
    */
	function system() {
	    // get name of backup
	    $NAME = date("Y-m-d") . '.tgz';
	    
	    // Perform script.
        $output = array();
        exec($this->CMD_PREFIX . 'tar -czvf --one-file-system /storage/data1/Backups/puma-system/' . $NAME . ' /', $output); 
	    return json_encode($output);
	}
	
}
?>