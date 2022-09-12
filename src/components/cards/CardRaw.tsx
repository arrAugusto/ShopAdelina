import Brono from "../dist/img/almacenadora.gif";
import "../bodyform/BodyShop.css";
export const CardRaw = () => {
  return (
    <>
      <div className="tile is-4 mt-5 ml-5 mr-5 mb-4">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <div className="columns is-mobile is-multiline">
              <article className="tile is-child">
                <div className="card">
                  <div className="card-image">
                    <figure className="image  is-4by3">
                      <img src={Brono} alt={"Almacenadora Integrada, Banco Industrial, desarrollo web, Sistema de gestion de inventarios, Augusto Gomez, Developer, Desarrollador"} />
                    </figure>
                  </div>
                  <div className="card-content  notification is-white">
                    <div className="media ">
                      <div className="media-content">
                        <br />
                        <p className="subtitle is-4">
                          Almacenadora Integrada / Banco Industrial
                        </p>
                        <strong>Inventarios Fiscales de bodegas y vehiculos:</strong><br/>
                        <label>
                          En dicho proyecto se desarrollo un software a medida "In
                          House", con varios modulos y diferentes niveles de
                          usuario., este proyecto es utilizado para control de
                          inventarios de mercaderias de aduana y control de un
                          predio de vehiculos fiscales.
                        </label>
                        
                        <br />
                        <strong className="tecnology">Tecnologías: </strong><label>PHP 5.7, SQL Server, HTML, Css, JavaScript, Bootstrap 4, Admin LTE 4, JQuery, TCPDF</label>
                        <br />
                        <strong className="tecnology">Código: </strong><label>Proyecto privado, codigo no disponible.</label>

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
