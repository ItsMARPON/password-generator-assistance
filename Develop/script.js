// Assignment code here

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

let userInputName = 'Mary';
userInputName ? console.log(`Hello ${userInputName}!`) :
console.log('Hello!');

// Write password to the #password input
function writePassword() {
  let password = generatePassword(Math.floor(Math.random() * 128));
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}
console.log(passwordText.value);

switch(passwordText.value){
  case 1:
    console.log("What length of characters from 8 to 128?");
    break;
  case 2:
    console.log("Do you want to include lowercase?");
    break;
  case 3:
    console.log("Do you want to include uppercase?");
    break;
  case 4:
    console.log("Do you want to include numerics?");
    break;
  case 5:
    console.log("Do you want to include special characters?");
    break;
}
console.log(passwordText.value);

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


