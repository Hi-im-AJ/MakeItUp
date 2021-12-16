import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Logo from "../assets/logo.png";
import Cart from "../assets/cart.svg";
import CartContext from "../context/cart/CartContext";

const Navbar = () => {
  const { total_items } = useContext(CartContext);
  return (
    <nav>
      <div>
        <Link to="/">
          <img id="logo" src={Logo} alt="logo" />
        </Link>
      </div>
      <Search />
      <div id="linksContainer">
        <Link to="/about">ABOUT US</Link>
        <Link to="/contact">CONTACT</Link>
        <Link id="cart" to="/cart">
          <img src={Cart} alt="cart" />
          <span className="cartnumbernav">
            <p>{total_items}</p>
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
