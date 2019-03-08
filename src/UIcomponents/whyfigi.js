import React, { Component } from 'react';
import whyfigitext1 from '../assets/images/PorqueFIGITexto1.png';
import whyfigitext2 from '../assets/images/PorqueFIGITexto2.png';
import whyfigitext3 from '../assets/images/PorqueFIGITexto3.png';
import whyfigitext4 from '../assets/images/PorqueFIGITexto4.png';
import imgtext1 from '../assets/images/Imagen1Porque.png';
import imgtext2 from '../assets/images/Imagen2Porque.png';
import whyfigitextniños from '../assets/images/AlosNiños.png';


import '../assets/styles/whyfigi.css';

class whyfigi extends Component {
  render() {
    return (
      <div className="contentwhyfigi">    
        <div>
        <div className="concepttextwhy">
            <img src={imgtext1} alt="imgtext1"/>
            <img src={whyfigitext1} alt="whyfigitext1"/>
        </div>
        <div className="concepttextwhy">
            <img src={imgtext2} alt="imgtext2"/>
            <img src={whyfigitext2} alt="whyfigitext2"/>
        </div>
        </div>
        <div>
            <img src={whyfigitextniños} alt="whyfigitextniños"/>
        </div>
        <div>
        <div>
            <img src={whyfigitext3} alt="whyfigitext3"/>
        </div>
        <div>
            <img src={whyfigitext4} alt="whyfigitext4"/>
         </div>
         </div>
      </div>
    );
  }
}

export default whyfigi;