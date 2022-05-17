<?php

$conn = mysqli_connect("localhost:3306", "root", "mysqlpass123", "new_schema");

$username = $_POST['username'];
$confirm_pass = $_POST['confirm-password'];
$password = $_POST['password'];
$username_error = "";
$password_error = $confirm_pass_error = false;

if($_SERVER['REQUEST_METHOD'] == 'POST') {

    if(empty(trim($_POST['username'])))
        $username_error = "";
     if(preg_match("/^[0-9A-Za-z_]+$/", trim($_POST['username'])) == 0) {
         $username_error = "";
     }
     else {
        $username = trim($_POST['username']);

        $sql = "SELECT * FROM users WHERE user='$username' ";
        $qry = mysqli_query($conn, $sql);
        if (mysqli_num_rows($qry) != 0) {
            $username_error = "Username taken";
        }
    }

    if(empty(trim($_POST['password'])) || strlen(trim($password)) < 8){
        $password_error = true;
    }
    else{
        $password = trim($_POST['password']);
        if($password != trim($confirm_pass)) {
            $confirm_pass_error = true;
        }
    }

    if(!$password_error && !$confirm_pass_error && empty($username_error)){
        $password = md5($password);
        $sql = "INSERT INTO users (user, password) VALUES ('$username','$password')";
        $qry = mysqli_query($conn, $sql);

        if($qry){
            header("location: authentification.php");
        }
        else{
            echo "Some error occured. Try again";
        }
    }

    mysqli_close($conn);
}

?>

<html lang="en">
    <head>
        <link type="text/css" rel="stylesheet" href="../css/index.css">
        <title> Sign up</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    </head>
    <header>
        <div class="topnav">
            <a class="logo" href="index.html">
                <img class="logo" src="../images/coffee-cup-svgrepo-com-2.svg">
            </a>
            <a class="active" href="index.html">Home</a>
            <a href="coffeetalks.html">Coffee Talks</a>
            <a href="contacts.html">Contacts</a>
            <a href="internationalcoffeeday.html">International Coffee Day</a>
            <a href="../php/authentification.php"><img src="../images/login.svg" alt="login icon"></a>
        </div>
    </header>
    <body>
        <div id="form-wrapper">
            <div id="form-content">
                <p id="form-title">Sign up</p>
                <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
                    <label for="username"> Enter a username:</label>
                    <input type="text" name="username" id="username" required minlength="6">
                    <span id="user-err"><?php echo $username_error; ?></span>
                    <br>
                    <label for="password">Enter a password</label>
                    <input type="password" name="password" id="password" required minlength="8" >
                    <span  id="password-err" style="font-family: 'Noto Sans Adlam', sans-serif"></span>
                    <label for="confirm-password"> Confirm password</label>
                    <input type="password" name="confirm-password" id="confirm-password" required minlength="8"">
                    <input type="submit" id="submit" placeholder="Create account">
                    <span id="confirm-pass-err" style="font-family: 'Noto Sans Adlam',sans-serif"></span>
                </form>
                <p id="login-option"> Have already an account? <a href="login.php">Click here to login.</a></p>
            </div>
        </div>
    </body>
    <script src="../js/checkInput.js"></script>
</html>
