import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import NoImage from "../assets/noImage.png";
import CartContext from "../context/cart/CartContext";
import commerce from "../lib/commerce";

const Hit = ({ hit }) => {
  const { name, image, price, objectID } = hit;

  const { setCart } = useContext(CartContext);

  const addToCart = () => commerce.cart.add(objectID).then(({ cart }) => setCart(cart));

  return (
    <Fragment>
      <Link to={"product/" + objectID} id={objectID} key={objectID}>
        {image ? <img src={image.url} alt={name} /> : <img src={NoImage} alt={name} />}
        <p>{name}</p>
        <p>{price.formatted_with_code}</p>
      </Link>
      <button className="btn" onClick={addToCart}>
        Add To Cart
      </button>
    </Fragment>
  );
};

export default Hit;
