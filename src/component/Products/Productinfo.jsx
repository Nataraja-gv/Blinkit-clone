import React, { useContext } from "react";
import "./Product.css";
import timer from "../item/timer.png";
import { ItemContent } from "../DataFolder/Context/Context";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

const Productinfo = ({ props }) => {
  const {addToCart,cart,removeFromCart}=useContext(ItemContent)

  const iscart=cart.some((item)=>item.id === props.id)
  return (
    <div className="productinfo-main-container">
      <ul className="productInfo-breadcrum-container">
        <li className="productInfo-breadcrum  hover:text-green-400">Home</li>
        <li className="productInfo-breadcrum">/</li>
        <li className="productInfo-breadcrum  hover:text-green-400">
          {" "}
          Fresh {props.category}
        </li>
        <li className="productInfo-breadcrum">/</li>
        <li className="productInfo-breadcrum-title">{props.Title}</li>
      </ul>

      <ul  >
        <h1 className="productInfo-title">{props.Title}</h1>
      </ul>
      <div className="product-item-timer-section bg-gray-300  mb-4" >
        <img src={timer} alt="" style={{ width: "20px", height: "20px" }} />
        <p className="product-item-timer" style={{ fontWeight: "700" }}>
          {props.Timer}
        </p>
      </div>

      <div className="weight-amount-container" style={{borderTop:"2px solid rgb(238, 238, 238)"}}>
        <div>
          <p className="product_info-weight mt-3 mb-1">{props.Weight}</p>
          <ul className="amount-section-productInfo mb-1">
            <li className="product_info-Namount ">₹{props.NewAmount}</li>
            <li className="product_info-Oamount">
              MRP <span style={{textDecoration:"line-through"}}>₹ 
              {props.OldAmount}
              </span>
            </li>
            <li className="product_info-Offer">{props.offer}% OFF</li>
          </ul>
          <p className="product_info-taxes">(Inclusive of all taxes)</p>
        </div>

        <div>
        {/* //item.quantity */}
        {/* {!iscart ?  <button className="add-amount-btn" onClick={()=>{addToCart(props)}}>Add</button>:<button className="add-amount-btn" ><FiMinus onClick={()=>{removeFromCart(props)}}/> {props.quantity}<GoPlus onClick={()=>{addToCart(props)}}/></button>} */}
        {!iscart ?  <button className="product-add-amount-btn" onClick={()=>{addToCart(props)}}>Add</button>:<button className="product-add-amount-btn" >GoCart</button>}
        
        </div>
      </div>
      <div className="productinfo-shop-blinkit">
        <h1 className="item-title">Why Shop from blinkit</h1>

        <div className="productinfo-superfast-assortment-container">
            <div className="superfast-section">
                <img src={"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png"} className="why-shop-image"/>
                  <ul>
                     <li className="product-details-title">Superfast Delivery</li>
                     <li className="product-details-value">Get your order delivered to your doorstep at the earliest from dark stores near you.</li>
                  </ul>
            </div>


            <div className="bestprice-section">
                <img src={"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Best_Prices_Offers.png"} className="why-shop-image"/>
                  <ul>
                     <li className="product-details-title">Best Prices & Offers</li>
                     <li className="product-details-value">Best price destination with offers directly from the manufacturers.</li>
                  </ul>
            </div>

            <div className="assortment-section">
                <img src={"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Wide_Assortment.png"} className="why-shop-image"/>
                  <ul>
                     <li className="product-details-title">Wide Assortment</li>
                     <li className="product-details-value">Choose from 5000+ products across food, personal care, household & other categories.</li>
                  </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Productinfo;
