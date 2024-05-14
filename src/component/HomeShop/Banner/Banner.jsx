// import React from 'react';
import './Banner.css'
import b1 from './banner1.png'
import b2 from './banner2.png'
import b3 from './banner3.png'
const Banner = () => {
    return (
        <div className='banner-container'>
            <img src={b1} alt='' className='banner'/>
            <img src={b2} alt='' className='banner'/>
            <img src={b3} alt='' className='banner'/>
           
            
        </div>
    );
}

export default Banner;
