window.onload = startup;

function startup() {
    var register = document.getElementById("register");
    var username = document.getElementById("userName");
    var password = document.getElementById("password");

    username.value = "";
    password.value = "";
    
    register.addEventListener("click", checkRegister);      // Adds a event linser to lisen for when the register button is pressed
}
 
function checkRegister() {
    var username = document.getElementById("userName");
    var password = document.getElementById("password");
    var welcome = 0;

    var pattern = new RegExp(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/);        // Setts a pattern of spesial characters so I can check the password agains this, so i can do a quick check if a characker is part of this pattern
    var spesialChar = pattern.test(password.value);     // Does the test if the password has a character or more in the pattern. Retuns a boolen resloul, true if a character mach and false in no character mach

    resetErrorText();       //Clears the paragraf fealds

    username == password ? document.getElementById("samme").innerHTML = "Your username and password can't bee the samme!" : welcome++;      // Test if the passowrd and username is the same

    password.value.length < 8 ? document.getElementById("toShort").innerHTML = "You need a password longer than 8 characters!" : welcome++;     // Test if the password is shorther then 8 characters

    password.value.length > 32 ? document.getElementById("toLong").innerHTML = "Your password can't be lonter that 32 characters!" : welcome++;     //  Test if the passowrd is longer then 32 characters

    spesialChar ? welcome++ : document.getElementById("noSpecialCharacters").innerHTML = "You need a spesial character in your password! Here is a list of all you can use: [ !@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?]";       // Test if the password har some spesial characters regesters in the spesialChar variable

    password.value.match(/[A-Z]/) ? welcome++ : document.getElementById("noUppercase").innerHTML = "You need a upper case letter in your password!";        // Test if the password has uppercase lettesr

    password.value.match(/[0-9]/) ? welcome++ : document.getElementById("noNumbers").innerHTML = "You need a number inn your password!";        // Test if the password has number in it.

    welcomeUser(welcome, username);
}

function resetErrorText() {
    document.getElementById("samme").innerHTML = ""
    document.getElementById("toShort").innerHTML = ""
    document.getElementById("toLong").innerHTML = ""
    document.getElementById("noSpecialCharacters").innerHTML = ""
    document.getElementById("noUppercase").innerHTML = ""
    document.getElementById("noNumbers").innerHTML = ""
}

function welcomeUser(a, b) {
    if (a == 6) {
        alert("Welcome! " + b.value + " you can now log in. If this was more than just a task...")      // If all 6 test are compleat welcome the user
    }
}

/*
TODO:

- Comment
*/