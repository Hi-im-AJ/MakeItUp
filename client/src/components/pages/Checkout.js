import React, {useContext, useEffect, useState} from "react";
import AddressForm from "../AddressForm"
import commerce from "../../lib/commerce";
import CartContext from "../../context/cart/CartContext";

const Checkout = () => {

  const {id:cartId} = useContext(CartContext)
  const [checkoutToken, setcheckoutToken] = useState('')

  useEffect(() =>
    commerce.checkout.generateToken(cartId, {type: 'cart'})
      .then((checkout) => {
      setcheckoutToken(checkout.id)}),
    [cartId]
  )

  return(
    <div  id="checkoutPage" className="frame">  
        <AddressForm checkoutToken={checkoutToken}/>
    </div>
  )
};

export default Checkout;