// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperLetters = ["A","B","C"]
var lowerCase = ["a","b","c"]
var numbers = ["1","2","3"]
var symbols = ["!","?","@"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var password = prompt("How long will you like your password?");
  var userupper = confirm("Would you like to use upper case letters?")
  var lower = confirm("Would you like to use lower case letters?")
  var masterCaracterArrey = []

}if (userupper) {
  masterCaracterArrey = masterCaracterArrey.concat(upperLetters);
}
if (lower) {
  masterCaracterArrey = masterCaracterArrey.concat(lowerCase); 
}
console.log(masterCaracterArrey) 





 
 return finalPassword




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



 