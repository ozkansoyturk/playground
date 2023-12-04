import { Route, HashRouter, Routes } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Hyperplexed from "./pages/hyperplexed/Hyperplexed";
import Gsap from "./pages/gsap/Gsap";

export const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" errorElement={<ErrorPage />} element={<App />}>
          <Route path="/hyperplexed" element={<Hyperplexed />} />
          <Route path="/gsap" element={<Gsap />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
