import { useContext, useEffect } from "react";
import Link from "next/link";
import Search from "./Search";
import CartContext from "../context/cart/CartContext";
import commerce from "../lib/commerce";

export default () => {
  const { total_unique_items, setCart } = useContext(CartContext);
  useEffect(() => {
    commerce.cart
      .retrieve()
      .then((cart) => {
        console.log(cart);
        setCart(cart);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [total_unique_items]);

  return (
    <nav>
      <div>
        <Link href="/">
          <img id="logo" src="/assets/logo.png" alt="LOGO" />
        </Link>
      </div>
      <Search />
      <div id="linksContainer">
        <Link href="/about">ABOUT US</Link>
        <Link href="/contact">CONTACT</Link>
        <Link href="/cart">
          <div id="cart">
            <img src="/assets/cart.svg" alt="CART" />
            <span className="cartnumbernav">
              <p>{total_unique_items}</p>
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};
