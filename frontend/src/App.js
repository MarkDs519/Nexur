import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import PrintR from './components/printr/PrintR.js';
import Game from './components/tictactoe/game.js';

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
          <Route path ='/tictactoe' element={<Game />}/>
          <Route path='/printr' element={<PrintR handleFileUpload={handleFileUpload} handleFileSubmit={handleFileSubmit}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
