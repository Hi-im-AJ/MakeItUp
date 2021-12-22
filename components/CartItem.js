import { useContext } from "react";
import Image from "next/image";
import CartContext from "../context/cart/CartContext";
import commerce from "../lib/commerce";

export default function ({ img, name, quantity, line_total, id }) {
  const { setCart } = useContext(CartContext);

  const incrementByOne = () =>
    commerce.cart
      .update(id, {
        quantity: quantity + 1,
      })
      .then(({ cart }) => setCart(cart));

  const decrementByOne = () =>
    commerce.cart
      .update(id, {
        quantity: quantity - 1,
      })
      .then(({ cart }) => setCart(cart));

  return (
    <>
      <div className="desc">
        <Image loader={() => img.url} alt={name} src={img.filename} width={200} height={200} />
        <p id="cartItemName">{name}</p>
      </div>
      <div className="quantity">
        <button onClick={decrementByOne}>-</button>
        <p>{quantity}</p>
        <button onClick={incrementByOne}>+</button>
      </div>
      <p>{line_total}</p>
    </>
  );
}
