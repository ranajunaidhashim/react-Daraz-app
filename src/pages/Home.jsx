import React from "react";
import { Categories } from "../pages/Categories";
import Slider from "./Slider";
import "../pages/Home.css"
export const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container d_flex">
          <Categories />
          <Slider/>
        </div>
      </section>
    </>
  );
};
