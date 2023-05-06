import React from 'react';
import '../styles/Footer.css';
import FooterLogo from '../images/FooterLogo.png'
import instagram from '../images/instagram.png'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'

function Footer(props) {
    return (
        <div className='footer-wrapper'>
        <div className='footer'>
            <div className='footerLogo'>
                <img src={FooterLogo} alt='Logo' />
            </div>
            <div className='footerLinks'>
                <ul>Company
                    <li><a href=''>About Us</a></li>
                    <li><a href=''>Team</a></li>
                </ul>
                <ul>Experience
                    <li><a href=''>FAQs</a></li>
                    <li><a href=''>Find a terminal</a></li>
                    <li><a href=''>Help</a></li>
                    <li><a href=''>Blog</a></li>
                </ul>
                <ul>Terms
                    <li><a href=''>Privacy Policy</a></li>
                    <li><a href=''>Terms & Conditions</a></li>
                </ul>
            </div>
            <div className='footerIcons'>
                <div>     
                    <a href=''><img src={facebook} alt='facebook'/></a>    
                </div>
                <div>
                    <a href=''><img src={instagram} alt='instagram'/></a>
                </div>
                <div>
                    <a href=''><img src={twitter} alt='twitter'/></a>
                </div>
            </div>

        </div>
        </div>
    );
}

export default Footer;