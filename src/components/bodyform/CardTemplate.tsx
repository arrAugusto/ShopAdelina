import { CardRaw } from "../cards/CardRaw";
import { CardRawGeneral } from "../cards/CardRawGeneral";
import { CardReactGPS } from "../cards/CardRawReactNativeGPS";
import { CardReactCine } from "../cards/CardRawReactNativeCine";

import { CardBack } from "../cards/Backend";
import { CardFront } from "../cards/Front";
import { CardMobil } from "../cards/Mobil";
import { CardDBSO } from "../cards/DatabaseAndSO";

import "./BodyShop.css";

export const CardTemplate = () => {
  return (
    <>
      <div className="mr-12 ml-12 mt-12">
        <div className="tile is-ancestor is-12 is-justify-content-center">
          <CardBack />
          <CardFront />
        </div>
        <div className="tile is-ancestor is-12 is-justify-content-center">
          <CardMobil />
          <CardDBSO />
        </div>

        <div className="tile is-ancestor is-12 is-justify-content-center">
          <CardRaw />
          <CardRawGeneral />
        </div>
        <div className="tile is-ancestor is-12 is-justify-content-center">
          <CardReactGPS />
          <CardReactCine />
        </div>
      </div>
    </>
  );
};
