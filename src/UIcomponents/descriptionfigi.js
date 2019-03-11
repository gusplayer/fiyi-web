import React, { Component } from 'react';
import logofigi from '../assets/images/NombreEmpresaPequeña.png';
import imgdescriptionfigi from '../assets/images/DescripcionFigi.png';
import '../assets/styles/descriptionfigi.css';

class descriptionfigi extends Component {
  render() {
    return (
      <div className="contentdescription">    
        <div className="conceptimgsdescription">
          <img src={logofigi} alt="logofigi"/>
        </div>    
        <div className="concepttextdescription">
          <img src={imgdescriptionfigi} alt="imgdescriptionfigi"/>
        </div> 
      </div>
    );
  }
}

export default descriptionfigi;