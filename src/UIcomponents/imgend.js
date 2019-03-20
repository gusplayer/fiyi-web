import React, { Component } from 'react';


import imageled1 from '../assets/images/final.png';
import imgfinal from '../assets/images/imagenfinal.png';

import '../assets/styles/imgend.css';

class imgend extends Component {
  render() {
    return (
      <div className="contentimgsh">     
            <img  id="imgend" src={imgfinal} alt="imgdescriptionfigi"/>

            <img  id="imgend2" src={imageled1} alt="imgdescriptionfigi"/>
      </div>
    );
  }
}

export default imgend;