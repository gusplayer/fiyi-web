import React, { Component } from 'react';
import imgtriangle1 from '../../assets/images/Web/Imagenestriangular1.png';
import imgentrete from '../../assets/images/Web/Entretenimiento creativo.png';
import '../../assets/styles/trianglesimg.css';

class triangleimage extends Component {
  render() {
    return (
      <div className="contentall">
        <div className="contentimgtext">
          <img src={imgentrete} className="imgtexto" alt="imgentrete"/>
        </div>
        <div className="contentimgs">         
          <img src={imgtriangle1} id="imgtriangleuno" className="imgtriangle" alt="imgtriangle1"/>
        </div>
      </div>
    );
  }
}

export default triangleimage;