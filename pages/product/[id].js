import { useContext } from "react";
import commerce from "../../lib/commerce";
import NoImage from "../../public/assets/noImage.png";
import { stripTags } from "../../lib/utils";
import CartContext from "../../context/cart/CartContext";
import { Container } from "@mui/material";

export async function getServerSideProps(context) {
  const {
    params: { id },
  } = context;
  let product = await commerce.products.retrieve(id);

  return {
    props: { product }, // will be passed to the page component as props
  };
}
export default ({ product }) => {
  const { setCart } = useContext(CartContext);
  const addToCart = () => commerce.cart.add(product.id).then(({ cart }) => setCart(cart));

  return product ? (
    <Container maxWidth="xl">
      {product.image ? <img src={product.image.url} alt={product.name} /> : <img src={NoImage} alt="Not found" />}
      <h1>{product.name}</h1>
      <p>{stripTags(product.description)}</p>
      <button className="btn" onClick={addToCart}>
        Add To Cart
      </button>
    </Container>
  ) : null;
};
