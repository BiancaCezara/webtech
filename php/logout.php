<?php
session_start();
unset($_SESSION["id"]);
unset($_SESSION["loggedin"]);
unset($_SESSION["username"]);
header("Location:login.php");
?>