//password generator will create a random password between 8-50 characters which may include;numbers, lower case letters, upper case letters, and special characters.
//global variables

//database:numbers, lower case letters, upper case letters, and special characters
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //number array
//lower case letter array
//upper case letter array
//special characters array
let passwordLength = 5;
let ranNumber = randomNumber(10);
console.log(ranNumber);
let password = number[ranNumber];
// Assignment code here

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// This function will generate the password & return it to the correct password
function generatePassword() {
  //build up a password using random numbers as long as the length
  return password;
}

function randomNumber(max) {
  return Math.floor(Math.random() * max); //generates random
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
