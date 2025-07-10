import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Posts from "../components/Posts";
import Counter from "../components/Counter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Counter />,
      },
      {
        path: "/post",
        element: <Posts />,
      },
    ],
  },
]);

export default router;
