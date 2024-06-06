import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Product from "./component/Products/Product.jsx";
import Navbar from "./component/Navbar/Navbar";
import HomeShop from "./component/HomeShop/HomeShop";
import CategoryFooter from "./component/CategoryFooterDetails/CategoryFooter";
import Footer from "./component/Footer/Footer";
import GroceryShop from "./component/groceryShop/GroceryShop";
import MobileCart from "./component/pages/MobileCart";
import DownloadAppBanner from "./component/pages/DownloadAppBanner";
import MyCart from "./component/Mycart/myCart.jsx";

function App() {
  const [isFooterOpen, setIsFooterOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        <DownloadAppBanner />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeShop />} />
          <Route path="/grocery" element={<GroceryShop />} />
          <Route path="/cart" element={<MyCart />} />
          <Route path="/Product/:ProductID" element={<Product />} />
        </Routes>

        {(window.location.pathname.includes("/grocery")) && (
          <div className="app-footer-container">
            {!isFooterOpen ? (
              <ul className="app-footer-artimatic-section">
                <li>{`India's last minute app - blinkit`}</li>
                <li>
                  <FaPlus onClick={() => setIsFooterOpen(!isFooterOpen)} />
                </li>
              </ul>
            ) : (
              <ul className="app-footer-artimatic-section">
                <li>{`India's last minute app - blinkit`}</li>
                <li>
                  <FaMinus onClick={() => setIsFooterOpen(!isFooterOpen)} />
                </li>
              </ul>
            )}
            {isFooterOpen && (
              <>
                <CategoryFooter />
                <Footer />
              </>
            )}
          </div>
        )}

        <div className="footer-display-what-section">
          <CategoryFooter />
          <Footer />
        </div>

        <MobileCart />
      </BrowserRouter>
    </>
  );
}

export default App;
