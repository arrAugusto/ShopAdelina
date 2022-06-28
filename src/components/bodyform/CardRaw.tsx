import React from "react";
import Brono from '../dist/img/brono.png';
import './BodyShop.css';
export const CardRaw = () => {
  return (
    <>
      <div className="tile is-4 mt-4 ml-2 mr-1 mb-4">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <div className="columns is-mobile is-multiline is-centered">
              <article className="tile is-child notification has-background-white	 is-card-shop">
                <div className="card">
                  <div className="card-image" />
                  <figure className="image is-4by3">
                    <img
                      src={Brono}
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">John Smith</p>
                      <p className="subtitle is-5">@johnsmith</p>
                    </div>
                  </div>

                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <br />
                    <time>11:09 PM - 1 Jan 2016</time>
                  </div>
                  <a href="./prod" className="button is-info">Ver Detalles de Producto</a>

                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
