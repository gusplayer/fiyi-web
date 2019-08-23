import React, { Component } from 'react';
import '../../../assets/styles/water.css';
import marfondo from "../../../assets/images/Responsive/mar fondo.png";
import marfondo2 from "../../../assets/images/Responsive/mar 2.png";
import marfondo1 from "../../../assets/images/Responsive/mar 1.png";
import barco from "../../../assets/images/Responsive/barco.png";
import parque14 from "../../../assets/images/Responsive/parque14atracciones.png";
import mapaparque from "../../../assets/images/Responsive/mapa.png";


class waterR extends Component {
  render() {
    return (
      <div>
        <div className="contentwater">
          <img src={barco} id="barco" alt="fondo" />
          <img src={marfondo} className="marfondo" alt="fondo" />
          <img src={marfondo2} className="marfondo2" alt="fondo" />
          <img src={marfondo1} className="marfondo1" alt="fondo" />
        </div>
        
      </div>
    );
  }
}
export default waterR;