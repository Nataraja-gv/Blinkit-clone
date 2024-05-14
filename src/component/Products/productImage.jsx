// import React from 'react';
import ReactImageMagnify from "react-image-magnify";

const ProductImage = ({ props }) => {
  return (
    <div className="product-main-conatiner">
      <div className="product-Image-container">
        <div className="product-image-single-section"  >
          {/* <img src={props.Image} alt="" className="product-single-image" /> */}
          
          <div style={{width:"350px",height:"513px"}}>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src:props.Image,
              },
              largeImage: {
                src:props.Image,
                width: 420,
                height: 1800,
              },
            }}
          />
          </div>
           
        </div>
        <div className="product-image-multiple-section">
          <img src={props.Image} alt="" className="product-multi-image" />
          <img src={props.Image2} alt="" className="product-multi-image" />
          <img src={props.Image} alt="" className="product-multi-image" />
          <img src={props.Image3} alt="" className="product-multi-image" />
          <img src={props.Image} alt="" className="product-multi-image" />
          <img src={props.Image2} alt="" className="product-multi-image" />
        </div>
      </div>

      <div className="product-details-container">
        <h1 className="item-title">Product Details</h1>
        <ul>
          <li className="product-details-title">Unit</li>
          <li className="product-details-value">{props.Weight}</li>
        </ul>

        <ul>
          <li className="product-details-title">Storage Tips</li>
          <li className="product-details-value">
            Store in wire-basket or mesh bags.
          </li>
        </ul>

        <ul>
          <li className="product-details-title">Nutrient Value & Benefits</li>
          <li className="product-details-value">
            Contains Folic acid, Vitamin C and Amino acid .Vitamin C acts as a
            powerful antioxidant and also helps formation of collagen that is
            responsible for skin and hair health.
          </li>
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
          <li className="product-details-value">
            The product is non-returnable. For a damaged, defective, expired or
            incorrect item, you can request a replacement within 24 hours of
            delivery. In case of an incorrect item, you may raise a replacement
            or return request only if the item is sealed/ unopened/ unused and
            in original condition.
          </li>
        </ul>

        <ul>
          <li className="product-details-title">Expiry Date</li>
          <li className="product-details-value">
            Please refer to the packaging of the product for expiry date.
          </li>
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
          <li className="product-details-value">
            Product image is for representation only and actual product might
            differ on the basis of crop available in Season.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductImage;
