import React, { Component } from 'react';
import '../../../assets/styles/moon.css';
import fondonubes from "../../../assets/images/Responsive/fondo nubes.png";
import nubes1 from "../../../assets/images/Responsive/Nubes 2.png";
import nubes2 from "../../../assets/images/Responsive/Nubes 1.png";
import luna from "../../../assets/images/Responsive/Luna.png";
import cohete from "../../../assets/images/Responsive/cohete.png";
class moonR extends Component {
  render() {
    return (
      <div className="MoonR">
        <div className="nubes">
            <img src={fondonubes} className="fondonubes" alt="fondonube" />
            <img src={nubes1} className="nubes1 lax" data-lax-translate-y="0 20,200 100 | speed=0.5" alt="nubes1" />
            <img src={nubes2} className="nubes2 lax" data-lax-translate-y="0 10,200 50 | speed=0.5" alt="nubes2" />
        </div> 
        <div className="coheteluna">
        <img src={luna} className="luna" alt="luna" />
          <img src={cohete} className="cohete lax" data-lax-translate-y="0 50, 300 -200, 400 -400" alt="cohete" />
          
        </div>
          
          
      </div>
    );
  }
}
export default moonR;