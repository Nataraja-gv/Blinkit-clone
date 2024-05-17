// import React from 'react';

import { useContext } from "react";
import { ItemContent } from "../DataFolder/Context/Context";
import Item from "../item/item";
import "../pages/style/Global.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomLeftArrow, CustomRightArrow } from "../pages/Global";

const DailyItem = () => {
  const { Daily_prodcts_details } = useContext(ItemContent);

  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min:1401  },
      items:6.5,
      slidesToSlide: 3,
    },

    desktop2: {
      breakpoint: { max: 1250, min:1023  },
      items: 5.5,
      slidesToSlide: 3,
    },

    desktop3: {
      breakpoint: { max: 1400, min:1251},
      items: 5.5,
      slidesToSlide: 3,
    },

    mobile: {
      breakpoint: { max: 400, min: 360 },
      items: 2,
     
    },
     

    mobiles:{
      breakpoint: { max: 430, min: 401 },
      items: 2.5,
    }
,
    mobiless:{
      breakpoint: { max: 500, min: 431 },
      items: 2.5,
    }
  };
  return (
    <div>
      <div className="item-title-section">
        <h1 className="item-title"> Dairy, Bread & Eggs</h1>
        <p className="item-sellall">see all</p>
      </div>
      <div>
        <Carousel
          responsive={responsive}
          keyBoardControl={true}
          draggable={true}
          swipeable={true}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          autoPlay={true}
          infinite={true}
          customTransition="all 0.1s ease in"
        >
          {Daily_prodcts_details.map((item, index) => {
            return (
              <Item
                key={index}
                Image={item.Image}
                Timer={item.Timer}
                Title={item.Title}
                Weight={item.Weight}
                NewAmount={item.NewAmount}
                OldAmount={item.OldAmount}
                offer={item.offer}

              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default DailyItem;
