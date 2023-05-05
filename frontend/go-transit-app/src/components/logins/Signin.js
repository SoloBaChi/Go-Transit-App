import React, { useState, useEffect } from "react";
import "./appin.css"
import {Link} from "react-router-dom";
import exampleImage from '../icons/google.png';



function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    useEffect(() => {
      // code to run on component mount
    }, []);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // code to handle sign-in form submission
      console.log("User signed in successfully!");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
         
          <input
            type="text"
            placeholder="Enter Email"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button  className="btn" type="submit">Sign In</button>
        <p>or</p>
      <button class="btn-google"type="submit">
      <img src={exampleImage} alt="Example Image" />
        Continue with Google</button>

      
           <p className="read">  <p>Dont't have an account? <Link to="/signup" className='link'><b className="sign"><span>Signup here </span> </b></Link> </p> </p>
      
      </form>
    );
  }
export default SignIn;
