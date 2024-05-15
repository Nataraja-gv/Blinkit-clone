 
import { useContext } from "react";
import { ItemContent } from "../DataFolder/Context/Context";
// import Item from "../item/item";
import "../pages/style/Global.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomLeftArrow, CustomRightArrow } from "../pages/Global";
import MItem from "../pages/MItem.jsx"

const  MobileRollItem = () => {
  const { Rolling } = useContext(ItemContent);

  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 6.5,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
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
        <h1 className="item-title"> Rolling paper & tobacco</h1>
        <p className="item-sellall">see all</p>
      </div>
      <div>
        <Carousel
          responsive={responsive}
          keyBoardControl={true}
          showArrows={true}
          swipeable={true}
          draggable={true}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          autoPlay={true}
          infinite={true}
          customTransition="all 0.1s ease in"
        >
          {Rolling.map((item, index) => {
            return (
              <MItem
                key={index}
                Image={item.Image}
                Timer={item.Timer}
                Title={item.Title}
                Weight={item.Weight}
                NewAmount={item.NewAmount}
                OldAmount={item.OldAmount}
                offer={item.offer}
                option={item.option}

              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default MobileRollItem;
