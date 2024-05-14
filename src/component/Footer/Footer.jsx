// import React from 'react';
import './Footer.css'
import {appstore} from '../pages/Global.jsx'
import { playstore } from '../pages/Global.jsx';
import { SiFacebook } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='Footer-main-container'>
         <div className='first-row-section'>
            <div className='Blink-private-content'>
                <p>© Blink Commerce Private Limited (formerly known as Grofers India Private Limited), 2016-2024</p>
            </div>
            <div className='Download-app-content'>
                <li>Download App</li>
                <img src={appstore} alt='' className='footer-store-img'/>
                <img src={playstore} alt='' className='footer-store-img'/>

            </div>


            <div className='social-app-content'>
                <li><SiFacebook /></li>
                <li><BsTwitterX /></li>
                <li><BsInstagram /></li>
                <li><FaLinkedin /></li>
                <li><FaThreads /></li>
            </div>
         </div>
         <div className='Second-row-section'>
            <p>“Blinkit” is owned & managed by "Blink Commerce Private Limited" (formerly known as Grofers India Private Limited) and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</p>
         </div>
            
        </div>
    );
}

export default Footer;
