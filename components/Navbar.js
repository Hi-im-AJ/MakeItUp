import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import Search from "./Search";
import Logo from "../assets/logo.png";
import Cart from "../assets/cart.svg";
import CartContext from "../context/cart/CartContext";

export default () => {
  const { total_items } = useContext(CartContext);
  return (
    <nav>
      <div>
        <Link href="/">
          <Image src={Logo} id="logo" alt="logo.png" />
        </Link>
      </div>
      <Search />
      <div id="linksContainer">
        <Link href="/about">ABOUT US</Link>
        <Link href="/contact">CONTACT</Link>
        <a id="cart" href="/cart">
          <Image src={Cart} alt="cart" />
          <span className="cartnumbernav">
            <p>{total_items}</p>
          </span>
        </a>
      </div>
    </nav>
  );
};
