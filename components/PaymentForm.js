import { useContext, useEffect, useState } from "react";
import { Typography, Button, Divider, CircularProgress, Modal } from "@mui/material";
import { Elements, CardElement, ElementsConsumer } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CartContext from "../context/cart/CartContext";
import UserContext from "../context/user/UserContext";
import commerce from "../lib/commerce";
import { useRouter } from "next/router";

const PaymentForm = ({ checkoutToken }) => {
  const router = useRouter();

  const { subtotal, line_items, shippingOptions, refreshCart } = useContext(CartContext);
  const {
    formData: { firstName, lastName, address, email, city, countryCode, zipCode },
  } = useContext(UserContext);

  const [loading, setLoading] = useState(false);
  const [formFilled, setFormFilled] = useState(false);
  const [order, setOrder] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [stripePromise, setStripePromise] = useState(false);

  const stripeOptions = {
    appearance: {
      theme: "none",
    },
  };

  useEffect(() => {
    if (firstName && lastName && address && email && city && countryCode && zipCode) {
      setFormFilled(true);
    } else {
      setFormFilled(false);
    }
  }, [firstName, lastName, address, email, city, countryCode, zipCode]);

  useEffect(() => {
    setStripePromise(loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY));
  }, []);

  const handleCaptureCheckout = (checkoutTokenId, newOrder) => {
    try {
      setLoading(true);
      commerce.checkout.capture(checkoutTokenId, newOrder).then((order) => {
        setOrder(order);
        setLoading(false);
        setOpenModal(true);
      });
      refreshCart();
    } catch (error) {
      alert(error.data.error.message);
    }
  };

  const handleClose = async () => {
    await router.replace("/");

    setOpenModal(false);
  };

  const handleSubmit = async (e, elements, stripe) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: "card", card: cardElement });

    if (error) {
      console.log("[error]", error);
    } else {
      const orderData = {
        line_items: line_items,
        customer: {
          firstname: firstName,
          lastname: lastName,
          email: email,
        },
        shipping: {
          name: "International",
          street: address,
          town_city: city,
          postal_zip_code: zipCode,
          country: countryCode,
        },
        fulfillment: {
          shipping_method: shippingOptions.id,
        },
        payment: {
          gateway: "test_gateway",
          card: {
            number: "4242 4242 4242 4242",
            expiry_month: "01",
            expiry_year: "2023",
            cvc: "123",
            postal_zip_code: "4700",
          },
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      handleCaptureCheckout(checkoutToken, orderData);
    }
  };

  return (
    <>
      {order && (
        <Modal
          open={openModal}
          onClick={() => {}}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <h2>{order.status_payment}</h2>
        </Modal>
      )}
      {loading && (
        <CircularProgress
          style={{
            color: "primary",
            position: "fixed",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
      <br />
      <Divider />
      <br />
      <Typography variant="h4" sx={{ mb: 4 }} color="primary">
        Payment Method
      </Typography>
      <br />
      {stripePromise && (
        <Elements stripe={stripePromise} options={stripeOptions}>
          <ElementsConsumer>
            {({ elements, stripe }) => (
              <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                <CardElement options={stripeOptions} />
                <br /> <br />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Button type="submit" variant="contained" disabled={!stripe || !formFilled} color="primary">
                    Pay {subtotal.formatted_with_symbol}
                  </Button>
                </div>
              </form>
            )}
          </ElementsConsumer>
        </Elements>
      )}
    </>
  );
};

export default PaymentForm;
