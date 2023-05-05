import React from 'react';
import Home from './Home';
import ContactSection from './ContactSection';
// import Header from './Header';
// import Footer from "./Footer";
// import Signup from "./Signup";
// import Login from './Login';
// import TripSummary from './TripSummary';
import { Route,Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


function Main(props) {
    return (
        <div>
           {/* <Header/>  */}
           <Router>
           <Routes>
                <Route path='/' element={<><Home/><ContactSection/></>}></Route>
                {/* <Route path='' element={<><TripSummary/><ContactSection/></>}></Route> */}
            </Routes>
           {/* <Signup/> */}
           {/* <Login/> */}
           {/* <Footer/> */}
           </Router>
           
        </div>
    );
}

export default Main;