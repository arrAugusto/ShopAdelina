import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SellShop } from "./components/SellShop";
import { ProductsShop } from "./components/ProductsShop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/sell" element={<SellShop />} />

          <Route path="/prod" element={<ProductsShop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
