<?php
session_start();
if(isset($_SESSION['username'])){
    session_destroy();
    header('location: logout.php');
}
else{
    header('location: login.php');
}

?>