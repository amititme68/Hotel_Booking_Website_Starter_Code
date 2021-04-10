let headerTemplate = `<header class="header-footer">
<a href="index.html" class="logo">
    <img src="assests/images/logo.png" id="logo-image" alt="logo"/>
</a>
<button type="button" id="login" class="btn btn-light btn-sm" data-toggle="modal" data-backdrop="false"
    data-target="#login-modal">LOGIN</button>

<button type="button" id="logout" onclick = "logout()" class="btn btn-light btn-sm" data-toggle="modal" data-backdrop="false">LOGOUT</button>

<div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="login-modal-label"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="login-modal-label">Please Login</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="login-form">
                    <div class="login-field">
                        <label for="username">Username: </label>
                        <input type="text" id="username" name="username" placeholder="Enter Username"
                            required />
                    </div>
                    <div class="login-field">
                        <label for="password">Password: </label>
                        <input type="password" id="password" name="password" placeholder="Enter Password"
                            required />
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button id="login-button" type="button" onclick = "login()" class="btn btn-primary"
                    data-dismiss="modal">Login</button>
            </div>
        </div>
    </div>
</div>
</header>`;

document.getElementById("headers").innerHTML = headerTemplate;

// To store user and password in local storage
localStorage.setItem("user","admin");
localStorage.setItem("pass","admin");

function login(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    var user1 = localStorage.getItem("user");
    var pass1 = localStorage.getItem("pass");

    if(user ==user1 && pass == pass1){
        alert("Successfully loggedin");
        document.getElementById("logout").style.display = "flex";
        document.getElementById("login").style.display = "none";

     // To enable pay now button in payment.html page
        document.getElementById("pay-now").disabled = false;
       
        
    }else{
        alert("Login Unsuccessful");
    }
}

function logout(){
    document.getElementById("logout").style.display = "none";
        document.getElementById("login").style.display = "flex";

    // To disable pay now button in payment.html page
        document.getElementById("pay-now").disabled = true;

        window.location.reload();
}

let footerTemplate = `<footer class="header-footer">
<div id="contact">
    <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-backdrop="false"
        data-target="#contact-modal">Contact Us</button>

    <div class="modal fade" id="contact-modal" tabindex="-1" role="dialog"
        aria-labelledby="contact-modal-label" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="contact-modal-label">Get in touch</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <p>
                            Thank you for reaching out!!! <br>
                            Please enter you email and we will get back to you.
                        </p>
                        <label for="email">Email: </label>
                        <input type="text" id="email" name="email" placeholder="Enter your email id"
                            required>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Sumbit</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="copyright-text">
    © 2020 ROOM SEARCH PVT. LTD.
</div>
<div id="social-media-images">
    <a href="https://www.facebook.com" target="_blank">
        <img src="assests/images/facebook.png" class="social-media-image">
    </a>
    <a href="https://www.instagram.com" target="_blank">
        <img src="assests/images/instagram.png" class="social-media-image">
    </a>
    <a href="https://twitter.com" target="_blank">
        <img src="assests/images/twitter.png" class="social-media-image">
    </a>
</div>
</footer>`;

document.getElementById("footers").innerHTML = footerTemplate;

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "body").style.visibility = "hidden";
        document.querySelector(
          "#loader").style.visibility = "visible";
    } else {
        document.querySelector(
          "#loader").style.display = "none";
        document.querySelector(
          "body").style.visibility = "visible";
    }
}

