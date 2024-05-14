import React, { useContext, useState } from "react";
import "./myCart.css";
import { FaXmark } from "react-icons/fa6";
import CartProduct from "./cartProduct.jsx";
import Bill from "../Bill/Bill.jsx";
import Donation from "../Donation/Donation.jsx";
import Cancell from "../Cancellation/Cancell";
import Tips from "../Tips/Tips.jsx";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ItemContent } from "../DataFolder/Context/Context.jsx";
import { Link } from "react-router-dom";

const MyCart = () => {
  const { total, discount } = useContext(ItemContent);
  const [cartOpen, setCartOpen] = useState(true);

  return (
    <>
      {cartOpen && (
        <div className="Cart-main-container">
          <div className="mycart-header-section">
            <h1 style={{ marginLeft: "10px" }}>My Cart</h1>
            <FaXmark
              onClick={() => {
                setCartOpen();
              }}
              style={{ marginRight: "10px" }}
            />
          </div>
          <div className="cart-scroll-container">
            <div className="cart-total-saving-section">
              <h2>Your total saving</h2>
              <p>₹{discount}</p>
            </div>

            <div className="cart-product-cart-section">
              <CartProduct />
            </div>
            <div>
              <Bill />
            </div>
            <div>
              <Donation />
            </div>

            <div>
              <Tips />
            </div>
            <div>
              <Cancell />
            </div>
          </div>

          <div className="mycart-footer-section ">
            <div className="footer-cart-footer">
              <ul className="footer-cart-total" style={{ marginLeft: "10px" }}>
                <li>₹{total}</li>
                <li className="cart-total">Total</li>
              </ul>
              <ul className="footer-cart-proceed">
                <li>Proceed</li>
                <li style={{ fontSize: "20px" }}>
                  <MdKeyboardArrowRight />
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      )}
    </>
  );
};

export default MyCart;
