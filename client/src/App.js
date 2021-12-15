import React, { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Cart from "./components/pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/pages/NotFound";
import Product from "./components/pages/Product";

import commerce from "./lib/commerce";
import CartContext from "./context/cart/CartContext";

const App = () => {
  const { setCart } = useContext(CartContext);
  useEffect(() => {
    (async () => {
      try {
        const cart = await commerce.cart.retrieve();
        setCart(cart);
      } catch (err) {
        console.log(err);
      }
    })();
    // eslint-disable-next-line
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
