import React from "react";
import timer from '../item/timer.png'
import './Item2.css'

const Item2 = () => {
  return (
    <div className="item2-main-comatiner">
      <div className="item2-image-section">
        <img src={props.Image} alt="" className="  item2-image-item2" />
      </div>

      <div className="item2-timer-section">
        <img src={timer} alt="" className="timer2-image" />
        <p className="item2-timer">{props.Timer}</p>
      </div>

      <div className="item2-title-section">
        <h2>{props.Title}</h2>
      </div>

      <div className="item2-weight-section">
        <p>{props.Weight}</p>
      </div>

      <div className="item2-price-add-section">
        <ul>
          <li className="item2-newamount">&#8377;{props.NewAmount}</li>
          {props.OldAmount === 0 ? (
            <></>
          ) : (
            <li className="item2-oldamount">&#8377;{props.OldAmount}</li>
          )}
        </ul>

        <button
          className="add2-amount-btn"
          onClick={() => {
            addToCart(props);
          }}
        >
          Add
        </button>

        {props.offer === 0 ? (
          <></>
        ) : (
          <div className="svg2-icon-section">
            <svg
              className="svg2-icon"
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

export default Item2;
