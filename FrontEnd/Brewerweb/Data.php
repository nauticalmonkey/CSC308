<?php
  $host_name = 'db5000278777.hosting-data.io';
  $database = 'dbs272120';
  $user_name = 'dbu271681';
  $password = '<Enter your password here.>'; //rake password not incorperated yet
  $connect = mysql_connect($host_name, $user_name, $password, $database);

  if (mysql_errno()) {
    die('<p>Failed to connect to MySQL: '.mysql_error().'</p>');
  } else {
    echo '<p>Connection to MySQL server successfully established.</p >';
  }
?>