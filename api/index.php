<?php
    // Framework.
    require_once '../restler/vendor/restler.php';
    use Luracast\Restler\Restler;
    $r = new Restler();
    $r->addApiClass('Resources');
    
    // My API.
    $r->addAPIClass('Calibre', '');
    $r->addAPIClass('Dokuwiki', '');
    $r->addAPIClass('Backup', '');
    $r->addAPIClass('Status', '');
    $r->addAPIClass('Music', '');

    $r->handle();
        
?>