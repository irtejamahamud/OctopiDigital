import { Outlet, Link } from "react-router-dom";
import React from "react";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
export const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
