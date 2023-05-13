import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./common/Header";
import { Mypage } from "./pages/Mypage";
import React, { Fragment, useState } from "react";
import Data from "./Components/Data";
import Footer from "./footer/Footer";
import Cart from "./cart/Cart";
import Signinout from "./LoginForm/Signinout";
import Pdetails from "./Pdetails";

function App() {
  const { productItems } = Data;
  const [cartItem, setCartItem] = useState([]);
  const addCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCartItem(
        cartItem.map((item) =>(
          item.id === product.id ? { ...productExit, qty: productExit.qty + 1 }
            : item)));
    } else{
      setCartItem([...cartItem,{...product,qty:1}])
    }
  };

const decreaseQty = (product) =>{
  const productExit = cartItem.find((item) => item.id === product.id);
  if(productExit.qty === 1){
    setCartItem(cartItem.filter((item) => item.id !== product.id))
  } else {
    setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
  }

}


  return (
    <>
      <Router>
        <Header cartItem={cartItem} />
        <Fragment>
          <Routes>

            <Route exact path="/">
              <Route
                exact
                path="/"
                element={
                  <Mypage productItems={productItems} addCart={addCart} />
                }
              />
            </Route>
            
            <Route>
              <Route
                exact
                path="/account"
                element={
                  <Signinout/>
                }
              />
              </Route>


            <Route>
              <Route
                exact
                path="/cart"
                element={
                  <Cart cartItem={cartItem} addCart={addCart} decreaseQty={decreaseQty}/>
                }
              />
            </Route>
            <Route>
              <Route
                exact
                path="/pdetails"
                element={
                  <Pdetails/>
                }
              />
            </Route>

           
          </Routes>
        </Fragment>
        <Footer />
      </Router>
    </>
  );
}


export default App;
