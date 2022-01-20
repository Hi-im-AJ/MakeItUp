import React, {useReducer} from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SET_CART, GET_SHIPPING_OPTIONS, SET_CART_LOADING } from "../types";
import commerce from "../../lib/commerce";

export default (props) => {
  const initialState = {
    total_items: 0,
    total_unique_items: 0,
    line_items: [],
    subtotal: 0,
    id: "",
    shippingOptions: null,
    loading: null
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const setCart = (payload) => {
      dispatch({ type: SET_CART, payload });
  };

  const setLoading = (payload) => {
      dispatch({ type:SET_CART_LOADING, payload: payload})
  }
  const retrieveCart = () => {
    setLoading(true)
    commerce.cart
      .retrieve()
      .then((cart) => {
        setCart(cart);
      })
      .catch((err) => console.error(err));
    setLoading(false)
  }

  const refreshCart = async () => {
    setLoading(true)
    const newCart = await commerce.cart.refresh();
    setCart(newCart)
    setLoading(false)
  }
  const getShippingOptions = async (token) => {
    try {
      const res = await commerce.checkout.getShippingOptions(token, {
        country: "DK",
      });
      dispatch({ type: GET_SHIPPING_OPTIONS, payload: res[0] });
    } catch (err) {
      console.error(err);
    }
  };

  const incrementByOne = (productID, quantity) => {
      setLoading(true)
          commerce.cart
          .update(productID, {
              quantity: quantity + 1,
          })
          .then(({ cart }) => {
              setCart(cart)
              setLoading(false)
              })
              .catch((err) => {
                  console.error(err)
                  setLoading(false)
              });
  }

  const decrementByOne = (productID, quantity) => {
      setLoading(true)
      commerce.cart
          .update(productID, {
              quantity: quantity - 1,
          })
          .then(({ cart }) => {
              setLoading(false)
              setCart(cart)
          })
          .catch((err) => {
              console.error(err)
              setLoading(false)
          });
  }

  const clearCart = () => {
      setLoading(true)
      commerce.cart
          .empty(state.id)
          .then(({ cart }) => {
              setCart(cart)
              setLoading(false)
          })
          .catch((err) => {
              console.error(err)
              setLoading(false)
          });
  }

  const addToCart = (objectID) => {
      setLoading(true)
      commerce.cart
          .add(objectID)
          .then(({ cart }) =>{
              setCart(cart)
              setLoading(false)
          })
          .catch((err) => {
              console.error(err)
              setLoading(false)
          });
  }

  return (
    <CartContext.Provider
      value={{
        total_items: state.total_items,
        total_unique_items: state.total_unique_items,
        line_items: state.line_items,
        subtotal: state.subtotal,
        id: state.id,
        shippingOptions: state.shippingOptions,
        loading: state.loading,
        setCart,
        retrieveCart,
        getShippingOptions,
        clearCart,
        incrementByOne,
        decrementByOne,
        addToCart,
        refreshCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
