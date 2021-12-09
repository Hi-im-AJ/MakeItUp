import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import commerce from "../../lib/commerce";
import { stripTags } from "../../lib/utils";
import NoImage from "../../assets/noImage.png";

const Product = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    commerce.products
      .retrieve(id)
      .then((e) => {
        setProduct(e);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return product ? (
    <div role="article">
      {product.image ? <img src={product.image.url} alt={product.name} /> : <img src={NoImage} alt="Not found" />}
      <h1>{product.name}</h1>
      <p>{stripTags(product.description)}</p>
      <button className="btn">Add To Cart</button>
    </div>
  ) : (
    <div role="status"></div>
  );
};

export default Product;
