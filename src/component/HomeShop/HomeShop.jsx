// import React from 'react';
import banner from './blinkbanner.png'
import './HomeShop.css'
import Banner from './Banner/Banner'
import CandsItem from '../CandsItem/CandsItem'
import DailyItem from '../DailyItem/DailyItem'
import RollingItem from '../RollingItem/RollingItem'
import SnacksItem from '../SnackItem/SnackItem'
import ColdItem from '../ColdItem/ColdItem'
import GroceryDisplay from '../pages/GroceryDisplay'
import MobileCart from "../pages/MobileCart"

const HomeShop = () => {
    return (
        
        <div style={{marginLeft:"5%",marginRight:"5%"}}>
        <div>
            <img src={banner} alt='' className='banner_image'/>
        </div>
        <Banner/>
        <GroceryDisplay/>
        <CandsItem/>
        <DailyItem/>
        <RollingItem/>
        <SnacksItem/>
        <ColdItem/>
        <div>
         
        </div> 
        </div>
        
    );
}

export default HomeShop;
