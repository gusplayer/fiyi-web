import React, { Component } from 'react';
import imgtriangle1 from '../assets/images/Imagenestriangular1.png';
import imgtriangle2 from '../assets/images/Imagenestriangular2.png';

import imgentrete from '../assets/images/Entretenimiento creativo.png';
import '../assets/styles/trianglesimg.css';

class triangleimage extends Component {
  render() {
    return (
      <div className="contentall">
      <div>
      <img src={imgentrete} className="imgtriangle"/>
      </div>
      <div className="contentimgs">         
             <img src={imgtriangle1} className="imgtriangle"/>
             <img src={imgtriangle2} className="imgtriangle"/>
      </div>
      </div>
    );
  }
}

export default triangleimage;