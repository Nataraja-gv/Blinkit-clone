// import React from 'react';
import { useContext } from "react";
import ProductImage from "./productImage";
import "./ProductImage.css";
import { ItemContent } from "../DataFolder/Context/Context";
import { useParams } from "react-router-dom";
import Productinfo from "./Productinfo";
import MobileProduct from "../pages/MobileProduct.jsx";

const Product = () => {
  const { GroceryData } = useContext(ItemContent);
  const { ProductID } = useParams();
  const product = GroceryData.find((item) => {
    return item.id === parseInt(ProductID);
  });

  return (
   <div> 
      <div className="Product-divide-main-section">
        <div className="peoduct-left-template">
          <ProductImage props={product} />
        </div>
        <div className="product-right-template">
          <Productinfo props={product} />
        </div>
      </div>

      <div  className="Mobile-product-divide-section">
        <MobileProduct props={product}/>
      </div>

     </div> 
     
  );
};

export default Product;
