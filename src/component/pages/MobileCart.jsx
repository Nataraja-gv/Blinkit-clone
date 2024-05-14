import React, { useContext, useState } from 'react';
import { BsCart2 } from "react-icons/bs";
import { FaCaretRight } from "react-icons/fa";
import './style/Mobile.css'
import { ItemContent } from '../DataFolder/Context/Context';
import { Link } from "react-router-dom"
// import MyCart from "../Mycart/myCart.jsx";
const MobileCart = () => {
  const {cart,total}=useContext(ItemContent)

   
    return (
       
     <Link to="cart"> 
      <div className='navbar-cart-bar-conatiner'  > 
        <div className="navbar-cart-mobile-section mr-4">
           <div className="navbar-first-mobile-section">
          <li><BsCart2 className="navbar-cart-mobile-icon" /></li>  
          <ul>
            <li>{cart.length} items</li>
            <li>
              {"\u20B9"} {total}
            </li>
          </ul>
           </div>

           <ul className="navbar-first-second-section">
            <li>View Cart </li>
            <FaCaretRight />
           </ul>
        </div>
 
        
        </div>
        </Link>  
      
         
    );
}

export default MobileCart;
