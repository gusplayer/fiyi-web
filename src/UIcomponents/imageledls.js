import React, { Component } from 'react';

import imageled1 from '../assets/images/final.png';
import '../assets/styles/imageledls.css';

class imageled extends Component {
  render() {
    return (
      <div className="contentledls">    
            <img  id="imgled" src={imageled1} alt="imgdescriptionfigi"/>
      </div>
    );
  }
}

export default imageled;