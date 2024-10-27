import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
//import handlerInp from './handler.js'
import ChitChat from './components/ChitChat.js';
import PrintR from './components/PrintR.js';

var handler = require('./handler.js');

function App() {
  // used to navigate to other pages
  //let navigate = useNavigate();
  // create a dataset for login
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
    usernameValid: false,
    passwordValid: false,
    rememberCheckbox: false
  })

  const [signUpData, setSignUpData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    emailValid: false,
    usernameValid: false,
    passwordValid: false
  })

  // chitchat user data
  const [chitchatData, setChitChatData] = useState({
    username: "",
    secret: "",
    email: "",
    firs_tname: "",
    last_name: ""
  });

  // upload file data
  const [file, setFile] = useState();

  // Handle Sign In
  const signIn = e => {
    handler.handleSignInInputChange(e, signInData, setSignInData);
  }

  // Sign Up Input Handler
  const signUp = (e) => {
    handler.handleSignUpInputChange(e, signUpData, setSignUpData);
  }

  // handle data insertion to createEngine handler when signing up
  const handleSignUp = (e) => {
    e.preventDefault();
    //TODO: add user to Azure Data Server

    // add user to ChatEngine Server
    handler.addUserChatEngine(e, signUpData);
    // clear the inputs
    setSignUpData({
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      emailValid: false,
      usernameValid: false,
      passwordValid: false
    });

  }

  const loginCreateEngine = () => {
    chitchatData = handler.addUserChatEngine(signUpData);
  }

  // handle file upload
  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  }

  // handle file submission
  const handleFileSubmit = (event) => {
    handler.fileSubmit(event, file);

  }

  // add user to Chat Engine
  const addUserChatEngine = (data) => {
    var data = {
      username: data.username,
      secret: handlerInp.generateSecretKey(),
      email: data.email,
      first_name: data.firstname,
      last_name: data.lastname
    };
    
    fetch('https://api.chatengine.io/users/', {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'PRIVATE-KEY': 'abc28124-8812-4af4-a446-ad31203abfbe'
        }
    })
    .then(response => response.json())
    .then(data => console.log("chitchatdata: ", data))
    .then(data => setChitChatData(data))
    .then(msg => console.log("Message: ", msg))
    .catch(function (error) {
      console.log("Error when inserting data to ChatEngine: ", error);
    });
    console.log("what i get: ", chitchatData);
    //setChitChatData(data);
  }

  // Handle Sign Up
  const signUpHandler = (event) => {
      event.preventDefault();
      console.log("Uploading info to database...")
      fetch("/Register/posts", {
        method: "POST",
        mode: "cors", 
        //redirect: 'follow',
        body: JSON.stringify(signUpData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => setSignUpData([data]))
      //.then(data => console.log([data]))
      .then(msg => console.log("Message: ", msg))
      .catch(error => console.log(error))
  
      console.log("Fetching done")
      console.log("sign up data: ", signUpData);
      //add user to Chat Engine
      addUserChatEngine(signUpData);
      // clear the inputs
      setSignUpData({
          firstname: "",
          lastname: "",
          email: "",
          username: "",
          password: "",
          emailValid: false,
          usernameValid: false,
          passwordValid: false
      });
  }



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login data={signInData} onChange={signIn}/>} />
          <Route path='/login' element={<Login data={signInData} onChange={signIn}/>}/>
          <Route path="/register" element={<Register data={signUpData} onChange={signUp} handleSignUp={handleSignUp}/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/chitchat' element={<ChitChat login={loginCreateEngine}/>}/>
          <Route path='/printr' element={<PrintR handleFileUpload={handleFileUpload} handleFileSubmit={handleFileSubmit}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
