import React, { Component } from 'react';
import '../../../assets/styles/heaven.css';
import fondocielo from "../../../assets/images/Responsive/Fondocielo.png";
import Nubes1cielo from "../../../assets/images/Responsive/Nubes1Cielo.png";
import Nubes2cielo from "../../../assets/images/Responsive/Nubes2Cielo.png";
import Entretenimiento from "../../../assets/images/Responsive/Entretenimiento creativo.png";

class heavenR extends Component {
  render() {
    return (
      <div className="HeavenR">
          <img src={fondocielo} className="fondo" alt="fondo" />
          <div className="contentnubescielo">
            <img src={Nubes1cielo} className="nube1" alt="fondo" />
            <img src={Nubes2cielo} className="nube2" alt="fondo" />
          </div>
          
      </div>
    );
  }
}
export default heavenR;