import React, { useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import {SET_USER} from "../types";


export default (props) => {
  const initialState = {
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    city: "",
    countryCode: "DK",
    zipCode: "",
    telephone: "",
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const setUser = (payload) => {
    dispatch({ type: SET_USER, payload });
  };

  return (
    <UserContext.Provider
      value={{
        firstName: state.firstName,
        lastName: state.lastName,
        address: state.address,
        email: state.email,
        city: state.city,
        countryCode: state.countryCode,
        zipCode: state.zipCode,
        telephone: state.telephone,
        setUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};