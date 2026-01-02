import React from "react";
import Navber from "../Components/Navber";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <header className=" sticky top-0 z-10">
        <Navber></Navber>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;
