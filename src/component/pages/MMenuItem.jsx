import React, { useContext } from "react";
import "./style/MMenu.css";
import { ItemContent } from "../DataFolder/Context/Context";

const MmenuItem = (props) => {
  const { selectedCategory } = useContext(ItemContent);

  return (
    <div className="Mobile-Main-menu-conatiner">
      <div
        className={`mobile-Menuitem-Image-menu-conatiner ${
          props.category === selectedCategory ? "mobile-active-image-bg" : ""
        }`}
      >
        <img
          src={props.Image}
          alt=""
          className={`mobile-image-Menuitem-Image ${
            props.category === selectedCategory ? "mobile-image-menu" : ""
          }`}
        />
      </div>

      <div className="mobile-Menuitem-Menuname-menuitem-conatiner">
        <p className="mobile-Menuitem-Menuname-menu">{props.MenuName}</p>
      </div>
    </div>
  );
};

export default MmenuItem;
