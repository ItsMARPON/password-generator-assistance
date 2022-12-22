// Assignment code here


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

let userInputName = '';
userInputName ? console.log(`Hello ${userInputName}!`) :
console.log('Hello!');

const lowercasePassword = true;
const uppercasePassword = true;
const numericsPassword = true;
const specialCharPassword = true;


let lengthMinMax = prompt("What length of characters from 8 to 128?");
let lowC = prompt("Do you want to include lowercase?");
let upC= prompt("Do you want to include uppercase?");
let numChars = prompt("Do you want to include numerics?");
let specChars = prompt("Do you want to include special characters?");
let passwordUserPrompt = console.log(lengthMinMax + lowC + upC + numChars + specChars);
// Write password to the #password input
function writePassword() {
  let password = generatePassword(Math.floor(Math.random() * 128));
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}
console.log(passwordText.value);


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


