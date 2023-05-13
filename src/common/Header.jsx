import React from "react";
import "../common/Header.css"
import { Navbar} from "./Navbar"
import { Search} from "./Search"
export const Header = ({cartItem, Signinout}) => {
  return (
    <>
      <Search cartItem={cartItem} Signinout={Signinout}/>
      <Navbar />
    </>
  );
};
