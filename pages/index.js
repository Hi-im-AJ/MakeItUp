import Head from "next/head";
import ProductList from "../components/ProductList";
import {CircularProgress, Container} from "@mui/material";
import CartContext from "../context/cart/CartContext";
import {useContext} from "react";
import {stripTags} from "../lib/utils";

export default function () {
    const { loading } = useContext(CartContext);

    return (
    <>
      <Head>
          <title>Make It Up!</title>
          <meta name="description" content="Buy quality makeup from Make It Up" />
      </Head>
      <main id="homePage">
        <Container maxWidth="xl">
            {loading && <CircularProgress sx={{
                position: "fixed",
                left: "50%",
                top: "50%",
                width: "5%",
                height: "5%",
                zIndex: "9999"}}/>}
            <ProductList />
        </Container>
      </main>
    </>
  );
}
