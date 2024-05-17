//  import React from 'react';
// import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import "./Navbar.css";
import { FaCaretDown } from "react-icons/fa";
import Profile from "../profile/Profile";
import { useContext, useState } from "react";
import MyCart from "../Mycart/myCart";
import { ItemContent } from "../DataFolder/Context/Context";
import { FaCaretRight } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import {Link} from "react-router-dom"

const Navbar = () => {
  const [isProfile, setIsProfile] = useState(false);
  const [isCartBag, setIsCartBag] = useState(false);
  const { cart, total, getCartLength } = useContext(ItemContent);

  return (
    <div className="navbar-main-container">
      <div className="navbar-brand-section  ">
       <Link to="/">  <h1 className="text-yellow-400   font-extrabold   ml-4">
          blink<span style={{ color: "#008900" }}>it</span>
        </h1></Link>
      </div>
      <div className="nav-vartical-line"
      ></div>


      <div className="nav-delivary-minutes">
        <div className="nav-delivary-section">
          {" "}
          <h3>Delivery in 10 minutes</h3>
          <p>
            68/2, 13th Cross Rd, Shankarapp...
            <span style={{ color: "black" }}>
              <FaCaretDown />
            </span>{" "}
          </p>
        </div>

        <ul className="nav-blinkit-profile-profile">
          <CgProfile className="mobile-profile" />
        </ul>
      </div>

      <div className="navbar-input-container">
        <CiSearch className="nav-input-icon" />
        <input type="text" placeholder=" " className="nav-bar-input-section" />
        <div className="flip">
          <div>
            <div>{`Search "rice"`}</div>
          </div>
          <div>
            <div>{`Search "Sugar"`}</div>
          </div>
          <div>
            <div>{`Search "egg"`}</div>
          </div>

          <div>
            <div>{`Search "curd"`}</div>
          </div>

          <div>
            <div>{`Search "milk"`}</div>
          </div>

          <div>
            <div>{`Search "paneer"`}</div>
          </div>

          <div>
            <div>{`Search "chips"`}</div>
          </div>
        </div>
      </div>
      <div className="navbar-account-section">
        <h3
          onClick={() => {
            setIsProfile(!isProfile);
          }}
        >
          Account{" "}
        </h3>
        <FaCaretDown  />
        {isProfile && (
          <div className="navbar-profile">
            <Profile className="navbar-profile" />
          </div>
        )}
      </div>
      <div className="navbar-cart-onClick-section">
        <div className="navbar-cart-section mr-4" onClick={() => {
          setIsCartBag(!isCartBag);
        }}>
          <BsCart2 className="navbar-cart-icon" />
          <ul>
            <li>{cart.length} items</li>
            <li>
              {"\u20B9"}
              {total}
            </li>
          </ul>
        </div>
        <div className="iscartbag-cart-display">{isCartBag && <MyCart />}</div>
      </div>
    </div>
  );
};

export default Navbar;
