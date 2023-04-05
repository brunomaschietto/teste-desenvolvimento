import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsPage from "../pages/ProductsPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
