// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ['0','1','2','3','4','5','6','7','8','9']
var symbols = ['~','!','@','#','$','%','^','&','*','(',')','_','-','=','+']
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(length, arrChar) {
  var passwordHolder = ""
  console.log(length, arrChar)
  for (var i = 0; i < length; i++) {
    var randomArr = Math.floor(Math.random()*arrChar.length)
    var randomChar = Math.floor(Math.random()*arrChar[randomArr].length)
    passwordHolder = passwordHolder + arrChar[randomArr][randomChar]
    console.log(passwordHolder)
  }
  writePassword(passwordHolder)
}

function characters(length) {
  var arrChar =[]

  if(confirm("Would you like your password to contain lower case letters?  Ok for yes or Cancel for no.")) {
    arrChar.push(lower);
  }

  if(confirm("Would you like your password to contain upper case letters?   Ok for yes or Cancel for no.")) {
    arrChar.push(upper)
  }

  if(confirm("Would you like numbers in your password?  Ok for yes or Cancel for no.")) {
    arrChar.push(numbers)
  }

  if(confirm("Would you like symbols in your password?  Ok for yes or Cancel for no.")) {
    arrChar.push(symbols)
  }

  if(arrChar.length) {
    generatePassword(length, arrChar)
  }

  else {
    alert("You must select as least one character type.")
    characters(length)
  }
}

function  start() {
  var pwlength = prompt("Please enter a number between 8 and 128 for the length of your password.");
  
  if(pwlength < 8 || pwlength > 128) {
    pwlength = alert("Please enter a number between 8 and 128.");
    start()
  }
  
  else {
    characters(pwlength)
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", start);
