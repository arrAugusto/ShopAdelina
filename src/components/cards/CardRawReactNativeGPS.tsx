import Brono from "../dist/img/rutasApp.gif";
import "../bodyform/BodyShop.css";
export const CardReactGPS = () => {
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
                      <img src={Brono} alt={"GPs aplicaión gps, ubicación real time, augusto gomez, desarrollador de software, desarrollador web, developer, desarrollo"} />
                    </figure>
                  </div>
                  <div className="card-content  notification is-white">
                    <div className="media ">
                      <div className="media-content">
                        <br />
                        <p className="subtitle is-4">
                          GPS - Proyecto personal
                        </p>
                        <strong>Control y geolocalización:</strong><br/>
                        <label>
                        En dicho proyecto desarrolle una aplicación mobil con React Native, para gestionar el control de camiones en tiempo real. 
                        </label>
                        
                        <br />
                        <strong className="tecnology">Tecnologías: </strong><label>Aplicación Mobil: React Native, Rest Api: Node JS framework Express y Mysql.</label>
                        <br />
                        <strong className="tecnology">Código: </strong><a href="https://github.com/arrAugusto/GeolocalizationMaps">Repositorio GitHub</a>

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
