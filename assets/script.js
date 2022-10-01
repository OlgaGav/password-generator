// Group of characters for password
const strSpecialCharactersRange = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const strUppercaseRange = "QWERTYUIOPASDFGHJKLZXCVBNM";
const strLowercaseRange = "qwertyuiopasdfghjklzxcvbnm";
const strNumericRange = "1234567890";

// Generate password function
function generatePassword() {
  let passwordLengthValue;
  let isUppercase;
  let isLowercase;
  let isNumeric;
  let isSpecialCharacters;
  let selectedCharactersUserChoice = "";
  let status = false;

/* 
Call prompt pop-up windows with questions of user preferences
if user select cancel at any prompt window (validation for null) - it's assumed that user want to cancel this process
selectedCharactersUserChoice variable is used to generate string with symbols by user choice.
*/
  passwordLengthValue = passwordLength();
  if (passwordLengthValue>=8 && passwordLengthValue<=128) {
    isUppercase = uppercase();
    if (isUppercase!=null) {
      if (isUppercase === 1) {
        selectedCharactersUserChoice += strUppercaseRange;
      }
      isLowercase = lowercase();
      if (isLowercase!=null) {
        if (isLowercase === 1) {
          selectedCharactersUserChoice += strLowercaseRange;
        }
        isNumeric = numeric();
        if (isNumeric!=null) {
          if (isNumeric === 1) {
            selectedCharactersUserChoice += strNumericRange;
          }
          isSpecialCharacters = specialCharacters();
          if (isSpecialCharacters!=null) {
            status = true;
            if (isSpecialCharacters === 1) {
              selectedCharactersUserChoice += strSpecialCharactersRange;
            }
          }
        } 
      } 
    } 
  }

    /*validate that user selected at least one group of characters
    New Password is generated when selected at least one group of characters*/
    if (isLowercase===0 && isUppercase===0 && isNumeric===0 && isSpecialCharacters===0) {
      window.alert("To generate password you have to select at least one group of characters."
      +"If you want to try again, please click [Generate Password] button on the main screen."
      +"\nAnswer 'Yes' to at least one group of characters: "
      +"\n - lowercase \n - uppercase "
      +"\n - numeric \n - special characters");
    } else {
      let selectedCharactersUserChoiceLength = selectedCharactersUserChoice.length;
      function getRandomInt(selectedCharactersUserChoiceLength) {
        return Math.floor(Math.random() * selectedCharactersUserChoiceLength);
      }
      
      var newPassword = "";
      while(passwordLengthValue--) {
        let charIndex = getRandomInt(selectedCharactersUserChoiceLength);
        newPassword += selectedCharactersUserChoice.charAt(charIndex); 
      }
      return newPassword;
    }
  }

// Functions to call prompt messages.
// prompt message with question about the password length
function passwordLength() {
  while (true) {
    let answer = window.prompt("Password length (8 - 128): ", 20);
    if (answer) {
      if (answer>=8 && answer<=128) {
        return answer;
      }
      if (typeof answer ==='string') {
        let isContinue = window.confirm("Expected input a number from 8 up to 128. "
        + "\n\nPassword length should be at least 8 characters and no more than 128 characters. "
        + "If you want to try again, please click [Generate Password] button on the main screen.");
        if (!isContinue) {
          return null;
        }
      }
    }
  }
}

function uppercase() {
  while (true) {
    let uppercaseValue = window.prompt("Uppercase (Yes / No): ", "Yes");
    if (uppercaseValue) {
      if (uppercaseValue.toLowerCase() === "yes") {
        return 1;  
      } else if (uppercaseValue.toLowerCase() === "no") {
        return 0;
      } else {
        let isContinue = window.confirm ("Accepted Values: Yes or No. Do you want to contunue?");
        if (!isContinue) {
          return null;
        }
      }
    }
  }
}

function lowercase() {
  while (true) {
    let lowercaseValue = window.prompt("Lowercase (Yes / No): ", "Yes");
    if (lowercaseValue) {
      if (lowercaseValue.toLowerCase() === "yes") {
        return 1;  
      } else if (lowercaseValue.toLowerCase() === "no") {
        return 0;
      } else {
        let isContinue = window.confirm ("Accepted Values: Yes or No. Do you want to contunue?");
        if (!isContinue) {
          return null;
        }
      }
    }
  }
}

function numeric() {
  let numericValue = window.prompt("Numeric (Yes / No): ", "Yes");
  if (numericValue.toLowerCase() === "yes") {
    return 1;  
  } else if (numericValue.toLowerCase() === "no") {
    return 0;
  } else {
    window.confirm ("Accepted Values: Yes or No. Do you want to contunue?");
  }
}

function specialCharacters() {
  while (true) {
    let specialCharactersValue = window.prompt("Special Characters (Yes / No): ", "Yes");
    if (specialCharactersValue.toLowerCase() === "yes") {
      return 1;  
    } else if (specialCharactersValue.toLowerCase() === "no") {
      return 0;
    } else {
      let isContinue = window.confirm ("Accepted Values: Yes or No. Do you want to contunue?");
      if (!isContinue) {
        return null;
      }
    }
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
