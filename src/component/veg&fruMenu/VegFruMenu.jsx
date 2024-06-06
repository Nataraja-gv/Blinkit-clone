import React, { useContext } from "react";
import "./Veg.css";
import { vegMenuDetails } from "../MenuItemDataFolder/VegMenu.jsx";
import MenuItem from "../pages/MenuItem.jsx";
import { Link } from "react-router-dom";
import { ItemContent } from "../DataFolder/Context/Context.jsx";

const VegFruMenu = () => {
  const { setSelectedCategory, selectedCategory } = useContext(ItemContent);

  return (
    <div className="veg-menu-container "  >
      {vegMenuDetails.map((item, index) => (
        <div
          key={index}
          className={`menu-item ${
            item.category === selectedCategory ? "Menuitem-vegfre-section" : ""
          }`}
          onClick={() => setSelectedCategory(item.category)}
        >
          <Link to={`/grocery`}>
            <MenuItem Image={item.Image} MenuName={item.MenuName} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VegFruMenu;
