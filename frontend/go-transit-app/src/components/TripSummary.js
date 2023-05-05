import React from 'react';
import './styles/TripSummary.css'
import Available from './images/Available.png'
import You from './images/You.png'
import Booked from './images/Booked.png'

function TripSummary(props) {
    return (
        <div className='tripSummaryDetails'>
            <div className='seatShow'>
                <h1>Choose A Seat</h1>
                <div className='seatPictorial'>
                   <div className='div'>
                        <div>
                            <img src={Available} alt='Available' />
                            <p>Available</p>
                        </div>
                        <div>
                            <img src={Booked} alt='Booked' />
                            <p>Booked Seat</p>
                        </div>
                        <div>
                            <img src={You} alt='You' />
                            <p>You</p>
                        </div>
                   </div>
                </div>
                <div className='seatRow'>
                    <div><img src={Booked} alt='Booked' /></div>
                    <div><img src={Available} alt='Available' /></div>
                    <div><img src={Booked} alt='Booked' /></div>
                    <div><img src={Available} alt='Available' /></div>
                    <div><img src={Booked} alt='Booked' /></div>
                    <div><img src={Booked} alt='Booked' /></div>
                    <div><img src={Available} alt='Available' /></div>
                    <div> <img src={You} alt='You' /></div>
                    <div><img src={Booked} alt='Booked' /></div>
                    <div><img src={Available} alt='' /></div>
                </div>
            </div>
            <div className='tripDetails'>
                <div className='details'>
                    <h1>Passengers Details</h1>
                    <input type='text' placeholder='Enter Name As Seen In ID' className='input'/>
                    <div>  
                        <span><label>Male<input type='radio' /></label></span>
                        <span><label>Female<input type='radio' /></label></span>
                        <span><label>Other<input type='radio' /></label></span>
                    </div>                        <input type='text' placeholder='Customer Address' className='input'/>
                    <input type='text' placeholder='Customer Email' className='input'/>                                 <input type='text' placeholder='Name Of Next Of Kin' className='input'/>
                    <input type='text' placeholder='Contact Number Of Name Of Next Of Kin' className='input'/>
                    <input type='text' placeholder='Address Of Name Of Next Of Kin' className='input'/>
                </div>
                <div className='tripCheckout'>
                    <h1>Trip Summary</h1>
                    <div className='tripCheckoutLayer'>
                        <div>
                            <div className='edit'>
                                <p>FROM:</p>
                                <p>ENUGU</p>
                            </div>
                            <div className='edit'>
                                <p>TO:</p>
                                <p>ABUJA</p>
                            </div>
                            <div className='edit'>
                                <p>DATE:</p>
                                <p>05 MAY, 2023</p>
                            </div>
                            <div className='edit'>
                                <p>TIME:</p>
                                <p>09:00 AM</p>
                            </div>
                            <div className='edit'>
                                <p>NUMBER OF SEATS BOOKED:</p>
                                <p>01</p>
                            </div>
                            <div className='edit'>
                                <p>SEAT NUMBER:</p>
                                <p>08</p>
                            </div>
                            <div className='edit'>
                                <p>PRICE:</p>
                                <p>#15,600.00</p>
                            </div>
                            <div className='edit'>
                                <p>DISCOUNT:</p>
                                <p>00.00</p>
                            </div>
                            <div className='edit'>
                                <p>TOTAL:</p>
                                <p>#15,600.00</p>
                            </div>
                        </div>
                        <div className='btnDiv'>
                            <button className='backbtn'>Back</button>
                            <button className='paybtn'>Pay</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TripSummary;