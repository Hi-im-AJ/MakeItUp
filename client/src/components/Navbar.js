import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav>
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
