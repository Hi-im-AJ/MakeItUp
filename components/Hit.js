import { useContext } from "react";
import Link from "next/link";
import Image from "next/image"
import CartContext from "../context/cart/CartContext";
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from "@mui/material";

export default function ({ hit }) {
  const { name, image, price, objectID } = hit;
  const { addToCart } = useContext(CartContext);
  const href = "product/" + objectID;
  const media = image ? (
    <Link href={href}>
      <CardMedia sx={{ cursor: "pointer" }} title={name} >
        <Image src={image.url} width="15" height="15" layout="responsive"></Image>
      </CardMedia>
    </Link>
  ) : null;

  return (
    <Card key={objectID}>
      {media}
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="p" color="primary">
          {price.formatted_with_code}
        </Typography>
        <CardActions>
          <Button onClick={() => addToCart(objectID)}>Add To Cart</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
