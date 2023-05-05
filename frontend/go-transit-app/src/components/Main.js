import React from 'react';
import Header from './Header';
import Footer from "./Footer";
import './styles/Main.css'
import TripSummary from './TripSummary';


function Main(props) {
    return (
        <div className='main'>
            <div className='Header'>
                <Header/> 
            </div>
            <div className='tripSummary'>
                <TripSummary />
            </div>
           <div className='Footer'>           
                <Footer/>
            </div>
        </div>
    );
}

export default Main;