import React from "react";
import daraz from "../Images/logo/daraz.png";
import { Link } from "react-router-dom";

export const Search = ({cartItem , Signinout }) => {
  window.addEventListener("scroll",function(){
    const search = document.querySelector(".search") 
    search.classList.toggle("active",this.window.scrollY > 100)
  })


  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logowidth">
            <img src={daraz} alt="" />
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input placeholder="Search in Daraz" type="text" />
            <span>Categories</span>
          </div>

          <div className="icon f_flex width">
          <Link to="/account">
          <i className="fa fa-user icon-circle"></i>
          </Link>
           

            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{cartItem.length ===0 ? "" : cartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
