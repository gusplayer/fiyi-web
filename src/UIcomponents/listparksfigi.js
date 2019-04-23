import React, { Component } from 'react';

import smallpark from '../assets/images/ParquePequeño.png';
import bigpark from '../assets/images/ParqueGrande.png';
import mediumpark from '../assets/images/ParqueMediano.png';
import diferentesparkes from '../assets/images/diferentesparques.png';
import parque200 from '../assets/images/parque200.png';
import parque500 from '../assets/images/parque500.png';
import parque1000 from '../assets/images/parque1000.png';

import '../assets/styles/listparksfigi.css';

class listparksfigi extends Component {
  render() {
    return (
      <div className="contentparksfigi">     
        <div className="contentelementsimgs">
        <div className="contentmediumpark">
        <img id="imgcardparkmedium" src={mediumpark}/>
        <img id="imgcardparkmediumtext" src={parque200}/>
        </div>
          
          <div className="contentapairimg" >
            <img id="textimg"src={diferentesparkes}/> 
            <img id="imgcardparksmall" src={smallpark}/>
            <img id="imgcardparksmalltext" src={parque500}/>
          </div>
          <div className="contentbigpark">
          <img id="imgcardparkbig" src={bigpark}/>
          <img id="imgcardparkbigtext" src={parque1000}/>
          </div>
          
        </div>
        
      </div>
    );
  }
}

export default listparksfigi;