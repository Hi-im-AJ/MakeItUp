import { useEffect, useState, useContext } from "react";
import CartContext from "../context/cart/CartContext";
import UserContext from "../context/user/UserContext";

export default function ({ checkoutToken }) {
  const { getShippingOptions, shippingOptions } = useContext(CartContext);
  useEffect(() => {
    getShippingOptions(checkoutToken);
  }, []);
  const {setUser} = useContext(UserContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    city: "",
    countryCode: "DK",
    zipCode: "",
    telephone: "",
  });

  const handleChange = (event) => setFormData({ ...formData, [event.target.name]: event.target.value });
  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(formData)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" onChange={handleChange} required />
      </label>

      <label>
        Last Name:
        <input type="text" name="lastName" onChange={handleChange} required />
      </label>

      <label>
        Address:
        <input type="text" name="address" onChange={handleChange} required />
      </label>

      <label>
        Email:
        <input type="text" name="email" onChange={handleChange} required />
      </label>

      <select onChange={handleChange} name="countryCode">
        <option value="DK">DK</option>
        {shippingOptions &&
          shippingOptions.countries
            .filter((countryCode) => countryCode !== "DK")
            .map((countryCode) => (
              <option key={countryCode} value={countryCode}>
                {countryCode}
              </option>
            ))}
      </select>

      <label>
        City:
        <input type="text" name="city" onChange={handleChange} required />
      </label>

      <label>
        Zip Code:
        <input type="number" name="zipCode" onChange={handleChange} required />
      </label>

      <label>
        Telephone:
        <input type="number" name="telephone" onChange={handleChange} required />
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
}
