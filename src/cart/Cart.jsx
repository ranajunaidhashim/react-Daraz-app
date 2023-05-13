import React from "react";
import "./Cart.css";
const Cart = ({ cartItem, addCart, decreaseQty }) => {
  const totalprice = cartItem.reduce( (price, item) => price + item.qty * item.price, 0 );
  return (
    <>
      <section>
        <div className="cart-items">
          <div className="container d_flex">
            <div className="cart-details">
              {cartItem.length === 0 && (
                <h3 className="no-items product">Cart is Empty</h3>
              )}
              {cartItem.map((item) => {
                const productQty = item.price * item.Qty;
                return (
                  <>
                    <div className="cart-list product d_flex" key={item.id}>
                      <div className="img">
                        <img src={item.cover} alt="" />
                      </div>
                      <div className="cart-details">
                        <h3>{item.name}</h3>
                        <h4>
                          ${item.price}.00 * {item.qty}
                          <span>${productQty}.0</span>
                        </h4>
                      </div>
                      <div className="cart-items-function">
                        <div className="removeCart">
                          <button className="removeCart">
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                        </div>

                        <div className="cartControl d_flex">
                          <button
                            className="incCart"
                            onClick={() => addCart(item)}
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                          <button
                            className="desCart"
                            onClick={() => decreaseQty(item)}
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="cart-item-price"></div>
                  </>
                );
              })}
            </div>
            <div className="cart-total product">
              <h2>Cart Summary</h2>
              <div className=" d_flex">
                <h4>Total Price :</h4>
                <h3>${totalprice}.00</h3>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Cart;
