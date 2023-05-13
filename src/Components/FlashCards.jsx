import React, { useState } from "react";
import Slider from "react-slick";

const FlashCards = ({ productItems ,addCart }) => {
 
  
    const [count , setCount] = useState(0)
    const incre =()=>{
      setCount (count+1)
    }

  const settings = {
    dots:false,
    infinite: true,
    speed: 6000,
    autoplay:true,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  return (
    <>
     <Slider {...settings}>
      {productItems.map((p ,index) => {
        return (
          <div className="box" key={index}>
            <div className="product mtop">
              <div className="img">
                <span className="discount" >{p.discount}% OFF </span>
                <img src={p.cover} alt="" />
                <div className="likes">
                  <label>0</label> <br />
                  <i className="fa-regular fa-heart" onClick={incre}></i>
                </div>
              </div>
              <div className="details">
                <h3>{p.name}</h3>
                <div className="rate"></div>
                <div className="price">
                  <h4>RS {p.price}.0 </h4>
                  <button onClick={()=>addCart(p)}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      </Slider>
    </>
  );
};

export default FlashCards;
