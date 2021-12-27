import { useContext, useEffect, useState } from "react";
import AddressForm from "/components/AddressForm";
import PaymentForm from "../components/PaymentForm";
import commerce from "/lib/commerce";
import CartContext from "/context/cart/CartContext";
import { Container, Paper } from "@mui/material";

export default function () {
  const { id: cartId } = useContext(CartContext);
  const [checkoutToken, setcheckoutToken] = useState(null);

  useEffect(() => {
    commerce.checkout
      .generateToken(cartId, { type: "cart" })
      .then((checkout) => {
        setcheckoutToken(checkout.id);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [cartId]);

  return (
    <Container maxWidth="lg">
      <Paper sx={{ p: 5 }}>
        {checkoutToken && (
          <>
            <AddressForm checkoutToken={checkoutToken} />
            <PaymentForm checkoutToken={checkoutToken} />
          </>
        )}
      </Paper>
    </Container>
  );
}
