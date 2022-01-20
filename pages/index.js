import Head from "next/head";
import ProductList from "../components/ProductList";
import {CircularProgress, Container} from "@mui/material";
import CartContext from "../context/cart/CartContext";
import {useContext} from "react";

export default function () {
    const { loading } = useContext(CartContext);

    return (
    <>
      <Head>
        <title>Make It Up!</title>
        content="Buy makeup and stuff!" />
      </Head>
      <main id="homePage">
        <Container maxWidth="xl">
            {loading && <CircularProgress style={{
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
