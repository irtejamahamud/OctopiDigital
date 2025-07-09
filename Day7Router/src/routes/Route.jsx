import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import { About } from "../pages/About";
import Dashboard from "../pages/admin/Dashboard";
import { PublicLayout } from "../layouts/PublicLayout";
import AdminLayout from "../layouts/AdminLayout";
import { Login } from "../pages/Login";
import AdminUser from "../pages/admin/AdminUser";
import Signup from "../pages/Signup";
import BLog from "../pages/BLog";
import BlogDetails from "../pages/BlogDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "blog", element: <BLog /> },
      { path: "blog/:id", element: <BlogDetails /> },
    ],
  },
  {
    path: "dashboard",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/dashboard/adminuser",
        element: <AdminUser />,
      },
    ],
  },
]);
export default router;
