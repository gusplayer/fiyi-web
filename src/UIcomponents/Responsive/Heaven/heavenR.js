import React, { Component } from 'react';
import '../../../assets/styles/heaven.css';
import fondocielo from "../../../assets/images/Responsive/Fondocielo.png";
import Nubes1cielo from "../../../assets/images/Responsive/Nubes1Cielo.png";
import Nubes2cielo from "../../../assets/images/Responsive/Nubes2Cielo.png";
import Nubes3cielo from "../../../assets/images/Responsive/Nubes3Cielo.png";
import Montana1 from "../../../assets/images/Responsive/Montana1.png";
import Montana2 from "../../../assets/images/Responsive/Montana2.png";
import logo from "../../../assets/images/Responsive/Logo figiCielo.png";
import nubesfondoverde from "../../../assets/images/Responsive/nubesfondoverde.png";
import montanaverde3 from "../../../assets/images/Responsive/Montana3verde.png";
import montanaverde2 from "../../../assets/images/Responsive/Montana2verde.png";
import montanaverde1 from "../../../assets/images/Responsive/Montana1verde.png";
class heavenR extends Component {
  render() {
    return (
      <div className="HeavenR">
          <img src={fondocielo} className="fondo" alt="fondo" />
          <div className="contentnubescielo">
            <img src={Montana2} className="montanaback" alt="fondo" />
            <img src={Nubes3cielo} className="nube3" alt="fondo" />
            <img src={Nubes2cielo} className="nube2" alt="fondo" />
            <img src={Montana1} className="montanafront" alt="fondo" />
            <img src={Nubes1cielo} className="nube1" alt="fondo" />
          </div>
          <div className="center">
          <img src={logo} className="logo" alt="fondo" />
          <div>
            <p className="textocenter">¡Mucho más que solo diversión!... Los espacios
                han sido cuidadosamente planeados y
                diseñados para estimular el desarrollo de
                habilidades como velocidad de reacción,
                motricidad fina, lógica, fantasía creativa,
                comunicación y por supuesto, la imaginación!
            </p>
            <p className="textocenter">Usando únicamente sus cuerpos, los niños
                pueden alterar el mundo digital que los rodea.
                No hay necesidad de ningún dispositivo
                especial! Únicamente usamos luz y
                proyección, es una experiencia
                completamente segura para los niños.
                Wow ¡Aquí todo cobra vida! ¡Están dentro de la
                caricatura!¡
            </p>
          </div>
          </div>
          <div className="Montanaverde">
            <div className="fondomontanaverde">
              <img src={nubesfondoverde} className="nubesverde" alt="fondo" />
              <img src={montanaverde3} className="montana3v"  alt="fondo" />
              <img src={montanaverde2} className="montana2v" alt="fondo" />
              <img src={montanaverde1} className="montana1v" alt="fondo" />
            </div> 
            
          </div>
          
      </div>
    );
  }
}
export default heavenR;