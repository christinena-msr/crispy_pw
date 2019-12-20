// The user will be prompted to choose from the following password criteria:
// Length (must be between 8 and 128 characters)
// Character type:
//  Special characters (see examples)
//  Numeric characters
//  Lowercase characters
//  Uppercase characters
// The application should validate user input and ensure that at least one character type is selected.

var password = document.querySelector("password");
var genButton = document.querySelector("generate");
var copyButton = document.querySelector("copy");

var upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
upperArray = upperArray.split("");
console.log(upperArray);
var lowerArray = upperArray.toLowerCase;
var charArray = " !\"#$%&\'()*+-./:;<=>?@[\\]^_`{|}~";
charArray = charArray.split("");
console.log(charArray);
var numArray = "0123456789";
numArray = numArray.split("");
console.log(numArray);

var length = 0;
var special = false;
var numeric = false;
var lowercase = false;
var uppercase = false;
var validate = 0;

// prompt user for password specs
function getUserData () {
    while (length < 8 || length > 128) {
        length = prompt("Enter desired password length (must be between 8 - 128): ")
    }
    characterType(special);
    characterType(numeric);
    characterType(lowercase);
    characterType(uppercase);
    if (validate < 1) {
        getUserData();
    }
}

// validate user input matches y/n criteria
function characterType (type) {
    while (type != "y" || type != "n") {
        type = prompt("Include " + type + " characters? (y/n) ");
    }
    if (type == "y") {
        type = true;
        validate++
    } else if (type == "n") {
        type = false;
    }
}

function generatePassword() {
    let index = 0;
    let passArray;
    if (special) {
        passArray += charArray;
    }
    if (numeric) {
        passArray += numArray;
    }
    if (lowercase) {
        passArray += lowerArray;
    }
    if (uppercase) {
        passArray += upperArray;
    }
    console.log(passArray);
    // while (password.textContent.length < length) {
    //     var char = passArray[Math.random(passArray.length)];
    //     password.textContent[i] = passArray[Math.random(passArray.length)][]
    // }
}
getUserData();
genButton.addEventListener("click", generatePassword);