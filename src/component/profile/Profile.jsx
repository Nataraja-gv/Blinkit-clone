// import React from 'react';
import "./Profile.css";
import { QRcode } from "../pages/Global.jsx";

const Profile = () => {
  return (
    <div className="profile-main-container">
      <div className="profile-myaccount-section">
        <h1>My Account</h1>
        <p>8088810874</p>
      </div>
      <ul className="profile-order-section">
        <li>My Orders</li>
        <li>Saved Address</li>
        <ul className="profile-wallet">
          <li>My Wallet</li>
          <li>&#8377;0</li>
        </ul>
        <li>{`FAQ's`}</li>
        <li>Log Out</li>
      </ul>

      <div className="profile-qrcode-section">
        <div className="">
          <img src={QRcode} alt="" className="QR-code-Profile" />
        </div>
        <div className="profile-scan-section">
          <h1>
            Simple way to get groceries <span>in minutes</span>
          </h1>
          <p>Scan the QR code and download blinkit app</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
