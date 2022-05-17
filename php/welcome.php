<?php

session_start();
if (!isset($_SESSION['username'])) {
    header('location: login.php');
}
if($_SESSION['username']) {
    ?>
    Welcome <?php echo $_SESSION["username"]; ?>. Click here to <a href="logout.php" title="Logout">Logout.</a>
    <?php
}