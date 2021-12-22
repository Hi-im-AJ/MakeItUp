import "../styles/main.css";
import SearchState from "../context/search/SearchState";
import CartState from "../context/cart/CartState";
import Navbar from "../components/Navbar";

export default function ({ Component, pageProps }) {
  return (
    <>
      <SearchState>
        <CartState>
          <Navbar />
          <Component {...pageProps} />
        </CartState>
      </SearchState>
    </>
  );
}
