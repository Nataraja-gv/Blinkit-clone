import React, { useState } from 'react';
import './Mobileproductdeatils.css'
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineArrowDropUp } from "react-icons/md";

const Mobileproductdetails = ({props}) => {
    const[isMore,setIsMore]=useState(false)
    return (
        // <div className='mobile-product-details-container'>
        <div className="product-details-container">
        <h1 className="item-title">Product Details</h1>
        <ul>
          <li className="product-details-title">Unit</li>
          <li  className="product-details-value">{props.Weight}</li>
        </ul>
         
         {isMore && <>
            <ul>
          <li className="product-details-title">Storage Tips</li>
          <li className="product-details-value">Store in wire-basket or mesh bags.</li>
        </ul>

        <ul>
            <li className="product-details-title">Nutrient Value & Benefits</li>
            <li className="product-details-value">Contains Folic acid, Vitamin C and Amino acid .Vitamin C acts as a powerful antioxidant and also helps formation of collagen that is responsible for skin and hair health.</li>
        </ul>

        <ul>
            <li className="product-details-title">Storage Temperature (DegC)</li>
            <li className="product-details-value">7-13</li>
        </ul>


        <ul>
            <li className="product-details-title">Shelf Life</li>
            <li className="product-details-value">4 days</li>
        </ul>


        <ul>
            <li className="product-details-title">Country Of Origin</li>
            <li className="product-details-value">India</li>
        </ul>

        {/* <ul>
            <li className="product-details-title">FSSAI License </li>
            <li className="product-details-value" style={{Overflow:"ellipsis" }}>{props.License} </li>
        </ul> */}

        <ul>
            <li className="product-details-title">Customer Care Details</li>
            <li className="product-details-value">Email: info@blinkit.com</li>
        </ul>


        <ul>
            <li className="product-details-title">Return Policy</li>
            <li className="product-details-value">The product is non-returnable. For a damaged, defective, expired or incorrect item, you can request a replacement within 24 hours of delivery.
In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.</li>
        </ul>

        <ul>
            <li className="product-details-title">Expiry Date</li>
            <li className="product-details-value">Please refer to the packaging of the product for expiry date.</li>
        </ul>

        <ul>
            <li className="product-details-title">Net Weight</li>
            <li className="product-details-value">{props.Weight}</li>
        </ul>


        <ul>
            <li className="product-details-title">Seller</li>
            <li className="product-details-value">MOONSTONE VENTURES LLP</li>
        </ul>

        <ul>
            <li className="product-details-title">Seller FSSAI</li>
            <li className="product-details-value">13323999000008</li>
        </ul>

        <ul>
        <li className="product-details-title">Description</li>
        <li className="product-details-value">{props.Description}</li>

        </ul>

        <ul>
            <li className="product-details-title">Disclaimer</li>
            <li className="product-details-value">Product image is for representation only and actual product might differ on the basis of crop available in Season.</li>
        </ul>
         </>}
         <p>{!isMore?<ul className='product-more-open' onClick={()=>{setIsMore(!isMore)}}><li>View More Details </li> <li><IoMdArrowDropdown /></li> </ul>:<ul className='product-more-open' onClick={()=>{setIsMore(!isMore)}}><li>View less Details </li> <li> <MdOutlineArrowDropUp /></li> </ul>}</p>
      </div>
            
         
    );
}

export default Mobileproductdetails;
