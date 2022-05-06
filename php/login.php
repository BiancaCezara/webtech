<?php

session_start();

// Check if the user is already logged in, if yes then redirect him to welcome page
if (isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true) {
    header("location: welcome.php");
    exit;
}

$conn = mysqli_connect("localhost:3306", "root", "mysqlpass123", "new_schema");

// Define variables and initialize with empty values
$username = $password = "";
$username_err = $password_err = $login_err = "";


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (empty(trim($_POST["username"]))) {
        $username_err = "Please enter username.";
    } else {
        $username = trim($_POST["username"]);
    }

    if (empty(trim($_POST["password"]))) {
        $password_err = "Please enter your password.";
    } else {
        $password = trim($_POST["password"]);
    }

    if (empty($username_err) && empty($password_err)) {
        // Prepare a select statement
        $sql = "SELECT iduser, user, password FROM users WHERE user='$username' ";
        $qry = mysqli_query($conn, $sql);

        if (mysqli_num_rows($qry) == 1) {

            $password = md5($password);
            echo "password hash";
            var_dump($password);
            echo "<br";
            try {
                $row = mysqli_fetch_row($qry);
                $hash = $row[2];
                echo "hash from database";
                var_dump($hash);
                if ($hash == $password) {
                    session_start();

                    $_SESSION["loggedin"] = true;
                    $_SESSION["id"] = $row[0];
                    $_SESSION["username"] = $username;

                    header("location: welcome.php");
                } else {
                    $login_err = "Invalid password.";
                }
            } catch (\Exception $e) {
                var_dump($e->getMessage());
            }

        }
    } else {
        $login_err = "Invalid username or password.";
    }
}

mysqli_close($conn);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link rel="stylesheet" href="../css/index.css">
    <style>
        body {
            font: 14px sans-serif;
        }

        .wrapper {
            width: 360px;
            padding: 20px;
        }
    </style>
</head>
<body>
<div class="wrapper">
    <h2>Login</h2>
    <p>Please fill in your credentials to login.</p>

    <?php
    if (!empty($login_err)) {
        echo $login_err;
    }
    ?>

    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
        <div class="form-group">
            <label>Username</label>
            <input type="text" name="username" value="<?php echo $username; ?>">
            <span class="invalid-feedback"><?php echo $username_err; ?></span>
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" name="password" id="password">
            <span class="invalid-feedback"><?php echo $password_err; ?></span>
        </div>
        <div class="form-group">
            <input type="submit" id="submit" value="Login">
        </div>
        <p>Don't have an account? <a href="authentification.php">Sign up now</a>.</p>
    </form>
</div>
</body>
</html>