import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { About, Home } from "../pages/About";
import { Dashboard, user } from "../pages/admin/Dashboard";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Home />,

    }
])

