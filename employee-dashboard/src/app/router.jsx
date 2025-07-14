import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Teams from "../pages/Teams";
import Attendance from "../pages/Attendance";
import Reports from "../pages/Reports";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";
import PrivateRoute from "../components/PrivateRoute";
import Leaves from "../pages/Leaves";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "users",
        element: (
          <PrivateRoute allowedRoles={["admin"]}>
            <Users />
          </PrivateRoute>
        ),
      },
      {
        path: "teams",
        element: (
          <PrivateRoute allowedRoles={["admin", "manager"]}>
            <Teams />
          </PrivateRoute>
        ),
      },
      { path: "attendance", element: <Attendance /> },
      {
        path: "reports",
        element: (
          <PrivateRoute allowedRoles={["admin", "manager"]}>
            <Reports />
          </PrivateRoute>
        ),
      },
      {
        path: "leaves",
        element: (
          <PrivateRoute allowedRoles={["admin", "manager"]}>
            <Leaves />
          </PrivateRoute>
        ),
      },
      { path: "profile", element: <Profile /> },
      {
        path: "settings",
        element: (
          <PrivateRoute allowedRoles={["admin"]}>
            <Settings />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "*", element: <NotFound /> },
]);

export default router;
