import React from "react";
import Search from "../Search";
import SideMenu from "../SideMenu";

const Home = () => {
  return (
    <div className="frame">
      <SideMenu />
      <Search />
    </div>
  );
};

export default Home;
