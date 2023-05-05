import React, { useState, useEffect } from "react";
import "./app.css"
import {Link} from "react-router-dom";
import exampleImage from '../icons/google.png';





function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false); // new state

 


  useEffect(() => {
    // code to run on component mount
  }, []);
  const handleTermsAccepted = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!termsAccepted) {
      alert("Please accept the terms and conditions to continue.");
      return;
    }
    // code to handle sign-up form submission
    console.log("User signed up successfully!");
  };

 
  return (
    <>
    <div className="container">
    <form onSubmit={handleSubmit}>
      <label>
       
        <input
          type="text"
          placeholder="Enter Full Name"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
       
        <input
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <label>
       
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        /> 
        <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> 
       
      </label>
      <button class="btn"type="submit">Sign Up</button>
      <p>or</p>
      <button class="btn-google"type="submit">
      <img src={exampleImage} alt="Example Image" />
      Continue with Google</button>

      <div className="condition ">
      <label >
       
        <div className="text"> 
        <input 
        className="check"
          type="checkbox"
          checked={termsAccepted}
          onChange={handleTermsAccepted}/>

           <div className="txt">
          <div className="read">  
          I have read, understood and agree to be bound by the following <span><b>  Terms and condition</b>  </span> 
          </div> 
           <div> Already have an account? <Link to="/signin" className='link'> <span> <b> Login here</b></span> </Link>  </div>
           </div>
           </div>
           
      </label>

      </div>
      

    </form>
    </div>
    </>
  );
}
export default Signup;