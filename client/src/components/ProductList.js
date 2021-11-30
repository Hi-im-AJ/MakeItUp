import React, { useEffect, useState, useContext } from "react";
import commerce from "../lib/commerce";
import ProductContext from "../context/product/ProductContext";

const ProductList = () => {
  const productContext = useContext(ProductContext);
  const { search_input } = productContext;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      commerce.products
        .list()
        .then((e) => {
          setProducts(e.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [loading]);

  return (
    <ul>
      {products &&
        products.map((e) => {
          return <li key={e.id}>{e.name}</li>;
        })}
    </ul>
  );
};

export default ProductList;
