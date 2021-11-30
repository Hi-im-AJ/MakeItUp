import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <Search />
      <div>
        <Link to="/about">ABOUT US</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/cart">MY CART</Link>
      </div>
    </nav>
  );
};

export default Navbar;
