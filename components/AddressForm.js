import { useEffect, useState, useContext } from "react";
import CartContext from "../context/cart/CartContext";
import UserContext from "../context/user/UserContext";
import {
  FormGroup,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

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

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
    submitUserInfo()
  };

  const submitUserInfo = () => {
    const { firstName, lastName, address, email, city, countryCode, zipCode, telephone } = formData;
    if (firstName && lastName && address && email && city && countryCode && zipCode) {
      setUser(formData)
      console.log("Success:", formData);
    } else {
      console.log("Error:", formData);
    }
  };

  return (
    <FormGroup>
      <Typography variant="h4" sx={{ mb: 4 }} color="primary">
        Delivery Address
      </Typography>
      <br/>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            sx={{ width: "100%" }}
            variant="outlined"
            label="First Name"
            type="text"
            name="firstName"
            required
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            sx={{ width: "100%" }}
            variant="outlined"
            label="Last Name"
            type="text"
            name="lastName"
            required
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            sx={{ width: "100%" }}
            variant="outlined"
            label="Address"
            type="text"
            name="address"
            required
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            sx={{ width: "100%" }}
            variant="outlined"
            label="Email"
            type="email"
            name="email"
            required
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          {shippingOptions && (
            <FormControl sx={{ minWidth: "100%" }}>
              <InputLabel>Country</InputLabel>
              <Select value={formData.countryCode} label="Country" name="countryCode" onChange={handleChange} required>
                {shippingOptions.countries.map((countryCode) => (
                  <MenuItem key={countryCode} value={countryCode}>
                    {countryCode}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            sx={{ width: "100%" }}
            variant="outlined"
            label="City"
            type="text"
            name="city"
            required
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            sx={{ width: "100%" }}
            variant="outlined"
            label="Zip Code"
            type="text"
            name="zipCode"
            required
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs md={3}>
          <TextField
            sx={{ width: "100%" }}
            variant="outlined"
            label="Phone"
            type="text"
            name="telephone"
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </FormGroup>
  );
}
