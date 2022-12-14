//password generator will create a random password between 8-50 characters which may include;numbers, lower case letters, upper case letters, and special characters.
//global variables

//database:numbers, lower case letters, upper case letters, and special characters
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //number array
let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //lower case letter array
let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; //upper case letter array
let special = ["@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."]; //special characters array
let password = [];

// Assignment code here

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// This function will generate the password & return it to the correct password
function generatePassword() {
  let allChoices = [];
  let passwordLength = window.prompt("Choose a number between 8-50 for your password length.");
  //TODO: validate that they entered a number between 8 and 50

  if (passwordLength < 8 || passwordLength > 50 || isNaN(passwordLength)) {
    alert("You must choose a number between 8 and 50");
    return null;
  }
  console.log(passwordLength);
  //ask if they want numbers
  let isNumbers = window.confirm("Would you like to include numbers?");
  //ask if they want lower case letters
  let isLower = window.confirm("Would you like to include lower case letters?");
  //ask if they want upper case letters
  let isUpper = window.confirm("Would you like to include upper case letters?");
  //ask if they want special characters
  let isSpecial = window.confirm("Would you like to include special characters?");

  if (isNumbers === false && isSpecial === false && isLower === false && isUpper === false) {
    alert("You must choose at least one option");
    return null;
  }

  //build up a password using random numbers as long as the length
  password = [];
  if (isNumbers === true) {
    //TODO: pick one random number and push it into password
    allChoices = allChoices.concat(number);
  }
  if (isLower === true) {
    allChoices = allChoices.concat(lower);
  }
  if (isUpper === true) {
    allChoices = allChoices.concat(upper);
  }
  if (isSpecial === true) {
    allChoices = allChoices.concat(special);
  }

  for (let i = 0; i < passwordLength; i++) {
    let maximum = allChoices.length - 1;
    let minimum = 0;
    let rnd = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    password.push(allChoices[rnd]);
    console.log(password);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password.join(" ");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
