
import "../LoginForm/Loginform.css"
import { Link } from "react-router-dom";

import React, { useState } from "react";
// import ReactDOM from "react-dom";

const Loginform = ({handleChange}) => {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user",
      password: "pass"
    },
    {
      username: "rana",
      password: "rana"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="formm">
      <form onSubmit={handleSubmit}>
      <div className="title">Sign In</div>
        <div className="input-container">
          <label>Username: </label>
          <input type="text" id="unamee" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password: </label>
          <input type="password" id="passs" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <br></br>    
        <input type="checkbox" id="check"/>    
        <span>Remember me</span>    
        <br></br>    
        <h6>Don't have an account click on 
        <Link to="/account" onClick={()=>handleChange("event" , 1)}>  Sign up</Link> 
        </h6>
   
      </form>
    </div>
  );

  return (
    <div className="appp">
      <div className="login-form">
       
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}


export default Loginform;