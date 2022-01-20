import {SET_CART, GET_SHIPPING_OPTIONS, SET_CART_LOADING} from "../types";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        ...action.payload,
      };
    case GET_SHIPPING_OPTIONS:
      return {
        ...state,
        shippingOptions: action.payload,
      };
    case SET_CART_LOADING:
      return  {
        ...state,
        loading: action.payload}
    default:
      return { ...state };
  }
};

export default reducer;
