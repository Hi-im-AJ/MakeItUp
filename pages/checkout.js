import { useContext, useEffect, useState } from "react";
import AddressForm from "/components/AddressForm";
import PaymentForm from "../components/PaymentForm";
import CartContext from "/context/cart/CartContext";
import {CircularProgress} from "@material-ui/core";
import { Container, Paper } from "@mui/material";
import commerce from "../lib/commerce";

export default function () {
  const { id: cartId } = useContext(CartContext);
  const [checkoutToken, setCheckoutToken] = useState(null);

  useEffect(() => {
    commerce.checkout
      .generateToken(cartId, { type: "cart" })
      .then((checkout) => {
        setCheckoutToken(checkout.id);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [cartId]);

  if (checkoutToken === null) {
    return <CircularProgress style={{
          color: "",
          position: "fixed",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }} />
  }
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
