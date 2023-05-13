
import React from "react";
import { Link } from "react-router-dom";
import "./Loginform.css";
import { useState } from 'react';





const Signup = ({handleChange}) => {

  const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h5>User {name} Successfully Registered!!</h5>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h5>Please enter all the fields</h5>
      </div>
    );
  };
 

  return (
    <div className="appp">
      <div className="login-form">
        <div className="formm">

        <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div> 

          <form>
          <div className="title">Sign up</div>

            <div className="input-container">
              <label>Name:</label>
              <input type="text" onChange={handleName} id="unamee" name="uname" required />
            </div>
            <div className="input-container">
              <label>Email:</label>
              <input type="email" onChange={handleEmail} id="unamee" name="email" required />
            </div>
            <div className="input-container">
              <label>Password:</label>
              <input type="password" onChange={handlePassword} id="passs" name="pass" required />
            </div>
            <div className="button-container">
              <input onClick={handleSubmit} type="submit"></input>
            </div>
            <br></br>
            <br></br>
            <h6>
              Already have an account Click
              <Link to="/account" onClick={()=>handleChange("event" , 0)}> Sign In</Link>
            </h6> 
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
