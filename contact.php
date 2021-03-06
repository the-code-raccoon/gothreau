<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Gothreau | Contact</title>
</head>
<body>
    <div class="page__container">
        <div id="home__rect--1"></div>
        <div id="home__rect--2"></div>
        <div id="home__rect--3"></div>

        <div class="header__container">
            <div class="logo">
                <a href="index.html" >Gothreau</a>
            </div>

            <nav>
                <ul class="nav__links">
                    <li><a href="about.html">a b o u t</a></li>
                    <li><a href="music.html">m u s i c</a></li>
                    <li><a href="contact.php">c o n t a c t</a></li>
                </ul>
            </nav>

            <div class="socials">
                <ul class="socials__links">
                    <li><a href="https://open.spotify.com/artist/0TueEXkLZbVrA2JcB5hkvW?si=JRQL9HlaRdmwG_Q1iAzTZw&dl_branch=1&nd=1" target="_blank"><img src="assets/spotify.svg"></a></li>
                    <li><a href="https://www.instagram.com/eastyorksfinest" target="_blank"><img src="assets/instagram.svg"></a></li> 
                    <li><a href="https://www.twitter.com/eastyorksfinest" target="_blank"><img src="assets/twitter.svg"></a></li> 
                    <li><a href="https://www.youtube.com/gothreau" target="_blank"><img src="assets/youtube.svg"></a></li> 
                    <li><a href="https://www.twitch.tv/gothreau" target="_blank"><img src="assets/twitch.svg"></a></li>
                    <li><a href="https://www.facebook.com/gothreau" target="_blank"><img src="assets/facebook.svg"></a></li> 
                </ul>
            </div>
        </div>

        <form action="" method="POST" class="contact__container">
            <div class="contact__title">Contact</div>
            <div class="contact__text">Lorem ipsum dolor sit amet. 33 voluptatem quos eum maiores adipisci ab nesciunt perferendis. </div>
            <input type="email" id="contact__input__email" name="contactEmail" placeholder="Email">
            <div class="contact__input__div__name-subject">
                <input type="text" id="contact__input__name" name="contactName" placeholder="Name">
                <input type="text" id="contact__input__subject" name="contactSubject" placeholder="Subject">
            </div>
            <textarea id="contact__input__msg" name="contactMsg" placeholder="Message"></textarea>
            <input type="submit" onclick="alert('Submitted!')" value="Submit" class="button button_submit">
        </form>

    </div>
</body>
</html>