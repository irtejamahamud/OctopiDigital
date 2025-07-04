import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BlogProvider } from "./context/BlogContext";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BlogList />,
  },
  {
    path: "/posts/:id",
    element: <BlogDetail />,
  },
]);

export default function App() {
  return (
    <BlogProvider>
      <RouterProvider router={router} />
    </BlogProvider>
  );
}
