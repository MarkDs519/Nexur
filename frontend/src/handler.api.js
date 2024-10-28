// handler api

const handlerapi = (creds) => {
    let params = {
        ccPrivateKey: creds.privateKey
    }
    var validator = require('./validator.js');
    var validate = validator();
    // handler function
    var handlerInp = {
        params: params,
        // get request to fetch the URL with the parameters 
        get: async(url, params) => {
            try{
                let res = await fetch(url, params);
                let result = res.json();
                console.log("Result: ", result);
                console.log("Successfully fetched ", url, "with parameters ", params);
                return result;
            }
            catch(err){
                console.log("Failed to fetch ", url, "with parameters ", params);
                console.log(err);
            }
            return false;
        },
        // connect to azure database server
        connectAzureServer: async(data) => {
            let parameters = {
                method: "POST",
                mode: "cors", 
                //redirect: 'follow',
                body: JSON.stringify(data),
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }
            };
            let response = await handlerInp.get("/Register/posts", parameters);
            return response;
        },

        // add user to Azure db
        addUserAzure: async(signUpData, setSignUpData) => {
            try{
                let response = await handlerInp.connectAzureServer(signUpData);
                setSignUpData([response]);
                //console.log(signUpData);
                return signUpData;
            }
            catch(err){
                console.log("Failed to insert data to Azure - ", err);
            }
            return false;
        },

        // file upload handler
        fileSubmit: async(event, file) => {
            event.preventDefault();
            try{
                const formData = new FormData();
                formData.append('file', file);
                //console.log("Successfully added file: ", file);
                //formData.append('fileName', file.name);
                console.log(formData);
                const parameters = {
                    method: "POST",
                    mode: "cors", 
                    body: JSON.stringify(formData),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'multipart/form-data',
                    },
                };
                let response = await handlerInp.get('/printr/uploadFile', parameters);
                console.log(response);
                return response;
            }catch(err){
                console.log("Failed to Upload file - ", err);
            }
            return false;
            
        },

        // sign in handler
        handleSignInInputChange: (event, signInData, setData) => {
            event.preventDefault();
            // change the state as the user types in the data and simultaneously insert the values inside the state
            const newData = {...signInData};
            // USERNAME VALIDATION
            if(event.target.name === "username"){
                if(validate.isValidUsername(event)===true){
                    newData[event.target.name] = event.target.value;
                    // set username valid to true
                    newData["usernameValid"] = true;
                }
                else{
                    newData["usernameValid"] = false;
                }
            }

            // PASSWORD VALIDATION
            if(event.target.name === "password"){
                if(validate.isValidPassword(event)===true){
                    newData[event.target.name] = event.target.value;
                    // set username valid to true
                    newData["passwordValid"] = true;
                }
                else{
                    newData["passwordValid"] = false;
                }
            }

            // check if Remember me checkboc is checked and set the state of the checkbox to true
            event.target.name === "rememberCheckbox" ? newData[event.target.name] = event.target.checked : newData[event.target.name] = event.target.value;
            console.log(newData);
            setData(newData);
        },
        // sign up handler
        handleSignUpInputChange: (event, signUpData, setData) => {
            event.preventDefault();
            const newSignUpData = {...signUpData};
            // EMAIL VALIDATION
            if(event.target.name === "email"){
                if(validate.isValidEmail(event)===true){
                    newSignUpData[event.target.name]=event.target.value;
                    newSignUpData["emailValid"]=true;

                } else{
                    console.log("Length of email: ", newSignUpData[event.target.name].length)
                    newSignUpData["emailValid"] = false
                }
            }

            // USERNAME VALIDATION
            if(event.target.name === "username"){
                if(validate.isValidUsername(event)===true){
                    newSignUpData[event.target.name] = event.target.value;
                    // set username valid to true
                    newSignUpData["usernameValid"] = true;
                }
                else{
                    newSignUpData["usernameValid"] = false;
                }
            }

            // PASSWORD VALIDATION
            if(event.target.name === "password"){
                if(validate.isValidPassword(event)===true){
                    newSignUpData[event.target.name] = event.target.value;
                    // set username valid to true
                    newSignUpData["passwordValid"] = true;
                }
                else{
                    newSignUpData["passwordValid"] = false;
                }
            }

            // for all other things
            newSignUpData[event.target.name] = event.target.value;
            console.log(newSignUpData);
            setData(newSignUpData);
            //return newSignUpData;  
        },
        generateSecretKey: () => {
            let secret = (Math.random() + 1).toString(36).substring(2);
            return secret
        }
    }
    return handlerInp;
    
}



module.exports = handlerapi;