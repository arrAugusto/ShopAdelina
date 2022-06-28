import React from "react";
import { CardShopSell } from "./bodyform/CardShopSell";
import { FooterShop } from "./Template/footer/Footer";
import { TemplateShop } from "./Template/navBar/TemplateShop";

export const SellShop = () => {
  return (
    <>
      <div className="header-container">
        <TemplateShop />
        <CardShopSell />
      </div>

      <FooterShop />
    </>
  );
};
