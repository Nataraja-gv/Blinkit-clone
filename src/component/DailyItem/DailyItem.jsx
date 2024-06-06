import React, { useContext } from "react";
import { ItemContent } from "../DataFolder/Context/Context";
import CommonCard from "../CommonCard/CommonCard";

const DailyItem = () => {
  const { Daily_prodcts_details } = useContext(ItemContent);
  return (
    <div>
      <CommonCard title="Daily,Bread & Eggs" itemdata={Daily_prodcts_details} />
    </div>
  );
};

export default DailyItem;
