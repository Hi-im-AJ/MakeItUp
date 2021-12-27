import { useContext } from "react";
import Link from "next/link";
import CartItem from "../components/CartItem";
import CartContext from "../context/cart/CartContext";
import { Container, List, ListItem, Typography, Button } from "@mui/material";

export default function () {
  const { line_items, subtotal, total_items } = useContext(CartContext);

  if (total_items === 0)
    return (
      <Typography align="center" variant="h5">
        Your cart is empty
      </Typography>
    );
  return (
    <Container maxWidth="lg">
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
          <Link id="checkoutBtn" href="/checkout">
            <Button variant="contained">Checkout</Button>
          </Link>
        </ListItem>
      </List>
    </Container>
  );
}
