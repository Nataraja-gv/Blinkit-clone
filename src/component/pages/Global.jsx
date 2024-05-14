export const appstore = "https://blinkit.com/d61019073b700ca49d22.png";
export const playstore = "https://blinkit.com/8ed033800ea38f24c4f0.png";
export const QRcode =  "http://cdn.ebaumsworld.com/mediaFiles/picture/1733067/81853311.png";
import { SlArrowRight } from "react-icons/sl"; 
import { SlArrowLeft } from "react-icons/sl";
import './style/Global.css'
export const CustomLeftArrow = ({ onClick }) => (
  <div
    className="custom-arrow left hover:bg-neutral-200"
    onClick={onClick}
    style={{
      position: "absolute",
      left: "5px",
      top: "50%",
      transform: "translateY(-50%)",
    //   zIndex: 100,
      cursor: "pointer",
    //   backgroundColor:"white"
    zIndex:1
    }}
  >
    <SlArrowLeft   className="custom-arrow hover:bg-neutral-200" />
  </div>
);

export const CustomRightArrow = ({ onClick }) => (
  <div
    className="custom-arrow right hover:bg-neutral-200"
    onClick={onClick}
    style={{
      position: "absolute",
      right: "5px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
      cursor: "pointer",
    //   backgroundColor:"white"


    }}
  >
    <SlArrowRight   className="custom-arrow hover:bg-neutral-200" />
  </div>
);
