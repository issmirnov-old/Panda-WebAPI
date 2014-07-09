<?php
class Dokuwiki {
    private $CMD_PREFIX = 'sudo -u vania ';
    private $DOKUWIKI_DIR = '/var/www/dokuwiki';
    
   /**
    * 
    * Returns git status of dokuwiki.
    * 
    * @url GET /script/dokuwiki/git-status
    */
	function gitstatus() {
	    $output = array();
	    exec('cd ' . $this->DOKUWIKI_DIR . '; git status' , $output);
	    return json_encode($output);
	}
	
	/**
    * 
    * Adds all files to repo.
    * 
    * @url POST /script/dokuwiki/git-add
    */
	function gitadd() {
	    $output = array();
	    exec('cd ' . $this->DOKUWIKI_DIR . '; '.$this->CMD_PREFIX . 'git add -A'  , $output);
	    return json_encode($output);
	}
	
	/**
    * 
    * Peforms git commit of dokuwiki.
    * 
    * @param string message commit msg
    *
    * @url POST /script/dokuwiki/git-commit
    */
	function gitcommit($message = "commit by PAP") {
	    $output = array();
	    exec('cd ' . $this->DOKUWIKI_DIR . '; '.$this->CMD_PREFIX . 'git commit -am '.$message, $output);
	    return json_encode($output);
	}
	
	/**
    * 
    * Peforms git push of dokuwiki.
    * 
    * @url POST /script/dokuwiki/git-push
    */
	function gitpush() {
	    $output = array();
	    $output = exec('cd ' . $this->DOKUWIKI_DIR . '; git push'  , $output);
	    return json_encode($output);
	}
	
	
	/**
    * 
    * Peforms a git pull on dokuwiki.
    * 
    * @url POST /script/dokuwiki/git-pull
    */
	function gitpull() {
	    $output = array();
	    exec('cd ' . $this->DOKUWIKI_DIR . '; git pull'  , $output);
	    return json_encode($output);
	}
	
		
}
?>