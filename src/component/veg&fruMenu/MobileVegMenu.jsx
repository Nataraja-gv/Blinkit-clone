import React, { useContext } from "react";
import "./Veg.css";
import { vegMenuDetails } from "../MenuItemDataFolder/VegMenu.jsx";
// import MenuItem from '../pages/MenuItem.jsx';
import { Link } from "react-router-dom";
import { ItemContent } from "../DataFolder/Context/Context.jsx";
import "../pages/style/MMenu.css";

const MobileVegMenu = () => {
  const { setSelectedCategory, selectedCategory } = useContext(ItemContent);

  return (
    <div className="Mobile-veg-menu-container">
      {vegMenuDetails.map((item, index) => (
        <div
          key={index}
          className={` ${item.category === selectedCategory ? "mobile-active-border  " : ""}`}
          onClick={() => setSelectedCategory(item.category)}
        >
          <Link to={`/grocery`}>
            <div className="Mobile-Main-menu-conatiner">
              <div
                className={`mobile-Menuitem-Image-menu-conatiner ${
                  item.category === selectedCategory
                    ? "active-bg-color"
                    : ""
                }`}
              >
                <img
                  src={item.Image}
                  alt=""
                  className={`mobile-image-Menuitem-Image ${
                    item.category === selectedCategory
                      ? "mobile-image-menu"
                      : ""
                  }`}
                />
              </div>

              <div className= {`mobile-Menuitem-Menuname-menuitem-conatiner ${item.category === selectedCategory ? "" : ""}`}>
                <p className={`mobile-Menuitem-Menuname-menu ${item.category === selectedCategory ? "active-text-color " : ""}`}>{item.MenuName}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MobileVegMenu;
