import React, { Component } from 'react';
import '../../../assets/styles/whatis.css';
import dequesetrata from "../../../assets/images/Responsive/dequesetrata.png";
class aboutfigiR extends Component {
  render() {
    return (
      <div>
        <div className="aboutfigi">
            <img src={dequesetrata} className="dequesetrata" alt="texto" />
            <div className="textodeque">
            <p>La palabra surge de la unión de Físico y
                Digital… FiGi es un novedoso concepto de
                entretenimiento creativo… Bajo un mismo
                techo se reúnen una serie de atracciones
                interactivas con coloridas proyecciones que
                reaccionan y se transforman mediante las
                acciones y movimientos de los niños.</p>
                <p id="textocolor">¡Aquí la fantasía se hace realidad!</p>

            </div>
            
        </div> 

      </div>
    );
  }
}
export default aboutfigiR;