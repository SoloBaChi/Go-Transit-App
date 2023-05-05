import React from 'react';
import Header from './Header';
import Footer from "./Footer";


import Login from './Login';



function Main(props) {
    return (
        <div>
  
           <Header/>  
           <Login/>
           <Footer/> 
          
        </div>
    );
}

export default Main;