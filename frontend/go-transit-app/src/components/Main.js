import React from 'react';
import Header from './Header';
import Footer from "./Footer";
import Signup from "./Signup";
import Login from './Login';


function Main(props) {
    return (
        <div>
           <Header/> 
           <Signup/>
           <Login/>
           <Footer/>
        </div>
    );
}

export default Main;