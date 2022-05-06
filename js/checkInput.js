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
        let usernameValue = $('#username').val();
        if (usernameValue.length == 0) {
            $('#user-err').show();
            usernameError = false;
            return false;
        }
        else if((usernameValue.trim().length < 8)||
            (usernameValue.trim().length > 20)) {
            $('#user-err').show();
            $('#user-err').html
            ("**length of username must be between 8 and 20");
            usernameError = false;
            return false;
        }
        else if(!usernameValue.match(/^[A-Za-z0-9_]+$/)){
            $('#user-err').show();
            $('#user-err').html("Username should only contain characters, numbers and underscores");
            usernameError = false;
            return false;
        }
        else {
            $('#user-err').hide();
        }
    }

// Validate Password
    $('#passcheck').hide();
    let passwordError = true;
    $('#password').keyup(function () {
        validatePassword();
    });
    function validatePassword() {
        let passwordValue =
            $('#password').val();
        if (passwordValue.length == '') {
            $('#password-err').show();
            passwordError = false;
            return false;
        }
        if ((passwordValue.length < 8)||
            (passwordValue.length > 20)) {
            $('#password-err').show();
            $('#password-err').html
            ("**length of your password must be between 8 and 20");
            $('#password-err').css("color", "red");
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
            confirmPasswordError = false;
            return false;
        } else {
            $('#confirm-pass-err').hide();
        }
    }

// Submit button
    $('#submit').click(function () {
        validateUsername();
        validatePassword();
        validateConfirmPassword();
        return (usernameError == false) &&
            (passwordError == false) &&
            (confirmPasswordError == false);
    });
});

