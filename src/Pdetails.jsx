import React from "react";
import "../src/Pdetails.css";
const Pdetails = () => {
  return (
    <div>
      <div className="details">
        <div className="imgd">
          <img src="" alt="Your Picture" />
        </div>
        <div className="pdright">
          <h1>Title</h1>
          <h3>Price</h3>
          <h3>category</h3>
          <h4>Description</h4>
          <button className="pdbtb">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Pdetails;
