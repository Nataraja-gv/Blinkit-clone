import React, { useContext } from "react";
import "./MBreadcrum.css";
import { ItemContent } from "../DataFolder/Context/Context";

const MobileBreadcrum = () => {
  const { selectedCategory } = useContext(ItemContent);

  return (
    <div className="Mobile-Breadcrum-container">
      <p>
         
        {selectedCategory
          ? `Buy ${selectedCategory} Online`
          : "Buy All Category Items Online"}
      </p>
    </div>
  );
};

export default MobileBreadcrum;
