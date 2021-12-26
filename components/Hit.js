import { useContext } from "react";
import Link from "next/link";
import CartContext from "../context/cart/CartContext";
import commerce from "../lib/commerce";
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from "@mui/material";

export default function ({ hit }) {
  const { name, image, price, objectID } = hit;

  const { setCart } = useContext(CartContext);

  const addToCart = () => commerce.cart.add(objectID).then(({ cart }) => setCart(cart));

  const href = "product/" + objectID;
  const url = image ? { image: image.url } : {};

  return (
    <Card key={objectID}>
      <Link href={href}>
        <CardMedia sx={{ height: "15rem" }} title={name} {...url} />
      </Link>
      <CardContent>
        <Typography>{name}</Typography>
        <Typography>{price.formatted_with_code}</Typography>
        <CardActions>
          <Button onClick={addToCart}>Add To Cart</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
