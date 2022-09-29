// Group of characters for password
const strSpecialCharactersRange = "!@#$%^&*()<>,.";
const strUppercaseRange = "QWERTYUIOPASDFGHJKLZXCVBNM";
const strLowercaseRange = "qwertyuiopasdfghjklzxcvbnm";
const strNumericRange = "1234567890";

// Generate password function
function generatePassword() {
  let passwordLengthValue = passwordLength();
  let isUppercase = uppercase();
  let isLowercase = lowercase();
  let isNumeric = numeric();
  let isSpecialCharacters = specialCharacters();

  let selectedCharactersUserChoice = "";
  if (isLowercase) {
    selectedCharactersUserChoice += strLowercaseRange;
  }
  if (isUppercase) {
    selectedCharactersUserChoice += strUppercaseRange;
  }
  if (isNumeric) {
    selectedCharactersUserChoice += strNumericRange;
  }
  if (isSpecialCharacters) {
    selectedCharactersUserChoice += strSpecialCharactersRange;
  }

  let selectedCharactersUserChoiceLength = selectedCharactersUserChoice.length;
  if (selectedCharactersUserChoiceLength>0) {
    function getRandomInt(selectedCharactersUserChoiceLength) {
      return Math.floor(Math.random() * selectedCharactersUserChoiceLength); // The maximum is exclusive and the minimum is inclusive
    }
    
    var newPassword = "";
    while(passwordLengthValue--) {
      let charIndex = getRandomInt(selectedCharactersUserChoiceLength);
      newPassword += selectedCharactersUserChoice.charAt(charIndex); 
    }
    return newPassword;
  } else {
    return null;
  }
  
}

// Functions for prompt messages
function passwordLength() {
  let length = Number(window.prompt("Password length: ", "20"));
  if (length>=8 && length<=128) {
    return length;  
  } else {
    window.alert("Password length should be at least 8 characters and no more than 128 characters.")
    passwordLength();
  }
}    
function uppercase() {
  let uppercaseValue = window.prompt("Lowercase (Yes / No): ", "Yes");
  if (uppercaseValue.toLowerCase() === "yes") {
    return true;  
  } else if (uppercaseValue.toLowerCase() === "no") {
    return false;
  } else {
    window.alert ("Accepted Values: Yes or No")
    uppercase();
  }
}

function lowercase() {
  let lowercaseValue = window.prompt("Lowercase (Yes / No): ", "Yes");
  if (lowercaseValue.toLowerCase() === "yes") {
    return true;  
  } else if (lowercaseValue.toLowerCase() === "no") {
    return false;
  } else {
    window.alert ("Accepted Values: Yes or No")
    lowercase();
  }
}

function numeric() {
  let numericValue = window.prompt("Numeric (Yes / No): ", "Yes");
  if (numericValue.toLowerCase() === "yes") {
    return true;  
  } else if (numericValue.toLowerCase() === "no") {
    return false;
  } else {
    window.alert ("Accepted Values: Yes or No")
    numeric();
  }
}

function specialCharacters() {
  let specialCharactersValue = window.prompt("Special Characters (Yes / No): ", "Yes");
  if (specialCharactersValue.toLowerCase() === "yes") {
    return true;  
  } else if (specialCharactersValue.toLowerCase() === "no") {
    return false;
  } else {
    window.alert ("Accepted Values: Yes or No")
    specialCharacters();
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
