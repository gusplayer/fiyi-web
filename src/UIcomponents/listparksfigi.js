import React, { Component } from 'react';

import smallpark from '../assets/images/ParquePequeño.png';
import bigpark from '../assets/images/ParqueGrande.png';
import mediumpark from '../assets/images/ParqueMediano.png';

import '../assets/styles/listparksfigi.css';

class listparksfigi extends Component {
  render() {
    return (
        <div className="contentparksfigi">     
            <div className="contentelementsimgs">
            <img id="imgcardparkbig" src={mediumpark}/>
              <img id="imgparkp" src={smallpark}/>
              
            </div>

            <img id="imgparkp2" src={bigpark}/>
           
        </div>
    );
  }
}

export default listparksfigi;