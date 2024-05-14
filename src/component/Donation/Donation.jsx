import React from 'react';
import './Donation.css'

const Donation = () => {
    return (
        <div className='donation-main-container'>
        <img src={"https://cdn.grofers.com/assets/ui/icons/feeding_india_icon_v6.png"} className='donation-image'/>
         <ul>
            <li className='donation-title'>Feeding India donation</li>
            <li className='donation-text'>Working towards a malnutrition free India. Feeding India...read more</li>
         </ul>
        
        <ul className='donation-checkbox-section'>
        <li>₹1</li>
        <input type="checkbox" className='donation-checkbox' style={{width:"16px"}}/>
        </ul>
         

            
        </div>
    );
}

export default Donation;
