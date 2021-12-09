import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import commerce from "../../lib/commerce";
import { stripTags } from "../../lib/utils";
import NoImage from "../../assets/noImage.png";
import CartContext from "../../context/cart/CartContext";

const Product = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { setCart } = useContext(CartContext);

  useEffect(() => {
    commerce.products
      .retrieve(id)
      .then((e) => {
        setProduct(e);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const addToCart = () => commerce.cart.add(id).then(({ cart }) => setCart(cart));

  return product ? (
    <div className="frame">
      {product.image ? <img src={product.image.url} alt={product.name} /> : <img src={NoImage} alt="Not found" />}
      <h1>{product.name}</h1>
      <p>{stripTags(product.description)}</p>
      <button className="btn" onClick={addToCart}>
        Add To Cart
      </button>
    </div>
  ) : null;
};

export default Product;
