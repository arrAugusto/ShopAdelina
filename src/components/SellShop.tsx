import React from "react";
import { CardShopSell } from "./bodyform/CardShopSell";
import { FooterShop } from "./Template/footer/Footer";
import { TemplateShop } from "./Template/navBar/TemplateShop";
import "./TemplateGeneral.css";
import IMGHeader from "./dist/imgTemplate/headAugusDev.png";

export const SellShop = () => {
  return (
    <>
      <div className="header-container">
        <TemplateShop />
        <div className="tile is-ancestor is-justify-content-center ml-1 mr-1">
          <img src={IMGHeader} alt={"header developer"} />
        </div>
        <hr />

        <CardShopSell />
      </div>
      <FooterShop />
    </>
  );
};
