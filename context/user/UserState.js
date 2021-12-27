import React, { useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import { SET_FORM } from "../types";

export default (props) => {
  const initialState = {
    formData: {
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      city: "",
      countryCode: "DK",
      zipCode: "",
      telephone: "",
    },
    auth: {},
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const setFormData = (payload) => dispatch({ type: SET_FORM, payload });

  return (
    <UserContext.Provider
      value={{
        formData: state.formData,
        auth: state.auth,
        setFormData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
