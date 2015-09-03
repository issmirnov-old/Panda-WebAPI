<?php
class Carbon {
    private $CMD_PREFIX = 'sudo -u vania ';
    private $SCRIPT = '/home/vania/bin/carbon-control/general.sh';
    	
   /**
    * 
    * Triggers boot greeting on carbon.
    *
    * @url POST /script/carbon/day_summary
    */
	function sayDaySummary() {
        $output = array();
	    exec($this->CMD_PREFIX . $this->SCRIPT . ' day_summary ' , $output);
	    return json_encode($output);
	}
	
	/**
    * 
    * Locks computer screen on carbon.
    *
    * @url POST /script/carbon/lock
    */
	function lockCarbon() {
        $output = array();
	    exec($this->CMD_PREFIX . $this->SCRIPT . ' lockscreen ' , $output);
	    return json_encode($output);
	}
	
}
?>