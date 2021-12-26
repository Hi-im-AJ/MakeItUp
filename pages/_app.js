import "../styles/main.css";
import SearchState from "../context/search/SearchState";
import CartState from "../context/cart/CartState";
import Navbar from "../components/Navbar";
import {useRouter} from "next/router";
import {DefaultSeo} from "next-seo";

export default function ({ Component, pageProps }) {

  const router = useRouter();

  //Fordi Anders elsker ternaries
  const canonicalUrl = process.env.NEXT_PUBLIC_ENV === "production" ? (`https://make-it-up-hi-im-aj.vercel.app`
                                              + (router.asPath === "/" ? "": router.asPath))
                                                .split("?")[0] : "localhost";

  return (
    <>
      <DefaultSeo canonical={canonicalUrl}>
        <link rel="canonical" href={canonicalUrl} />
      </DefaultSeo>
      <SearchState>
        <CartState>
          <Navbar />
          <Component {...pageProps} />
        </CartState>
      </SearchState>
    </>
  );
}
