import { createBrowserRouter } from "react-router";

import Root from "../pages/Root";
import Post from "../pages/Post";
import Author from "../pages/Author";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/tag/:tag",
    element: <Root />,
  },
  {
    path: "/post/:id",
    element: <Post />,
  },
  {
    path: "/author/:id",
    element: <Author />,
  },
]);

export default router;
