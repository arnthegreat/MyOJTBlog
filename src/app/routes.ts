import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { About } from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "post/:id",
        Component: Post,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  },
]);
