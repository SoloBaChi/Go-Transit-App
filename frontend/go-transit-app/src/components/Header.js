import React from 'react';
import { HiChevronDown } from "react-icons/hi";
// import LOGO from './images/LOGO.png';
import '../styles/Header.css';

function Header(props) {
    return (
        <div>
           <div className='logo'>
            {/* <img src={LOGO} alt='LOGO' /> */}
          </div>
          <div className='navbarBtn'>
            <div className='navbar'>
              <button>Home</button>
              <button>My Bookings</button>
              <button className='button'>Contact<i><HiChevronDown /></i></button>
              <button>Login</button>
            </div>
          </div>
        </div>
    );
}

export default Header;