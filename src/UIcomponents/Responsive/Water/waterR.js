import React, { Component } from 'react';
import '../../../assets/styles/water.css';
import { LazyLoadComponent,trackWindowScroll } from 'react-lazy-load-image-component';
import marfondo from "../../../assets/images/Responsive/mar fondo.png";
import mar2fondo from "../../../assets/images/Responsive/fondomar2.png";
import marfondo2 from "../../../assets/images/Responsive/mar 2.png";
import marfondo1 from "../../../assets/images/Responsive/mar 1.png";

import barco from "../../../assets/images/Responsive/barco.png";
import parque14 from "../../../assets/images/Responsive/parque14atracciones.png";
import mapaparque from "../../../assets/images/Responsive/mapa.png";
import attractionsR from "./attractionR.js"
import parksR from "./parksR.js"
const AttractionsR = attractionsR;
const ParksR = parksR;
var scrollPosition;
window.onload=function () {
  scrollPosition= window.scrollY;
}

class waterR extends Component {
  render() {
    return (
      <LazyLoadComponent scrollPosition={scrollPosition}>

      
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
        <AttractionsR/>
        <ParksR/>
      </div>
      </LazyLoadComponent>
    );
  }
}
export default trackWindowScroll( waterR);