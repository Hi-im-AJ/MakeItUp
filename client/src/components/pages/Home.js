import React from "react";
import ProductList from "../ProductList";
import SideMenu from "../SideMenu";

const Home = () => {
  return (
    <div id="homePage" className="frame">
      <SideMenu />
      <ProductList />
    </div>
  );
};

export default Home;
