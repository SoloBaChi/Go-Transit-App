import React from 'react';
import ReactDOM from 'react-dom/client';
import Signup from "./components/logins/Signup";
import Signin from './components/logins/Signin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element= {  <App /> }/>
        <Route path="/signup" element={ <Signup/>}/>
           <Route path="/signin" element={  <Signin/>}/>

           </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);


