import React, { Component } from 'react';
import '../../../assets/styles/ourconcept.css';
import concepto from "../../../assets/images/Responsive/Nuestro concepto.png";
import grupo from "../../../assets/images/Responsive/grupo-fotos.png";
import sol from "../../../assets/images/Responsive/Sol.png"
class ourconceptR extends Component {
  render() {
    return (
      <div>
        <div className="ourconceptR">
        <img src={sol} className="sol" alt="texto" />
            <img src={concepto} className="ourimg" alt="texto" />
            <div className="textonuestro">
            <p>Un mundo donde la fantasía se convierte en
                realidad, un mundo sin límites ni fronteras,
                donde la imaginación es el único límite.
                Combinamos tecnología de realidad
                aumentada, rastreo, mapeo y visión por
                computadora logrando hacer tangible el
                mundo de las fantasías infantiles.</p>

            </div>
            <img src={grupo} id="grupo" alt="texto" />
            
        </div> 

      </div>
    );
  }
}
export default ourconceptR;