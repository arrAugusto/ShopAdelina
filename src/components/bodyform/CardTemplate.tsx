import React from "react";
import { CardRaw } from "./CardRaw";
import "./BodyShop.css";

export const CardTemplate = () => {
  return (
    <>
      <div className="mr-6 ml-6 mt-6">

        <div className="tile is-ancestor is-12 is-justify-content-center">
          <CardRaw />
          <CardRaw />
          <CardRaw />
          <CardRaw />
        </div>
        </div>
    </>
  );
};
