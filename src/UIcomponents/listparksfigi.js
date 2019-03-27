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
                <img id="imgcardpark" src={smallpark}/>
                <img id="imgcardpark" src={mediumpark}/>
            </div>
            <div className="contentelementsimg">
              <p>HOLA</p>
                <img id="imgcardpark" src={bigpark}/>
            </div>
           
        </div>
    );
  }
}

export default listparksfigi;