import React from 'react';
import '../Navbar/Navbar.css'

const DownloadAppBanner = () => {
    return (
        <div>
            <div className="blinkit-navbar-app-banner-container">
        <div className="blinkit-getapp-section">
          <img
            src={"https://blinkit.com/8a3fd859084bd0f463dc.png"}
            className="mobileapp-image"
          />
          <ul>
            <h1>Get the app</h1>
            <li>for better experience and</li>
            <li>exclusive features</li>
          </ul>
        </div>
        <div className="blinkit-use-app-section mr-3">
          <ul>
            <p>Use app</p>
          </ul>
        </div>
      </div>
        </div>
    );
}

export default DownloadAppBanner;
