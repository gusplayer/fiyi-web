import React, { Component } from 'react';
import ourconcepttitle from '../assets/images/NuestroConcepto.png';
// import ourconcepttext2 from '../assets/images/NuestroConceptoTexto2.png';
import sun from '../assets/images/Sol.png';
import img3svg from '../assets/images/Tresimagenes.png';

import '../assets/styles/ourconcept.css';

class ourconcept extends Component {
  render() {
    return (
      <div className="contentconcept">    
        <div className="conceptimgs">
          <div className="imgsniños">
            <img src={img3svg} />
          </div> 
        </div> 
        <div className="concepttexts">
          <img  id="imgtext" src={ourconcepttitle} alt="ourconcepttitle"/>
          <div className="textcontentconcept">
            <p>
              Un mundo donde la fantasía se convierte en
              realidad, un mundo sin límites ni fronteras, donde
              la imaginación es el único límite. Combinamos
              tecnología de realidad aumentada, rastreo,
              mapeo y visión por computadora logrando hacer
              tangible el mundo de las fantasías infantiles.
            </p>
          </div>
        </div>
        <div className="conceptimgs">
          <img  id="img1" src={sun} alt="sun"/> 
        </div> 
      </div>
    );
  }
}

export default ourconcept ;