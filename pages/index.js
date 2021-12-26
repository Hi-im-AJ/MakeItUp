import Head from "next/head";
import ProductList from "../components/ProductList";

export default function () {
  return (
    <>
      <Head>
        <title>Make It Up!</title>
        <meta name="description" content="Buy makeup and stuff!" />
      </Head>
      <main id="homePage" className="frame">
        <ProductList />
      </main>
    </>
  );
}
