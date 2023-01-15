// Assignment code here

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

const lowercasePassword = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const uppercasePassword = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numericsPassword = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharPassword = [
  "+",
  "-",
  "&",
  "|",
  "!",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  "^",
  "~",
  "*",
  "?",
  ":",
];
function generatePassword() {
  var allChars = [];
  let lengthMinMax = prompt("What length of characters from 8 to 128?");
  while (lengthMinMax < 8 || lengthMinMax > 128) {
    lengthMinMax = prompt(
      "That is not valid. What length of characters from 8 to 128?"
    );
  }
  let lowC = confirm("Do you want to include lowercase?");
  if (lowC === true) {
    allChars = allChars.concat(lowercasePassword);
    console.log(allChars);
  }
  let upC = confirm("Do you want to include uppercase?");
  if (upC === true) {
    allChars = allChars.concat(uppercasePassword);
    console.log(allChars);
  }
  let numChars = confirm("Do you want to include numerics?");
  if (numChars === true) {
    allChars = allChars.concat(numericsPassword);
    console.log(allChars);
  }
  let specChars = confirm("Do you want to include special characters?");
  if (specChars === true) {
    allChars = allChars.concat(specialCharPassword);
    console.log(allChars);
  }
  let password = "";
  for (let i = 0; i < lengthMinMax; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password = password.concat(allChars[randomIndex]);
  }
  console.log(password);
  return password;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
