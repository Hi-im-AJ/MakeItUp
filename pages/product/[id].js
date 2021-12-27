import { useContext } from "react";
import commerce from "../../lib/commerce";
import { stripTags } from "../../lib/utils";
import CartContext from "../../context/cart/CartContext";
import { Container } from "@mui/material";
import { Card, CardMedia, CardContent, CardActions, Button, Typography, Grid } from "@mui/material";

export async function getServerSideProps(context) {
  const {
    params: { id },
  } = context;
  let product = await commerce.products.retrieve(id);

  return {
    props: { product }, // will be passed to the page component as props
  };
}
export default ({ product }) => {
  const { setCart } = useContext(CartContext);
  const addToCart = () => commerce.cart.add(product.id).then(({ cart }) => setCart(cart));

  return product ? (
    <Container maxWidth="lg">
      <Card>
        <Grid container>
          <Grid item xs={12} md={6} lg={5}>
            <CardMedia
              sx={{ height: "30rem" }}
              title={product.image.filename}
              component="img"
              image={product.image.url}
            />
          </Grid>
          <Grid item xs>
            <CardContent sx={{ p: 4 }}>
              <Typography sx={{ mb: 4 }} variant="h3">
                {product.name}
              </Typography>
              <Typography variant="subtitle1">{stripTags(product.description)}</Typography>
              <CardActions sx={{ mt: 2 }}>
                <Button onClick={addToCart} variant="outlined">
                  Add To Cart
                </Button>
              </CardActions>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  ) : null;
};
