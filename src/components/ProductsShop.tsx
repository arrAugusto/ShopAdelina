import React from "react";
import { BodyShop } from "./bodyform/BodyShop";
import { CardShopSell } from "./bodyform/CardShopSell";
import { FooterShop } from "./Template/footer/Footer";
import { TemplateShop } from "./Template/navBar/TemplateShop";

export const ProductsShop = () => {
  return (
    <>
      <div className="header-container">
        <TemplateShop />
        <BodyShop />
      </div>

      <FooterShop />
    </>
  );
};
