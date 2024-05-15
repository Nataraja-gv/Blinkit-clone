import React from "react";
import "./style/Mitem.css";
import timer from "../item/timer.png";

const MItem = (props) => {
  return (
    <div className="Mobile-item-container">
      <div className="Mobile-item-image-section">
        <img src={props.Image} alt="" className=" Mobile-item-image-item" />
      </div>

      <div className="Mobile-item-timer-section">
        <img src={timer} alt="" className="Mobile-timer-image" />
        <p className="mobile-item-timer">{props.Timer}</p>
      </div>

      <div className="Mobile-item-title-section">
        <h2>{props.Title}</h2>
      </div>

      <div className="Mobile-item-weight-section">
        <p>{props.Weight}</p>
      </div>

      <div className="Mobile-item-price-add-section">
        <ul>
          <li className="Mobile-item-newamount">&#8377;{props.NewAmount}</li>
          {props.OldAmount === 0 ? (
            <></>
          ) : (
            <li className="Mobile-item-oldamount">&#8377;{props.OldAmount}</li>
          )}
        </ul>

        <button
          className="Mobile-add-amount-btn"
          onClick={() => {
            addToCart(props);
          }}
        >
          Add
           {props.option===0 ? <></>:<span className="mobile-item-option">{props.option} options</span>}
        </button>

        {props.offer === 0 ? (
          <></>
        ) : (
          <div className="mobile-svg-icon-section">
            <svg
              className="mobile-svg-icon"
              width="35"
              height="40"
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z"
                fill="#538CEE"
              ></path>
            </svg>
            <p>{props.offer}% OFF</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MItem;
