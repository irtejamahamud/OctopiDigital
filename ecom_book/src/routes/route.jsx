// src/routes/route.jsx
import { createBrowserRouter } from "react-router-dom";

import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";

import HomePage from "../pages/user/HomePage";
import CatalogPage from "../pages/user/CatalogPage";
import CategoryPage from "../pages/user/CategoryPage";
import AuthorPage from "../pages/user/AuthorPage";
import BookPage from "../pages/user/BookPage";
import CartPage from "../pages/user/CartPage";
import AccountPage from "../pages/user/AccountPage";
import WishlistPage from "../pages/user/WishlistPage";
import CollectionsPage from "../pages/user/CollectionsPage";

import Dashboard from "../pages/admin/Dashboard";
import BooksList from "../pages/admin/BooksList";
import BookForm from "../pages/admin/BookForm";
import OrdersList from "../pages/admin/OrdersList";
import UsersList from "../pages/admin/UsersList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "catalog",
        element: <CatalogPage />,
      },
      {
        path: "category",
        element: <CategoryPage />,
      },
      {
        path: "author",
        element: <AuthorPage />,
      },
      {
        path: "book",
        element: <BookPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "account",
        element: <AccountPage />,
      },
      {
        path: "wishlist",
        element: <WishlistPage />,
      },
      {
        path: "collection",
        element: <CollectionsPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "books",
        element: <BooksList />,
      },
      {
        path: "books/new",
        element: <BookForm />,
      },
      {
        path: "books/:id/edit",
        element: <BookForm />,
      },
      {
        path: "orders",
        element: <OrdersList />,
      },
      {
        path: "users",
        element: <UsersList />,
      },
    ],
  },
]);

export default router;
