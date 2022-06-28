import React from "react";
import "./BodyShop.css";
import imgD from "../dist/img/grabilla.g32856.png";
export const BodyShop = () => {
  return (
    <>
      <div className="mt-6 ml-5 mr-5 notification is-fff">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-12">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification is-light">
                  <p className="title mt-5 has-text-danger	">
                    Bolso de con diseño de perrito
                  </p>
                  <p className="subtitle mt-5 has-text-black-ter	">
                    Bolso de lona con diseño mandaloriano de Yoda para bebé de
                    Star Wars, bolso de gran capacidad para Universidad, bolso
                    Harajuku para mujer, bolso de compras.
                  </p>
                </article>

                <article className="tile is-child notification is-danger left-aligned">
                  <p className="subtitle mt-6">
                    Entrega en ciudad de Guatemala y Villa Nueva.
                  </p>

                  <nav className="level is-mobile">
                    <div className="level-item has-text-centered">
                      <div>
                        <p className="heading">Anterior</p>
                        <p className="is-size-6 price-before">GTQ 150.00</p>
                      </div>
                    </div>
                    <div className="level-item has-text-centered">
                      <div>
                        <p className="heading">Precio Venta Hoy!!!!</p>
                        <p className="title">GTQ 125.00</p>
                      </div>
                    </div>
                  </nav>
                </article>
              </div>
              <div className="tile is-parent card-content ">
                <article className="tile is-child notification is-danger">
                  <figure className="image is-4by3">
                    <img src={imgD} />
                  </figure>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/*
  4by3
*/
