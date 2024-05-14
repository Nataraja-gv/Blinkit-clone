// import React from 'react';
import { useContext, useState } from "react";
import "./style/Menuitem.css";
import Item from "../item/item";
// import { ItemContent } from "../DataFolder/Context/Context";

const MenuItem = (props) => {
  

  return (
    <div className="Menuitem-main-container">
      <div className="Menuitem-Image-conatiner">
      
        <img src={props.Image} alt="" className="Menuitem-Image" />
      </div>

      <div className="Menuitem-Menuname-conatiner">
        <p className="Menuitem-Menuname">{props.MenuName}</p>
      </div>
    </div>
  );
};

export default MenuItem;
