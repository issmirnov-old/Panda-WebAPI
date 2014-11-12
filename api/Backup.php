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
	function backup_system() {
	    // get name of backup
	    $NAME = date("Y-m-d") . '.tgz';
	    
	    // Perform script.
        $output = array();
        exec($this->CMD_PREFIX . 'tar -czvf --one-file-system /storage/data1/Backups/puma-system/' . $NAME . ' /', $output); 
	    return json_encode($output);
	}
	
	
    /**
    * 
    * Check status of rsync mirror to external hard drive.
    * 
    * @url GET /script/backup/viewdatalog
    */
	function datamirrorlog() {
	    // Perform script.
        $output = array();
        exec('tail -n 50 /tmp/mybook_mirror', $output); 
	    return json_encode($output);
	}
}
?>