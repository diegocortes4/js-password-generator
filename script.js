// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperLetters = ["A","B","C"]
var lowerCase = ["a","b","c"]
var numberS = ["1","2","3","4","5","6","7","8","9"]
var symbolS = ["!","?","@"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var password = prompt("How long will you like your password?");
  var userupper = confirm("Would you like to use upper case letters?");
  var lower = confirm("Would you like to use lower case letters?");
  var numberS = confirm("Would you like to use numbers?");
  var symbolS = confirm("Would you like to use symbols?");
  var masterCaracterArrey = []


  if (userupper) {
   masterCaracterArrey = masterCaracterArrey.concat(upperLetters);
}
if (lower) {
   masterCaracterArrey = masterCaracterArrey.concat(lowerCase); 
}
if (numberS) {
  masterCaracterArrey = masterCaracterArrey.concat(numberS); 
}
if (symbolS) {
  masterCaracterArrey = masterCaracterArrey.concat(symbolS); 
}
 
console.log(masterCaracterArrey) 

  
var finalPassword = ""
for (let index = 0; index < password; index++) {
  var randomindex = Math.floor(Math.random() * masterCaracterArrey.length);
  const element = masterCaracterArrey[randomindex];
  finalPassword = finalPassword+element

}





  
  return finalPassword



 
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



 