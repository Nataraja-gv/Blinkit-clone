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
import MobileCandsItem from "../CandsItem/MobileCand" 
import MobileColdItem from "../ColdItem/MobileCold"
import MobileSnackItem from "../SnackItem/MobileSnack"
import MobileRollItem from "../RollingItem/MobileRoll"
import MobileDailyItem from "../DailyItem/MobileDaily"

const HomeShop = () => {
    return (
        
        <div style={{marginLeft:"5%",marginRight:"5%"}}>
        <div>
            <img src={banner} alt='' className='banner_image'/>
        </div>
        <Banner/>
        <GroceryDisplay/>
         <div>
            <div className='desktop-container'>
            <CandsItem/>
            </div>
            <div className='mobile-conatiner'>
                <MobileCandsItem/>
            </div>
         </div>

         <div>
            <div className='desktop-container'>
            <DailyItem/>
            </div>
            <div className='mobile-conatiner'>
                <MobileDailyItem/>
            </div>
         </div>

         <div>
            <div className='desktop-container'>
            <RollingItem/>
            </div>
            <div className='mobile-conatiner'>
                 <MobileRollItem/>
            </div>
         </div>


         <div>
            <div className='desktop-container'>
            <SnacksItem/>
            </div>
            <div className='mobile-conatiner'>
                 <MobileSnackItem/>
            </div>
         </div>


         <div>
            <div className='desktop-container'>
            <ColdItem/>
            </div>
            <div className='mobile-conatiner'>
            <MobileColdItem/>
            </div>
         </div>
        
        
        
         
        <div>
         
        </div> 
        </div>
        
    );
}

export default HomeShop;
