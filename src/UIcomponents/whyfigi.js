import React, { Component } from 'react';
import imgtext1 from '../assets/images/Imagen1Porque.png';
import imgtext2 from '../assets/images/Imagen2Porque.png';

import '../assets/styles/whyfigi.css';

class whyfigi extends Component {
  render() {
    return (
      <div className="contentwhyfigi">    
        <div className="content1">
          <div className="concepttextwhy">
            <div id="imgtop">
              <img id="imgs" src={imgtext1} alt="imgtext1"/>
            </div>
           <div className="contentwhytext">
             <p>
              ¡Esto nunca se ha visto!
             </p>
             <p>
               Un formato completamente
              nuevo que entretiene, edica y
              fascina tanto a los pèqueños
              como a sus padres y
              acompañantes.
             </p>
           </div>
          </div>
          <div>
            <h1 id="encanta">
              ¡A los niños
              les encanta!
            </h1>
          </div>
          <div className="concepttextwhy">
            <div id="imgtop">
              <img id="imgs"  src={imgtext2} alt="imgtext1"/>
            </div>
            <div className="contentwhytext">
             <p>
             ¡Los niños no se cansan!
             </p>
             <p>
              La experiencia estimula a los
              pequeños a desarrollar sus
              habilidades mentales y físicas.
             </p>
           </div>
          </div>
        </div>
        <div className="content2">
          <div>
          <div id="imgtop">
              <img id="imgs"  src={imgtext2} alt="imgtext1"/>
            </div>
          <div className="contentwhytext">
             <p>
             ¡Podemos tener lo imposible!
             </p>
             <p>
             Los niños entran en un mundo de
              imágenes vivas donde controlan el
              espacio a través de sus acciones y
              objetos físicos
             </p>
           </div>
          </div>
          <div>
          <div id="imgtop">
              <img id="imgs" src={imgtext1} alt="imgtext1"/>
            </div>
          <div className="contentwhytext">
             <p>
             ¡Pueden jugar todos juntos!
             </p>
             <p>
               El sistema de cámaras y
              sensores permiten la
              interacción en tiempo real con
              las proyecciones de muchas
              personas simultáneamente.
             </p>
           </div>
          </div>
        </div>
      </div>
    );
  }
}

export default whyfigi;