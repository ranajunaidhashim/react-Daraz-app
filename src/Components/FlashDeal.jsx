import React from "react";

import FlashCards from "./FlashCards";

const FlashDeal = ({productItems , addCart}) => {
    
  return (
    <>
      <section className="flashbg">
        <div className="container ">
          <div className="heading f_flex">
            <i className="fa fa-bolt"></i>
            <h1>Flash Sales</h1>
          </div>
          <FlashCards productItems={productItems} addCart={addCart}/>
        </div>
      </section>
    </>
  );
};

export default FlashDeal;
