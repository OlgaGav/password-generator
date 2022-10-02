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
/* 
Call prompt pop-up windows with questions of user preferences
If user select cancel at any prompt window (validation for null) - it's assumed that user want to cancel this process
When user answer the preferences - random passowrd will be returned.
*/
  passwordLengthValue = passwordLength();
  if (passwordLengthValue===null) {
    return;
  }
  isUppercase = uppercase();
  if (isUppercase===null) {
    return;
  } 
  isLowercase = lowercase();
  if (isLowercase===null) {
    return;
  } 
  isNumeric = numeric();
  if (isNumeric===null) {
    return;
  }
  isSpecialCharacters = specialCharacters();
  if (isSpecialCharacters===null) {
    return;
  }
// initialize ranges based on user's answers
  let inclusionRanges = [];
  if (isUppercase === 1) {
    inclusionRanges.push({range:strUppercaseRange, isPresent: false});
  }
  if (isLowercase === 1) {
    inclusionRanges.push({range:strLowercaseRange, isPresent: false});
  }
  if (isNumeric === 1) {
    inclusionRanges.push({range:strNumericRange, isPresent: false});
  }
  if (isSpecialCharacters === 1) {
    inclusionRanges.push({range:strSpecialCharactersRange, isPresent: false});
  }
    /*validate that user selected at least one group of characters
  New Password is generated when selected at least one group of characters*/
  if (inclusionRanges.length === 0) {
    window.alert("To generate password you have to select at least one group of characters."
    +"If you want to try again, please click [Generate Password] button on the main screen."
    +"\nAnswer 'Yes' to at least one group of characters: "
    +"\n - lowercase \n - uppercase "
    +"\n - numeric \n - special characters");
    return;
  }
  // prepare selectedCharactersUserChoice variable which is used to generate password by user's choice group of characters.
  let selectedCharactersUserChoice = "";
  inclusionRanges.forEach(r => selectedCharactersUserChoice+=r.range);

  while (true) {
    let newPassword = randomPassword(passwordLengthValue, selectedCharactersUserChoice);
    console.log(newPassword);
    if (validateInclusion(newPassword, inclusionRanges)) {
      return newPassword;
    }
  }
}

// function to generate password with selected length and 1 or 0 to include group of chracters or not
function randomPassword(passwordLengthValue, selectedCharactersUserChoice) {

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

function validateInclusion(password, inclusionRanges) {
  for (let i=0; i<password.length; i++){
    let testChar = password.charAt(i);
    for (let j=0; j<inclusionRanges.length; j++) {
      let rangeVal = inclusionRanges[j];
      if (!rangeVal.isPresent) {
        if (rangeVal.range.indexOf(testChar)>=0) {
          rangeVal.isPresent = true;
        }
      }
    }
  }

  for (let j=0; j<inclusionRanges.length; j++) {
    let rangeVal = inclusionRanges[j];
    if (!rangeVal.isPresent) {
      return false;
    }
  }
  return true;
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
