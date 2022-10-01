// Generate password function
function generatePassword() {
  let passwordLengthValue;
  let isUppercase;
  let isLowercase;
  let isNumeric;
  let isSpecialCharacters;
  let status = false;

/* 
Call prompt pop-up windows with questions of user preferences
If user select cancel at any prompt window (validation for null) - it's assumed that user want to cancel this process
When user answer the preferences - random passowrd will be returned.
*/
  passwordLengthValue = passwordLength();
  if (passwordLengthValue>=8 && passwordLengthValue<=128) {
    isUppercase = uppercase();
    if (isUppercase!=null) {
      isLowercase = lowercase();
      if (isLowercase!=null) {
        isNumeric = numeric();
        if (isNumeric!=null) {
          isSpecialCharacters = specialCharacters();
          if (isSpecialCharacters!=null) {
            status = true;
            return randomPassword(passwordLengthValue, isUppercase, isLowercase, isNumeric, isSpecialCharacters);
          }
        } 
      } 
    } 
  }
}

// function to generate password with selected length and 1 or 0 to include group of chracters or not
function randomPassword(passwordLengthValue, isUppercase, isLowercase, isNumeric, isSpecialCharacters) {
  // Group of characters for password
const strSpecialCharactersRange = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const strUppercaseRange = "QWERTYUIOPASDFGHJKLZXCVBNM";
const strLowercaseRange = "qwertyuiopasdfghjklzxcvbnm";
const strNumericRange = "1234567890";

let selectedCharactersUserChoice = "";
  /*validate that user selected at least one group of characters
  New Password is generated when selected at least one group of characters*/
  if (isLowercase===0 && isUppercase===0 && isNumeric===0 && isSpecialCharacters===0) {
    window.alert("To generate password you have to select at least one group of characters."
    +"If you want to try again, please click [Generate Password] button on the main screen."
    +"\nAnswer 'Yes' to at least one group of characters: "
    +"\n - lowercase \n - uppercase "
    +"\n - numeric \n - special characters");
  } else {
    // prepare selectedCharactersUserChoice variable which is used to generate password by user's choice group of characters.
    if (isUppercase === 1) {selectedCharactersUserChoice += strUppercaseRange;}
    if (isLowercase === 1) {selectedCharactersUserChoice += strLowercaseRange;}
    if (isNumeric === 1) {selectedCharactersUserChoice += strNumericRange;}
    if (isSpecialCharacters === 1) {selectedCharactersUserChoice += strSpecialCharactersRange;}

    let selectedCharactersUserChoiceLength = selectedCharactersUserChoice.length;
    //function to generate random number between 0 and number equal to length of String with characters
    function getRandomInt(selectedCharactersUserChoiceLength) {
      return Math.floor(Math.random() * selectedCharactersUserChoiceLength);
    }
    // genrate random number, find character in the string, using this nuber as index
    var newPassword = "";
    while(passwordLengthValue--) {
      let charIndex = getRandomInt(selectedCharactersUserChoiceLength);
      newPassword += selectedCharactersUserChoice.charAt(charIndex); 
    }
    return newPassword;
  }
}

// Functions to call prompt messages with answer's validation.
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
        + "Click [ OK ] if you want to continue.");
        if (!isContinue) {
          return null;
        }
      }
    } else {
      return null;
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
    } else {
      return null;
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
    } else {
      return null;
    }
  }
}

function numeric() {
  while (true) {
    let numericValue = window.prompt("Numeric (Yes / No): ", "Yes");
    if (numericValue) {
      if (numericValue.toLowerCase() === "yes") {
        return 1;  
      } else if (numericValue.toLowerCase() === "no") {
        return 0;
      } else {
        let isContinue = window.confirm ("Accepted Values: Yes or No. Do you want to contunue?");
        if (!isContinue) {
          return null;
        }
      }
    } else {
      return null;
    }
  }
}

function specialCharacters() {
  while (true) {
    let specialCharactersValue = window.prompt("Special Characters (Yes / No): ", "Yes");
    if (specialCharactersValue) {
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
    } else {
      return null;
    }
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  let isPasswordValid = typeof password;
  if (isPasswordValid != 'undefined') {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
