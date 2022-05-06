<?php
if($_SESSION["loggedin"]) {
    ?>
    Welcome <?php echo $_SESSION["loggedin"]; ?>. Click here to <a href="logout.php" title="Logout">Logout.</a>
    <?php
}else echo "<h1>Please login first. <a href='login.php'> Click here to login</a></h1>";
?>