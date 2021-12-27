import React, {useContext, useState} from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CartContext from "../context/cart/CartContext";
import UserContext from "../context/user/UserContext";
import commerce from "../lib/commerce";

const PaymentForm = ({checkoutToken}) => {

  const {subtotal, line_items, shippingOptions} = useContext(CartContext)
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)
  const [order, setOrder] = useState({})
  const {firstName, lastName, address, email, city, countryCode, zipCode} = useContext(UserContext)

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      commerce.checkout.capture(checkoutTokenId, newOrder).then((order) => setOrder(order))

    } catch (error) {
      alert(error.data.error.message);
    }
  };

  const handleSubmit = async (e, elements, stripe) => {
    e.preventDefault()

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const {error, paymentMethod} = await stripe.createPaymentMethod({type: 'card', card: cardElement});

    if (error) {
      console.log('[error]', error);
    } else {
      const orderData = {
        line_items: line_items,
        customer: {
          firstname: firstName,
          lastname: lastName,
          email: email
        },
        shipping: {
          name: 'International',
          street: address,
          town_city: city,
          postal_zip_code: zipCode,
          country: countryCode
        },
        fulfillment: {
          shipping_method: shippingOptions.id
        },
        payment: {
          gateway: 'test_gateway',
          card: {
            number: '4242 4242 4242 4242',
            expiry_month: '01',
            expiry_year: '2023',
            cvc: '123',
            postal_zip_code: '4700',
          },
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      await handleCaptureCheckout(checkoutToken, orderData)
    }
  }

  return (
    <>
      <br/>
      <Divider/>
      <Typography variant="h4" sx={{ mb: 4 }} color="primary">
        Payment Method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>{({elements, stripe}) => (
          <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
            <CardElement/>
            <br/> <br/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                Pay {subtotal.formatted_with_symbol}
              </Button>
            </div>
          </form>
        )}
        </ElementsConsumer>
      </Elements>
      {order && <h2>{order.status_payment}</h2>}
    </>
  )
};

export default PaymentForm;