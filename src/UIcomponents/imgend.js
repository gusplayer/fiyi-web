import React, { Component } from 'react';

import part1 from '../assets/images/Parte1.png';
import part2 from '../assets/images/Parte2.png';
import part3 from '../assets/images/Parte3.png';
import part4 from '../assets/images/Parte4.png';

import '../assets/styles/imgend.css';

class imgend extends Component {
  render() {
    return (
      <div className="contentimgsh">     
            <img  id="imgpark" src={part1} alt="imgdescriptionfigi"/>
            <img  id="imgpark" src={part2} alt="imgdescriptionfigi"/>
            <img  id="imgpark" src={part3} alt="imgdescriptionfigi"/>
            <img  id="imgpark" src={part4} alt="imgdescriptionfigi"/>
      </div>
    );
  }
}

export default imgend;