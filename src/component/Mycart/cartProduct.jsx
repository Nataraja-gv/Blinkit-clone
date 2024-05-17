import React, { useContext } from 'react';
import timer from '../item/timer.png'
import './cartProduct.css'
import { ItemContent } from '../DataFolder/Context/Context';
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
const CartProduct = () => {
     
  const { cart,removeFromCart,addToCart } = useContext(ItemContent);
    
    return (
        <div className='cart-product-main-container'>
          <div className='cart-timer-section'>
            <img src={timer} alt="" className='cart-timer-image'/>
            <ul className='cart-product-timer-details'>
                <li className='cart-delivery-text'>Delivery in 9 minutes</li>
                <li className='cart-delivary-shipment'>Shipment of 39 items</li>
            </ul>
          </div>

          <div className='cart-item-display-container'>
          {cart.map((item,index)=>{ return(
             
                <div className='cart-product-section' key={index}>
                    <div className='cart-product-image-section'>
                    <img src={item.Image} alt='' className='cart-product-image'/>
                    </div>
                     
                  <ul className='cart-adding-item-details'>
                     <li style={{}}>{item.Title}</li>
                     <li style={{color:"gray"}}>{item.Weight}</li>
                     <li><span style={{fontWeight:"bolder"}}>₹{item.NewAmount}</span>     <span style={{textDecoration:"line-through",color:"gray"}}>₹{item.OldAmount}</span></li>
                      
                  </ul>

                  <div className='cart-product-add-section'>
                  <button className="cart-add-amount-btn" ><FiMinus onClick={()=>{removeFromCart(item)}}/> {item.quantity} <GoPlus onClick={()=>{addToCart(item)}}/></button>
                  </div>
                </div>
           ) })}
          </div>
            
        </div>
    );
}

export default CartProduct;
