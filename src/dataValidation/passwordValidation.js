/**
 * @param {string} value: passwordValue
 */



 const checkPasswordValidity = (value) => {
    try{
        const isNonWhiteSpace = /^\S*$/;
        if (!isNonWhiteSpace.test(value)) {
          return "Password must not contain Whitespaces.";
        }
      
        const isContainsUppercase = /^(?=.*[A-Z]).*$/;
        if (!isContainsUppercase.test(value)) {
          return "Password must have at least one Uppercase Character.";
        }
      
        const isContainsLowercase = /^(?=.*[a-z]).*$/;
        if (!isContainsLowercase.test(value)) {
          return "Password must have at least one Lowercase Character.";
        }
      
        const isContainsNumber = /^(?=.*[0-9]).*$/;
        if (!isContainsNumber.test(value)) {
          return "Password must contain at least one Digit.";
        }
      
        const isContainsSymbol =
          /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
        if (!isContainsSymbol.test(value)) {
          return "Password must contain at least one Special Symbol.";
        }
      
        const isValidLength = /^.{8,16}$/;
        if (!isValidLength.test(value)) {
          return "Password must be 8-16 Characters Long.";
        }
    }catch(err){
        res.status(500).send({status: false, msg : err.message})
    }
  }
  


module.exports = {checkPasswordValidity}

  //------------------
//   // Usage/Example:
//   let yourPassword = "yourPassword123";
//   const message = checkPasswordValidity(yourPassword);
  
//   if (!message) {
//     console.log("Hurray! Your Password is Valid and Strong.");
//   } else {
//     console.log(message);
//   }