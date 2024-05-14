// import React from 'react';
import Breadcrum from "../breadcrum/Breadcrum";
import "./GroceryShop.css";
import VegFruMen from "../veg&fruMenu/VegFruMenu";
import DisplaySortGrocery from "../displaySortGrocery/DisplaySortGrocery"


const GroceryShop = () => {
  return (
    <div>
      <div className="breadcrum-section-shop">
        <Breadcrum />
      </div>
      <div  className="menu-item-displaying-container">
        <div className="Menu-item-main-container">
          <div className="veg-menu-extra-section">
            <div className="menu-extra-section"></div>

            <div className="Veg-menu-item-section ">
              {" "}
              <VegFruMen />
            </div>
          </div>

          <div className="veg-items-display-container">
            <DisplaySortGrocery/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroceryShop;
