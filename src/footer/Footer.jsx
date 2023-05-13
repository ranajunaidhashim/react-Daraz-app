import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <>
    <footer>
      <div className="container grid2">
        <div className="box">
          <h1>Daraz.pk</h1>
          <p>Pakistan's best online shopping store</p>
          <div className="icon d_flex">
            <div className="img d_flex">
              <i className="fa-brands fa-google-play"></i>
              <span>Google Play Store</span>
            </div>

            <div className="img d_flex">
              <i className="fa-brands fa-app-store-ios"></i>
              <span>Apple Store</span>
            </div>
          </div>
        </div>
        <div className="box">
          <h2>About Us</h2>
          <ul>
            <li>Career</li>
            <li>Our Stores</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="box">
          <h2>Customer Care</h2>
          <ul>
            <li>Help Center</li>
            <li>Buy & Sell</li>
            <li>Track Your Order</li>
            <li>Returns & Refund</li>
          </ul>
        </div>
        <div className="box">
          <h2>Contact Us</h2>
          <ul>
            <li>Multan Pakistan</li>
            <li>Email: Daraz@gmail.com</li>
            <li>Phone: 03123456789</li>
          </ul>
        </div>
      </div>
      </footer>
    </>
  );
};

export default Footer;
