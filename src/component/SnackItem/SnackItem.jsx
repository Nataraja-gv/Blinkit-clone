import React, { useContext } from "react";
import { ItemContent } from "../DataFolder/Context/Context";
import CommonCard from "../CommonCard/CommonCard";

const SnacksItem = () => {
  const {  SnacksItemsDetails } = useContext(ItemContent);
  return (
    <div>
      <CommonCard title="Snacks & Munchies" itemdata={ SnacksItemsDetails} />
    </div>
  );
};

export default SnacksItem;
