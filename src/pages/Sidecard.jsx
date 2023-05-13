import React from "react";
import Sdata from "../pages/Sdata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Sidecard = () => {

  const settings = {
    dots: true,
      infinite: true,
      speed: 1000,
      autoplay:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots:(dots)=>{
        return <ul style={{margin:"0px"}}>{dots}</ul>
      }
  };
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <div className="box d_flex top" key={index}>
              <div className="left">
                <h1>{value.title}</h1>
                <p>{value.desc}</p>
                <button className="btn-success">Visit Collection</button>
              </div>
              <div className="right">
                <img src={value.cover} alt="" />
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};
