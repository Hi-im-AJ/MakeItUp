import { useContext } from "react";
import Link from "next/link";
import CartContext from "../context/cart/CartContext";
import commerce from "../lib/commerce";

const Hit = ({ hit }) => {
  const { name, image, price, objectID } = hit;

  const { setCart } = useContext(CartContext);

  const addToCart = () => commerce.cart.add(objectID).then(({ cart }) => setCart(cart));

  return (
    <div key={objectID} id={objectID}>
      <Link href={"product/" + objectID}>
        <>
          {image ? <img src={image.url} alt={name} /> : <img src="/assets/noImage.png" alt={name} />}
          <p>{name}</p>
          <p>{price.formatted_with_code}</p>
        </>
      </Link>
      <button className="btn" onClick={addToCart}>
        Add To Cart
      </button>
    </div>
  );
};

export default Hit;
