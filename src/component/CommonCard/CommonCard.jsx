// import PropTypes from 'prop-types';
import MItem from "../pages/MItem";
import "../pages/style/Global.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomLeftArrow, CustomRightArrow } from "../pages/Global";

const CommonCard = ({ title, itemdata = [] }) => { 
  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 1401 },
      items: 6.5,
      slidesToSlide: 3,
    },
    desktop2: {
      breakpoint: { max: 1250, min: 1023 },
      items: 5.5,
      slidesToSlide: 3,
    },
    desktop3: {
      breakpoint: { max: 1400, min: 1251 },
      items: 5.5,
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
    mobiles: {
      breakpoint: { max: 430, min: 401 },
      items: 2.5,
    },
    mobiless: {
      breakpoint: { max: 500, min: 431 },
      items: 2.5,
    },
    mobilesss: {
      breakpoint: { max: 600, min:501 },
      items: 3,
    },
  };

  return (
    <div>
      <div className="item-title-section">
        <h1 className="item-title">{title}</h1>
        <p className="item-sellall">see all</p>
      </div>
      <div className="carousel-section">
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
          {itemdata.map((item, index) => (
            <MItem
              key={index}
              Image={item.Image}
              Timer={item.Timer}
              Title={item.Title}
              Weight={item.Weight}
              NewAmount={item.NewAmount}
              OldAmount={item.OldAmount}
              offer={item.offer}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};



export default CommonCard;
