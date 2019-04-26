import React, { Component } from 'react';


import imageled1 from '../assets/images/final.png';
import imgfinal from '../assets/images/imagenfinal.png';

import '../assets/styles/imgend.css';

class imgend extends Component {
  render() {
    return (
      <div className="contentimgsh">  
      <div id="texto">
        <p>Los padres buscan que sus hijos disfruten de actividades
          físicas, creativas y grupales, así como también de actividades
          artísticas y de aprendizaje… FiGi es una respuesta a esta
          necesidad, combinando todas estas demandas dentro de
          una esfera de entretenimiento educativo.</p>
      </div>   
            <img  id="imgend" src={imgfinal} alt="imgdescriptionfigi"/>

            <img  id="imgend2" src={imageled1} alt="imgdescriptionfigi"/>
      </div>
    );
  }
}

export default imgend;