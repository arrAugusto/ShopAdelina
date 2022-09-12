import Brono from "../dist/img/general.png";
import "../bodyform/BodyShop.css";
export const CardRawGeneral = () => {
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
                    <img src={Brono} alt={"Almacenadora Integrada, Banco Industrial, desarrollo web, Sistema de gestion de general, Augusto Gomez, Developer, Desarrollador"} />
 
                    </figure>
                  </div>
                  <div className="card-content  notification is-white">
                    <div className="media ">
                      <div className="media-content">
                        <br />
                        <p className="subtitle is-4">
                          Almacenadora Integrada / Banco Industrial
                        </p>
                        <label>
                          Este proyecto se desarrollo para el control de manejo de inventarios de mercaderias de tipo general (Mercaderias con pago de impuesto o legalizadas para comercializarse en Guatemala), Este proyecto cuenta con control de inventario, gestion de descarga y carga de mercaderias con diferentes niveles de usuario., cuenta con una aplicación desarrollada a medida con Java y android
                        </label>
                        
                        <br />
                        <strong className="tecnology">Tecnologías: </strong><label>Aplicación mobil: Java con Gradle y android, Backend: Golang y SQL Server, Frontend: React JS  </label>
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
