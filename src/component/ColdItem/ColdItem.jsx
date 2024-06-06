import React, { useContext } from "react";
import { ItemContent } from "../DataFolder/Context/Context";
import CommonCard from "../CommonCard/CommonCard";

const ColdItem = () => {
  const {   ColdDriksDetails } = useContext(ItemContent);
  return (
    <div>
      <CommonCard title="Cold Drinks & Juices" itemdata={  ColdDriksDetails} />
    </div>
  );
};

export default ColdItem;
