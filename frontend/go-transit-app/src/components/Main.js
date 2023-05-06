import React from 'react';
import Home from './Home';
import ContactSection from './ContactSection';
import Header from './Header';
import Footer from './Footer';
import "../styles/Main.css";
import Signup from "./Signup";
import SignIn from './SignIn';
// import TripSummary from './TripSummary';
import { Route,Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


function Main(props) {
    return (
        <div>
            <div className="Header">
           <Header/> 
           </div>
           <Router>
           <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='signup' element={<Signup/>}/>
                <Route path='/signin' element={<SignIn/>}></Route>  
            </Routes>
           </Router>
           <div className="Footer">
           <ContactSection/>
           <Footer />
           </div>
        </div>
    );
}

export default Main;