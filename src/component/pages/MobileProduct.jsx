import React, { useContext } from "react";
import "./style/MobileProduct.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PiShareFatThin } from "react-icons/pi";
import timer from "../item/timer.png";
import { ItemContent } from "../DataFolder/Context/Context";
import Item from "../item/item";
import { Link } from "react-router-dom";
import Mobileproductdetails from "../MobileProductsDetails/Mobileproductdetails.jsx";

const MobileProduct = ({ props }) => {
  const { addToCart, cart, GroceryData } = useContext(ItemContent);

  const iscart = cart.some((item) => item.id === props.id);

  const responsive = {
    mobile: {
      breakpoint: { max: 600, min: 375 },
      items: 1,
    },
  };

  const responsive2 = {
    mobile: {
      breakpoint: { max: 400, min: 360 },
      items: 2,
     
    },
     

    mobiles:{
      breakpoint: { max: 430, min: 401 },
      items: 2.5,
    }
,
    mobiless:{
      breakpoint: { max: 500, min: 431 },
      items: 2.5,
    }
  };

  return (
    <div className="mobile-product-main-container">
      <div className="mobile-product-corousel">
        <Carousel
          responsive={responsive}
          customTransition="all 1s ease in"
          keyBoardControl={true}
          renderDotsOutside={true}
          containerClass="carousel-container"
          infinite={true}
          customDot={<CustomDot />}
          showDots={true}
          autoPlay={true}
          dotListClass={"react-multi-carousel-dot-list custom-dot-list-style"}
          autoPlaySpeed={1000}
          itemClass="carousel-item-padding-40-px itemimage"
          removeArrowOnDeviceType={["desktop", "mobile"]}
        >
          <div>
            {" "}
            <img src={props.Image} alt="" className="mobile-carousel-image" />
          </div>
          <div>
            {" "}
            <img src={props.Image2} alt="" className="mobile-carousel-image" />
          </div>
          <div>
            {" "}
            <img src={props.Image3} alt="" className="mobile-carousel-image" />
          </div>
        </Carousel>
      </div>

      <div className="mobile-product-title ">
        <h1>{props.Title}</h1>
        <p>
          <PiShareFatThin />
        </p>
      </div>

      <div className="mobile-product-timer">
        <img src={timer} alt="" className="timer-image" />
        <p className="item-timer">{props.Timer}</p>
      </div>

      <div className="weight-amount-container">
        <div>
          <p className="product_info-weight mt-3 mb-1">{props.Weight}</p>
          <ul className="amount-section-productInfo mb-1">
            <li className="product_info-Namount ">₹{props.NewAmount}</li>
            <li className="product_info-Oamount">
              MRP{" "}
              <span style={{ textDecoration: "line-through" }}>
                ₹{props.OldAmount}
              </span>
            </li>
            <li className="product_info-Offer">{props.offer}% OFF</li>
          </ul>
          <p className="product_info-taxes">(Inclusive of all taxes)</p>
        </div>

        <div>
          {!iscart ? (
            <button
              className="mobile-add-amount-btn"
              onClick={() => {
                addToCart(props);
              }}
            >
              Add to cart
            </button>
          ) : (
            <button className="mobile-add-amount-btn">GoCart</button>
          )}
        </div>
      </div>

      <div className="mobile-product-display-category-container">
        <h1 className="mobile-category-title">
          Top 10 products in this category
        </h1>

        <div className="mobile-category-product">
          <Carousel
            responsive={responsive2}
            customTransition="all .5ms ease in"
            keyBoardControl={true}
            renderDotsOutside={true}
            containerClass="carousel-container"
            infinite={true}
            //   customDot={<CustomDot />}
            //   showDots={true}
            autoPlay={true}
            dotListClass={"react-multi-carousel-dot-list custom-dot-list-style"}
            autoPlaySpeed={1000}
            itemClass="carousel-item-padding-40-px itemimage"
            removeArrowOnDeviceType={["desktop", "mobile","mobiles","mobiless"]}
          >
            {GroceryData.map((item, index) => {
              return (
                <Link to={`/Product/${item.id}`}>
                  <Item
                    key={index}
                    Image={item.Image}
                    Timer={item.Timer}
                    Title={item.Title}
                    Weight={item.Weight}
                    NewAmount={item.NewAmount}
                    OldAmount={item.OldAmount}
                    offer={item.offer}
                  />
                </Link>
              );
            })}
          </Carousel>
        </div>
      </div>

      <div className="">
        <Mobileproductdetails props={props} />
         
      </div>

      <div className="mobile-say-frsh-container">
        <h3>Say Yes to fresh!</h3>
        <ul className="say-fresh-ul">
          <ul >
            <img
              src={
                "https://cdn.grofers.com/app/images/category/cms_images/promises_icons/Sourced%20Fresh%20Daily%20(1).webp.crdownload"
              }
             className="say-fresh-image"/>
          </ul>
          <ul>
            <li className="say-fresh-header">Sourced Fresh Daily</li>
            <li className="say-fresh-description">Our fruits and vegetables are sourced daily for optimal freshness.</li>
          </ul>
        </ul>

        <ul className="say-fresh-ul">
          <ul>
            <img
              src={
                 "https://cdn.grofers.com/app/images/category/cms_images/promises_icons/Sourced%20By%20Experts.webp.crdownload"
              }
              className="say-fresh-image"
            />
          </ul>
          <ul>
            <li className="say-fresh-header">Sourced By Experts</li>
            <li className="say-fresh-description">
Sourced By Experts
Inhouse expert team selects the best fruit orchards, direct farms, importers, and certified organic/hydroponic vendors</li>
          </ul>
        </ul>

        <ul className="say-fresh-ul">
          <ul>
            <img
              src={
                "https://cdn.grofers.com/app/images/category/cms_images/promises_icons/Daily%20Thorough%20Quality%20Checks.webp.crdownload"
              }
              className="say-fresh-image"
            />
          </ul>
          <ul>
            <li className="say-fresh-header">Daily Thorough Quality Checks</li>
            <li className="say-fresh-description">Fresh produce undergoes daily quality checks before being sent to the stores.</li>
          </ul>
        </ul>

        <ul className="say-fresh-ul">
          <ul>
            <img
              src={
                "https://cdn.grofers.com/app/images/category/cms_images/promises_icons/High%20Packaging%20Standards.webp.crdownload"
              }
              className="say-fresh-image"
            />
          </ul>
          <ul>
            <li className="say-fresh-header">High Packaging Standards</li>
            <li className="say-fresh-description">Produce is packed and stored safely with hygiene to ensure freshness.</li>
          </ul>
        </ul>

        <ul className="say-fresh-ul">
          <ul>
            <img
              src={
                "https://cdn.grofers.com/app/images/category/cms_images/promises_icons/Quality%20Assurance%20At%20Stores.webp.crdownload"
              }
              className="say-fresh-image"
            />
          </ul>
          <ul>
            <li className="say-fresh-header">
Quality Assurance At Stores</li>
            <li className="say-fresh-description">Continuous quality checks and daily audits at stores and during dispatch to the customers.</li>
          </ul>
        </ul>
      </div>
    </div>
  );
};
export const CustomDot = ({ active }) => (
  <button className={`custom-dot${active ? " active" : ""}`} />
);

export default MobileProduct;
