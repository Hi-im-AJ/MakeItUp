import {Fragment, useContext} from "react";
import Link from "next/link";
import Image from 'next/image'
import CartContext from "../context/cart/CartContext";
import commerce from "../lib/commerce";
import NoImage from "../public/assets/noImage.png";

export default function ({ hit }) {
  const { name, image, price, objectID } = hit;

  const { setCart } = useContext(CartContext);

  const addToCart = () => commerce.cart.add(objectID).then(({ cart }) => setCart(cart));

  const href = "product/" + objectID;
  return (
    <div key={objectID} id={objectID}>
      <Link href={href} >
          {image ? <img src={image.url} alt={name} /> : <img src={NoImage} alt={name} />}
      </Link>
      <Link href={href}>
        <p>{name}</p>
      </Link>

      <Link href={href}>
        <p>{price.formatted_with_code}</p>
      </Link>

      <button className="btn" onClick={addToCart}>
        Add To Cart
      </button>
    </div>
  );
}
