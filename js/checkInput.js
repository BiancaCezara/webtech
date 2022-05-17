// Document is ready
$(document).ready(function () {

    // Validate Username
    $('#user-err').hide();
    let usernameError = true;
    $('#username').keyup(function () {
        validateUsername();
    });
    $('#username').ready(function () {
        validateUsername();
    });
    function validateUsername() {
        usernameError = true;
        let usernameValue = $('#username').val();
        if (usernameValue.length == 0) {
            $('#user-err').show();
            usernameError = false;
            return false;
        } else if ((usernameValue.trim().length < 6) ||
            (usernameValue.trim().length > 20)) {
            $('#user-err').show();
            $('#user-err').html
            ("**length of username must be between 6 and 20");
            $('#user-err').css("color", "red");
            $('#user-err').css("font-family", "Noto Sans Adlam");
            usernameError = false;
            return false;
        } else if (!usernameValue.match(/^[A-Za-z0-9_]+$/)) {
            $('#user-err').show();
            $('#user-err').html("Username should only contain characters, numbers and underscores");
            $('#user-err').css("color", "red");
            $('#user-err').css("font-family", "Noto Sans Adlam");
            usernameError = false;
            return false;
        } else {
            $('#user-err').hide();
        }
    }

// Validate Password
    $('#password-err').hide();
    let passwordError = true;
    $('#password').keyup(function () {
        validatePassword();
    });

    function validatePassword() {
        passwordError = true;
        let passwordValue =
            $('#password').val();
        if (passwordValue.length == '') {
            $('#password-err').show();
            passwordError = false;
            return false;
        }
        if ((passwordValue.length < 8) ||
            (passwordValue.length > 20)) {
            $('#password-err').show();
            $('#password-err').html
            ("**length of your password must be between 8 and 20");
            $('#password-err').css("color", "red");
            $('#password-err').css("font-family", "Noto Sans Adlam");
            passwordError = false;
            return false;
        } else {
            $('#password-err').hide();
        }
    }
// Validate Confirm Password
    $('#confirm-pass-err').hide();
    let confirmPasswordError = true;
    $('#confirm-password').keyup(function () {
        validateConfirmPassword();
    });

    function validateConfirmPassword() {
        confirmPasswordError = true;
        let confirmPasswordValue =
            $('#confirm-password').val();
        let passwordValue =
            $('#password').val();
        if (passwordValue != confirmPasswordValue) {
            $('#confirm-pass-err').show();
            $('#confirm-pass-err').html(
                "**Password didn't Match");
            $('#confirm-pass-err').css(
                "color", "red");
            $('#confirm-pass-err').css("font-family", "Noto Sans Adlam");
            confirmPasswordError = false;
            return false;
        } else {
            $('#confirm-pass-err').hide();
        }
    }
    $('#authentification-form').submit(function (e) {
        e.preventDefault();
        alert("test");
        if ($('#confirm-pass-err').is(':hidden') && $('#password-err').is(':hidden') && $('#user-err').is(':hidden')){
            $.ajax({
                method: "POST",
                url: "authentification.php",
                data: $('#authentification-form').serialize(),
                dataType: 'JSON',
                success: function (response) {
                    console.log(response);
                    alert('Your account has been created');
                },
                error: function (err){
                    console.log(err);
                },
                finally: function (message){
                    console.log(message);
                }
            });
            $('#authentification-form')[0].reset();
        }
    });
    return false;
});

