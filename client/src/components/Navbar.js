import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Logo from "../assets/logo.png";
import CartContext from "../context/cart/CartContext";


const Navbar = () => {
  const { total_items} = useContext(CartContext);
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
        <Link to="/cart">MY CART<h7 className="cartnumbernav">{total_items}</h7></Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
