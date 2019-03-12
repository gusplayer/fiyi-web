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
            <img id="imgtext" src={ourconcepttext1} alt="ourconcepttext1"/>
            {/* <img src={ourconcepttext2}/> */}
        </div> 
      </div>
    );
  }
}

export default ourconcept ;