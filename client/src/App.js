import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Cart from "./components/pages/Cart";
import Navbar from "./components/Navbar";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
