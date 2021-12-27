import "../styles/main.css";
import SearchState from "../context/search/SearchState";
import CartState from "../context/cart/CartState";
import UserState from "../context/user/UserState"
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import ThemeProvider, { mainTheme } from "../lib/themes";

export default function ({ Component, pageProps }) {
  const router = useRouter();

  const canonicalUrl =
    process.env.NEXT_PUBLIC_ENV === "production"
      ? (`https://make-it-up-hi-im-aj.vercel.app` + (router.asPath === "/" ? "" : router.asPath)).split("?")[0]
      : "localhost";

  return (
      <ThemeProvider theme={mainTheme}>
        <DefaultSeo canonical={canonicalUrl}>
          <link rel="canonical" href={canonicalUrl} />
        </DefaultSeo>
        <UserState>
          <SearchState>
            <CartState>
              <Navbar />
              <Component {...pageProps} />
            </CartState>
          </SearchState>
        </UserState>
      <ThemeProvider/>
    </>
  );
}
