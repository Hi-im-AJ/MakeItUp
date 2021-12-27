import { useContext } from "react";
import Link from "next/link";
import CartContext from "../context/cart/CartContext";
import commerce from "../lib/commerce";
import { Card, CardMedia, CardContent, CardActions, Typography, Grid, IconButton } from "@mui/material";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export default function ({ img, name, quantity, line_total, id, productId }) {
  const { setCart } = useContext(CartContext);

  const incrementByOne = () =>
    commerce.cart
      .update(id, {
        quantity: quantity + 1,
      })
      .then(({ cart }) => setCart(cart));

  const decrementByOne = () =>
    commerce.cart
      .update(id, {
        quantity: quantity - 1,
      })
      .then(({ cart }) => setCart(cart));

  return (
    <Card sx={{ width: "100%" }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item sx={{ display: "flex" }}>
          {img.url && (
            <Link href={`/product/${productId}`}>
              <CardMedia
                image={img.url}
                title={img.filename}
                sx={{ width: "10rem", height: "10rem", cursor: "pointer" }}
              />
            </Link>
          )}
          <CardContent sx={{ display: "grid" }}>
            <Typography sx={{ my: 1 }} variant="h6">
              {name}
            </Typography>
            <Typography sx={{ my: 1 }} variant="p" color="primary">
              {line_total}
            </Typography>
            <Typography sx={{ my: 1 }} variant="p">
              Qty: {quantity}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item sx={{ width: "10rem" }}>
          <CardActions>
            <IconButton size="large" color="secondary" onClick={decrementByOne}>
              <RemoveRoundedIcon />
            </IconButton>
            <IconButton size="large" color="primary" onClick={incrementByOne}>
              <AddRoundedIcon />
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}
