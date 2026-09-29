import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <main  className="pt-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
