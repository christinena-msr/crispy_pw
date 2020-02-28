// The user will be prompted to choose from the following password criteria:
// Length (must be between 8 and 128 characters)
// Character type:
//  Special characters (see examples)
//  Numeric characters
//  Lowercase characters
//  Uppercase characters
// The application should validate user input and ensure that at least one character type is selected.

var password = document.querySelectorAll("textarea")[0];
var genButton = document.querySelectorAll("button")[0];
var copyButton = document.querySelectorAll("button")[1];

var upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerArray = upperArray.toLowerCase();
var charArray = " !\"#$%&\'()*+-./:;<=>?@[\\]^_`{|}~";
var numArray = "0123456789";
var specArray = [charArray, numArray, lowerArray, upperArray];
console.log(upperArray);
console.log(lowerArray);
console.log(charArray);
console.log(numArray);

var special = false;
var numeric = false;
var lowercase = false;
var uppercase = false;
var reqArray = ["special", "numeric", "lowercase", "uppercase"];
var boolArray = [special, numeric, lowercase, uppercase];

var pass = "";
var charString = "";

// prompt user for password specs
function generatePassword () {
    password.textContent = "";
    var pwlength = prompt("Enter desired password length (must be between 8 - 128): ");
    if (pwlength >= 8 && pwlength <=128) {
        console.log(pwlength);
        boolArray = characterType(reqArray, boolArray);
        console.log(boolArray);
        let validate = 0;
        for (let i=0; i<boolArray.length; i++) {
            if (boolArray[i]) {
                validate++;
            }
        }
        if (validate == 0) {
            boolArray = characterType(reqArray, boolArray);
        }
        for (let i=0; i<boolArray.length; i++) {
            if(boolArray[i]) {
                charString += specArray[i];
                console.log(charString);
            }
        }
        console.log(specArray);
        for (let i = 0; i < pwlength; i++) {
            pass += charString[Math.floor(Math.random() * Math.floor(charString.length))];
        }
        console.log(pass);
        password.textContent = pass;
    } else if (pwlength != null){
        alert("Password length must be between 8 - 128 characters.");
        generatePassword();
    } 
}

// validate user input matches y/n criteria
function characterType (typeArr, typeBool) {
    //type is a boolean
    let num = 0;
    for (let i=0; i<typeBool.length; i++) {
        let type = prompt("Include " + typeArr[i] + " characters? (enter y or n)");
        if (type == "y") {
            typeBool[i] = true;
            num++;
            console.log(typeBool[i]);
        } else if (type == "n") {
            typeBool[i] = false;
            console.log(type);
        }
    }
    if (num == 0) {    
        alert("You must include at least one type of character.");   
        characterType(typeArr, typeBool);
    }
    return typeBool;
}

generatePassword();
genButton.addEventListener("click", function() {
    pass = "";
    password.textContent = "";
    generatePassword();
});
copyButton.addEventListener("click", function() {
    password.select();
    document.execCommand("copy");
});