import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PostsPage from "../pages/PostsPage";
import PostDetailPage from "../pages/PostDetailPage";
import PostFormPage from "../pages/PostFormPage";
import UserProfilePage from "../pages/UserProfilePage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Layout component for wrapping all pages with Navbar, etc.
const MainLayout = ({ children }) => (
  <div>
    <Navbar />
    <main className="max-w-4xl mx-auto p-4">{children}</main>
    <Footer />
  </div>
);

// Define the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <MainLayout>
        <LoginPage />
      </MainLayout>
    ),
  },
  {
    path: "/register",
    element: (
      <MainLayout>
        <RegisterPage />
      </MainLayout>
    ),
  },
  {
    path: "/posts",
    element: (
      <MainLayout>
        <PostsPage />
      </MainLayout>
    ),
  },
  {
    path: "/posts/:id",
    element: (
      <MainLayout>
        <PostDetailPage />
      </MainLayout>
    ),
  },
  {
    path: "/posts/new",
    element: (
      <MainLayout>
        <PostFormPage />
      </MainLayout>
    ),
  },
  {
    path: "/posts/:id/edit",
    element: (
      <MainLayout>
        <PostFormPage />
      </MainLayout>
    ),
  },
  {
    path: "/profile",
    element: (
      <MainLayout>
        <UserProfilePage />
      </MainLayout>
    ),
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
