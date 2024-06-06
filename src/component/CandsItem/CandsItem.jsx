import React, { useContext } from 'react';
import { ItemContent } from '../DataFolder/Context/Context';
import CommonCard from "../CommonCard/CommonCard"
 
 const CandsItem = () => {
  const { Cands } = useContext(ItemContent);
  return (
    <div>
       <CommonCard title="Candies & Gums" itemdata={Cands} />
    </div>
  );
 }
 
 export default CandsItem;
 