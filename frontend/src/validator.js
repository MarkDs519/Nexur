/**
 * 
 * @returns User Input Validator
 */

const validator = () => {
    const validate = {
        // CHECK OF VALID EMAIL
        isValidEmail: (e) => {
            let mail = e.target.value;
            let validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if(!validEmail.test(mail)){
                //console.log("Password should be atleast 8 characters.")
                return false;
            }
            else{
                //data[e.target.name] = mail;
                // set valid password as true
                return true;
                //console.log(newSignUpData["passwordValid"]);
            }
        },
        // CHECK FOR VALID USERNAME
        isValidUsername: (e) => {
            let user = e.target.value;
            if(user.length < 5){
                return false;
            }
            else{
                return true;
            }
              
        },

        // CHECK FOR PASSWORD VALIDATION
        isValidPassword: (e) => {
            let validPass = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
            let pass = e.target.value;
            if(!pass.match(validPass)){
                //console.log("Password should be atleast 8 characters.")
                return false;
            }
            else{
                return true;
            }
                
        }
        
    }
    return validate;
}

module.exports = validator;