import React, { Component } from 'react';
import imgtext1 from '../../../assets/images/Web/icono1.png';
import imgtext2 from '../../../assets/images/Web/icono2.png';
import imgtext3 from '../../../assets/images/Web/icono3.png';
import imgtext4 from '../../../assets/images/Web/icono4.png';
import encanta from '../../../assets/images/Responsive/encantaninos.png';
import '../../../assets/styles/whyfigi.css';

class whyfigiR extends Component {
  render() {
    return (
      <div className="contentwhyfigi"> 
        <div>
        <img id="encanta" className="lax" data-lax-preset="fadeInOut zoomIn 800" src={encanta} alt="imgtext1"/>
        </div>   
        <div className="content1">

          <div className="concepttextwhy">
            <div id="imgtop">
              <img id="imgs" className="lax" data-lax-preset="fadeInOut zoomIn 800" src={imgtext1} alt="imgtext1"/>
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
          
          <div className="concepttextwhy">
            <div id="imgtop">
              <img id="imgs" className="lax" data-lax-preset="fadeInOut zoomIn 800"  src={imgtext2} alt="imgtext1"/>
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
          <div className="concepttextwhy">
          <div id="imgtop">
              <img id="imgs" className="lax" data-lax-preset="fadeInOut zoomIn 800"  src={imgtext3} alt="imgtext1"/>
            </div>
          <div className="contentwhytext">
             <p>
             ¡Podemos tener lo imposible!
             </p>
             <p>
             Los niños entran en un mundo de
            imágenes vivas donde controlan el
            espacio a través de sus acciones y
            objetos físicos, mientras juegan e
            interactúan con personajes llenos
            de vida y color
             </p>
           </div>
          </div>
          <div className="concepttextwhy">
          <div id="imgtop">
              <img id="imgs" className="lax" data-lax-preset="fadeInOut zoomIn 800" src={imgtext4} alt="imgtext1"/>
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

export default whyfigiR;