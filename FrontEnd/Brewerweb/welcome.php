<?php
if(isset($_POST['name']) && isset($_POST['email'])) {
    $data = $_POST['firstname'] . '-' . $_POST['email'] . "\n";
    $ret = file_put_contents('mydata.txt', $data, FILE_APPEND | LOCK_EX);
    if($ret === false) {
        die('There was an error writing this file');
    }
    else {
        echo "$ret bytes written to file";
    }
}
else {
   die('no post data to process');
}
?>