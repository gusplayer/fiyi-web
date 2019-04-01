import React, { Component } from 'react';

import smallpark from '../assets/images/parquepequeño.png';
import bigpark from '../assets/images/parquegrande.png';
import mediumpark from '../assets/images/parquemediano.png';

import '../assets/styles/listparksfigi.css';

class listparksfigi extends Component {
  render() {
    return (
        <div className="contentparksfigi">     
            <div className="contentelementsimgs">
                <img id="imgparkp" src={smallpark}/>
                <img id="imgparkp2" src={bigpark}/>
            </div>
            <div className="contentelementsimg">
                <img id="imgcardparkbig" src={mediumpark}/>
            </div>
           
        </div>
    );
  }
}

export default listparksfigi;