import React, { Component } from 'react';
import trendimg from '../assets/images/tendencia.png';
import '../assets/styles/trendimg.css';

class trends extends Component {
  render() {
    return (
      <div className="contenttrend">     
        <img  id="imgpark" src={trendimg} alt="imgdescriptionfigi"/>
      </div>
    );
  }
}

export default trends;