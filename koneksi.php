<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "pw_043040023";

$connect = mysql_connect($host,$user,$pass);
$select = mysql_select_db($db,$connect);

if ($select){
    echo 'berhasil connect ke database';
}
else{
    echo 'gagal koneksi ke database';
}
?>