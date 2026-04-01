import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Components/Home";
import About from "../Pages/About/About";
import Journal from "../Pages/Journal/Journal";
import Careers from "../Pages/Careers/Careers";
import Product from "../Pages/Product/Product";
import NotFound from "../Pages/NotFound";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "product", element: <Product /> },
      { path: "about", element: <About /> },
      { path: "journal", element: <Journal /> },
      { path: "careers", element: <Careers /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
