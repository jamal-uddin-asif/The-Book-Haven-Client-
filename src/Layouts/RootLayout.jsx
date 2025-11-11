import React from "react";
import Navber from "../Components/Navber";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <header>
        <Navber></Navber>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default RootLayout;
