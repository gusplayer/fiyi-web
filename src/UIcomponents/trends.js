import React, { Component } from 'react';
import '../assets/styles/trendimg.css';
import pececito from '../assets/images/Pececito.png';

class trends extends Component {
  render() {
    return (
      <div className="contenttrend">    
      <div> 
        <h1>
          Tendencias Globales 
        </h1>
        <p>
        Los padres buscan que sus hijos disfruten de
        actividades fisicas, creativas y de grupo, lo mismo que
        de actividaes artisticas y de aprendizaje… FiGi es una
        respuesta a este clamor colectivo, combinando todas
        estas demandas dentro de una esfera de
        entretenimiento educativo.
        </p>
        </div>
        <div class="parksdesign">
        <h3>
        Diferentes diseños de Parques
        </h3>
        <p>Definido por el numero de atracciones y metros cuadrados</p>
        </div>
      </div>
    );
  }
}

export default trends;