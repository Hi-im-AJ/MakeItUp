import { useContext } from "react";
import commerce from "../../lib/commerce";
import { stripTags } from "../../lib/utils";
import CartContext from "../../context/cart/CartContext";
import {CircularProgress, Container} from "@mui/material";
import { Card, CardMedia, CardContent, CardActions, Button, Typography, Grid } from "@mui/material";
import Head from "next/head";
import Image from "next/image"

export const getStaticPaths = async () => {
  // Fetch existing posts from the database
  let {data} = await commerce.products.list()
  // Get the paths we want to pre-render based on posts
  const paths = data.map(product => ({
    params: { id: String(product.id) },
  }))

  return {
    paths,
    // If an ID is requested that isn't defined here, fallback will incrementally generate the page
    fallback: true,
  }
}
export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;
  let product = await commerce.products.retrieve(id);

  return {
    props: { product },
    revalidate: 1,// will be passed to the page component as props
  };
}
export default ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { loading } = useContext(CartContext);
  const add = () => {
    addToCart(product.id)
  }

  return product ? (


    <Container maxWidth="lg">
      <Head key={product.id}>
        <meta name="description" content={stripTags(product.description)} />
      </Head>
      {loading && <CircularProgress sx={{
        position: "fixed",
        left: "50%",
        top: "50%",
        width: "5%",
        height: "5%",
        zIndex: "9999"}}/>}
      <Card>
        <Grid container>
          <Grid item xs={12} md={6} lg={5}>

            <CardMedia
              title={product.image.filename}
              image={product.image.url}>
              <Image src={product.image.url} width="30" height="30" layout="responsive"></Image>
            </CardMedia>
          </Grid>
          <Grid item xs>
            <CardContent sx={{ p: 4 }}>
              <Typography sx={{ mb: 4 }} variant="h3">
                {product.name}
              </Typography>
              <Typography variant="subtitle1">{stripTags(product.description)}</Typography>
              <CardActions sx={{ mt: 2 }}>
                <Button onClick={add} variant="outlined">
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
