import React, { useContext } from "react";
import { ItemContent } from "../DataFolder/Context/Context";
import CommonCard from "../CommonCard/CommonCard";

const RollingItem = () => {
  const {  Rolling } = useContext(ItemContent);
  return (
    <div>
      <CommonCard title="Rolling paper & tabacco" itemdata={ Rolling} />
    </div>
  );
};

export default RollingItem;
