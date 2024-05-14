import React, { useContext, useState } from "react";
import { PiClipboardTextBold } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./Bill.css";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { PiInfoBold } from "react-icons/pi";
import { FaBagShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { ItemContent } from "../DataFolder/Context/Context";

const Bill = () => {
  const { total, discount, mrp, newAmount } = useContext(ItemContent);
  const [isdrop, setIsDrop] = useState(false);
  return (
    <div className="bill-main-container">
      <div className="bill-title-section">
        <h1>Bill details</h1>
      </div>
      <div>
        <div className=" bill-price-section">
          <div className=" bill-sub-total ">
            <ul className="subTotal-content">
              <li>
                <PiClipboardTextBold />
              </li>
              <li>Sub total</li>
              <li>
                <MdKeyboardArrowDown onClick={()=>{setIsDrop(!isdrop)}}
                  style={{
                    backgroundColor: "rgb(196, 196, 196)",
                    borderRadius: "50%",
                  }}
                />
              </li>
              <li>
                <span
                  style={{
                    color: "rgb(37, 111, 239)",
                    backgroundColor: "rgb(237, 244, 255)",
                    padding: "4px",
                    borderRadius: "4px",
                    fontSize: "12px",
                  }}
                >
                  Saved ₹{discount}{" "}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <ul className="subtotal-amount">
              <li className="subtotal-old">₹{mrp}</li>
              <li>₹{total}</li>
            </ul>
          </div>
        </div>
      </div>
      {isdrop && (
        <div className="bill-dropdown-section">
          <ul className="bill-dropmenu-mrp">
            <li>MRP</li>
            <li>₹{mrp}</li>
          </ul>

          <ul className="bill-dropmenu-mrp">
            <li>Product Discount</li>
            <li style={{ color: "rgb(37, 111, 239)" }}>-₹{discount}</li>
          </ul>
        </div>
      )}
      <div className="   bill-Delivery-section">
        <div className=" bill-charge-delivery">
          <ul className="bill-content">
            <li>
              <MdOutlineDeliveryDining style={{ fontSize: "20px" }} />
            </li>
            <li>Delivery charge</li>
            <li>
              {" "}
              <PiInfoBold />
            </li>
          </ul>
        </div>

        <div>
          <ul className="bill-free">
            <li style={{ textDecoration: "line-through" }}>₹35</li>
            <li style={{ color: "rgb(37, 111, 239)" }}>FREE</li>
          </ul>
        </div>
      </div>

      <div className=" bill-Handling-section">
        <div className=" bill-charge-handling">
          <ul className="handling-content">
            <li>
              <FaBagShopping />
            </li>
            <li>Handling charge</li>
            <li>
              {" "}
              <PiInfoBold />
            </li>
          </ul>
        </div>

        <div>
          <ul className="handling-amount">
            <li style={{ color: "rgb(37, 111, 239)" }}>FREE</li>

            {/* <li>FREE</li> */}
          </ul>
        </div>
      </div>

      <div className=" bill-tip-section">
        <div className=" bill-charge-tip">
          <ul className="tip-content">
            <li>
              <CgProfile />
            </li>
            <li>Tip for your delivery partner </li>
            {/* <li>
              {" "}
              <PiInfoBold />
            </li> */}
          </ul>
        </div>

        <div>
          <ul className="tip-amount">
            <li style={{ color: "rgb(37, 111, 239)" }}>FREE</li>

            {/* <li>FREE</li> */}
          </ul>
        </div>
      </div>

      <div className=" bill-Grandtotal-section">
        <div className=" bill-charge-Grandtotal">
          <ul>
            <li className="grand-handing">Grand total</li>
            {/* <li>
              {" "}
              <PiInfoBold />
            </li> */}
          </ul>
        </div>

        <div>
          <ul>
            <li className="grand-handing">₹{total}</li>
            {/* <li>FREE</li> */}
          </ul>
        </div>
      </div>

      {/* <div className=" bill-totalsaving-section">
        <div className=" bill-charge-totalSaving">
          <ul>
            
            <li className="grand-TotalSaving"> your total saving</li>
            
          </ul>
        </div>

        <div>
          <ul>
            <li className="grand-TotalSAving">₹356</li>
            
          </ul>
        </div>
      </div>

 */}
    </div>
  );
};

export default Bill;
