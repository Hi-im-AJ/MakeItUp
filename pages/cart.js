import { useContext } from "react";
import Link from "next/link";
import CartItem from "../components/CartItem";
import CartContext from "../context/cart/CartContext";
import {Container, List, ListItem, Typography, Button, CircularProgress} from "@mui/material";

export default function () {
  const { line_items, subtotal, total_items, id, clearCart, loading } = useContext(CartContext);

  if (total_items === 0)
    return (
      <Typography align="center" variant="h5">
        Your cart is empty
      </Typography>
    );
  return (
    <Container maxWidth="lg">
      {loading && <CircularProgress style={{
          position: "fixed",
          left: "50%",
          top: "50%",
          width: "5%",
          height: "5%",
          zIndex: "9999"}}/>
      }
      <List>
        {line_items.map((item) => {
          const {
            name,
            quantity,
            line_total: { formatted_with_code },
            id,
            image,
            product_id,
          } = item;
          return (
            <ListItem key={id}>
              <CartItem
                id={id}
                productId={product_id}
                img={image}
                name={name}
                quantity={quantity}
                line_total={formatted_with_code}
              />
            </ListItem>
          );
        })}
      </List>
      <List sx={{ mx: 5, direction: "rtl" }}>
        <ListItem>
          <Typography variant="overline">Sub total: {subtotal.formatted_with_symbol}</Typography>
        </ListItem>
        <ListItem>
          <Link href="/checkout">
            <Button variant="contained">Checkout</Button>
          </Link>
          <Button sx={{ mx: "1rem" }} variant="outlined" onClick={() => clearCart(id)}>
            Clear Cart
          </Button>
        </ListItem>
      </List>
    </Container>
  );
}
