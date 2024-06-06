// import React from 'react';
import "./Banner.css";
import b1 from "./banner1.png";
import b2 from "./banner2.png";
import b3 from "./banner3.png";

const banner = [
  {
    id: 1,
    Image: b1,
  },

  {
    id: 2,
    Image: b2,
  },

  {
    id: 3,
    Image: b3,
  },

  {
    id: 4,
    Image: b1,
  },

  {
    id: 5,
    Image: b2,
  },
  {
    id: 6,
    Image: b3,
  },
];
const Banner = () => {
  return (
    <div className="banner-container">
      {banner.map((item, index) => (
        <img key={index} src={item.Image} alt="" className="banner" />
      ))}
    </div>
  );
};

export default Banner;
