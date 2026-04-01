import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Components/Home";
import About from "../Pages/About/About";
import ArticleDetail from "../Pages/ArticleDetail/ArticleDetail";
import NotFound from "../Pages/NotFound";
import Journal from "../Pages/Journal/Journal";
import Careers from "../Pages/Careers/Careers";
import Product from "../Pages/Product/Product";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/ArticleDetail" element={<ArticleDetail />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/careers" element={<Careers />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
