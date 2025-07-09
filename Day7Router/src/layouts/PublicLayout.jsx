import { Outlet, Link } from "react-router-dom";
import React from "react";
import { Navbar } from "../components/Navbar";

export const PublicLayout = () => {
  <>
    <Navbar />
    <Outlet />
  </>;
};
