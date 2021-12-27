import Head from "next/head";
import ProductList from "../components/ProductList";
import { Container } from "@mui/material";

export default function () {
  return (
    <>
      <Head>
        <title>Make It Up!</title>
        <meta name="description" content="Buy makeup and stuff!" />
      </Head>
      <main id="homePage">
        <Container maxWidth="xl">
          <ProductList />
        </Container>
      </main>
    </>
  );
}
