import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Hyperplexed from "./pages/hyperplexed/Hyperplexed";
import Gsap from "./pages/gsap/Gsap";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/hyperplexed", // Utilisez un chemin absolu ici
        element: <Hyperplexed />,
      },
      {
        path: "/gsap", // Utilisez un chemin absolu ici
        element: <Gsap />,
      },
    ],
  },
]);
