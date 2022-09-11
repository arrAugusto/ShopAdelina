import React from "react";
import Brono from "../dist/img/chuchito.png";
import "./BodyShop.css";
export const CardRaw = () => {
  return (
    <>
      <div className="tile is-2 mt-4 ml-5 mr-5 mb-4">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <div className="columns is-mobile is-multiline">
              <article className="tile is-child">
                <div className="card">
                  <div className="card-image">
                    <figure className="image  is-4by3">
                      <img src={Brono} alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content  notification is-white">
                    <div className="media ">
                      <div className="media-content">
                        <br />
                        <p className="subtitle is-4">Bolsa Schnauzer</p>
                        
                        <a href="./prod" className="button is-info is-outlined">
                          Ver &nbsp;<p className="subtitle is-6 has-text-danger  has-text-weight-semibold	is-italic">GTQ 45.00</p>
                        </a>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
