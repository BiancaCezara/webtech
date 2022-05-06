<?php


$conn = mysqli_connect("localhost:3306", "root", "mysqlpass123", "new_schema");


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['submit-button'])) {

    $article_idea = $_POST['article-idea'];

    if ($_POST['article-idea'] != "") {
        $article_ideas = explode('/', $article_idea);
        foreach ($article_ideas as $value) {
            $value = trim($value);
            $sql = "INSERT INTO `article-ideas` (article_idea) VALUES ('$value')";
            $rs = mysqli_query($conn, $sql);
    }
        if ($rs) {
            echo "<html lang='en'>
                      <head> 
                        <title>Thank you for sending your idea!</title>
                        <link rel='stylesheet' href='../css/index.css'>  
                      </head>
                      <body class='contacts-body'>
                            <img class='contacts-bg' src='../images/contacts-pg.jpeg' alt='Contacts Background'>                       
                            <header>
                                <div class='topnav-contacts'>
                                    <a href='../pages/index.html'>Home</a>
                                    <a href='../pages/coffeetalks.html'>Coffee Talks</a>
                                    <a class='active' href='../pages/contacts.html'>Contacts</a>
                                    <a href='../pages/internationalcoffeeday.html'>International Coffee Day</a>
                                </div>
                            </header>
                        </div>
                        <div class='contacts-content'>
                            <div id='user-input-response'> Successfully saved </div>    
                        </div>                            
                    </body>
                    </html>";
        }
    }
}
?>
