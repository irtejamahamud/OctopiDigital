import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import { Home } from "../pages/(app)/home/Home";
import { Login } from "../pages/(app)/login/Login";
import { About } from "../pages/(app)/about/About";
import { Settings } from "../pages/(app)/settings/Settings";
import DashboardLayout from "../layout/Dashboard";
import { DashboardHome } from "../pages/dashboard/dashboardHome/DashboardHome";
import { Kpi } from "../pages/dashboard/kpi/Kpi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      // { index: true, Component: Home },
      // { path: "settings", Component: Settings },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      // { index: true, Component: Home },
      // { path: "settings", Component: Settings },
      {
        path: "",
        element: <DashboardHome />,
      },
      {
        path: "home",
        element: <DashboardHome />,
      },
      {
        path: "home/me",
        element: <DashboardHome />,
      },
      {
        path: "kpi",
        element: <Kpi />,
      },
    ],
  },
]);

export default router;
