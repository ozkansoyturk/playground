import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Hyperplexed from "./pages/hyperplexed/Hyperplexed";
import Gsap from "./pages/gsap/Gsap";

export const router = createBrowserRouter([
  {
    path: "/playground/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "hyperplexed",
        element: <Hyperplexed />,
      },
      {
        path: "gsap",
        element: <Gsap />,
      },
    ],
  },
]);
