import Head from "next/head";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Make It Up!</title>
        <meta name="description" content="Buy makeup and stuff!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="homePage" className="frame">
        <ProductList />
      </main>
    </>
  );
}
