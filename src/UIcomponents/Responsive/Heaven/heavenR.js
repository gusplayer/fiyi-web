import React, { Component } from 'react';
import '../../../assets/styles/heaven.css';
import fondocielo from "../../../assets/images/Responsive/Fondocielo.png";
import Nubes1cielo from "../../../assets/images/Responsive/Nubes1Cielo.png";
import Nubes2cielo from "../../../assets/images/Responsive/Nubes2Cielo.png";
import Nubes3cielo from "../../../assets/images/Responsive/Nubes3Cielo.png";
import Montana1 from "../../../assets/images/Responsive/Montana1.png";
import Montana2 from "../../../assets/images/Responsive/Montana2.png";
import logo from "../../../assets/images/Responsive/Logo figiCielo.png";
import montanaverde from "./montanaverdeR.js"
const Montanaverde = montanaverde;
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
          <div>
            <Montanaverde/>
          </div>
          
      </div>
    );
  }
}
export default heavenR;