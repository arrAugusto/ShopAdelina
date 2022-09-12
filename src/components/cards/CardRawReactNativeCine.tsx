import Brono from "../dist/img/theCineApp.gif";
import "../bodyform/BodyShop.css";
export const CardReactCine = () => {
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
                      <img src={Brono} alt={"Aplicacion app cartelera de cinea, augusto gomez, developer, desarrollo de software, desarrollador web"} />
                    </figure>
                  </div>
                  <div className="card-content  notification is-white">
                    <div className="media ">
                      <div className="media-content">
                        <br />
                        <p className="subtitle is-4">
                          Cartelera de cine - Proyecto personal
                        </p>
                        <strong>Aplicación cartelera de cine:</strong><br/>
                        <label>
                        En dicho proyecto desarrolle una aplicación mobil con React Native, consumiendo una Api Rest de un tercero muestro una cartelera de cine en donde los usuarios pueden visualizar estrenos de peliculas, tendencias, artistas de la pelicula, presupuesto y muchos otros datos interesantes. 
                        </label>
                        
                        <br />
                        <strong className="tecnology">Tecnologías: </strong><label>Aplicación Mobil: React Native, Rest Api: Consumo de un tercero <a href="https://www.themoviedb.org/documentation/api">https://www.themoviedb.org/documentation/api</a></label>
                        <br />
                        <strong className="tecnology">Código: </strong><a href="https://github.com/arrAugusto/React-Native-Peliculas-App/">Repositorio GitHub</a>

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
