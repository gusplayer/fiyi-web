import React, { Component } from 'react';

import smallpark from '../assets/images/parquepequeño.png';
import bigpark from '../assets/images/parquegrande.png';
import infobigpark from '../assets/images/infoparquepeque.png';
import infosmallpark from '../assets/images/infoparquegrande.png';
import '../assets/styles/listparksfigi.css';

class listparksfigi extends Component {
  render() {
    return (
        <div className="contentparksfigi">     
            <div className="contentelementsimgs">
                <img id="imgcardinfo" src={smallpark}/>
                <img id="imgcardinfo" src={infosmallpark} />  
            </div>
            <div className="contentelementsimgs">
                <img id="imgcardinfo" src={bigpark}/>
                <img id="imgcardinfo" src={infobigpark} />
            </div>
           
        </div>
    );
  }
}

export default listparksfigi;