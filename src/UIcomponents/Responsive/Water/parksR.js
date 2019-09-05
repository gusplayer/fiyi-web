import React, { Component } from 'react';
import '../../../assets/styles/water.css';
import diferentesparques from "../../../assets/images/Responsive/diferentes diseños de parques.png";
import parque200 from "../../../assets/images/Responsive/parque 1_200m.png";
import parque500 from "../../../assets/images/Responsive/parque 2_500m.png";
import parque1000 from "../../../assets/images/Responsive/parque 3_1000m.png";
import pez1 from "../../../assets/images/Responsive/pez 1.png";
import burbujas from "../../../assets/images/Responsive/burbujas.png";
import ballena from "../../../assets/images/Responsive/ballena.png";
import tendencias from "../../../assets/images/Responsive/Tendencias globales.png";
import arena from "../../../assets/images/Responsive/Fondo arena.png";
import grupofoto from "../../../assets/images/Responsive/grupo fotos.png";
import hello from "../../../assets/images/Responsive/logos_final.png";
class parksR extends Component {
  render() {
    return (
      <div>
        <div className="parques">
            <img src={diferentesparques} className="diseñoparque" alt="fotos" />
            <img src={parque200} className="parque200" alt="fotos" />
            <img src={parque500} className="parque500" alt="fotos" />
            <img src={pez1} className="pez1" alt="fotos" />
            <img src={burbujas} className="burbujas" alt="fotos" />
            <img src={pez1} className="pez2" alt="fotos" />
            <img src={parque1000} className="parque1000" alt="fotos" />
            
          </div>
          <div>
            <img src={burbujas} className="burbujas2" alt="fotos" />
            <img src={ballena} className="ballena" alt="fotos" />
          </div>
          <div className="tendeciascontent">
            <img src={tendencias} className="tendencias" alt="fotos" />
            <p>Los padres buscan que sus hijos disfruten de actividades
                físicas, creativas y grupales, así como también de actividades
                artísticas y de aprendizaje… FiGi es una respuesta a esta
                necesidad, combinando todas estas demandas dentro de una
                esfera de entretenimiento educativo.
                </p>
                <img src={pez1} className="pez3" alt="fotos" />
          </div>
          <div>
            <img src={arena} className="fondoarena" alt="fotos" />
            <div className="contentarena">
              <img src={grupofoto} className="grupofoto" alt="fotos" />
              <img src={hello} className="hello" alt="fotos" />
            </div>
            </div>
        </div>
    );
  }
}
export default parksR;