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

  return (
    <div key={objectID} id={objectID}>
      <Link href={"product/" + objectID} >
          {image ? <img src={image.url} alt={name} /> : <img src={NoImage} alt={name} />}
      </Link>
      <p>{name}</p>
      <p>{price.formatted_with_code}</p>
      <button className="btn" onClick={addToCart}>
        Add To Cart
      </button>
    </div>
  );
}
