import Commerce from "@chec/commerce.js";

const commerce = new Commerce(
  process.env.NODE_ENV === "production" ? process.env.CHEC_PUBLIC_KEY : process.env.REACT_APP_CHEC_PUBLIC_KEY,
  true
);

export default commerce;
