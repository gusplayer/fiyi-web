import React, { Component } from 'react';
import ourconcepttitle from '../assets/images/NuestroConcepto.png';
import ourconcepttext1 from '../assets/images/NuestroConceptoTexto1.png';
// import ourconcepttext2 from '../assets/images/NuestroConceptoTexto2.png';
import sun from '../assets/images/Sol.png';
import ourconceptimg1 from '../assets/images/NuestroConceptoImg1.png';
import ourconceptimg2 from '../assets/images/NuestroConceptoImg2.png';
import ourconceptimg3 from '../assets/images/NuestroConceptoImg3.png';


import '../assets/styles/ourconcept.css';

class ourconcept extends Component {
  render() {
    return (
      <div className="contentconcept">    
        <div className="conceptimgs">
            <div>
                <img src={sun}/>
                <img id="img1" src={ourconceptimg1}/>
            </div>
                <img  id="img2" src={ourconceptimg2}/>
                <img  id="img3" src={ourconceptimg3}/>
        </div>    
        <div className="concepttexts">
            <img src={ourconcepttitle}/>
            <img id="imgtext" src={ourconcepttext1}/>
            {/* <img src={ourconcepttext2}/> */}
        </div> 
      </div>
    );
  }
}

export default ourconcept ;