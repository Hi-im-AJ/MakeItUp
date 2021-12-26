import { useContext, useEffect } from "react";
import Link from "next/link";
import SearchContext from "../context/search/SearchContext";
import CartContext from "../context/cart/CartContext";
import commerce from "../lib/commerce";
import { Container, Grid, Typography, Link as MuiLink, Badge, TextField, IconButton } from "@mui/material";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import Search from "@mui/icons-material/Search";

export default function () {
  const { total_unique_items, setCart } = useContext(CartContext);
  const { setSearchInput } = useContext(SearchContext);
  useEffect(() => {
    commerce.cart
      .retrieve()
      .then((cart) => {
        console.log(cart);
        setCart(cart);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [total_unique_items]);

  return (
    <Container maxWidth="xl">
      <Grid container direction="row" justifyContent="space-between" alignItems="center">
        <Grid
          item
          xs={6}
          sx={{
            height: "3rem",
          }}
        >
          <Link href="/">
            <img id="logo" src="/assets/logo.png" alt="LOGO" style={{ height: "3rem", cursor: "pointer" }} />
          </Link>
        </Grid>
        <Grid item xs>
          <Grid container justifyContent="right" spacing={2} alignItems="center">
            <Grid item>
              <TextField
                variant="standard"
                name="searchInput"
                onChange={(e) => setSearchInput(e.target.value)}
                type="text"
                InputProps={{
                  startAdornment: <Search />,
                }}
              />
            </Grid>
            <Grid item>
              <Link href="/about">
                <MuiLink
                  underline="none"
                  color="secondary"
                  sx={{ cursor: "pointer", ":hover": { color: "#9d746a", transition: "100ms" } }}
                >
                  ABOUT US
                </MuiLink>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/contact">
                <MuiLink
                  underline="none"
                  color="secondary"
                  sx={{ cursor: "pointer", ":hover": { color: "#9d746a", transition: "100ms" } }}
                >
                  CONTACT
                </MuiLink>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/cart">
                <Badge
                  style={{ cursor: "pointer" }}
                  overlap="rectangular"
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  badgeContent={total_unique_items}
                  color="error"
                >
                  <IconButton type="submit" sx={{ p: "0.3rem" }} aria-label="local-mall-rounded">
                    <LocalMallRoundedIcon
                      color="primary"
                      style={{
                        fontSize: "3rem",
                      }}
                    />
                  </IconButton>
                </Badge>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
