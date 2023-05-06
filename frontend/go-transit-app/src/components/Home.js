import React from 'react';
import homeImageBg from "../images/go-transit-home.png";
import { Link } from 'react-router-dom';

function Home(props) {
    return (
       <div className='pd-x'>
        <div className='home-wrapper'>
        <div className='img-container'>
            <img className='img-content' src={homeImageBg} alt='transit bus'/>
        </div>
        <div className='absolute-container'>
        <form>
        <div className='form-header'>
         <p>Book a Seat </p>
        </div>
        <div className='form-body'>
        <div className='form-field'>
         <select id='select'>
            <option value="">travelling from </option>
            <option value="enugu">Enugu </option>
            <option value="lagos">Lagos </option>
            <option value = "ebonyi">Ebonyi </option>
            <option value = "delta">delta </option>
         </select>
         </div>
         <div className='form-field'>
         <select id='select'>
            <option value="">travelling to </option>
            <option value="ekiti">Ekiti </option>
            <option value="benue">Benue </option>
            <option value = "anambra">Anambra </option>
            <option value = "kogi">Kogi </option>
         </select>
         </div>

         <div className='form-field-2 form-field'>
         <label>Departure Date</label>
         <input type='Date' placeholder='Departure Date'/>
         </div>

         <div className='form-field-2 form-field'>
         <label>Arrival Date (optional)</label>
         <input type='Date' placeholder='Departure Date'/>
         </div>

         <div className='form-field'>
         <select id='select'>
            <option value="">Time of  travel </option>
            <option value="morning">Morning </option>
            <option value="afternoon">Afternoon </option>
            <option value = "night">Night </option>
         </select>
         </div>

         <div className='form-field'>
         <select id='select' >
            <option value="">Number of Tickets </option>
            <option value="1">1 </option>
            <option value="4">4 </option>
            <option value = "6">6 </option>
            <option value = "7">7 </option>
         </select>
         </div>

        </div>
        <div className='form-footer'>
            <button type='submit' className='cta-btn'>
            <Link className='link' to ="/signup"> Proceed</Link>
            </button>
        </div>
       </form>
        </div>
       
       </div>
       </div> 
    );
}



export default Home;