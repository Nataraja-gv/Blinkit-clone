import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./component/Products/Product.jsx";
import Navbar from "./component/Navbar/Navbar";
import HomeShop from "./component/HomeShop/HomeShop";
import CategoryFooter from "./component/CategoryFooterDetails/CategoryFooter";
import Footer from "./component/Footer/Footer";
import GroceryShop from "./component/groceryShop/GroceryShop";
// import MyCart from './component/Mycart/myCart.jsx'
import MobileCart from "./component/pages/MobileCart";
import DownloadAppBanner from "./component/pages/DownloadAppBanner";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import MyCart from "./component/Mycart/myCart.jsx";
function App() {
  const [isFooterOpen, setIsFooterOpen] = useState(false);
  return (
    <>
      <BrowserRouter>
        <DownloadAppBanner />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeShop />}></Route>
          <Route path="/grocery" element={<GroceryShop />}></Route>
          <Route path="cart" element={<MyCart />}></Route>
          <Route path="Product/" element={<Product />}>
            <Route path=":ProductID" element={<Product />}></Route>
          </Route>
        </Routes>

        <div className="app-footer-container">
          {!isFooterOpen ? (
            <ul className="app-footer-artimatic-section">
              <li>{`India's last minute app - blinkit`}</li>
              <li>
                <FaPlus
                  onClick={() => {
                    setIsFooterOpen(!isFooterOpen);
                  }}
                />
              </li>
            </ul>
          ) : (
            <ul className="app-footer-artimatic-section">
              <li>{`India's last minute app - blinkit`}</li>
              <li>
                <FaMinus
                  onClick={() => {
                    setIsFooterOpen(!isFooterOpen);
                  }}
                />
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
