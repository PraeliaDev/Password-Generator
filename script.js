// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


function generatePassword(){

  var numerical  = '1234567890'
  var lower = 'abcdefghijklmnopqrstuvwxyz'
  var upper ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var special = '!@£$%^&*()_+-=±'


  var password =''
  var passwordOptions =''


  // enter a number, check if is a number, we need check the value of the number

  var length = parseInt(
    prompt('choose password length, bwtween 8 amd 128')
    
  )

 //checking if it is a number
  if(Number.isNaN(length)){

    alert('Please enter a valid number between 8 and 128');
    return Null

  }

  //checking if number between 8 and 128

  if(length < 8 || length > 128){
    alert('Please enter a number between 8 and 128')
    return null
  }


  var hasNumerical = confirm(
    'do you want numbers in your password'
  )

  var hasLower = confirm(
    'would you like to include lower case characters?'
  )

  var hasUpper = confirm(
    'would you like to inclue upper case characters?'
  )
  
  var hasSpecial = confirm(
    'Would you like to include special characters?'
  )


  //check at least one election has been made

  if(hasNumerical === false && hasLower === false && hasUpper === false && hasSpecial === false){
    alert('Please select at least one option')
    return null
  }


  //i

  function includeNumbers(){
    return numerical[Math.floor(Math.random()* numerical.length)]
  }


  function includeLower(){
    return lower[Math.floor(Math.random()* lower.length)]
  }

  function includeUpper(){
    return upper[Math.floor(Math.random()*upper.length)]
  }

  function includeSpecial(){
    return special[Math.floor(Math.random()*special.length)]
  }

  if(hasNumerical === true){
    var randomNumber = includeNumbers();
    passwordOptions += numerical
  }

  if(hasLower === true){
    var randomLower = includeLower();
    passwordOptions += lower
  }  

  if(hasUpper === true){
    var randomUpper = includeUpper();
    passwordOptions += upper
  }

  if(hasSpecial === true){
    var randomSpecial = includeSpecial();
    passwordOptions += special
  }

    for(var i = password.length; i < length; i++){
      password += passwordOptions[Math.floor(Math.random()* passwordOptions.length)]
    }



  



passwordText.value = password;



}











// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
  

  

// }

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
