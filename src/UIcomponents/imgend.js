import React, { Component } from 'react';

import imgfinal from '../assets/images/imagenfinal.png';

import '../assets/styles/imgend.css';

class imgend extends Component {
  render() {
    return (
      <div className="contentimgsh">     
            <img  id="imgend" src={imgfinal} alt="imgdescriptionfigi"/>
      </div>
    );
  }
}

export default imgend;