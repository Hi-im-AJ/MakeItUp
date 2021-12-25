import "../styles/main.css";
import SearchState from "../context/search/SearchState";
import CartState from "../context/cart/CartState";
import Navbar from "../components/Navbar";
import {useRouter} from "next/router";
import head from "next/Head"

export default function ({ Component, pageProps }) {
  const router = useRouter();

  let canonicalUrl
  if (process.env.production) {
    canonicalUrl = (`https://make-it-up-hi-im-aj.vercel.app` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
  } else {
    canonicalUrl = (`localhost2` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
  }

  return (
    <>
      <head>
        <link rel="canonical" href={canonicalUrl} />
      </head>
      <SearchState>
        <CartState>
          <Navbar />
          <Component {...pageProps} />
        </CartState>
      </SearchState>
    </>
  );
}
