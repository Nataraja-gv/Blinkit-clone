// import React from 'react';
import banner from "./blinkbanner.png";
import "./HomeShop.css";
import Banner from "./Banner/Banner";
import GroceryDisplay from "../pages/GroceryDisplay";
import { useContext } from "react";
import { ItemContent } from "../DataFolder/Context/Context";
import CommonCard from "../CommonCard/CommonCard";

const HomeShop = () => {
  const {
    Cands,
    Daily_prodcts_details,
    Rolling,
    SnacksItemsDetails,
    ColdDriksDetails,
  } = useContext(ItemContent);

  return (
    <div style={{ marginLeft: "5%", marginRight: "5%" }}>
      <div>
        <img src={banner} alt="" className="banner_image" />
      </div>
      <Banner />
      <GroceryDisplay />
      <div>
        <div className="desktop-container">
          <CommonCard title="Candies & Gums" itemdata={Cands} />
        </div>
      </div>

      <div>
        <div className="desktop-container">
          <CommonCard
            title="Daily,Bread & Eggs"
            itemdata={Daily_prodcts_details}
          />
        </div>
      </div>

      <div>
        <div className="desktop-container">
          <CommonCard title="Rolling paper & tabacco" itemdata={Rolling} />
        </div>
      </div>

      <div>
        <div className="desktop-container">
          <CommonCard title="Snacks & Munchies" itemdata={SnacksItemsDetails} />
        </div>
      </div>

      <div>
        <div className="desktop-container">
          <CommonCard
            title="Cold Drinks & Juices"
            itemdata={ColdDriksDetails}
          />
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default HomeShop;
