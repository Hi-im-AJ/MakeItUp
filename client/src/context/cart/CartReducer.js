import { SET_CART } from "../types";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
