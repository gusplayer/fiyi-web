import React, { Component } from 'react';
import ourconcepttitle from '../assets/images/NuestroConcepto.png';
import ourconcepttext1 from '../assets/images/NuestroConceptoTexto1.png';
// import ourconcepttext2 from '../assets/images/NuestroConceptoTexto2.png';
import sun from '../assets/images/Sol.png';
import img3svg from '../assets/images/Tresimagenes.svg';

import '../assets/styles/ourconcept.css';

class ourconcept extends Component {
  render() {
    return (
      <div className="contentconcept">    
        <div className="conceptimgs">
           <img  id="img1" src={sun} alt="sun"/>
            <div>
                <img src={img3svg} />
            </div>
    
        </div>    
        <div className="concepttexts">
            <img  id="imgtext" src={ourconcepttitle} alt="ourconcepttitle"/>
            <div class="textcontentconcept">
            <p>
              Un mundo donde la fantasia se convierte en
              realidad y la imaginación es el unico límite.
              Combinamos tecnología de realidad
              aumentada, rastreo, mapeo, visión por
              computadora e hicimos tangible el mundo de
              las fantasías infantiles.
            </p>
            <p>
              Un mundo donde la fantasía se convierte en
              algo real, un mundo sin limites ni fronteras, un
              mundo donde los pequeños son inmersos en
              una experiencia de entretenimiento creativo,
              un mundo donde la imaginación es el único
              límite. FiGi hace una combinación única de
              desarrollo integral, entretenimiento y
              tecnología de punta…
            </p>
            </div>
        </div> 
      </div>
    );
  }
}

export default ourconcept ;