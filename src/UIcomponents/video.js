import React, { Component } from 'react';
import planeprevideo from '../assets/images/AvioncitoPrevideo.png';

import '../assets/styles/video.css';

class videoplane extends Component {
  render() {
    return (
      <div className="contentvideo">  
        <div className="imgprevideo">
          <img src={planeprevideo} alt="planeprevideo"/> 
        </div>      
        <iframe width="600" height="415" src="https://www.youtube.com/embed/K4DtfUAx3dI" 
        frameborder="0" allow="accelerometer; encrypted-media; gyroscope; 
        picture-in-picture" allowfullscreen>
        </iframe>
      </div>
    );
  }
}

export default videoplane;