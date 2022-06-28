import React from "react";
import "./TemplateShop.css";
import "bulma/css/bulma.min.css";
import { BodyShop } from "../../bodyform/BodyShop";
import { CardShopSell } from "../../bodyform/CardShopSell";

export const TemplateShop = () => {
  return (
    <>
      <nav className="navbar is-transparent nav-bar-template">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <div
            className="navbar-burger"
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="./sell">
              Home
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
