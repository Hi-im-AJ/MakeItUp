import { SET_SEARCH_INPUT } from "../types";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_SEARCH_INPUT:
      return {
        ...state,
        search_input: action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
