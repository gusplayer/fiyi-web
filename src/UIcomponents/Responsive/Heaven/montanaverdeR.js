import React, { Component } from 'react';
import '../../../assets/styles/heaven.css';
import nubesfondoverde from "../../../assets/images/Responsive/nubesfondoverde.png";
import montanaverde3 from "../../../assets/images/Responsive/Montana3verde.png";
import montanaverde2 from "../../../assets/images/Responsive/Montana2verde.png";
import montanaverde1 from "../../../assets/images/Responsive/Montana1verde.png";
import arbol from "../../../assets/images/Responsive/Arbol.png";
import arena from "../../../assets/images/Responsive/fondoarena.png";

import whyfigiR from "./whyfigiR.js"
const WhyfigiR = whyfigiR;
class montanaverdeR extends Component {
  render() {
    return (
        <div className="Montanaverde">
            <div className="fondomontanaverde">
              <img src={nubesfondoverde} className="nubesverde" alt="fondo" />
              <img src={montanaverde3} className="montana3v"  alt="fondo" />
              <img src={montanaverde2} className="montana2v" alt="fondo" />
              <img src={montanaverde1} className="montana1v" alt="fondo" />
            </div> 
            <img src={arbol} className="arbol" alt="fondo" />
            <div>
            <img src={arena} className="arenaR" alt="fondo" />
            </div>
            <div className="contentcards">
            <WhyfigiR/>
            </div>
        </div>
    );
  }
}
export default montanaverdeR;