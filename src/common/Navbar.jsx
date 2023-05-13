import React , {useState} from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

const [menu,setMenu] = useState(false)
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="categories d_flex">
            <span className="fa-solid fa-border-all"></span>
            <h4>
              Categories <i className="fa fa-chevron-down"></i>
            </h4>
          </div>

          <div className="navlink">
            <ul className={menu? "nav-links-menu" : "link f_flex capitalize"} onClick={()=>setMenu(false)}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/user">User</Link>
              </li>
              <li>
                <Link to="/track">Track Order</Link>
              </li>
              <li>
                <Link to="/account">Login</Link>
              </li>
            </ul>

            <button className="toggle" onClick={()=> setMenu(!menu)}>
              {menu ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
