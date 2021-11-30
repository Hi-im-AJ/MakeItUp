import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
