import React, { Component } from 'react';
import '../../../assets/styles/header.css';
import fondopart1 from "../../../assets/images/Web/FondoPart1.png";
import fondoestrellas from "../../../assets/images/Responsive/estrellas.png";
import logoinicio from "../../../assets/images/Responsive/logoinicio.png";
import Entretenimiento from "../../../assets/images/Responsive/Entretenimiento creativo.png";
import luna from "./moonR.js";
import aboutfigi from "./aboutfigiR.js";
import triangleimg from "./triangleimgR.js";
import video from "./videoR.js";
import ourconcept from "./ourconceptR.js"
const Lunar = luna;
const Aboutfigi = aboutfigi;
const Triangleimg = triangleimg;
const VideoR = video;
const Ourconcept = ourconcept;
class header extends Component {
  render() {
    return (
      <div className="HeaderR">
          <img src={fondopart1} className="fondo" alt="fondo" />
          <img src={fondoestrellas} className="estrella" alt="estrellas" />
          <div className="contentlogoparque">
            <div className="logoparque">
                <img src={logoinicio} className="logotitulo"/>
                <img src={Entretenimiento} className="entrete"/>
            </div>
           </div>
          <div>
              <Lunar/>
          </div> 
          <div>
            <Aboutfigi/> 
          </div> 
          <div>
            <Triangleimg/>
          </div> 
          <div>
            <VideoR/>
          </div>
          <div>
          <Ourconcept/>
          </div>
      </div>
    );
  }
}
export default header;