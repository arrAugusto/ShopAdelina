import React from "react";
import "bulma/css/bulma.min.css";
import "./Footer.css";
export const FooterShop = () => {
  return (
    <>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Adelinas</strong> de{" "}
            <a href="https://augus-dev.netlify.app/">Augusto Gomez Dev</a>. © Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
};
