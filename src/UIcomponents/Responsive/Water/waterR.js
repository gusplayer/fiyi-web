import React, { Component } from 'react';
import '../../../assets/styles/water.css';
import marfondo from "../../../assets/images/Responsive/mar fondo.png";
import mar2fondo from "../../../assets/images/Responsive/fondomar2.png";
import marfondo2 from "../../../assets/images/Responsive/mar 2.png";
import marfondo1 from "../../../assets/images/Responsive/mar 1.png";
import barco from "../../../assets/images/Responsive/barco.png";
import parque14 from "../../../assets/images/Responsive/parque14atracciones.png";
import mapaparque from "../../../assets/images/Responsive/mapa.png";

import atracciones from "../../../assets/images/Responsive/atracciones.png"
import foto1 from "../../../assets/images/Responsive/foto 1_lanzamiento.png";
import icono1 from "../../../assets/images/Responsive/icono 1_lanzamiento.png";
class waterR extends Component {
  render() {
    return (
      <div className="WaterR">
        <div className="contentwater">
          <img src={barco} id="barco" alt="fondo" />
          <img src={marfondo} className="marfondo" alt="fondo" />
          <img src={marfondo2} className="marfondo2" alt="fondo" />
          <img src={marfondo1} className="marfondo1" alt="fondo" />
        </div>
        <div className="parque">
        <img src={parque14} className="parque14" alt="14" />
        <img src={mapaparque} className="mapaparque" alt="mapa" />
        </div>
        <div className="contentwater2">
        <img src={mar2fondo} className="mar2fondo" alt="fondo" />
        </div>
        <div className="atracciones">
        <img src={atracciones} className="atraccionesimg" alt="atracciones" />
          <div className="cardatraccion">
            <div>
              <img src={foto1} className="fotos" alt="fotos" />
            </div>
            <div className="textatr">
              <h2>LANZAMIENTO KIDALKI</h2>
              <p>¡Nunca ha sido tan divertido luchar
                  contra alienígenas! Las planchas
                  voladoras en la pantalla pueden ser
                  derribadas con bolas reales, lo
                  principal es mantenerse al día y
                  llegar al objetivo.
                </p>
              <img src={icono1} className="iconos" alt="iconos" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default waterR;